'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { motion } from 'motion/react';
import { useInView } from '@/components/useInView';
import { designSystem } from '@/components/design-system';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, Building2, Leaf, CheckCircle, ChevronRight,
} from '@/components/icons';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { supabaseFetch } from '@/utils/supabase/client';
import { projectsCache, CACHE_KEYS } from '@/utils/projectsCache';
import { InsightDetailSkeleton } from '@/components/primitives/InsightDetailSkeleton';
import { NewsletterModal } from '@/components/NewsletterModal';

interface ContentBlock {
  type: 'heading2' | 'heading3' | 'paragraph' | 'list' | 'callout' | 'quote' | 'table';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  source?: { name: string; role?: string; url?: string };
}

interface TrustSignals {
  projectsReviewed?: number;
  yearsExperience?: number;
  geoScope?: string;
  lastReviewed?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface Insight {
  id: string;
  title: string;
  description?: string;
  category: string;
  readTime: string;
  icon?: string;
  iconColor?: string;
  gradient?: string;
  author: string;
  authorRole: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  content?: string | ContentBlock[];
  contentBlocks?: ContentBlock[];
  tldr?: string[];
  trustSignals?: TrustSignals;
  faq?: FaqItem[];
  disclaimer?: string;
  relatedInsights?: string[];
}

const categoryConfig = {
  Investimento: {
    name: 'Investimento',
    icon: TrendingUp,
    color: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.primary,
  },
  Regulamentação: {
    name: 'Regulamentação',
    icon: Building2,
    color: designSystem.colors.brand.accent,
    gradient: designSystem.colors.gradients.accent,
  },
  Sustentabilidade: {
    name: 'Sustentabilidade',
    icon: Leaf,
    color: designSystem.colors.brand.secondary,
    gradient: designSystem.colors.gradients.secondary,
  },
};

interface InsightDetailContentProps {
  insight?: Insight | null;
  relatedInsights?: Insight[];
}

export default function InsightDetailContent({ insight: serverInsight, relatedInsights: serverRelated }: InsightDetailContentProps) {
  const params = useParams();
  const router = useRouter();
  const id = serverInsight?.id || (params.id as string);
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const hasServerData = serverInsight !== undefined;
  const [insight, setInsight] = useState<Insight | null>(serverInsight ?? null);
  const [relatedInsights, setRelatedInsights] = useState<Insight[]>(serverRelated ?? []);
  const [isLoading, setIsLoading] = useState(!hasServerData);
  const [isMobile, setIsMobile] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    if (hasServerData) return;
    const fetchInsight = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }

      const cached = projectsCache.get<Insight>(CACHE_KEYS.INSIGHT_BY_ID(id));
      if (cached) {
        setInsight(cached);
        setIsLoading(false);
        return;
      }

      try {
        const response = await supabaseFetch('/insights');
        if (!response.ok) throw new Error(`Server returned ${response.status}`);

        const data = await response.json();

        if (data && data.success && data.insights) {
          const foundInsight = data.insights.find((i: Insight) => i.id === id);

          if (foundInsight) {
            projectsCache.set(CACHE_KEYS.INSIGHT_BY_ID(id), foundInsight);
          }

          setInsight(foundInsight || null);

          if (foundInsight) {
            const related = data.insights
              .filter((i: Insight) => i.id !== foundInsight.id && i.category === foundInsight.category)
              .slice(0, 3);

            if (related.length < 3) {
              const otherArticles = data.insights
                .filter((i: Insight) => i.id !== foundInsight.id && i.category !== foundInsight.category && !related.some((r: Insight) => r.id === i.id))
                .slice(0, 3 - related.length);
              related.push(...otherArticles);
            }
            setRelatedInsights(related);
          }
        }
      } catch (error) {
        console.error('[InsightDetailPage] Erro:', error);
        setInsight(null);
      }
      setIsLoading(false);
    };
    fetchInsight();
  }, [id, hasServerData]);

  useEffect(() => {
    const mdBreakpoint = parseInt(designSystem.breakpoints.md);
    const checkMobile = () => setIsMobile(window.innerWidth < mdBreakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isLoading) {
    return (
      <Section background="white" style={{ paddingTop: '7.5rem', minHeight: '100vh' }}>
        <Container><InsightDetailSkeleton /></Container>
      </Section>
    );
  }

  if (!insight) {
    return (
      <Section background="white" style={{ paddingTop: '7.5rem', minHeight: '60vh' }}>
        <Container>
          <div className="text-center">
            <h1 style={{ marginBottom: designSystem.spacing[4] }}>Artigo não encontrado</h1>
            <p style={{ fontSize: '1.125rem', color: designSystem.colors.neutral[600], marginBottom: designSystem.spacing[8] }}>
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <motion.button
              onClick={() => router.push('/blog')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: `${designSystem.spacing[3]} ${designSystem.spacing[6]}`, background: designSystem.colors.gradients.primary, color: designSystem.colors.neutral.white, border: 'none', borderRadius: designSystem.borderRadius.lg, cursor: 'pointer', fontWeight: designSystem.typography.fontWeight.semibold }}
            >
              Voltar aos Insights
            </motion.button>
          </div>
        </Container>
      </Section>
    );
  }

  const category = categoryConfig[insight.category as keyof typeof categoryConfig] || categoryConfig.Investimento;
  const CategoryIcon = category?.icon || TrendingUp;

  const handleShare = () => {
    setShowShareModal(true);
    setShareLinkCopied(false);
  };

  const copyShareLink = () => {
    const link = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(() => {
        setShareLinkCopied(true);
        setTimeout(() => setShareLinkCopied(false), 3000);
      }).catch(() => fallbackCopy(link));
    } else {
      fallbackCopy(link);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setShareLinkCopied(true);
      setTimeout(() => setShareLinkCopied(false), 3000);
    } catch (err) { /* ignore */ }
    document.body.removeChild(textArea);
  };

  const slugifyHeading = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 80);

  const extractHeadings = (blocks: ContentBlock[] | undefined) => {
    if (!blocks) return [] as { id: string; text: string }[];
    return blocks
      .filter((b) => b.type === 'heading2' && typeof b.content === 'string')
      .map((b) => ({ id: slugifyHeading(b.content as string), text: b.content as string }));
  };

  const tocHeadings = extractHeadings(insight.contentBlocks);

  const renderContent = () => {
    if (insight.contentBlocks && Array.isArray(insight.contentBlocks)) {
      return renderStructuredContent(insight.contentBlocks);
    }
    if (Array.isArray(insight.content)) {
      return renderStructuredContent(insight.content);
    }
    if (typeof insight.content === 'string' && insight.content) {
      const paragraphs = insight.content.split('\n\n').filter(p => p.trim());
      if (paragraphs.length > 0) {
        return (
          <div style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700] }}>
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: designSystem.spacing[6], textAlign: 'justify' }}>{paragraph}</p>
            ))}
          </div>
        );
      }
    }
    return <p style={{ color: designSystem.colors.neutral[500], fontStyle: 'italic', padding: designSystem.spacing[8], textAlign: 'center' }}>Conteúdo não disponível.</p>;
  };

  const renderStructuredContent = (blocks: ContentBlock[]) => {
    return blocks.map((block, index) => {
      switch (block.type) {
        case 'heading2':
          return <h2 key={index} id={slugifyHeading(block.content as string)} style={{ fontSize: '1.875rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginTop: index === 0 ? '0' : designSystem.spacing[12], marginBottom: designSystem.spacing[4], scrollMarginTop: '100px' }}>{block.content as string}</h2>;
        case 'heading3':
          return <h3 key={index} style={{ fontSize: '1.5rem', fontWeight: designSystem.typography.fontWeight.bold, color: designSystem.colors.brand.primary, marginTop: designSystem.spacing[8], marginBottom: designSystem.spacing[3] }}>{block.content as string}</h3>;
        case 'paragraph':
          return <p key={index} className="insight-prose" style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[6], textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: block.content as string }} />;
        case 'list':
          return (
            <ul key={index} style={{ listStyle: 'none', padding: 0, marginBottom: designSystem.spacing[8] }}>
              {(block.content as string[]).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3" style={{ marginBottom: designSystem.spacing[3] }}>
                  <CheckCircle size={20} style={{ color: category.color, flexShrink: 0, marginTop: '0.25rem' }} />
                  <span className="insight-prose" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: designSystem.colors.neutral[700] }} dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          );
        case 'callout':
          return (
            <div key={index} style={{ padding: designSystem.spacing[6], background: `${category.color}08`, borderLeft: `4px solid ${category.color}`, borderRadius: designSystem.borderRadius.lg, marginBottom: designSystem.spacing[8] }}>
              <p style={{ fontSize: '1.0625rem', color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.medium, margin: 0, fontStyle: 'italic' }}>{block.content as string}</p>
            </div>
          );
        case 'quote':
          return (
            <figure key={index} style={{ margin: `0 0 ${designSystem.spacing[8]} 0`, padding: `${designSystem.spacing[6]} ${designSystem.spacing[8]}`, borderLeft: `4px solid ${category.color}`, background: `${category.color}05`, borderRadius: designSystem.borderRadius.lg }}>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: designSystem.colors.neutral[800], fontStyle: 'italic', marginBottom: designSystem.spacing[3] }}>
                  &ldquo;{block.content as string}&rdquo;
                </p>
              </blockquote>
              {block.source && (
                <figcaption style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[600], fontWeight: designSystem.typography.fontWeight.semibold }}>
                  — {block.source.url ? (
                    <a href={block.source.url} target="_blank" rel="noopener noreferrer" style={{ color: category.color, textDecoration: 'none' }}>{block.source.name}</a>
                  ) : block.source.name}
                  {block.source.role ? `, ${block.source.role}` : ''}
                </figcaption>
              )}
            </figure>
          );
        case 'table': {
          const tableData = block.content as { headers: string[]; rows: string[][] };
          if (!tableData || !Array.isArray(tableData.headers) || !Array.isArray(tableData.rows)) return null;
          return (
            <div key={index} style={{ marginBottom: designSystem.spacing[8], overflowX: 'auto', border: `1px solid ${designSystem.colors.neutral[200]}`, borderRadius: designSystem.borderRadius.lg }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
                <thead>
                  <tr style={{ background: `${category.color}10` }}>
                    {tableData.headers.map((h, i) => (
                      <th key={i} style={{ padding: designSystem.spacing[3], textAlign: 'left', color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.bold, borderBottom: `2px solid ${category.color}30` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, ri) => (
                    <tr key={ri} style={{ borderBottom: `1px solid ${designSystem.colors.neutral[200]}` }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: designSystem.spacing[3], color: designSystem.colors.neutral[700], verticalAlign: 'top' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Section background="white" style={{ paddingTop: '100px', paddingBottom: '0' }}>
        <Container>
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: designSystem.spacing[6], fontSize: '0.875rem', color: designSystem.colors.neutral[600] }}
          >
            <ol className="flex flex-wrap items-center" style={{ gap: designSystem.spacing[2], listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="/" style={{ color: designSystem.colors.neutral[600], textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = designSystem.colors.brand.primary)} onMouseLeave={(e) => (e.currentTarget.style.color = designSystem.colors.neutral[600])}>
                  Início
                </a>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li>
                <a href="/blog" style={{ color: designSystem.colors.neutral[600], textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = designSystem.colors.brand.primary)} onMouseLeave={(e) => (e.currentTarget.style.color = designSystem.colors.neutral[600])}>
                  Insights
                </a>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.semibold, maxWidth: '60ch', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {insight.title}
              </li>
            </ol>
          </motion.nav>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ marginBottom: designSystem.spacing[6] }}>
            <button
              onClick={() => router.push('/blog')}
              className="flex items-center gap-2 group"
              style={{ background: 'transparent', border: 'none', color: designSystem.colors.brand.primary, cursor: 'pointer', padding: `${designSystem.spacing[2]} 0`, fontWeight: designSystem.typography.fontWeight.semibold }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Voltar aos Insights
            </button>
          </motion.div>

          <div ref={sectionRef}>
            <motion.div className="flex flex-wrap items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: designSystem.spacing[6] }}>
              <div className="flex items-center gap-2" style={{ padding: `${designSystem.spacing[2]} ${designSystem.spacing[4]}`, background: category.gradient, color: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius.full, fontWeight: designSystem.typography.fontWeight.semibold, fontSize: '0.875rem' }}>
                <CategoryIcon size={16} />
                {category.name}
              </div>
              {insight.tags?.map((tag, index) => (
                <span key={index} style={{ padding: `${designSystem.spacing[1]} ${designSystem.spacing[3]}`, background: designSystem.colors.neutral[100], color: designSystem.colors.neutral[700], borderRadius: designSystem.borderRadius.full, fontSize: '0.875rem' }}>{tag}</span>
              ))}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ marginBottom: designSystem.spacing[6], color: designSystem.colors.brand.primary }}>
              {insight.title}
            </motion.h1>

            <motion.div className="flex flex-wrap items-center gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginBottom: designSystem.spacing[8], paddingBottom: designSystem.spacing[8], borderBottom: `2px solid ${designSystem.colors.neutral[200]}` }}>
              <div className="flex items-center gap-3">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: category.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: designSystem.colors.neutral.white, fontWeight: designSystem.typography.fontWeight.bold, fontSize: '1.25rem' }}>
                  {insight.author.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: designSystem.typography.fontWeight.semibold, color: designSystem.colors.neutral[900], marginBottom: '0.125rem' }}>{insight.author}</p>
                  <p style={{ fontSize: '0.875rem', color: designSystem.colors.neutral[600] }}>{insight.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1" style={{ color: designSystem.colors.neutral[600] }}>
                <Calendar size={16} />
                <span style={{ fontSize: '0.875rem' }}>{insight.date}</span>
              </div>
              <div className="flex items-center gap-1" style={{ color: designSystem.colors.neutral[600] }}>
                <Clock size={16} />
                <span style={{ fontSize: '0.875rem' }}>{insight.readTime}</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button onClick={handleShare} className="flex items-center gap-2 group" style={{ background: 'transparent', border: 'none', color: designSystem.colors.neutral[600], cursor: 'pointer', padding: designSystem.spacing[2] }}>
                  <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                  <span style={{ fontSize: '0.875rem' }}>Compartilhar</span>
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ marginBottom: designSystem.spacing[12], borderRadius: designSystem.borderRadius['2xl'], overflow: 'hidden', boxShadow: designSystem.shadows.lg }}>
              {insight.image ? (
                <ImageWithFallback src={insight.image} alt={insight.title} width={1600} height={800} style={{ width: '100%', height: isMobile ? '250px' : '500px', objectFit: 'cover' }} loading="eager" fetchPriority="high" />
              ) : (
                <div
                  role="img"
                  aria-label={`${category.name} — ${insight.title}`}
                  style={{
                    width: '100%',
                    height: isMobile ? '250px' : '500px',
                    background: category.gradient,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 60%)' }} />
                  <CategoryIcon size={isMobile ? 160 : 260} style={{ color: 'rgba(255,255,255,0.12)', position: 'absolute', right: '-40px', bottom: '-40px' }} />
                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: designSystem.spacing[8] }}>
                    <CategoryIcon size={isMobile ? 48 : 72} style={{ color: designSystem.colors.neutral.white, marginBottom: designSystem.spacing[4] }} />
                    <p style={{ color: designSystem.colors.neutral.white, textTransform: 'uppercase', letterSpacing: designSystem.typography.letterSpacing.wider, fontSize: designSystem.typography.fontSize.sm, fontWeight: designSystem.typography.fontWeight.semibold, opacity: 0.95 }}>
                      {category.name}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            {insight.trustSignals && (
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.27 }}
                aria-label="Por que confiar neste artigo"
                style={{
                  marginBottom: designSystem.spacing[8],
                  padding: designSystem.spacing[6],
                  background: designSystem.colors.neutral[50],
                  border: `1px solid ${designSystem.colors.neutral[200]}`,
                  borderLeft: `4px solid ${category.color}`,
                  borderRadius: designSystem.borderRadius.lg,
                }}
              >
                <p style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: category.color, fontWeight: designSystem.typography.fontWeight.bold, marginBottom: designSystem.spacing[3] }}>
                  Por que confiar neste artigo
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: designSystem.spacing[2] }}>
                  {insight.trustSignals.yearsExperience ? (
                    <li style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[700] }}>
                      <strong style={{ color: designSystem.colors.brand.primary }}>Experiência:</strong> {insight.trustSignals.yearsExperience}+ anos em reabilitação urbana em Portugal
                    </li>
                  ) : null}
                  {insight.trustSignals.projectsReviewed ? (
                    <li style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[700] }}>
                      <strong style={{ color: designSystem.colors.brand.primary }}>Projetos analisados:</strong> {insight.trustSignals.projectsReviewed}+ casos
                    </li>
                  ) : null}
                  {insight.trustSignals.geoScope ? (
                    <li style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[700] }}>
                      <strong style={{ color: designSystem.colors.brand.primary }}>Âmbito:</strong> {insight.trustSignals.geoScope}
                    </li>
                  ) : null}
                  {insight.trustSignals.lastReviewed ? (
                    <li style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[700] }}>
                      <strong style={{ color: designSystem.colors.brand.primary }}>Última revisão:</strong> {insight.trustSignals.lastReviewed}
                    </li>
                  ) : null}
                </ul>
              </motion.aside>
            )}

            {insight.tldr && insight.tldr.length > 0 && (
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.29 }}
                aria-label="Em resumo"
                style={{
                  marginBottom: designSystem.spacing[10],
                  padding: designSystem.spacing[6],
                  background: `${category.color}0A`,
                  borderRadius: designSystem.borderRadius['2xl'],
                }}
              >
                <p style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: category.color, fontWeight: designSystem.typography.fontWeight.bold, marginBottom: designSystem.spacing[3] }}>
                  Em resumo
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: designSystem.spacing[2] }}>
                  {insight.tldr.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} style={{ color: category.color, flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.aside>
            )}

            {tocHeadings.length >= 3 && (
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.295 }}
                aria-label="Nesta página"
                style={{
                  marginBottom: designSystem.spacing[10],
                  padding: designSystem.spacing[6],
                  background: designSystem.colors.neutral[50],
                  border: `1px solid ${designSystem.colors.neutral[200]}`,
                  borderRadius: designSystem.borderRadius.lg,
                }}
              >
                <p style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: designSystem.colors.neutral[600], fontWeight: designSystem.typography.fontWeight.bold, marginBottom: designSystem.spacing[3] }}>
                  Nesta página
                </p>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: designSystem.spacing[2], counterReset: 'toc' }}>
                  {tocHeadings.map((h) => (
                    <li key={h.id} style={{ counterIncrement: 'toc', paddingLeft: designSystem.spacing[6], position: 'relative' }}>
                      <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, fontSize: '0.8125rem', color: category.color, fontWeight: designSystem.typography.fontWeight.bold, fontVariantNumeric: 'tabular-nums' }}>
                        {String(tocHeadings.indexOf(h) + 1).padStart(2, '0')}
                      </span>
                      <a href={`#${h.id}`} style={{ fontSize: '0.9375rem', color: designSystem.colors.brand.primary, textDecoration: 'none', lineHeight: '1.6' }} onMouseEnter={(e) => (e.currentTarget.style.color = category.color)} onMouseLeave={(e) => (e.currentTarget.style.color = designSystem.colors.brand.primary)}>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </motion.nav>
            )}

            <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              {renderContent()}
            </motion.article>

            {insight.faq && insight.faq.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                aria-label="Perguntas frequentes"
                style={{ marginTop: designSystem.spacing[12] }}
              >
                <h2 style={{ fontSize: '1.875rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[6] }}>
                  Perguntas frequentes
                </h2>
                <div style={{ display: 'grid', gap: designSystem.spacing[4] }}>
                  {insight.faq.map((item, i) => (
                    <details
                      key={i}
                      style={{
                        padding: `${designSystem.spacing[4]} ${designSystem.spacing[5]}`,
                        background: designSystem.colors.neutral[50],
                        border: `1px solid ${designSystem.colors.neutral[200]}`,
                        borderRadius: designSystem.borderRadius.lg,
                      }}
                    >
                      <summary style={{ cursor: 'pointer', fontWeight: designSystem.typography.fontWeight.bold, color: designSystem.colors.brand.primary, fontSize: '1.0625rem', listStyle: 'none' }}>
                        {item.q}
                      </summary>
                      <p style={{ marginTop: designSystem.spacing[3], marginBottom: 0, fontSize: '1rem', lineHeight: '1.7', color: designSystem.colors.neutral[700] }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </motion.section>
            )}

            {insight.disclaimer && (
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  marginTop: designSystem.spacing[10],
                  padding: designSystem.spacing[5],
                  background: designSystem.colors.neutral[50],
                  border: `1px dashed ${designSystem.colors.neutral[300]}`,
                  borderRadius: designSystem.borderRadius.lg,
                }}
              >
                <p style={{ fontSize: '0.875rem', color: designSystem.colors.neutral[600], lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                  <strong style={{ color: designSystem.colors.neutral[700] }}>Aviso:</strong> {insight.disclaimer}
                </p>
              </motion.aside>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ marginTop: designSystem.spacing[12], padding: designSystem.spacing[8], background: designSystem.colors.neutral[50], borderRadius: designSystem.borderRadius['2xl'], textAlign: 'center' }}>
              <h3 style={{ color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>Gostou deste artigo?</h3>
              <p style={{ color: designSystem.colors.neutral[600], marginBottom: designSystem.spacing[6] }}>
                Compartilhe com quem também se interessa por reabilitação urbana e investimento imobiliário.
              </p>
              <div className="flex justify-center gap-4">
                <motion.button onClick={handleShare} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: `${designSystem.spacing[3]} ${designSystem.spacing[6]}`, background: designSystem.colors.gradients.primary, color: designSystem.colors.neutral.white, border: 'none', borderRadius: designSystem.borderRadius.lg, cursor: 'pointer', fontWeight: designSystem.typography.fontWeight.semibold }}>
                  Compartilhar
                </motion.button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center" style={{ marginTop: designSystem.spacing[8] }}>
              <p style={{ color: designSystem.colors.neutral[500], fontSize: designSystem.typography.fontSize.sm }}>
                Gostou do conteúdo?{' '}
                <button
                  onClick={() => setIsNewsletterOpen(true)}
                  style={{ color: designSystem.colors.brand.secondary, fontWeight: designSystem.typography.fontWeight.semibold, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Receba mais insights por email
                </button>
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {relatedInsights.length > 0 && (
        <Section background="muted" style={{ paddingTop: designSystem.spacing[16], paddingBottom: designSystem.spacing[16] }}>
          <Container>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: designSystem.spacing[12] }}>
                <h2 style={{ color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>Artigos Relacionados</h2>
                <p style={{ fontSize: '1.125rem', color: designSystem.colors.neutral[600] }}>Continue aprendendo sobre reabilitação urbana e investimento imobiliário</p>
              </motion.div>

              <motion.div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {relatedInsights.map((related) => {
                  const relatedCategory = categoryConfig[related.category as keyof typeof categoryConfig] || categoryConfig.Investimento;
                  const RelatedIcon = relatedCategory.icon;
                  return (
                    <motion.div
                      key={related.id}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => router.push(`/blog/${related.id}`)}
                      className="group cursor-pointer"
                      style={{ background: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius['2xl'], overflow: 'hidden', boxShadow: designSystem.shadows.md }}
                    >
                      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                        {related.image ? (
                          <ImageWithFallback src={related.image.replace(/([?&])w=\d+/, '$1w=800')} alt={related.title} width={800} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
                        ) : (
                          <div
                            role="img"
                            aria-label={`${relatedCategory.name} — ${related.title}`}
                            className="group-hover:scale-110 transition-transform duration-500"
                            style={{ width: '100%', height: '100%', background: relatedCategory.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
                          >
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15), transparent 55%)' }} />
                            <RelatedIcon size={72} style={{ color: 'rgba(255,255,255,0.9)', position: 'relative', zIndex: 1 }} />
                          </div>
                        )}
                        <div className="flex items-center gap-2" style={{ position: 'absolute', top: designSystem.spacing[4], left: designSystem.spacing[4], padding: `${designSystem.spacing[2]} ${designSystem.spacing[3]}`, background: relatedCategory.gradient, color: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius.full, fontSize: '0.75rem', fontWeight: designSystem.typography.fontWeight.bold }}>
                          <RelatedIcon size={14} />
                          {relatedCategory.name}
                        </div>
                      </div>
                      <div style={{ padding: designSystem.spacing[6] }}>
                        <h3 style={{ color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[3] }}>{related.title}</h3>
                        <p style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[600], lineHeight: '1.6', marginBottom: designSystem.spacing[4] }}>{related.excerpt}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock size={14} style={{ color: designSystem.colors.neutral[500] }} />
                            <span style={{ color: designSystem.colors.neutral[600], fontSize: '0.875rem' }}>{related.readTime}</span>
                          </div>
                          <span className="flex items-center gap-1.5 ml-auto group-hover:gap-2.5 transition-all duration-300" style={{ color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.semibold, fontSize: '0.875rem' }}>
                            Ler artigo
                            <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </Container>
        </Section>
      )}

      {/* Modal de Compartilhamento */}
      {showShareModal && (
        <div onClick={() => setShowShareModal(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: designSystem.spacing[4] }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} style={{ background: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius['2xl'], padding: designSystem.spacing[8], maxWidth: '500px', width: '100%', boxShadow: designSystem.shadows['2xl'] }}>
            <div style={{ marginBottom: designSystem.spacing[6] }}>
              <h3 style={{ color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[2] }}>Compartilhar Artigo</h3>
              <p style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[600] }}>Copie o link abaixo para compartilhar este artigo</p>
            </div>
            <div style={{ padding: designSystem.spacing[4], background: designSystem.colors.neutral[50], borderRadius: designSystem.borderRadius.lg, marginBottom: designSystem.spacing[6], border: `2px solid ${designSystem.colors.neutral[200]}` }}>
              <p style={{ fontSize: '0.875rem', color: designSystem.colors.neutral[700], wordBreak: 'break-all', margin: 0 }}>{typeof window !== 'undefined' ? window.location.href : ''}</p>
            </div>
            <div className="flex gap-3">
              <motion.button onClick={copyShareLink} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ flex: 1, padding: `${designSystem.spacing[3]} ${designSystem.spacing[6]}`, background: shareLinkCopied ? designSystem.colors.brand.secondary : designSystem.colors.gradients.primary, color: designSystem.colors.neutral.white, border: 'none', borderRadius: designSystem.borderRadius.lg, cursor: 'pointer', fontWeight: designSystem.typography.fontWeight.semibold }}>
                {shareLinkCopied ? '✓ Copiado!' : 'Copiar Link'}
              </motion.button>
              <motion.button onClick={() => setShowShareModal(false)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ padding: `${designSystem.spacing[3]} ${designSystem.spacing[6]}`, background: designSystem.colors.neutral[200], color: designSystem.colors.neutral[700], border: 'none', borderRadius: designSystem.borderRadius.lg, cursor: 'pointer', fontWeight: designSystem.typography.fontWeight.semibold }}>
                Fechar
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </>
  );
}
