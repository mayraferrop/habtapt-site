'use client';

import React, { useState, useCallback, useRef, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/Container';
import { designSystem, colors, shadows } from '@/components/design-system';
import Link from 'next/link';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Maximize,
  Building2, Thermometer, Car, Trees, Waves,
  ChevronLeft, ChevronRight, Phone, Mail, Send, User,
  Flame, Sofa, Box, Wind, Sun, Fence, Zap,
  Play, Eye,
} from 'lucide-react';
import { toast } from 'sonner';
import type { Project } from '@/types/project';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xrgcrvhmzoxfduhytzhk.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const FUNCTION_PATH = 'functions/v1/make-server-4b2936bc';

// ── Helpers ──

function formatPrice(value: number | null | undefined): string {
  if (!value) return '';
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
}

function getListingTypeLabel(type?: string): string {
  switch (type) {
    case 'venda': return 'Venda';
    case 'arrendamento': return 'Arrendamento';
    case 'venda_e_arrendamento': return 'Venda e Arrendamento';
    default: return 'Venda';
  }
}

function getStatusLabel(status?: string): string {
  switch (status) {
    case 'available': return 'Disponível';
    case 'reserved': return 'Reservado';
    case 'sold': return 'Vendido';
    case 'rented': return 'Arrendado';
    default: return '';
  }
}

function getStatusColor(status?: string): string {
  switch (status) {
    case 'available': return colors.semantic.success;
    case 'reserved': return colors.semantic.warning;
    case 'sold': return colors.semantic.error;
    case 'rented': return colors.semantic.info;
    default: return colors.neutral[600];
  }
}

function getPropertyTypeLabel(type?: string): string {
  switch (type) {
    case 'apartamento': return 'Apartamento';
    case 'moradia': return 'Moradia';
    case 'predio': return 'Prédio';
    case 'terreno': return 'Terreno';
    case 'loja': return 'Loja';
    case 'escritorio': return 'Escritório';
    case 'armazem': return 'Armazém';
    default: return type || '';
  }
}

function getConditionLabel(condition?: string): string {
  switch (condition) {
    case 'novo': return 'Novo';
    case 'remodelado': return 'Remodelado';
    case 'bom': return 'Bom estado';
    case 'usado': return 'Usado';
    case 'para_renovar': return 'Para renovar';
    case 'ruina': return 'Ruína';
    default: return condition || '';
  }
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  return null;
}

function getVimeoEmbedUrl(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (match) return `https://player.vimeo.com/video/${match[1]}`;
  return null;
}

// ── Fade-in section wrapper ──

function FadeInSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Image Gallery ──

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((idx: number) => {
    setActiveIndex((idx + images.length) % images.length);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div
        className="w-full rounded-2xl flex items-center justify-center"
        style={{ aspectRatio: '16/9', background: colors.neutral[100] }}
      >
        <Building2 size={64} style={{ color: colors.neutral[400] }} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={images[activeIndex]}
          alt={`${title} - Imagem ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.85)', boxShadow: shadows.md }}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={20} style={{ color: colors.brand.primary }} />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.85)', boxShadow: shadows.md }}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={20} style={{ color: colors.brand.primary }} />
            </button>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-sm font-medium" style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="shrink-0 rounded-lg overflow-hidden transition-all"
              style={{
                width: 80,
                height: 60,
                border: idx === activeIndex ? `2px solid ${colors.brand.accent}` : `2px solid transparent`,
                opacity: idx === activeIndex ? 1 : 0.6,
              }}
            >
              <img src={img} alt={`${title} - Miniatura ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Contact Form ──

function PropertyContactForm({ propertyId, propertyTitle }: { propertyId: string; propertyTitle: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/${FUNCTION_PATH}/contact`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: 'Imóvel',
          message: form.message,
          propertyId,
          propertyTitle,
          origin: 'landing-imovel',
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(data.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: `1px solid ${colors.neutral[300]}`,
    background: colors.neutral[50],
    fontSize: '0.9375rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: colors.neutral[500] }} />
          <input
            type="text"
            placeholder="Nome completo"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ ...inputStyle, paddingLeft: '2.5rem' }}
            required
          />
        </div>
        <div className="relative">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: colors.neutral[500] }} />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ ...inputStyle, paddingLeft: '2.5rem' }}
            required
          />
        </div>
      </div>
      <div className="relative">
        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: colors.neutral[500] }} />
        <input
          type="tel"
          placeholder="Telefone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ ...inputStyle, paddingLeft: '2.5rem' }}
          required
        />
      </div>
      <textarea
        placeholder={`Tenho interesse neste imóvel: ${propertyTitle}. Gostaria de obter mais informações.`}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={4}
        style={{ ...inputStyle, resize: 'vertical' }}
        required
      />
      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
        style={{
          background: colors.gradients.primary,
          boxShadow: shadows.md,
          opacity: sending ? 0.7 : 1,
          cursor: sending ? 'not-allowed' : 'pointer',
        }}
      >
        <Send size={18} />
        {sending ? 'A enviar...' : 'Enviar mensagem'}
      </button>
    </form>
  );
}

// ── Main Component ──

export default function PropertyDetailContent({ property }: { property: Project }) {
  const p = property;

  // Build images array
  const allImages: string[] = [];
  if (p.image) allImages.push(p.image);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pAny = p as any;
  if (Array.isArray(pAny.images)) {
    for (const img of pAny.images as string[]) {
      if (img && !allImages.includes(img)) allImages.push(img);
    }
  }

  // Amenities
  const amenities: { label: string; icon: React.ReactNode; value: boolean }[] = [
    { label: 'Elevador', icon: <Building2 size={16} />, value: !!p.hasElevator },
    { label: 'Estacionamento', icon: <Car size={16} />, value: !!p.hasParking },
    { label: 'Garagem', icon: <Car size={16} />, value: !!p.hasGarage },
    { label: 'Piscina', icon: <Waves size={16} />, value: !!p.hasPool },
    { label: 'Jardim', icon: <Trees size={16} />, value: !!p.hasGarden },
    { label: 'Terraço', icon: <Sun size={16} />, value: !!p.hasTerrace },
    { label: 'Varanda', icon: <Fence size={16} />, value: !!p.hasBalcony },
    { label: 'Arrecadação', icon: <Box size={16} />, value: !!p.hasStorage },
    { label: 'Ar condicionado', icon: <Wind size={16} />, value: !!p.hasAirConditioning },
    { label: 'Aquecimento central', icon: <Thermometer size={16} />, value: !!p.hasCentralHeating },
    { label: 'Lareira', icon: <Flame size={16} />, value: !!p.hasFireplace },
    { label: 'Mobilado', icon: <Sofa size={16} />, value: !!p.isFurnished },
  ];
  const activeAmenities = amenities.filter((a) => a.value);

  // Characteristics grid
  const characteristics: { label: string; value: string; icon: React.ReactNode }[] = [];
  if (p.propertyType) {
    characteristics.push({ label: 'Tipo', value: getPropertyTypeLabel(p.propertyType), icon: <Building2 size={18} /> });
  }
  if (p.typology) {
    characteristics.push({ label: 'Tipologia', value: p.typology, icon: <BedDouble size={18} /> });
  }
  if (p.grossAreaM2) {
    characteristics.push({ label: 'Área bruta', value: `${p.grossAreaM2} m²`, icon: <Maximize size={18} /> });
  }
  if (p.netAreaM2) {
    characteristics.push({ label: 'Área útil', value: `${p.netAreaM2} m²`, icon: <Maximize size={18} /> });
  }
  if (p.bedrooms) {
    characteristics.push({ label: 'Quartos', value: String(p.bedrooms), icon: <BedDouble size={18} /> });
  }
  if (p.bathrooms) {
    characteristics.push({ label: 'Casas de banho', value: String(p.bathrooms), icon: <Bath size={18} /> });
  }
  if (p.floor != null) {
    characteristics.push({ label: 'Andar', value: `${p.floor}${p.totalFloors ? ` / ${p.totalFloors}` : ''}`, icon: <Building2 size={18} /> });
  }
  if (p.constructionYear) {
    characteristics.push({ label: 'Ano de construção', value: String(p.constructionYear), icon: <Building2 size={18} /> });
  }
  if (p.energyCertificate) {
    characteristics.push({ label: 'Certificado energético', value: p.energyCertificate, icon: <Zap size={18} /> });
  }
  if (p.condition) {
    characteristics.push({ label: 'Estado', value: getConditionLabel(p.condition), icon: <Building2 size={18} /> });
  }
  if (p.parkingSpaces) {
    characteristics.push({ label: 'Lugares de estacionamento', value: String(p.parkingSpaces), icon: <Car size={18} /> });
  }
  if (p.landAreaM2) {
    characteristics.push({ label: 'Área do terreno', value: `${p.landAreaM2} m²`, icon: <Maximize size={18} /> });
  }

  // Video embed
  let videoEmbed: React.ReactNode = null;
  if (p.videoUrl) {
    const ytUrl = getYouTubeEmbedUrl(p.videoUrl);
    const vimeoUrl = getVimeoEmbedUrl(p.videoUrl);
    if (ytUrl || vimeoUrl) {
      videoEmbed = (
        <iframe
          src={ytUrl || vimeoUrl || ''}
          className="w-full rounded-xl"
          style={{ aspectRatio: '16/9', border: 'none' }}
          allowFullScreen
          loading="lazy"
          title="Vídeo do imóvel"
        />
      );
    } else {
      videoEmbed = (
        <video
          src={p.videoUrl}
          controls
          className="w-full rounded-xl"
          style={{ aspectRatio: '16/9' }}
          preload="metadata"
        />
      );
    }
  }

  // Price display
  const showSalePrice = p.salePriceNumeric && (p.listingType === 'venda' || p.listingType === 'venda_e_arrendamento');
  const showRentPrice = p.rentMonthly && (p.listingType === 'arrendamento' || p.listingType === 'venda_e_arrendamento');

  return (
    <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: colors.neutral[50] }}>
      <Container>
        {/* Back link */}
        <FadeInSection>
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: colors.brand.primary }}
          >
            <ArrowLeft size={16} />
            Voltar aos imóveis
          </Link>
        </FadeInSection>

        {/* Top section: Gallery + Price Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery - 2 columns */}
          <FadeInSection className="lg:col-span-2">
            <ImageGallery images={allImages} title={p.title} />
          </FadeInSection>

          {/* Price card - 1 column */}
          <FadeInSection delay={0.1}>
            <div
              className="rounded-2xl p-6 sticky top-28"
              style={{
                background: '#fff',
                border: `1px solid ${colors.neutral[200]}`,
                boxShadow: shadows.lg,
              }}
            >
              {/* Status badge */}
              {p.status && getStatusLabel(p.status) && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: `${getStatusColor(p.status)}15`, color: getStatusColor(p.status) }}
                >
                  {getStatusLabel(p.status)}
                </span>
              )}

              {/* Listing type */}
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: colors.brand.secondary, letterSpacing: '0.08em' }}
              >
                {getListingTypeLabel(p.listingType)}
              </div>

              {/* Prices */}
              {p.priceOnRequest ? (
                <div className="text-xl font-bold mb-4" style={{ color: colors.brand.primary }}>
                  Preço sob consulta
                </div>
              ) : (
                <div className="space-y-1 mb-4">
                  {showSalePrice && (
                    <div className="text-2xl font-bold" style={{ color: colors.brand.primary }}>
                      {formatPrice(p.salePriceNumeric)}
                    </div>
                  )}
                  {showRentPrice && (
                    <div className={showSalePrice ? 'text-lg font-semibold' : 'text-2xl font-bold'} style={{ color: showSalePrice ? colors.brand.secondary : colors.brand.primary }}>
                      {formatPrice(p.rentMonthly)}<span className="text-sm font-normal" style={{ color: colors.neutral[600] }}>/mês</span>
                    </div>
                  )}
                  {!showSalePrice && !showRentPrice && p.price && (
                    <div className="text-2xl font-bold" style={{ color: colors.brand.primary }}>
                      {p.price}
                    </div>
                  )}
                </div>
              )}

              {/* Key metrics */}
              <div
                className="grid grid-cols-3 gap-3 py-4 mb-4"
                style={{ borderTop: `1px solid ${colors.neutral[200]}`, borderBottom: `1px solid ${colors.neutral[200]}` }}
              >
                {(p.grossAreaM2 || p.area) && (
                  <div className="text-center">
                    <Maximize size={18} className="mx-auto mb-1" style={{ color: colors.brand.secondary }} />
                    <div className="text-sm font-semibold" style={{ color: colors.brand.primary }}>
                      {p.grossAreaM2 ? `${p.grossAreaM2} m²` : p.area}
                    </div>
                    <div className="text-xs" style={{ color: colors.neutral[600] }}>Área</div>
                  </div>
                )}
                {p.bedrooms != null && p.bedrooms > 0 && (
                  <div className="text-center">
                    <BedDouble size={18} className="mx-auto mb-1" style={{ color: colors.brand.secondary }} />
                    <div className="text-sm font-semibold" style={{ color: colors.brand.primary }}>{p.bedrooms}</div>
                    <div className="text-xs" style={{ color: colors.neutral[600] }}>Quartos</div>
                  </div>
                )}
                {p.bathrooms != null && p.bathrooms > 0 && (
                  <div className="text-center">
                    <Bath size={18} className="mx-auto mb-1" style={{ color: colors.brand.secondary }} />
                    <div className="text-sm font-semibold" style={{ color: colors.brand.primary }}>{p.bathrooms}</div>
                    <div className="text-xs" style={{ color: colors.neutral[600] }}>WCs</div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href="#contacto-imovel"
                className="block w-full text-center py-3 px-6 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: colors.gradients.primary, boxShadow: shadows.md }}
              >
                Contactar sobre este imóvel
              </a>

              {/* WhatsApp shortcut */}
              <a
                href={`https://wa.me/351910000000?text=${encodeURIComponent(`Olá! Tenho interesse no imóvel: ${p.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-xl font-semibold mt-3 transition-all hover:-translate-y-0.5"
                style={{
                  background: '#25D36612',
                  color: '#128C7E',
                  border: '1px solid #25D36630',
                }}
              >
                <Phone size={16} className="inline mr-2" />
                WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Title and location */}
        <FadeInSection className="mt-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: colors.brand.primary }}>
            {p.title}
          </h1>
          {p.location && (
            <div className="flex items-center gap-2 text-base" style={{ color: colors.neutral[600] }}>
              <MapPin size={18} style={{ color: colors.brand.secondary }} />
              {p.location}
              {p.district && p.district !== p.location && `, ${p.district}`}
            </div>
          )}
        </FadeInSection>

        {/* Description */}
        {(p.description || p.shortDescription) && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.brand.primary }}>Descrição</h2>
              <div
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ color: colors.neutral[700] }}
              >
                {p.description || p.shortDescription}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Characteristics */}
        {characteristics.length > 0 && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: colors.brand.primary }}>Características</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {characteristics.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: colors.neutral[50], border: `1px solid ${colors.neutral[200]}` }}
                  >
                    <div className="shrink-0" style={{ color: colors.brand.secondary }}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: colors.neutral[600] }}>{c.label}</div>
                      <div className="text-sm font-semibold" style={{ color: colors.brand.primary }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Amenities */}
        {activeAmenities.length > 0 && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: colors.brand.primary }}>Comodidades</h2>
              <div className="flex flex-wrap gap-3">
                {activeAmenities.map((a, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `${colors.brand.secondary}10`,
                      color: colors.brand.primary,
                      border: `1px solid ${colors.brand.secondary}25`,
                    }}
                  >
                    <span style={{ color: colors.brand.secondary }}>{a.icon}</span>
                    {a.label}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Video */}
        {videoEmbed && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.brand.primary }}>
                <Play size={20} style={{ color: colors.brand.secondary }} />
                Vídeo
              </h2>
              {videoEmbed}
            </div>
          </FadeInSection>
        )}

        {/* Virtual tour */}
        {p.virtualTourUrl && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.brand.primary }}>
                <Eye size={20} style={{ color: colors.brand.secondary }} />
                Tour Virtual
              </h2>
              <iframe
                src={p.virtualTourUrl}
                className="w-full rounded-xl"
                style={{ aspectRatio: '16/9', border: 'none' }}
                allowFullScreen
                loading="lazy"
                title="Tour virtual do imóvel"
              />
            </div>
          </FadeInSection>
        )}

        {/* Floor plan */}
        {(p.floorPlanUrl || (p.floorPlanImages && p.floorPlanImages.length > 0)) && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.brand.primary }}>Planta</h2>
              <div className="space-y-4">
                {p.floorPlanUrl && (
                  <img src={p.floorPlanUrl} alt="Planta do imóvel" className="w-full max-w-2xl mx-auto rounded-xl" loading="lazy" />
                )}
                {p.floorPlanImages?.map((img, i) => (
                  <img key={i} src={img} alt={`Planta ${i + 1}`} className="w-full max-w-2xl mx-auto rounded-xl" loading="lazy" />
                ))}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Before / After */}
        {p.beforeImages && p.afterImages && p.beforeImages.length > 0 && p.afterImages.length > 0 && (
          <FadeInSection className="mt-8">
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{ background: '#fff', border: `1px solid ${colors.neutral[200]}`, boxShadow: shadows.sm }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: colors.brand.primary }}>Antes / Depois</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: colors.neutral[600] }}>Antes</h3>
                  <div className="space-y-3">
                    {p.beforeImages.map((img, i) => (
                      <img key={i} src={img} alt={`Antes ${i + 1}`} className="w-full rounded-xl" loading="lazy" />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: colors.brand.secondary }}>Depois</h3>
                  <div className="space-y-3">
                    {p.afterImages.map((img, i) => (
                      <img key={i} src={img} alt={`Depois ${i + 1}`} className="w-full rounded-xl" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Contact form */}
        <FadeInSection className="mt-8" delay={0.1}>
          <div
            id="contacto-imovel"
            className="rounded-2xl p-6 lg:p-8 scroll-mt-28"
            style={{
              background: '#fff',
              border: `1px solid ${colors.neutral[200]}`,
              boxShadow: shadows.lg,
            }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: colors.brand.primary }}>Interessado neste imóvel?</h2>
            <p className="text-sm mb-6" style={{ color: colors.neutral[600] }}>
              Deixe os seus dados e entraremos em contacto consigo.
            </p>
            <PropertyContactForm propertyId={p.id} propertyTitle={p.title} />
          </div>
        </FadeInSection>
      </Container>
    </div>
  );
}
