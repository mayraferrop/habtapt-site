'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { colors, shadows } from '@/components/design-system';
import {
  MapPin, BedDouble, Bath, Maximize, Building2,
  Search, SlidersHorizontal, X,
} from '@/components/icons';
import type { Project, ListingType } from '@/types/project';

// ── Helpers ──

function formatPrice(value: number | null | undefined): string {
  if (!value) return '';
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
}

function getListingBadge(type?: string): { label: string; color: string; bg: string } {
  switch (type) {
    case 'venda':
      return { label: 'Venda', color: colors.brand.primary, bg: `${colors.brand.primary}12` };
    case 'arrendamento':
      return { label: 'Arrendamento', color: colors.brand.secondary, bg: `${colors.brand.secondary}15` };
    case 'venda_e_arrendamento':
      return { label: 'Venda / Arrendamento', color: colors.brand.tertiary, bg: `${colors.brand.tertiary}15` };
    default:
      return { label: 'Venda', color: colors.brand.primary, bg: `${colors.brand.primary}12` };
  }
}

function getStatusBadge(status?: string): { label: string; color: string } | null {
  switch (status) {
    case 'available': return { label: 'Disponível', color: colors.semantic.success };
    case 'reserved': return { label: 'Reservado', color: colors.semantic.warning };
    case 'sold': return { label: 'Vendido', color: colors.semantic.error };
    case 'rented': return { label: 'Arrendado', color: colors.semantic.info };
    default: return null;
  }
}

function getPropertyTypeLabel(type?: string): string {
  const map: Record<string, string> = {
    apartamento: 'Apartamento',
    moradia: 'Moradia',
    predio: 'Prédio',
    terreno: 'Terreno',
    loja: 'Loja',
    escritorio: 'Escritório',
    armazem: 'Armazém',
  };
  return map[type || ''] || '';
}

// ── Property Card ──

function PropertyCard({ property }: { property: Project }) {
  const p = property;
  const listingBadge = getListingBadge(p.listingType);
  const statusBadge = getStatusBadge(p.status);

  const displayPrice = (() => {
    if (p.priceOnRequest) return 'Preço sob consulta';
    if (p.salePriceNumeric && (p.listingType === 'venda' || p.listingType === 'venda_e_arrendamento')) {
      return formatPrice(p.salePriceNumeric);
    }
    if (p.rentMonthly && (p.listingType === 'arrendamento' || p.listingType === 'venda_e_arrendamento')) {
      return `${formatPrice(p.rentMonthly)}/mês`;
    }
    if (p.price) return p.price;
    return 'Consultar';
  })();

  return (
    <Link href={`/imoveis/${p.slug}`} className="block group">
      <motion.div
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-all"
        style={{
          background: '#fff',
          border: `1px solid ${colors.neutral[200]}`,
          boxShadow: shadows.sm,
        }}
        whileHover={{ y: -4, boxShadow: shadows.xl }}
        transition={{ duration: 0.25 }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: colors.neutral[100] }}>
              <Building2 size={48} style={{ color: colors.neutral[400] }} />
            </div>
          )}

          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: listingBadge.bg, color: listingBadge.color, backdropFilter: 'blur(4px)' }}
            >
              {listingBadge.label}
            </span>
            {statusBadge && (
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: `${statusBadge.color}15`, color: statusBadge.color }}
              >
                {statusBadge.label}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-1 line-clamp-2" style={{ color: colors.brand.primary }}>
            {p.title}
          </h3>

          {p.location && (
            <div className="flex items-center gap-1.5 text-sm mb-3" style={{ color: colors.neutral[600] }}>
              <MapPin size={14} style={{ color: colors.brand.secondary }} />
              {p.location}
            </div>
          )}

          {/* Price */}
          <div className="text-lg font-bold mb-3" style={{ color: colors.brand.primary }}>
            {displayPrice}
          </div>

          {/* Metrics */}
          <div className="mt-auto flex items-center gap-4 pt-3" style={{ borderTop: `1px solid ${colors.neutral[200]}` }}>
            {(p.grossAreaM2 || p.area) && (
              <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.neutral[600] }}>
                <Maximize size={14} style={{ color: colors.brand.secondary }} />
                {p.grossAreaM2 ? `${p.grossAreaM2} m²` : p.area}
              </div>
            )}
            {p.bedrooms != null && p.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.neutral[600] }}>
                <BedDouble size={14} style={{ color: colors.brand.secondary }} />
                {p.bedrooms}
              </div>
            )}
            {p.bathrooms != null && p.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.neutral[600] }}>
                <Bath size={14} style={{ color: colors.brand.secondary }} />
                {p.bathrooms}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ── Filters ──

type FilterState = {
  listingType: 'todos' | ListingType;
  propertyType: string;
  location: string;
  priceMin: string;
  priceMax: string;
};

// ── Main Component ──

export default function PropertyListContent({ properties }: { properties: Project[] }) {
  const [filters, setFilters] = useState<FilterState>({
    listingType: 'todos',
    propertyType: '',
    location: '',
    priceMin: '',
    priceMax: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique property types from data
  const propertyTypes = useMemo(() => {
    const types = new Set<string>();
    properties.forEach((p) => {
      if (p.propertyType) types.add(p.propertyType);
    });
    return Array.from(types).sort();
  }, [properties]);

  // Filter properties
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      // Listing type
      if (filters.listingType !== 'todos') {
        if (filters.listingType === 'venda' && p.listingType !== 'venda' && p.listingType !== 'venda_e_arrendamento') return false;
        if (filters.listingType === 'arrendamento' && p.listingType !== 'arrendamento' && p.listingType !== 'venda_e_arrendamento') return false;
      }

      // Property type
      if (filters.propertyType && p.propertyType !== filters.propertyType) return false;

      // Location
      if (filters.location) {
        const loc = filters.location.toLowerCase();
        const match = (p.location || '').toLowerCase().includes(loc)
          || (p.district || '').toLowerCase().includes(loc)
          || (p.municipality || '').toLowerCase().includes(loc)
          || (p.parish || '').toLowerCase().includes(loc);
        if (!match) return false;
      }

      // Price range
      const priceMin = Number(filters.priceMin) || 0;
      const priceMax = Number(filters.priceMax) || Infinity;
      if (priceMin > 0 || priceMax < Infinity) {
        const pPrice = p.salePriceNumeric || p.rentMonthly || 0;
        if (pPrice < priceMin || pPrice > priceMax) return false;
      }

      return true;
    });
  }, [properties, filters]);

  const hasActiveFilters = filters.listingType !== 'todos' || filters.propertyType || filters.location || filters.priceMin || filters.priceMax;

  const clearFilters = () => {
    setFilters({ listingType: 'todos', propertyType: '', location: '', priceMin: '', priceMax: '' });
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.625rem 0.875rem',
    borderRadius: '0.75rem',
    border: `1px solid ${colors.neutral[300]}`,
    background: '#fff',
    fontSize: '0.875rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '4rem', minHeight: '80vh', background: colors.neutral[50] }}>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: colors.brand.primary }}>
            Imóveis <span style={{ color: colors.brand.secondary }}>HABTA</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.neutral[600] }}>
            Encontre o seu imóvel ideal entre a nossa seleção de propriedades premium
          </p>
        </motion.div>

        {/* Listing type tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {([
            { key: 'todos', label: 'Todos' },
            { key: 'venda', label: 'Comprar' },
            { key: 'arrendamento', label: 'Arrendar' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilters({ ...filters, listingType: key })}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: filters.listingType === key ? colors.brand.primary : '#fff',
                color: filters.listingType === key ? '#fff' : colors.brand.primary,
                border: `1px solid ${filters.listingType === key ? colors.brand.primary : colors.neutral[300]}`,
                boxShadow: filters.listingType === key ? shadows.md : 'none',
              }}
            >
              {label}
            </button>
          ))}

          {/* Toggle filters */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all ml-2"
            style={{
              background: showFilters ? `${colors.brand.secondary}15` : '#fff',
              color: colors.brand.primary,
              border: `1px solid ${showFilters ? colors.brand.secondary : colors.neutral[300]}`,
            }}
          >
            <SlidersHorizontal size={16} />
            Filtros
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all"
              style={{ color: colors.semantic.error }}
            >
              <X size={14} />
              Limpar
            </button>
          )}
        </motion.div>

        {/* Expanded filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{
              background: '#fff',
              border: `1px solid ${colors.neutral[200]}`,
              boxShadow: shadows.sm,
            }}
          >
            {/* Property type */}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.neutral[600] }}>Tipo de imóvel</label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                style={inputStyle}
              >
                <option value="">Todos os tipos</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{getPropertyTypeLabel(t)}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.neutral[600] }}>Zona</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: colors.neutral[400] }} />
                <input
                  type="text"
                  placeholder="Lisboa, Porto..."
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  style={{ ...inputStyle, paddingLeft: '2.25rem' }}
                />
              </div>
            </div>

            {/* Price min */}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.neutral[600] }}>Preço mínimo</label>
              <input
                type="number"
                placeholder="0"
                value={filters.priceMin}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Price max */}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: colors.neutral[600] }}>Preço máximo</label>
              <input
                type="number"
                placeholder="Sem limite"
                value={filters.priceMax}
                onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                style={inputStyle}
              />
            </div>
          </motion.div>
        )}

        {/* Results count */}
        <div className="mb-6 text-sm font-medium" style={{ color: colors.neutral[600] }}>
          {filtered.length} {filtered.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Building2 size={48} className="mx-auto mb-4" style={{ color: colors.neutral[400] }} />
            <h3 className="text-lg font-semibold mb-2" style={{ color: colors.brand.primary }}>Nenhum imóvel encontrado</h3>
            <p className="text-sm" style={{ color: colors.neutral[600] }}>
              Tente ajustar os seus filtros ou contacte-nos para encontrarmos o imóvel ideal para si.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{ background: colors.brand.primary, color: '#fff' }}
              >
                Limpar filtros
              </button>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
