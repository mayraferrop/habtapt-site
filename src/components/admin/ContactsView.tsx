'use client';

import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Inbox,
} from '../icons';
import { colors, spacing, shadows, radius, typography } from '../../utils/styles';
import { animations } from '../../utils/animations';
import { designSystem } from '../design-system';
import { ContactDetailModal } from './ContactDetailModal';
import type { Contact } from './types';

// Contacts View
export function ContactsView({
  contacts,
  viewMode,
  selectedContact,
  onSelectContact,
  onRefresh,
}: {
  contacts: Contact[];
  viewMode: 'grid' | 'list';
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact | null) => void;
  onRefresh?: () => void;
}) {
  if (contacts.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          textAlign: 'center',
          padding: spacing[12],
          color: colors.gray[500],
        }}
      >
        <Inbox size={64} style={{ margin: '0 auto', marginBottom: spacing[4], opacity: 0.3 }} aria-hidden="true" />
        <h3 style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semibold, marginBottom: spacing[2] }}>
          Nenhum contato encontrado
        </h3>
        <p style={{ fontSize: typography.fontSize.base }}>Os contatos aparecerão aqui quando forem enviados</p>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {selectedContact && (
          <ContactDetailModal contact={selectedContact} onClose={() => onSelectContact(null)} onRefresh={onRefresh} />
        )}
      </AnimatePresence>

      {viewMode === 'grid' ? (
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          animate="animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: spacing[6],
          }}
        >
          {contacts.map((contact) => (
            <motion.div
              key={contact.id}
              variants={animations.fadeInUp}
              onClick={() => onSelectContact(contact)}
              style={{
                background: colors.white,
                border: `2px solid ${colors.gray[200]}`,
                borderRadius: radius.xl,
                padding: spacing[6],
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              whileHover={{ y: -4, boxShadow: shadows.md }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: spacing[3], marginBottom: spacing[4] }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: radius.lg,
                    background: designSystem.helpers.hexToRgba(colors.primary, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={24} style={{ color: colors.primary }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize.lg, color: colors.gray[900], marginBottom: spacing[1] }}>
                    {contact.name}
                  </h4>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[500] }}>{contact.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <Phone size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                  <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[600] }}>{contact.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <MessageSquare size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                  <span
                    style={{
                      fontSize: typography.fontSize.sm,
                      padding: `${spacing[1]} ${spacing[2]}`,
                      background: designSystem.helpers.hexToRgba(colors.secondary, 0.1),
                      color: colors.secondary,
                      borderRadius: radius.md,
                      fontWeight: typography.fontWeight.semibold,
                    }}
                  >
                    {contact.interest}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <Calendar size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                  <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[500] }}>{contact.createdAt}</span>
                </div>
              </div>

              {contact.message && (
                <div
                  style={{
                    marginTop: spacing[4],
                    padding: spacing[3],
                    background: colors.gray[50],
                    borderRadius: radius.md,
                    fontSize: typography.fontSize.sm,
                    color: colors.gray[600],
                    lineHeight: typography.lineHeight.relaxed,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {contact.message}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: `0 ${spacing[2]}` }}>
            <caption className="sr-only">
              Lista de {contacts.length} contatos recebidos pelo formulário do site HABTA
            </caption>
            <thead>
              <tr>
                {['Nome', 'Email', 'Telefone', 'Interesse', 'Mensagem', 'Data'].map((header) => (
                  <th
                    key={header}
                    scope="col"
                    style={{
                      textAlign: 'left',
                      padding: spacing[3],
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.gray[600],
                      textTransform: 'uppercase',
                      letterSpacing: typography.letterSpacing.wide,
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={contact.id}
                  variants={animations.fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onSelectContact(contact)}
                  style={{
                    background: colors.white,
                    borderRadius: radius.lg,
                    cursor: 'pointer',
                  }}
                  whileHover={{ backgroundColor: colors.gray[50] }}
                >
                  <td style={{ padding: spacing[4], fontWeight: typography.fontWeight.semibold, color: colors.gray[900] }}>
                    {contact.name}
                  </td>
                  <td style={{ padding: spacing[4], color: colors.gray[600] }}>{contact.email}</td>
                  <td style={{ padding: spacing[4], color: colors.gray[600] }}>{contact.phone}</td>
                  <td style={{ padding: spacing[4] }}>
                    <span
                      style={{
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
                  </td>
                  <td style={{ padding: spacing[4], color: colors.gray[500], fontSize: typography.fontSize.sm, maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {contact.message || '—'}
                  </td>
                  <td style={{ padding: spacing[4], color: colors.gray[500], fontSize: typography.fontSize.sm }}>
                    {contact.createdAt}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
