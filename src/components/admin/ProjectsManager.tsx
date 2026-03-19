// ProjectsManager - 100% Conformidade Guardião Universal
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  TrendingUp,
  Building2,
  Home,
  Image,
  AlertCircle,
} from '../icons';
import { toast } from 'sonner';
import { colors, spacing, radius, shadows, typography } from '../../utils/styles';
import { designSystem } from '../design-system';
import { AnimatedButton } from '../primitives/AnimatedButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ImageUpload } from './ImageUpload';
import { supabaseFetch } from '../../utils/supabase/client';
import { createProject, updateProject, deleteProject } from '@/lib/actions/projects';

import type { Project, ProjectStatus, InvestmentStrategy } from '@/types/project';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ProjectsManagerProps {
  projects: Project[];
  onRefresh: () => void;
  isLoading: boolean;
}

interface UnitSummary {
  id: string;
  title: string;
  typology: string;
  status: 'available' | 'reserved' | 'sold';
  priceLabel: string;
  floor: string;
  bedrooms: number;
  bathrooms: number;
  grossArea: number | null;
  projectId: string | null;
}

type TabKey = 'geral' | 'caracteristicas' | 'localizacao' | 'precos' | 'media' | 'seo' | 'links';

// ---------------------------------------------------------------------------
// Reusable helpers (inside module scope so they share style constants)
// ---------------------------------------------------------------------------

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: `${spacing[3]} ${spacing[4]}`,
  border: `1px solid ${colors.gray[300]}`,
  borderRadius: radius.md,
  fontSize: typography.fontSize.base,
  outline: 'none',
  transition: 'border-color 0.2s',
};

const inputSmallStyle: React.CSSProperties = {
  width: '100%',
  padding: `${spacing[2]} ${spacing[3]}`,
  border: `1px solid ${colors.gray[300]}`,
  borderRadius: radius.md,
  fontSize: typography.fontSize.sm,
  outline: 'none',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
  background: colors.white,
};

const focusHandlers = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = colors.primary;
    e.currentTarget.style.boxShadow = '0 0 0 3px ' + designSystem.helpers.hexToRgba(colors.primary, 0.1);
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = colors.gray[300];
    e.currentTarget.style.boxShadow = 'none';
  },
};

function FormField({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
          color: colors.gray[700],
          marginBottom: spacing[2],
        }}
      >
        {label} {required && <span style={{ color: colors.error }}>*</span>}
      </label>
      {children}
      {hint && (
        <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginTop: spacing[1] }}>
          {hint}
        </p>
      )}
    </div>
  );
}

function CharCounter({ current, max }: { current: number; max: number }) {
  const over = current > max;
  return (
    <span style={{ fontSize: typography.fontSize.xs, color: over ? colors.error : colors.gray[400], marginLeft: spacing[2] }}>
      {current}/{max}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.bold,
        color: colors.gray[800],
        marginBottom: spacing[3],
        paddingBottom: spacing[2],
        borderBottom: `1px solid ${colors.gray[200]}`,
      }}
    >
      {children}
    </h4>
  );
}

// ---------------------------------------------------------------------------
// Option lists
// ---------------------------------------------------------------------------

const statusOptions = [
  { value: 'draft', label: 'Rascunho' },
  { value: 'active', label: 'Ativo' },
  { value: 'reserved', label: 'Reservado' },
  { value: 'sold', label: 'Vendido' },
  { value: 'rented', label: 'Arrendado' },
  { value: 'delisted', label: 'Retirado' },
  { value: 'archived', label: 'Arquivado' },
  // Legacy values kept for backward compat
  { value: 'analysis', label: 'Em Análise' },
  { value: 'in-progress', label: 'Em Andamento' },
  { value: 'available', label: 'Disponível' },
];

const strategyOptions = [
  { value: 'fix-flip', label: 'Fix & Flip' },
  { value: 'buy-hold', label: 'Buy & Hold' },
  { value: 'alojamento-local', label: 'Alojamento Local' },
  { value: 'rent-to-rent', label: 'Rent-to-Rent' },
  { value: 'desenvolvimento', label: 'Desenvolvimento' },
  { value: 'co-investimento', label: 'Co-Investimento' },
];

const listingTypeOptions = [
  { value: 'venda', label: 'Venda' },
  { value: 'arrendamento', label: 'Arrendamento' },
  { value: 'venda_e_arrendamento', label: 'Ambos' },
];

const propertyTypeOptions = [
  { value: '', label: 'Selecionar...' },
  { value: 'apartamento', label: 'Apartamento' },
  { value: 'moradia', label: 'Moradia' },
  { value: 'predio', label: 'Prédio' },
  { value: 'terreno', label: 'Terreno' },
  { value: 'loja', label: 'Loja' },
  { value: 'escritorio', label: 'Escritório' },
  { value: 'armazem', label: 'Armazém' },
];

const conditionOptions = [
  { value: '', label: 'Selecionar...' },
  { value: 'novo', label: 'Novo' },
  { value: 'remodelado', label: 'Remodelado' },
  { value: 'bom', label: 'Bom estado' },
  { value: 'usado', label: 'Usado' },
  { value: 'para_renovar', label: 'Para renovar' },
  { value: 'ruina', label: 'Ruína' },
];

const energyCertOptions = [
  { value: '', label: 'Selecionar...' },
  { value: 'A+', label: 'A+' },
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'B-', label: 'B-' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
];

const typologyOptions = [
  { value: '', label: 'Selecionar...' },
  { value: 'T0', label: 'T0' },
  { value: 'T1', label: 'T1' },
  { value: 'T2', label: 'T2' },
  { value: 'T3', label: 'T3' },
  { value: 'T4', label: 'T4' },
  { value: 'T5+', label: 'T5+' },
];

const tabs: { key: TabKey; label: string }[] = [
  { key: 'geral', label: 'Geral' },
  { key: 'caracteristicas', label: 'Características' },
  { key: 'localizacao', label: 'Localização' },
  { key: 'precos', label: 'Preços' },
  { key: 'media', label: 'Media' },
  { key: 'seo', label: 'SEO' },
  { key: 'links', label: 'Links & Unidades' },
];

// ---------------------------------------------------------------------------
// Default form data factory
// ---------------------------------------------------------------------------

function defaultFormData(): Partial<Project> {
  return {
    title: '',
    location: '',
    status: 'draft',
    statusLabel: 'Rascunho',
    strategy: 'fix-flip',
    image: '',
    roi: '+0%',
    area: '0 m²',
    bedrooms: 0,
    bathrooms: 0,
    price: '€0',
    investment: '€0',
    timeline: '0 meses',
    timelinePhases: '',
    description: '',
    highlights: '',
    landingPage: null,
    portalLink: null,
    brochureLink: null,
    // New fields
    slug: '',
    shortDescription: '',
    listingType: 'venda',
    propertyType: '',
    typology: '',
    grossAreaM2: null,
    netAreaM2: null,
    landAreaM2: null,
    floor: null,
    totalFloors: null,
    constructionYear: null,
    energyCertificate: '',
    condition: '',
    hasElevator: false,
    hasParking: false,
    parkingSpaces: null,
    hasGarage: false,
    hasPool: false,
    hasGarden: false,
    hasTerrace: false,
    hasBalcony: false,
    hasStorage: false,
    hasAirConditioning: false,
    hasCentralHeating: false,
    hasFireplace: false,
    isFurnished: false,
    furnitureIncluded: '',
    district: '',
    municipality: '',
    parish: '',
    address: '',
    postalCode: '',
    latitude: null,
    longitude: null,
    salePriceNumeric: null,
    salePriceNegotiable: false,
    rentMonthly: null,
    rentDepositMonths: null,
    expensesIncluded: false,
    expensesAmount: null,
    availableFrom: null,
    priceOnRequest: false,
    videoUrl: '',
    videoType: '',
    virtualTourUrl: '',
    floorPlanUrl: '',
    floorPlanImages: [],
    beforeImages: [],
    afterImages: [],
    featured: false,
    metaTitle: '',
    metaDescription: '',
    ogImageUrl: '',
    keywords: '',
    externalId: '',
    externalSource: '',
  };
}

// ---------------------------------------------------------------------------
// Slug helper
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ProjectsManager({ projects, onRefresh, isLoading }: ProjectsManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('geral');
  const [showLegacyFields, setShowLegacyFields] = useState(false);

  // Units per project
  const [unitsMap, setUnitsMap] = useState<Record<string, UnitSummary[]>>({});
  const [projectUnits, setProjectUnits] = useState<UnitSummary[]>([]);
  const [isLoadingUnits, setIsLoadingUnits] = useState(false);

  // Fetch all units to build count map
  useEffect(() => {
    const fetchAllUnits = async () => {
      try {
        const response = await supabaseFetch('units', {}, 2, true);
        const data = await response.json();
        if (data.success && data.units) {
          const map: Record<string, UnitSummary[]> = {};
          for (const u of data.units) {
            if (u.projectId) {
              if (!map[u.projectId]) map[u.projectId] = [];
              map[u.projectId].push(u);
            }
          }
          setUnitsMap(map);
        }
      } catch (err) {
        console.error('Error fetching units for count:', err);
      }
    };
    fetchAllUnits();
  }, [projects]);

  // Fetch units for the project being edited
  const fetchProjectUnits = async (projectId: string) => {
    setIsLoadingUnits(true);
    try {
      const response = await supabaseFetch(`units?project_id=${projectId}`, {}, 2, true);
      const data = await response.json();
      if (data.success && data.units) {
        setProjectUnits(data.units);
      }
    } catch (err) {
      console.error('Error fetching project units:', err);
    } finally {
      setIsLoadingUnits(false);
    }
  };

  // Form state
  const [formData, setFormData] = useState<Partial<Project>>(defaultFormData());

  const updateField = <K extends keyof Project>(key: K, value: Project[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({ ...defaultFormData(), ...project });
      fetchProjectUnits(project.id);
    } else {
      setEditingProject(null);
      setProjectUnits([]);
      setFormData(defaultFormData());
    }
    setActiveTab('geral');
    setShowLegacyFields(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setFormData(defaultFormData());
  };

  const handleSave = async () => {
    // Validation
    if (!formData.title || !formData.location || !formData.image) {
      toast.error('Preencha todos os campos obrigatórios (título, localização, imagem)');
      return;
    }

    setIsSaving(true);

    try {
      // Clean up empty strings to null for links and optional fields
      const cleanedFormData: Partial<Project> = {
        ...formData,
        landingPage: formData.landingPage?.trim() || null,
        portalLink: formData.portalLink?.trim() || null,
        brochureLink: formData.brochureLink?.trim() || null,
        videoUrl: formData.videoUrl?.trim() || undefined,
        virtualTourUrl: formData.virtualTourUrl?.trim() || undefined,
        floorPlanUrl: formData.floorPlanUrl?.trim() || undefined,
        ogImageUrl: formData.ogImageUrl?.trim() || undefined,
        slug: formData.slug?.trim() || undefined,
        availableFrom: formData.availableFrom?.trim() || null,
      };

      const result = editingProject
        ? await updateProject(editingProject.id, cleanedFormData)
        : await createProject(cleanedFormData);

      if (!result.success) {
        throw new Error(result.error || 'Erro ao salvar projeto');
      }

      toast.success(result.message || (editingProject ? 'Projeto atualizado!' : 'Projeto criado!'));
      handleCloseModal();
      onRefresh();
    } catch (error) {
      console.error('Error saving project:', error);
      toast.error(error instanceof Error ? error.message : 'Erro ao salvar projeto');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este projeto?')) {
      return;
    }

    setIsDeleting(true);

    try {
      const result = await deleteProject(id);

      if (!result.success) {
        throw new Error(result.error || 'Erro ao excluir projeto');
      }

      toast.success(result.message || 'Projeto excluído!');
      onRefresh();
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error(error instanceof Error ? error.message : 'Erro ao excluir projeto');
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colorMap: Record<string, string> = {
      'in-progress': colors.warning,
      available: colors.secondary,
      active: colors.secondary,
      sold: colors.success,
      rented: colors.success,
      reserved: colors.warning,
      draft: colors.gray[400],
      delisted: colors.gray[500],
      archived: colors.gray[500],
    };
    return colorMap[status] || colors.gray[500];
  };

  const getStrategyColor = (strategy: string) => {
    return strategy === 'fix-flip' ? colors.primary : colors.secondary;
  };

  // ---------------------------------------------------------------------------
  // Render helpers for tab content
  // ---------------------------------------------------------------------------

  const renderTabGeral = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      {/* Title */}
      <FormField label="Título do Projeto" required>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          required
          placeholder="Ex: Apartamento Premium Centro Lisboa"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Short Description */}
      <FormField label="Descrição Curta" hint={`Máximo 200 caracteres. ${(formData.shortDescription || '').length}/200`}>
        <textarea
          value={formData.shortDescription || ''}
          onChange={(e) => {
            if (e.target.value.length <= 200) updateField('shortDescription', e.target.value);
          }}
          placeholder="Breve descrição do imóvel para listagens..."
          rows={2}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
          {...focusHandlers}
        />
      </FormField>

      {/* Listing Type */}
      <FormField label="Tipo de Anúncio">
        <div style={{ display: 'flex', gap: spacing[3] }}>
          {listingTypeOptions.map((opt) => (
            <label
              key={opt.value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                cursor: 'pointer',
                fontSize: typography.fontSize.sm,
                color: formData.listingType === opt.value ? colors.primary : colors.gray[600],
                fontWeight: formData.listingType === opt.value ? typography.fontWeight.semibold : typography.fontWeight.medium,
              }}
            >
              <input
                type="radio"
                name="listingType"
                value={opt.value}
                checked={formData.listingType === opt.value}
                onChange={(e) => updateField('listingType', e.target.value as Project['listingType'])}
                style={{ accentColor: colors.primary }}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </FormField>

      {/* Property Type */}
      <FormField label="Tipo de Imóvel">
        <select
          value={formData.propertyType || ''}
          onChange={(e) => updateField('propertyType', e.target.value as Project['propertyType'])}
          style={selectStyle}
        >
          {propertyTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </FormField>

      {/* Status and Strategy Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
        <FormField label="Status" required>
          <select
            value={formData.status}
            onChange={(e) => {
              const selectedStatus = e.target.value as ProjectStatus;
              const selectedOption = statusOptions.find(opt => opt.value === selectedStatus);
              setFormData({
                ...formData,
                status: selectedStatus,
                statusLabel: selectedOption?.label || selectedStatus,
              });
            }}
            required
            style={selectStyle}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Estratégia" required>
          <select
            value={formData.strategy}
            onChange={(e) => updateField('strategy', e.target.value as InvestmentStrategy)}
            required
            style={selectStyle}
          >
            {strategyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Status Label */}
      <FormField label="Label do Status" required>
        <input
          type="text"
          value={formData.statusLabel}
          onChange={(e) => updateField('statusLabel', e.target.value)}
          required
          placeholder="Ex: Vendido, Em Obra, Disponível"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Image Upload */}
      <ImageUpload
        value={formData.image}
        onChange={(url) => updateField('image', url)}
        bucket="projects"
        label="Imagem Principal do Projeto"
      />

      {/* Featured toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: spacing[2], cursor: 'pointer', fontSize: typography.fontSize.sm, color: colors.gray[700] }}>
          <input
            type="checkbox"
            checked={formData.featured || false}
            onChange={(e) => updateField('featured', e.target.checked)}
            style={{ accentColor: colors.primary, width: '18px', height: '18px' }}
          />
          <span style={{ fontWeight: typography.fontWeight.medium }}>Projeto em Destaque</span>
        </label>
      </div>

      {/* Description */}
      <FormField label="Descrição">
        <textarea
          value={formData.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Descrição detalhada do projeto..."
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
          {...focusHandlers}
        />
      </FormField>
    </div>
  );

  const renderTabCaracteristicas = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      {/* Typology, Bedrooms, Bathrooms */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacing[3] }}>
        <FormField label="Tipologia">
          <select
            value={formData.typology || ''}
            onChange={(e) => updateField('typology', e.target.value)}
            style={selectStyle}
          >
            {typologyOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Quartos">
          <input
            type="number"
            min="0"
            value={formData.bedrooms ?? 0}
            onChange={(e) => updateField('bedrooms', parseInt(e.target.value) || 0)}
            style={inputSmallStyle}
          />
        </FormField>

        <FormField label="Casas de Banho">
          <input
            type="number"
            min="0"
            value={formData.bathrooms ?? 0}
            onChange={(e) => updateField('bathrooms', parseInt(e.target.value) || 0)}
            style={inputSmallStyle}
          />
        </FormField>
      </div>

      {/* Areas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacing[3] }}>
        <FormField label="Área Bruta (m²)">
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.grossAreaM2 ?? ''}
            onChange={(e) => updateField('grossAreaM2', e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="120"
            style={inputSmallStyle}
          />
        </FormField>

        <FormField label="Área Útil (m²)">
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.netAreaM2 ?? ''}
            onChange={(e) => updateField('netAreaM2', e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="95"
            style={inputSmallStyle}
          />
        </FormField>

        <FormField label="Área Terreno (m²)">
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.landAreaM2 ?? ''}
            onChange={(e) => updateField('landAreaM2', e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="200"
            style={inputSmallStyle}
          />
        </FormField>
      </div>

      {/* Floor, Total Floors, Construction Year */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacing[3] }}>
        <FormField label="Piso">
          <input
            type="number"
            value={formData.floor ?? ''}
            onChange={(e) => updateField('floor', e.target.value ? parseInt(e.target.value) : null)}
            placeholder="3"
            style={inputSmallStyle}
          />
        </FormField>

        <FormField label="Total de Pisos">
          <input
            type="number"
            min="0"
            value={formData.totalFloors ?? ''}
            onChange={(e) => updateField('totalFloors', e.target.value ? parseInt(e.target.value) : null)}
            placeholder="5"
            style={inputSmallStyle}
          />
        </FormField>

        <FormField label="Ano de Construção">
          <input
            type="number"
            min="1800"
            max="2030"
            value={formData.constructionYear ?? ''}
            onChange={(e) => updateField('constructionYear', e.target.value ? parseInt(e.target.value) : null)}
            placeholder="2020"
            style={inputSmallStyle}
          />
        </FormField>
      </div>

      {/* Energy Certificate & Condition */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
        <FormField label="Certificado Energético">
          <select
            value={formData.energyCertificate || ''}
            onChange={(e) => updateField('energyCertificate', e.target.value)}
            style={selectStyle}
          >
            {energyCertOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Estado do Imóvel">
          <select
            value={formData.condition || ''}
            onChange={(e) => updateField('condition', e.target.value)}
            style={selectStyle}
          >
            {conditionOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Legacy area field */}
      <FormField label="Área (texto legado)" hint="Campo legado. Use a área bruta/útil acima para novos projetos.">
        <input
          type="text"
          value={formData.area || ''}
          onChange={(e) => updateField('area', e.target.value)}
          placeholder="95 m²"
          style={inputSmallStyle}
        />
      </FormField>

      {/* Amenities */}
      <div style={{ marginTop: spacing[2] }}>
        <SectionHeading>Comodidades</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[2] }}>
          {([
            ['hasElevator', 'Elevador'],
            ['hasParking', 'Estacionamento'],
            ['hasGarage', 'Garagem'],
            ['hasPool', 'Piscina'],
            ['hasGarden', 'Jardim'],
            ['hasTerrace', 'Terraço'],
            ['hasBalcony', 'Varanda'],
            ['hasStorage', 'Arrecadação'],
            ['hasAirConditioning', 'Ar Condicionado'],
            ['hasCentralHeating', 'Aquecimento Central'],
            ['hasFireplace', 'Lareira'],
            ['isFurnished', 'Mobilado'],
          ] as [keyof Project, string][]).map(([field, label]) => (
            <label
              key={field}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                cursor: 'pointer',
                fontSize: typography.fontSize.sm,
                color: colors.gray[700],
                padding: `${spacing[2]} ${spacing[3]}`,
                borderRadius: radius.md,
                background: (formData as Record<string, unknown>)[field] ? designSystem.helpers.hexToRgba(colors.primary, 0.05) : 'transparent',
                border: `1px solid ${(formData as Record<string, unknown>)[field] ? designSystem.helpers.hexToRgba(colors.primary, 0.2) : colors.gray[200]}`,
                transition: 'all 0.2s',
              }}
            >
              <input
                type="checkbox"
                checked={!!((formData as Record<string, unknown>)[field])}
                onChange={(e) => updateField(field, e.target.checked as never)}
                style={{ accentColor: colors.primary }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Parking Spaces (conditional) */}
      {formData.hasParking && (
        <FormField label="Lugares de Estacionamento">
          <input
            type="number"
            min="0"
            value={formData.parkingSpaces ?? ''}
            onChange={(e) => updateField('parkingSpaces', e.target.value ? parseInt(e.target.value) : null)}
            placeholder="1"
            style={inputSmallStyle}
          />
        </FormField>
      )}

      {/* Furniture details (conditional) */}
      {formData.isFurnished && (
        <FormField label="Mobiliário Incluído" hint="Descreva o mobiliário incluído">
          <textarea
            value={formData.furnitureIncluded || ''}
            onChange={(e) => updateField('furnitureIncluded', e.target.value)}
            placeholder="Cozinha equipada, roupeiros embutidos..."
            rows={2}
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
            {...focusHandlers}
          />
        </FormField>
      )}
    </div>
  );

  const renderTabLocalizacao = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      {/* Location (existing) */}
      <FormField label="Localização (resumo)" required>
        <input
          type="text"
          value={formData.location || ''}
          onChange={(e) => updateField('location', e.target.value)}
          required
          placeholder="Ex: Chiado, Lisboa"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* District, Municipality, Parish */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacing[3] }}>
        <FormField label="Distrito">
          <input
            type="text"
            value={formData.district || ''}
            onChange={(e) => updateField('district', e.target.value)}
            placeholder="Lisboa"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>

        <FormField label="Concelho">
          <input
            type="text"
            value={formData.municipality || ''}
            onChange={(e) => updateField('municipality', e.target.value)}
            placeholder="Lisboa"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>

        <FormField label="Freguesia">
          <input
            type="text"
            value={formData.parish || ''}
            onChange={(e) => updateField('parish', e.target.value)}
            placeholder="Santa Maria Maior"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>
      </div>

      {/* Address, Postal Code */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: spacing[3] }}>
        <FormField label="Morada">
          <input
            type="text"
            value={formData.address || ''}
            onChange={(e) => updateField('address', e.target.value)}
            placeholder="Rua Augusta, 123"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>

        <FormField label="Código Postal">
          <input
            type="text"
            value={formData.postalCode || ''}
            onChange={(e) => updateField('postalCode', e.target.value)}
            placeholder="1100-000"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>
      </div>

      {/* Latitude, Longitude */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
        <FormField label="Latitude">
          <input
            type="number"
            step="0.000001"
            value={formData.latitude ?? ''}
            onChange={(e) => updateField('latitude', e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="38.7223"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>

        <FormField label="Longitude">
          <input
            type="number"
            step="0.000001"
            value={formData.longitude ?? ''}
            onChange={(e) => updateField('longitude', e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="-9.1393"
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>
      </div>
    </div>
  );

  const renderTabPrecos = () => {
    const lt = formData.listingType || 'venda';
    const showSale = lt === 'venda' || lt === 'venda_e_arrendamento';
    const showRent = lt === 'arrendamento' || lt === 'venda_e_arrendamento';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
        {/* Price on Request */}
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: spacing[2], cursor: 'pointer', fontSize: typography.fontSize.sm, color: colors.gray[700] }}>
            <input
              type="checkbox"
              checked={formData.priceOnRequest || false}
              onChange={(e) => updateField('priceOnRequest', e.target.checked)}
              style={{ accentColor: colors.primary, width: '18px', height: '18px' }}
            />
            <span style={{ fontWeight: typography.fontWeight.medium }}>Preço sob consulta</span>
          </label>
        </div>

        {/* Sale Price */}
        {showSale && (
          <div style={{ padding: spacing[4], background: colors.gray[50], borderRadius: radius.md, display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <SectionHeading>Venda</SectionHeading>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: spacing[3], alignItems: 'end' }}>
              <FormField label="Preço de Venda (EUR)">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={formData.salePriceNumeric ?? ''}
                  onChange={(e) => updateField('salePriceNumeric', e.target.value ? parseFloat(e.target.value) : null)}
                  placeholder="350000"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </FormField>

              <label style={{ display: 'flex', alignItems: 'center', gap: spacing[2], cursor: 'pointer', fontSize: typography.fontSize.sm, color: colors.gray[700], paddingBottom: spacing[1] }}>
                <input
                  type="checkbox"
                  checked={formData.salePriceNegotiable || false}
                  onChange={(e) => updateField('salePriceNegotiable', e.target.checked)}
                  style={{ accentColor: colors.primary }}
                />
                Negociável
              </label>
            </div>
          </div>
        )}

        {/* Rent */}
        {showRent && (
          <div style={{ padding: spacing[4], background: colors.gray[50], borderRadius: radius.md, display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <SectionHeading>Arrendamento</SectionHeading>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
              <FormField label="Renda Mensal (EUR)">
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={formData.rentMonthly ?? ''}
                  onChange={(e) => updateField('rentMonthly', e.target.value ? parseFloat(e.target.value) : null)}
                  placeholder="1200"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </FormField>

              <FormField label="Meses de Caução">
                <input
                  type="number"
                  min="0"
                  value={formData.rentDepositMonths ?? ''}
                  onChange={(e) => updateField('rentDepositMonths', e.target.value ? parseInt(e.target.value) : null)}
                  placeholder="2"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </FormField>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3], alignItems: 'end' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: spacing[2], cursor: 'pointer', fontSize: typography.fontSize.sm, color: colors.gray[700] }}>
                <input
                  type="checkbox"
                  checked={formData.expensesIncluded || false}
                  onChange={(e) => updateField('expensesIncluded', e.target.checked)}
                  style={{ accentColor: colors.primary }}
                />
                Despesas incluídas
              </label>

              {formData.expensesIncluded && (
                <FormField label="Valor Despesas (EUR)">
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={formData.expensesAmount ?? ''}
                    onChange={(e) => updateField('expensesAmount', e.target.value ? parseFloat(e.target.value) : null)}
                    placeholder="150"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </FormField>
              )}
            </div>
          </div>
        )}

        {/* Available From */}
        <FormField label="Disponível a partir de">
          <input
            type="date"
            value={formData.availableFrom || ''}
            onChange={(e) => updateField('availableFrom', e.target.value || null)}
            style={inputStyle}
            {...focusHandlers}
          />
        </FormField>

        {/* Legacy fields (collapsible) */}
        <div style={{ marginTop: spacing[2] }}>
          <button
            type="button"
            onClick={() => setShowLegacyFields(!showLegacyFields)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[2],
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.medium,
              color: colors.gray[500],
              padding: `${spacing[2]} 0`,
            }}
          >
            <span style={{ transform: showLegacyFields ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
            Campos legado (preço texto, investimento, ROI, prazo)
          </button>

          {showLegacyFields && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3], padding: spacing[4], background: designSystem.helpers.hexToRgba(colors.warning, 0.05), borderRadius: radius.md, border: `1px dashed ${colors.warning}`, marginTop: spacing[2] }}>
              <FormField label="Preço (texto)" hint="Campo legado, use preço numérico acima">
                <input
                  type="text"
                  value={formData.price || ''}
                  onChange={(e) => updateField('price', e.target.value)}
                  placeholder="€420.000"
                  style={inputSmallStyle}
                />
              </FormField>

              <FormField label="Investimento (texto)">
                <input
                  type="text"
                  value={formData.investment || ''}
                  onChange={(e) => updateField('investment', e.target.value)}
                  placeholder="€318.000"
                  style={inputSmallStyle}
                />
              </FormField>

              <FormField label="ROI (texto)">
                <input
                  type="text"
                  value={formData.roi || ''}
                  onChange={(e) => updateField('roi', e.target.value)}
                  placeholder="+32%"
                  style={inputSmallStyle}
                />
              </FormField>

              <FormField label="Prazo (texto)">
                <input
                  type="text"
                  value={typeof formData.timeline === 'string' ? formData.timeline : ''}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  placeholder="9 meses"
                  style={inputSmallStyle}
                />
              </FormField>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTabMedia = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      {/* Image Upload (also in Geral, repeated here for convenience) */}
      <ImageUpload
        value={formData.image}
        onChange={(url) => updateField('image', url)}
        bucket="projects"
        label="Imagem Principal"
      />

      {/* Video URL */}
      <FormField label="URL do Vídeo" hint="YouTube, Vimeo ou link directo MP4">
        <input
          type="url"
          value={formData.videoUrl || ''}
          onChange={(e) => updateField('videoUrl', e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Virtual Tour URL */}
      <FormField label="Tour Virtual URL" hint="Matterport, 360 tour ou similar">
        <input
          type="url"
          value={formData.virtualTourUrl || ''}
          onChange={(e) => updateField('virtualTourUrl', e.target.value)}
          placeholder="https://my.matterport.com/show/?m=..."
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Floor Plan URL */}
      <FormField label="Planta (URL)" hint="URL da imagem ou PDF da planta">
        <input
          type="url"
          value={formData.floorPlanUrl || ''}
          onChange={(e) => updateField('floorPlanUrl', e.target.value)}
          placeholder="https://..."
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Before Images */}
      <FormField label="Imagens Antes (URLs)" hint="Uma URL por linha">
        <textarea
          value={(formData.beforeImages || []).join('\n')}
          onChange={(e) => updateField('beforeImages', e.target.value.split('\n').filter(Boolean))}
          placeholder="https://exemplo.com/antes-1.jpg&#10;https://exemplo.com/antes-2.jpg"
          rows={3}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace', fontSize: typography.fontSize.sm }}
          {...focusHandlers}
        />
      </FormField>

      {/* After Images */}
      <FormField label="Imagens Depois (URLs)" hint="Uma URL por linha">
        <textarea
          value={(formData.afterImages || []).join('\n')}
          onChange={(e) => updateField('afterImages', e.target.value.split('\n').filter(Boolean))}
          placeholder="https://exemplo.com/depois-1.jpg&#10;https://exemplo.com/depois-2.jpg"
          rows={3}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace', fontSize: typography.fontSize.sm }}
          {...focusHandlers}
        />
      </FormField>

      {/* Highlights */}
      <FormField label="Destaques do Projeto" hint="Um destaque por linha. Serão exibidos como lista com ícones de check.">
        <textarea
          value={typeof formData.highlights === 'string' ? formData.highlights : (formData.highlights || []).join('\n')}
          onChange={(e) => updateField('highlights', e.target.value)}
          placeholder="Um destaque por linha. Ex:&#10;Restauro de fachada histórica&#10;Certificação energética A&#10;Localização premium"
          rows={6}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
          {...focusHandlers}
        />
      </FormField>
    </div>
  );

  const renderTabSEO = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      {/* Meta Title */}
      <FormField label="Meta Title">
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          <input
            type="text"
            value={formData.metaTitle || ''}
            onChange={(e) => updateField('metaTitle', e.target.value)}
            placeholder="Título para SEO (max 60 caracteres)"
            maxLength={70}
            style={{ ...inputStyle, flex: 1 }}
            {...focusHandlers}
          />
          <CharCounter current={(formData.metaTitle || '').length} max={60} />
        </div>
      </FormField>

      {/* Meta Description */}
      <FormField label="Meta Description">
        <div>
          <textarea
            value={formData.metaDescription || ''}
            onChange={(e) => updateField('metaDescription', e.target.value)}
            placeholder="Descrição para SEO (max 160 caracteres)"
            maxLength={170}
            rows={3}
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
            {...focusHandlers}
          />
          <div style={{ textAlign: 'right' }}>
            <CharCounter current={(formData.metaDescription || '').length} max={160} />
          </div>
        </div>
      </FormField>

      {/* OG Image URL */}
      <FormField label="OG Image URL" hint="Imagem para partilha em redes sociais (1200x630 recomendado)">
        <input
          type="url"
          value={formData.ogImageUrl || ''}
          onChange={(e) => updateField('ogImageUrl', e.target.value)}
          placeholder="https://..."
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Keywords */}
      <FormField label="Keywords" hint="Separadas por vírgula">
        <input
          type="text"
          value={formData.keywords || ''}
          onChange={(e) => updateField('keywords', e.target.value)}
          placeholder="apartamento lisboa, reabilitação urbana, investimento imobiliário"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Slug */}
      <FormField label="Slug" hint="Gerado automaticamente a partir do título. Editável.">
        <div style={{ display: 'flex', gap: spacing[2] }}>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => updateField('slug', e.target.value)}
            placeholder={slugify(formData.title || 'titulo-do-projeto')}
            style={{ ...inputStyle, flex: 1 }}
            {...focusHandlers}
          />
          <button
            type="button"
            onClick={() => updateField('slug', slugify(formData.title || ''))}
            style={{
              padding: `${spacing[2]} ${spacing[3]}`,
              border: `1px solid ${colors.gray[300]}`,
              borderRadius: radius.md,
              background: colors.gray[50],
              fontSize: typography.fontSize.xs,
              color: colors.gray[600],
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Gerar
          </button>
        </div>
      </FormField>
    </div>
  );

  const renderTabLinks = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      <SectionHeading>Links Externos</SectionHeading>

      {/* Landing Page */}
      <FormField label="Landing Page URL" hint="Caminho interno da landing page (ex: /velask). Opcional.">
        <input
          type="text"
          value={formData.landingPage || ''}
          onChange={(e) => updateField('landingPage', e.target.value)}
          placeholder="/velask"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Portal Link */}
      <FormField label="Link do Portal (Idealista, etc.)" hint="Link completo do anúncio no Idealista ou outro portal imobiliário">
        <input
          type="url"
          value={formData.portalLink || ''}
          onChange={(e) => updateField('portalLink', e.target.value)}
          placeholder="https://www.idealista.pt/imovel/..."
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Brochure Link */}
      <FormField label="Link da Brochura (PDF)" hint="Link para download da brochura do projeto (opcional)">
        <input
          type="url"
          value={formData.brochureLink || ''}
          onChange={(e) => updateField('brochureLink', e.target.value)}
          placeholder="https://exemplo.com/brochura.pdf"
          style={inputStyle}
          {...focusHandlers}
        />
      </FormField>

      {/* Timeline Phases */}
      <div style={{ marginTop: spacing[4] }}>
        <SectionHeading>Timeline do Projeto (Fases)</SectionHeading>
        <textarea
          value={formData.timelinePhases || ''}
          onChange={(e) => updateField('timelinePhases', e.target.value)}
          placeholder="Uma fase por linha no formato: Fase|Duração|Status&#10;Ex:&#10;Aquisição|1 mês|completed&#10;Licenciamento|2 meses|completed&#10;Obra Estrutural|3 meses|in-progress&#10;Acabamentos|1.5 meses|pending&#10;Comercialização|0.5 meses|pending"
          rows={7}
          style={{
            ...inputStyle,
            resize: 'vertical',
            fontFamily: 'monospace',
            fontSize: typography.fontSize.sm,
          }}
          {...focusHandlers}
        />
        <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginTop: spacing[1] }}>
          <strong>Formato:</strong> Fase|Duração|Status (separados por |)<br />
          <strong>Status possíveis:</strong> completed (verde), in-progress (amarelo), pending (cinza)
        </p>
      </div>

      {/* Units Section (only when editing) */}
      {editingProject && (
        <div style={{ marginTop: spacing[4], paddingTop: spacing[4], borderTop: `1px solid ${colors.gray[200]}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing[4] }}>
            <h3 style={{
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.bold,
              color: colors.gray[800],
              display: 'flex',
              alignItems: 'center',
              gap: spacing[2],
            }}>
              <Home size={20} style={{ color: colors.secondary }} />
              Unidades do Projeto
              <span style={{
                padding: `${spacing[1]} ${spacing[2]}`,
                background: designSystem.helpers.hexToRgba(colors.secondary, 0.1),
                color: colors.secondary,
                borderRadius: radius.md,
                fontSize: typography.fontSize.xs,
                fontWeight: typography.fontWeight.bold,
              }}>
                {projectUnits.length}
              </span>
            </h3>
          </div>

          {isLoadingUnits ? (
            <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[500], textAlign: 'center', padding: spacing[4] }}>
              Carregando unidades...
            </p>
          ) : projectUnits.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: `${spacing[8]} ${spacing[6]}`,
              background: colors.gray[50],
              borderRadius: radius.md,
              border: `1px dashed ${colors.gray[300]}`,
              color: colors.gray[400],
            }}>
              <Home size={36} style={{ color: colors.gray[300], margin: '0 auto', marginBottom: spacing[3], opacity: 0.4 }} />
              <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, color: colors.gray[500], marginBottom: spacing[1] }}>
                Nenhuma unidade associada a este projeto
              </p>
              <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[400] }}>
                Crie unidades na tab &quot;Unidades&quot; e selecione este projeto
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
              {projectUnits.map((unit) => {
                const unitStatusColor =
                  unit.status === 'available' ? colors.success :
                  unit.status === 'reserved' ? colors.warning : colors.gray[500];
                const unitStatusLabel =
                  unit.status === 'available' ? 'Disponível' :
                  unit.status === 'reserved' ? 'Reservado' : 'Vendido';

                return (
                  <div
                    key={unit.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[3],
                      padding: `${spacing[3]} ${spacing[4]}`,
                      background: colors.gray[50],
                      borderRadius: radius.md,
                      border: `1px solid ${colors.gray[200]}`,
                    }}
                  >
                    {/* Typology badge */}
                    <span style={{
                      padding: `${spacing[1]} ${spacing[2]}`,
                      background: designSystem.helpers.hexToRgba(colors.primary, 0.1),
                      color: colors.primary,
                      borderRadius: radius.sm,
                      fontSize: typography.fontSize.xs,
                      fontWeight: typography.fontWeight.bold,
                      minWidth: '32px',
                      textAlign: 'center',
                    }}>
                      {unit.typology || '\u2014'}
                    </span>

                    {/* Title & floor */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.semibold,
                        color: colors.gray[900],
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {unit.title}
                      </p>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500] }}>
                        {unit.floor}{unit.grossArea ? ` \u00b7 ${unit.grossArea} m\u00b2` : ''}
                        {unit.bedrooms > 0 ? ` \u00b7 ${unit.bedrooms} qto${unit.bedrooms > 1 ? 's' : ''}` : ''}
                      </p>
                    </div>

                    {/* Price */}
                    <span style={{
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.primary,
                      whiteSpace: 'nowrap',
                    }}>
                      {unit.priceLabel || '\u2014'}
                    </span>

                    {/* Status */}
                    <span style={{
                      padding: `${spacing[1]} ${spacing[2]}`,
                      background: designSystem.helpers.hexToRgba(unitStatusColor, 0.1),
                      color: unitStatusColor,
                      borderRadius: radius.full,
                      fontSize: '10px',
                      fontWeight: typography.fontWeight.bold,
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}>
                      {unitStatusLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Map tab key to render function
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'geral': return renderTabGeral();
      case 'caracteristicas': return renderTabCaracteristicas();
      case 'localizacao': return renderTabLocalizacao();
      case 'precos': return renderTabPrecos();
      case 'media': return renderTabMedia();
      case 'seo': return renderTabSEO();
      case 'links': return renderTabLinks();
      default: return renderTabGeral();
    }
  };

  // ---------------------------------------------------------------------------
  // Main render
  // ---------------------------------------------------------------------------

  return (
    <div>
      {/* Header with Add Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: spacing[6],
        }}
      >
        <div>
          <h2
            style={{
              fontSize: typography.fontSize['2xl'],
              fontWeight: typography.fontWeight.bold,
              color: colors.gray[900],
              marginBottom: spacing[1],
            }}
          >
            Gestão de Projetos
          </h2>
          <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[500] }}>
            {projects.length} projeto{projects.length !== 1 ? 's' : ''} no portfólio
          </p>
        </div>

        <AnimatedButton
          onClick={() => handleOpenModal()}
          disabled={isLoading}
          variant="primary"
          icon={Plus}
          aria-label="Adicionar novo projeto"
        >
          Novo Projeto
        </AnimatedButton>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            textAlign: 'center',
            padding: `${spacing[16]} ${spacing[8]}`,
            color: colors.gray[400],
          }}
        >
          <Building2 size={48} style={{ margin: '0 auto', marginBottom: spacing[4], opacity: 0.4 }} aria-hidden="true" />
          <p
            style={{
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.semibold,
              color: colors.gray[500],
              marginBottom: spacing[2],
            }}
          >
            Nenhum projeto cadastrado
          </p>
          <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[400], marginBottom: spacing[6] }}>
            Comece adicionando um novo projeto ao portfólio
          </p>
          <AnimatedButton onClick={() => handleOpenModal()} variant="primary" icon={Plus}>
            Adicionar Projeto
          </AnimatedButton>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: spacing[6],
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: colors.white,
                borderRadius: radius.lg,
                overflow: 'hidden',
                border: `1px solid ${colors.gray[200]}`,
                transition: 'all 0.2s ease',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.md;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = colors.gray[300];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = colors.gray[200];
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Status Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: spacing[3],
                    left: spacing[3],
                    padding: `${spacing[1]} ${spacing[3]}`,
                    background: designSystem.helpers.hexToRgba(getStatusColor(project.status), 0.95),
                    color: colors.white,
                    borderRadius: radius.full,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.semibold,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.statusLabel}
                </div>

                {/* Strategy Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: spacing[3],
                    right: spacing[3],
                    padding: `${spacing[1]} ${spacing[3]}`,
                    background: designSystem.helpers.hexToRgba(getStrategyColor(project.strategy), 0.95),
                    color: colors.white,
                    borderRadius: radius.full,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.semibold,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {strategyOptions.find(opt => opt.value === project.strategy)?.label || project.strategy}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: spacing[3],
                      left: spacing[3],
                      padding: `${spacing[1]} ${spacing[2]}`,
                      background: designSystem.helpers.hexToRgba(colors.accent, 0.95),
                      color: colors.white,
                      borderRadius: radius.sm,
                      fontSize: '10px',
                      fontWeight: typography.fontWeight.bold,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Destaque
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: spacing[4] }}>
                <h3
                  style={{
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.gray[900],
                    marginBottom: spacing[2],
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {project.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], marginBottom: spacing[3] }}>
                  <MapPin size={14} style={{ color: colors.gray[400] }} aria-hidden="true" />
                  <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[600] }}>
                    {project.location}
                  </span>
                </div>

                {/* Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: spacing[2],
                    marginBottom: spacing[3],
                    padding: spacing[3],
                    background: colors.gray[50],
                    borderRadius: radius.md,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                    <TrendingUp size={16} style={{ color: colors.success }} aria-hidden="true" />
                    <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, color: colors.gray[900] }}>
                      {project.roi}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                    <Maximize size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[600] }}>
                      {project.area}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                    <BedDouble size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[600] }}>
                      {project.bedrooms}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                    <Bath size={16} style={{ color: colors.gray[400] }} aria-hidden="true" />
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.gray[600] }}>
                      {project.bathrooms}
                    </span>
                  </div>
                </div>

                {/* Additional Info */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing[2],
                    marginBottom: spacing[3],
                    padding: spacing[3],
                    background: designSystem.helpers.hexToRgba(colors.primary, 0.05),
                    borderRadius: radius.md,
                    borderLeft: `3px solid ${colors.primary}`,
                  }}
                >
                  {project.timeline && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: typography.fontSize.xs, color: colors.gray[600], textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Prazo
                      </span>
                      <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, color: colors.primary }}>
                        {typeof project.timeline === 'string' ? project.timeline : ''}
                      </span>
                    </div>
                  )}
                  {project.investment && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: typography.fontSize.xs, color: colors.gray[600], textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Investimento
                      </span>
                      <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, color: colors.gray[900] }}>
                        {project.investment}
                      </span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div style={{ marginBottom: spacing[3] }}>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.gray[500], marginBottom: spacing[1] }}>
                    Preço de Venda
                  </p>
                  <p style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary }}>
                    {project.price}
                  </p>
                </div>

                {/* Units Count */}
                {(unitsMap[project.id]?.length || 0) > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[2],
                      marginBottom: spacing[3],
                      padding: `${spacing[2]} ${spacing[3]}`,
                      background: designSystem.helpers.hexToRgba(colors.secondary, 0.08),
                      borderRadius: radius.md,
                    }}
                  >
                    <Home size={14} style={{ color: colors.secondary }} aria-hidden="true" />
                    <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold, color: colors.secondary }}>
                      {unitsMap[project.id].length} unidade{unitsMap[project.id].length !== 1 ? 's' : ''}
                    </span>
                    <span style={{ fontSize: typography.fontSize.xs, color: colors.gray[500] }}>
                      {unitsMap[project.id].filter(u => u.status === 'available').length} disponíve{unitsMap[project.id].filter(u => u.status === 'available').length !== 1 ? 'is' : 'l'}
                    </span>
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', gap: spacing[2] }}>
                  <button
                    onClick={() => handleOpenModal(project)}
                    aria-label={`Editar projeto ${project.title}`}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: spacing[2],
                      padding: `${spacing[2]} ${spacing[3]}`,
                      background: colors.gray[100],
                      border: 'none',
                      borderRadius: radius.md,
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.gray[700],
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.gray[200];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.gray[100];
                    }}
                  >
                    <Edit size={16} aria-hidden="true" />
                    Editar
                  </button>

                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={isDeleting}
                    aria-label={`Excluir projeto ${project.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: `${spacing[2]} ${spacing[3]}`,
                      background: designSystem.helpers.hexToRgba(colors.error, 0.1),
                      border: 'none',
                      borderRadius: radius.md,
                      color: colors.error,
                      cursor: isDeleting ? 'not-allowed' : 'pointer',
                      opacity: isDeleting ? 0.6 : 1,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isDeleting) {
                        e.currentTarget.style.background = designSystem.helpers.hexToRgba(colors.error, 0.2);
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = designSystem.helpers.hexToRgba(colors.error, 0.1);
                    }}
                  >
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15,23,42,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: spacing[4],
              backdropFilter: 'blur(4px)',
            }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
              style={{
                background: colors.white,
                borderRadius: radius.xl,
                maxWidth: '960px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: shadows['2xl'],
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: spacing[6],
                  borderBottom: `1px solid ${colors.gray[200]}`,
                  flexShrink: 0,
                }}
              >
                <h2
                  id="modal-title"
                  style={{
                    fontSize: typography.fontSize['2xl'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.gray[900],
                  }}
                >
                  {editingProject ? 'Editar Projeto' : 'Novo Projeto'}
                </h2>

                <button
                  onClick={handleCloseModal}
                  aria-label="Fechar modal"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    border: 'none',
                    background: colors.gray[100],
                    borderRadius: radius.full,
                    color: colors.gray[600],
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.gray[200];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.gray[100];
                  }}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Tab Bar */}
              <div
                style={{
                  display: 'flex',
                  gap: spacing[1],
                  padding: `${spacing[3]} ${spacing[6]}`,
                  borderBottom: `1px solid ${colors.gray[200]}`,
                  overflowX: 'auto',
                  flexShrink: 0,
                  background: colors.gray[50],
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      padding: `${spacing[2]} ${spacing[4]}`,
                      border: 'none',
                      borderRadius: radius.md,
                      fontSize: typography.fontSize.sm,
                      fontWeight: activeTab === tab.key ? typography.fontWeight.semibold : typography.fontWeight.medium,
                      color: activeTab === tab.key ? colors.white : colors.gray[600],
                      background: activeTab === tab.key ? colors.primary : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.key) {
                        e.currentTarget.style.background = colors.gray[200];
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.key) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Modal Body (scrollable) */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  overflow: 'hidden',
                }}
              >
                <div style={{ flex: 1, overflow: 'auto', padding: spacing[6] }}>
                  {renderActiveTab()}
                </div>

                {/* Modal Footer */}
                <div
                  style={{
                    display: 'flex',
                    gap: spacing[3],
                    justifyContent: 'flex-end',
                    padding: spacing[6],
                    borderTop: `1px solid ${colors.gray[200]}`,
                    flexShrink: 0,
                    background: colors.white,
                  }}
                >
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    style={{
                      padding: `${spacing[3]} ${spacing[6]}`,
                      border: `1px solid ${colors.gray[300]}`,
                      borderRadius: radius.md,
                      fontSize: typography.fontSize.base,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.gray[700],
                      background: colors.white,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.gray[50];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.white;
                    }}
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={isSaving}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[2],
                      padding: `${spacing[3]} ${spacing[6]}`,
                      border: 'none',
                      borderRadius: radius.md,
                      fontSize: typography.fontSize.base,
                      fontWeight: typography.fontWeight.semibold,
                      color: colors.white,
                      background: colors.primary,
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      opacity: isSaving ? 0.7 : 1,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSaving) {
                        e.currentTarget.style.background = '#234d6f';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.primary;
                    }}
                  >
                    {isSaving ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                        >
                          <AlertCircle size={18} aria-hidden="true" />
                        </motion.div>
                        Salvando...
                      </>
                    ) : (
                      <>
                        <Save size={18} aria-hidden="true" />
                        {editingProject ? 'Atualizar Projeto' : 'Criar Projeto'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
