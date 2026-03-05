'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MessageSquare,
  X,
  UserPlus,
  Plus,
  Save,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
} from '../icons';
import { toast } from 'sonner';
import { supabaseFetch } from '../../utils/supabase/client';
import { updateContact, createActivity, deleteActivity } from '../../lib/actions/contacts';
import { createFollowup, updateFollowup, deleteFollowup } from '../../lib/actions/followups';
import { colors, spacing, shadows, radius, typography } from '../../utils/styles';
import { designSystem } from '../design-system';
import type { Contact, Followup, FollowupType, FollowupPriority, FollowupOutcome } from './types';

const FOLLOWUP_TYPES: { value: FollowupType; label: string }[] = [
  { value: 'call', label: 'Chamada' },
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'meeting', label: 'Reunião' },
  { value: 'task', label: 'Tarefa' },
];

const FOLLOWUP_PRIORITIES: { value: FollowupPriority; label: string; color: string }[] = [
  { value: 'low', label: 'Baixa', color: '#6B7280' },
  { value: 'medium', label: 'Média', color: '#F59E0B' },
  { value: 'high', label: 'Alta', color: '#F97316' },
  { value: 'urgent', label: 'Urgente', color: '#EF4444' },
];

const FOLLOWUP_OUTCOMES: { value: FollowupOutcome; label: string }[] = [
  { value: 'answered', label: 'Atendeu' },
  { value: 'no_answer', label: 'Sem resposta' },
  { value: 'voicemail', label: 'Voicemail' },
  { value: 'interested', label: 'Interessado' },
  { value: 'not_interested', label: 'Sem interesse' },
  { value: 'meeting_booked', label: 'Reunião marcada' },
  { value: 'sent', label: 'Enviado' },
  { value: 'replied', label: 'Respondeu' },
  { value: 'rescheduled', label: 'Reagendado' },
];

// Contact Detail Modal
export function ContactDetailModal({
  contact,
  onClose,
  onRefresh,
}: {
  contact: Contact;
  onClose: () => void;
  onRefresh?: () => void;
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [form, setForm] = useState({
    name: contact.name || '',
    email: contact.email || '',
    phone: contact.phone || '',
    interest: contact.interest || '',
    notes: contact.notes || '',
    desiredLocations: (contact.desiredLocations || []).join(', '),
    maxBudget: contact.maxBudget || '',
    typology: contact.typology || '',
  });

  // Activity log
  const [activities, setActivities] = useState<{ id: string; date: string; channel: string; type: string; content: string; timestamp: number }[]>([]);
  const [loadingActivities, setLoadingActivities] = useState(false);
  const [newActivity, setNewActivity] = useState({ date: new Date().toISOString().slice(0, 10), channel: '', type: '', content: '' });
  const CHANNELS = ['Telefone', 'Email', 'WhatsApp', 'Mensagem'];

  // Follow-ups state
  const [followups, setFollowups] = useState<Followup[]>([]);
  const [loadingFollowups, setLoadingFollowups] = useState(false);
  const [newFollowup, setNewFollowup] = useState({
    title: '',
    type: 'call' as FollowupType,
    dueDate: new Date().toISOString().slice(0, 10),
    dueTime: '',
    priority: 'medium' as FollowupPriority,
    notes: '',
  });
  const [completingFollowupId, setCompletingFollowupId] = useState<string | null>(null);
  const [completionText, setCompletionText] = useState('');

  const normalizeId = (id: string) => (id.startsWith('contact:') ? id.slice('contact:'.length) : id);

  const fetchFollowups = React.useCallback(async () => {
    setLoadingFollowups(true);
    try {
      const res = await supabaseFetch(`contacts/${encodeURIComponent(normalizeId(contact.id))}/followups`, {}, 1, true);
      const data = await res.json();
      if (res.ok && data.followups) setFollowups(data.followups);
    } catch { setFollowups([]); }
    finally { setLoadingFollowups(false); }
  }, [contact.id]);

  useEffect(() => { fetchFollowups(); }, [fetchFollowups]);

  const handleAddFollowup = async () => {
    if (!newFollowup.title.trim() || !newFollowup.dueDate) { toast.error('Título e data são obrigatórios'); return; }
    try {
      const result = await createFollowup(normalizeId(contact.id), {
        title: newFollowup.title.trim(),
        type: newFollowup.type,
        dueDate: newFollowup.dueDate,
        dueTime: newFollowup.dueTime || undefined,
        priority: newFollowup.priority,
        notes: newFollowup.notes.trim() || undefined,
      });
      if (!result.success) throw new Error(result.error || 'Erro ao criar follow-up');
      toast.success('Follow-up criado');
      setNewFollowup({ title: '', type: 'call', dueDate: new Date().toISOString().slice(0, 10), dueTime: '', priority: 'medium', notes: '' });
      fetchFollowups();
    } catch (err) { toast.error(err instanceof Error ? err.message : 'Erro'); }
  };

  const TYPE_TO_CHANNEL: Record<FollowupType, string> = {
    call: 'Telefone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    meeting: 'Telefone',
    task: 'Mensagem',
  };

  const handleCompleteFollowup = async (followupId: string) => {
    if (!completionText.trim()) { toast.error('Descreva o resultado'); return; }
    try {
      const contactId = normalizeId(contact.id);
      // 1. Complete follow-up
      const result = await updateFollowup(contactId, followupId, { status: 'completed', outcomeNotes: completionText.trim() });
      if (!result.success) throw new Error(result.error || 'Erro ao concluir follow-up');

      // 2. Auto-create activity
      const fu = followups.find((f) => f.id === followupId);
      const channel = fu ? TYPE_TO_CHANNEL[fu.type] || 'Mensagem' : 'Mensagem';
      await createActivity(contactId, {
        date: new Date().toISOString().slice(0, 10),
        channel,
        type: 'Follow-up',
        content: `FU: ${fu?.title || 'Follow-up'} — ${completionText.trim()}`,
      });

      toast.success('Follow-up concluído + atividade registada');
      setCompletingFollowupId(null);
      setCompletionText('');
      fetchFollowups();
      fetchActivities();
    } catch (err) { toast.error(err instanceof Error ? err.message : 'Erro'); }
  };

  const handleDeleteFollowup = async (followupId: string) => {
    try {
      const result = await deleteFollowup(normalizeId(contact.id), followupId);
      if (!result.success) throw new Error(result.error || 'Erro ao eliminar');
      toast.success('Follow-up eliminado');
      fetchFollowups();
    } catch (err) { toast.error(err instanceof Error ? err.message : 'Erro'); }
  };

  const fetchActivities = React.useCallback(async () => {
    setLoadingActivities(true);
    try {
      const res = await supabaseFetch(`contacts/${encodeURIComponent(normalizeId(contact.id))}/activities`, {}, 1, true);
      const data = await res.json();
      if (res.ok && data.activities) setActivities(data.activities);
    } catch { setActivities([]); }
    finally { setLoadingActivities(false); }
  }, [contact.id]);

  useEffect(() => { fetchActivities(); }, [fetchActivities]);

  const handleAddActivity = async () => {
    if (!newActivity.channel || !newActivity.content.trim()) { toast.error('Canal e conteúdo são obrigatórios'); return; }
    try {
      const result = await createActivity(normalizeId(contact.id), newActivity);
      if (!result.success) throw new Error(result.error || 'Erro ao criar atividade');
      toast.success('Atividade registada');
      setNewActivity({ date: new Date().toISOString().slice(0, 10), channel: '', type: '', content: '' });
      fetchActivities();
    } catch (err) { toast.error(err instanceof Error ? err.message : 'Erro'); }
  };

  const handleDeleteActivity = async (activityId: string) => {
    try {
      const result = await deleteActivity(normalizeId(contact.id), activityId);
      if (!result.success) throw new Error(result.error || 'Erro ao eliminar');
      toast.success('Atividade eliminada');
      fetchActivities();
    } catch (err) { toast.error(err instanceof Error ? err.message : 'Erro'); }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        interest: form.interest.trim(),
        notes: form.notes.trim(),
        desiredLocations: form.desiredLocations.split(',').map(s => s.trim()).filter(Boolean),
        maxBudget: form.maxBudget.trim(),
        typology: form.typology.trim(),
      };
      const result = await updateContact(normalizeId(contact.id), payload);
      if (!result.success) {
        throw new Error(result.error || 'Erro ao salvar');
      }
      toast.success('Contacto atualizado');
      setIsEditMode(false);
      onRefresh?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Erro ao salvar');
    } finally {
      setIsSaving(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: spacing[3],
    border: `1px solid ${colors.gray[300]}`,
    borderRadius: radius.md,
    fontSize: typography.fontSize.sm,
    outline: 'none',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block' as const,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray[500],
    marginBottom: '4px',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[4],
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: colors.white,
          borderRadius: radius.xl,
          width: '100%',
          maxWidth: '540px',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: shadows.xl,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${spacing[5]} ${spacing[6]}`,
            borderBottom: `1px solid ${colors.gray[200]}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: radius.lg,
                background: designSystem.helpers.hexToRgba(colors.primary, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mail size={22} style={{ color: colors.primary }} />
            </div>
            <div>
              <h3 style={{ fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize.lg, color: colors.gray[900] }}>
                {isEditMode ? 'Editar Contacto' : contact.name}
              </h3>
              <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[500] }}>
                {new Date(contact.createdAt).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: spacing[2] }}>
            {!isEditMode && (
              <button
                onClick={() => setIsEditMode(true)}
                aria-label="Editar contacto"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: radius.md,
                  border: 'none',
                  background: designSystem.helpers.hexToRgba(colors.primary, 0.1),
                  color: colors.primary,
                  cursor: 'pointer',
                }}
              >
                <Edit size={16} />
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: radius.md,
                border: 'none',
                background: colors.gray[100],
                color: colors.gray[600],
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: `${spacing[5]} ${spacing[6]}`, display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
          {isEditMode ? (
            <>
              <div>
                <label style={labelStyle}>Nome</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Telefone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Interesse</label>
                <input type="text" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} style={inputStyle} />
              </div>

              {contact.message && (
                <div>
                  <label style={labelStyle}>Mensagem original</label>
                  <div style={{ padding: spacing[3], background: colors.gray[50], borderRadius: radius.md, border: `1px solid ${colors.gray[200]}`, fontSize: typography.fontSize.sm, color: colors.gray[600], maxHeight: '100px', overflowY: 'auto', whiteSpace: 'pre-wrap', lineHeight: typography.lineHeight.relaxed }}>
                    {contact.message}
                  </div>
                </div>
              )}

              <div style={{ borderTop: `1px solid ${colors.gray[200]}`, paddingTop: spacing[3] }}>
                <div style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.gray[500], textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: spacing[3] }}>
                  Preferências
                </div>
              </div>

              <div>
                <label style={labelStyle}>Localizações desejadas</label>
                <input type="text" value={form.desiredLocations} onChange={(e) => setForm({ ...form, desiredLocations: e.target.value })} placeholder="Ex: Lisboa, Cascais, Porto" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
                <div>
                  <label style={labelStyle}>Valor máximo</label>
                  <input type="text" value={form.maxBudget} onChange={(e) => setForm({ ...form, maxBudget: e.target.value })} placeholder="Ex: €500.000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Tipologia</label>
                  <input type="text" value={form.typology} onChange={(e) => setForm({ ...form, typology: e.target.value })} placeholder="Ex: T1, T2, T3" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Observações</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Notas sobre o contacto" rows={3} style={{ ...inputStyle, resize: 'vertical' as const }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing[2], marginTop: spacing[2] }}>
                <button
                  onClick={() => setIsEditMode(false)}
                  style={{ padding: `${spacing[2]} ${spacing[4]}`, border: `1px solid ${colors.gray[300]}`, background: colors.white, color: colors.gray[700], borderRadius: radius.md, cursor: 'pointer', fontSize: typography.fontSize.sm }}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing[1],
                    padding: `${spacing[2]} ${spacing[4]}`,
                    border: 'none',
                    background: colors.primary,
                    color: colors.white,
                    borderRadius: radius.md,
                    cursor: isSaving ? 'not-allowed' : 'pointer',
                    fontWeight: typography.fontWeight.semibold,
                    fontSize: typography.fontSize.sm,
                    opacity: isSaving ? 0.6 : 1,
                  }}
                >
                  <Save size={16} />
                  {isSaving ? 'A salvar...' : 'Salvar'}
                </button>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <Mail size={16} style={{ color: colors.gray[400], flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginBottom: '2px' }}>Email</p>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[900], fontWeight: typography.fontWeight.medium }}>{contact.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <Phone size={16} style={{ color: colors.gray[400], flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginBottom: '2px' }}>Telefone</p>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[900], fontWeight: typography.fontWeight.medium }}>{contact.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <MessageSquare size={16} style={{ color: colors.gray[400], flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginBottom: '2px' }}>Interesse</p>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: `${spacing[1]} ${spacing[3]}`,
                      background: designSystem.helpers.hexToRgba(colors.secondary, 0.1),
                      color: colors.secondary,
                      borderRadius: radius.md,
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.semibold,
                    }}
                  >
                    {contact.interest}
                  </span>
                </div>
              </div>

              {contact.message && (
                <div>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginBottom: spacing[2] }}>Mensagem</p>
                  <div
                    style={{
                      padding: spacing[4],
                      background: colors.gray[50],
                      borderRadius: radius.lg,
                      border: `1px solid ${colors.gray[200]}`,
                      fontSize: typography.fontSize.sm,
                      color: colors.gray[700],
                      lineHeight: typography.lineHeight.relaxed,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {contact.message}
                  </div>
                </div>
              )}

              {/* Preferências (se existirem) */}
              {(contact.desiredLocations?.length || contact.maxBudget || contact.typology || contact.notes) && (
                <div style={{ borderTop: `1px solid ${colors.gray[200]}`, paddingTop: spacing[3] }}>
                  <p style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.gray[500], textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: spacing[3] }}>
                    Preferências
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                    {contact.typology && (
                      <span style={{ padding: `${spacing[1]} ${spacing[2]}`, background: designSystem.helpers.hexToRgba(colors.primary, 0.08), color: colors.primary, borderRadius: radius.full, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semibold }}>
                        {contact.typology}
                      </span>
                    )}
                    {contact.maxBudget && (
                      <span style={{ padding: `${spacing[1]} ${spacing[2]}`, background: designSystem.helpers.hexToRgba(colors.success, 0.08), color: colors.success, borderRadius: radius.full, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semibold }}>
                        Máx: {contact.maxBudget}
                      </span>
                    )}
                    {(contact.desiredLocations || []).map((loc, i) => (
                      <span key={i} style={{ padding: `${spacing[1]} ${spacing[2]}`, background: colors.gray[100], color: colors.gray[700], borderRadius: radius.full, fontSize: typography.fontSize.xs }}>
                        {loc}
                      </span>
                    ))}
                  </div>
                  {contact.notes && (
                    <p style={{ marginTop: spacing[2], fontSize: typography.fontSize.sm, color: colors.gray[600], lineHeight: typography.lineHeight.relaxed }}>
                      {contact.notes}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* --- Registo de atividades (always visible) --- */}
          <div style={{ borderTop: `1px solid ${colors.gray[200]}`, marginTop: spacing[2], paddingTop: spacing[3] }}>
            <div style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.gray[500], textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: spacing[3] }}>
              Registo de atividades
            </div>

            {/* Nova atividade */}
            <div style={{ background: colors.gray[50], border: `1px solid ${colors.gray[200]}`, borderRadius: radius.md, padding: spacing[3], display: 'flex', flexDirection: 'column', gap: spacing[2], marginBottom: spacing[3] }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[2] }}>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Data</label>
                  <input type="date" value={newActivity.date} onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Canal</label>
                  <select value={newActivity.channel} onChange={(e) => setNewActivity({ ...newActivity, channel: e.target.value })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none', background: colors.white }}>
                    <option value="">— Selecionar —</option>
                    {CHANNELS.map((ch) => <option key={ch} value={ch}>{ch}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Tipo</label>
                <input type="text" value={newActivity.type} onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })} placeholder="Ex: Follow-up, Qualificação, Visita..." style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Resumo</label>
                <textarea value={newActivity.content} onChange={(e) => setNewActivity({ ...newActivity, content: e.target.value })} placeholder="Descreva a interação..." rows={2} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleAddActivity} style={{ display: 'inline-flex', alignItems: 'center', gap: spacing[1], padding: `${spacing[1]} ${spacing[3]}`, border: 'none', background: colors.primary, color: colors.white, borderRadius: radius.md, cursor: 'pointer', fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold }}>
                  <UserPlus size={14} />
                  Adicionar
                </button>
              </div>
            </div>

            {/* Lista de atividades */}
            {loadingActivities ? (
              <div style={{ textAlign: 'center', color: colors.gray[400], fontSize: typography.fontSize.sm, padding: spacing[3] }}>A carregar...</div>
            ) : activities.length === 0 ? (
              <div style={{ textAlign: 'center', color: colors.gray[400], fontSize: typography.fontSize.sm, padding: spacing[3] }}>Nenhuma atividade registada</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                {activities.map((act) => (
                  <div key={act.id} style={{ display: 'flex', alignItems: 'flex-start', gap: spacing[2], padding: spacing[2], border: `1px solid ${colors.gray[200]}`, borderRadius: radius.md, background: colors.white }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: '2px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: typography.fontSize.xs, color: colors.gray[500] }}>{act.date}</span>
                        <span style={{ padding: `1px ${spacing[2]}`, background: designSystem.helpers.hexToRgba(colors.primary, 0.1), color: colors.primary, borderRadius: radius.full, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semibold }}>{act.channel}</span>
                        {act.type && <span style={{ padding: `1px ${spacing[2]}`, background: designSystem.helpers.hexToRgba(colors.secondary, 0.1), color: colors.secondary, borderRadius: radius.full, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semibold }}>{act.type}</span>}
                      </div>
                      <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[700], lineHeight: typography.lineHeight.relaxed, whiteSpace: 'pre-wrap' }}>{act.content}</p>
                    </div>
                    <button type="button" onClick={() => handleDeleteActivity(act.id)} aria-label="Eliminar atividade" style={{ flexShrink: 0, border: 'none', background: 'none', color: colors.gray[400], cursor: 'pointer', padding: '2px' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* --- Follow-ups --- */}
          <div style={{ borderTop: `1px solid ${colors.gray[200]}`, marginTop: spacing[2], paddingTop: spacing[3] }}>
            <div style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.gray[500], textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: spacing[3] }}>
              Follow-ups
            </div>

            {/* Novo follow-up form */}
            <div style={{ background: colors.gray[50], border: `1px solid ${colors.gray[200]}`, borderRadius: radius.md, padding: spacing[3], display: 'flex', flexDirection: 'column', gap: spacing[2], marginBottom: spacing[3] }}>
              <div>
                <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Título</label>
                <input type="text" value={newFollowup.title} onChange={(e) => setNewFollowup({ ...newFollowup, title: e.target.value })} placeholder="Ex: Ligar para confirmar interesse" style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[2] }}>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Tipo</label>
                  <select value={newFollowup.type} onChange={(e) => setNewFollowup({ ...newFollowup, type: e.target.value as FollowupType })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none', background: colors.white }}>
                    {FOLLOWUP_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Prioridade</label>
                  <select value={newFollowup.priority} onChange={(e) => setNewFollowup({ ...newFollowup, priority: e.target.value as FollowupPriority })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none', background: colors.white }}>
                    {FOLLOWUP_PRIORITIES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[2] }}>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Data</label>
                  <input type="date" value={newFollowup.dueDate} onChange={(e) => setNewFollowup({ ...newFollowup, dueDate: e.target.value })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: colors.gray[600], marginBottom: '2px' }}>Hora (opcional)</label>
                  <input type="time" value={newFollowup.dueTime} onChange={(e) => setNewFollowup({ ...newFollowup, dueTime: e.target.value })} style={{ width: '100%', padding: spacing[2], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.sm, outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleAddFollowup} style={{ display: 'inline-flex', alignItems: 'center', gap: spacing[1], padding: `${spacing[1]} ${spacing[3]}`, border: 'none', background: colors.primary, color: colors.white, borderRadius: radius.md, cursor: 'pointer', fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold }}>
                  <Plus size={14} />
                  Criar follow-up
                </button>
              </div>
            </div>

            {/* Lista de follow-ups */}
            {loadingFollowups ? (
              <div style={{ textAlign: 'center', color: colors.gray[400], fontSize: typography.fontSize.sm, padding: spacing[3] }}>A carregar...</div>
            ) : followups.length === 0 ? (
              <div style={{ textAlign: 'center', color: colors.gray[400], fontSize: typography.fontSize.sm, padding: spacing[3] }}>Nenhum follow-up registado</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                {followups.map((fu) => {
                  const today = new Date().toISOString().slice(0, 10);
                  const isOverdue = fu.status === 'pending' && fu.dueDate < today;
                  const isPending = fu.status === 'pending';
                  const priorityInfo = FOLLOWUP_PRIORITIES.find((p) => p.value === fu.priority);
                  const typeInfo = FOLLOWUP_TYPES.find((t) => t.value === fu.type);
                  return (
                    <div key={fu.id} style={{ display: 'flex', flexDirection: 'column', gap: spacing[1], padding: spacing[2], border: `1px solid ${isOverdue ? colors.error : colors.gray[200]}`, borderRadius: radius.md, background: isOverdue ? designSystem.helpers.hexToRgba(colors.error, 0.03) : colors.white }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: spacing[1] }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], flex: 1, minWidth: 0 }}>
                          {fu.status === 'completed' ? (
                            <CheckCircle size={14} style={{ color: colors.success, flexShrink: 0 }} />
                          ) : isOverdue ? (
                            <AlertCircle size={14} style={{ color: colors.error, flexShrink: 0 }} />
                          ) : (
                            <Clock size={14} style={{ color: colors.warning, flexShrink: 0 }} />
                          )}
                          <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: fu.status === 'completed' ? colors.gray[400] : colors.gray[800], textDecoration: fu.status === 'completed' ? 'line-through' : 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {fu.title}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                          {isPending && completingFollowupId !== fu.id && (
                            <button type="button" onClick={() => { setCompletingFollowupId(fu.id); setCompletionText(''); }} style={{ border: 'none', background: designSystem.helpers.hexToRgba(colors.success, 0.1), color: colors.success, borderRadius: radius.md, padding: '2px 6px', cursor: 'pointer', fontSize: '10px', fontWeight: typography.fontWeight.bold }}>
                              Concluir
                            </button>
                          )}
                          <button type="button" onClick={() => handleDeleteFollowup(fu.id)} aria-label="Eliminar follow-up" style={{ flexShrink: 0, border: 'none', background: 'none', color: colors.gray[400], cursor: 'pointer', padding: '2px' }}>
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], flexWrap: 'wrap' }}>
                        <span style={{ padding: '1px 6px', background: designSystem.helpers.hexToRgba(colors.primary, 0.08), color: colors.primary, borderRadius: radius.full, fontSize: '10px', fontWeight: typography.fontWeight.semibold }}>{typeInfo?.label || fu.type}</span>
                        <span style={{ padding: '1px 6px', background: designSystem.helpers.hexToRgba(priorityInfo?.color || '#6B7280', 0.1), color: priorityInfo?.color || '#6B7280', borderRadius: radius.full, fontSize: '10px', fontWeight: typography.fontWeight.bold }}>{priorityInfo?.label || fu.priority}</span>
                        <span style={{ fontSize: '10px', color: isOverdue ? colors.error : colors.gray[500], fontWeight: isOverdue ? typography.fontWeight.bold : typography.fontWeight.medium }}>{fu.dueDate}{fu.dueTime ? ` ${fu.dueTime}` : ''}</span>
                        {fu.outcome && <span style={{ padding: '1px 6px', background: colors.gray[100], color: colors.gray[600], borderRadius: radius.full, fontSize: '10px' }}>{FOLLOWUP_OUTCOMES.find((o) => o.value === fu.outcome)?.label || fu.outcome}</span>}
                      </div>
                      {completingFollowupId === fu.id && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1], marginTop: spacing[1], padding: spacing[2], background: colors.gray[50], borderRadius: radius.md }}>
                          <textarea
                            value={completionText}
                            onChange={(e) => setCompletionText(e.target.value)}
                            placeholder="Descreva o resultado..."
                            rows={2}
                            style={{ width: '100%', padding: spacing[1], border: `1px solid ${colors.gray[300]}`, borderRadius: radius.md, fontSize: typography.fontSize.xs, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                            autoFocus
                          />
                          <div style={{ display: 'flex', gap: spacing[1], justifyContent: 'flex-end' }}>
                            <button type="button" onClick={() => handleCompleteFollowup(fu.id)} style={{ border: 'none', background: colors.success, color: colors.white, borderRadius: radius.md, padding: `${spacing[1]} ${spacing[2]}`, cursor: 'pointer', fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold }}>OK</button>
                            <button type="button" onClick={() => { setCompletingFollowupId(null); setCompletionText(''); }} style={{ border: 'none', background: 'none', color: colors.gray[400], cursor: 'pointer', padding: '2px' }}><X size={14} /></button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
