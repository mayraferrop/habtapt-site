'use client';

// Portfolio Component - v3.0.0 - Otimizado para Performance
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from './Container';
import { Section } from './Section';
import { Building2, ArrowRight } from './icons';
import { useInView } from './useInView';
import { designSystem } from './design-system';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabaseFetch } from '../utils/supabase/client';
import { projectsCache, CACHE_KEYS } from '../utils/projectsCache';
import { PortfolioCard } from './primitives/PortfolioCard';
import { PortfolioGridSkeleton } from './primitives/PortfolioGridSkeleton';
import { useIsMobile } from '@/utils/hooks/useIsMobile';

import type { Project, ProjectStatusFilter as ProjectStatus, InvestmentStrategy } from '@/types/project';

interface PortfolioProps {
  variant?: 'full' | 'homepage';
  projects?: Project[];
}

export function Portfolio({ variant = 'full', projects: serverProjects }: PortfolioProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('all');
  const isMobile = useIsMobile();
  const [projects, setProjects] = useState<Project[]>(serverProjects || []);
  const [isLoadingProjects, setIsLoadingProjects] = useState(!serverProjects);

  // Fetch projects com cache (skip if server-provided)
  useEffect(() => {
    if (serverProjects) return;

    const fetchProjects = async () => {
      const cached = projectsCache.get<Project[]>(CACHE_KEYS.ALL_PROJECTS);
      if (cached) {
        setProjects(cached);
        setIsLoadingProjects(false);
        return;
      }

      try {
        setIsLoadingProjects(true);
        const response = await supabaseFetch('projects');

        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.projects)) {
            setProjects(data.projects);
            if (data.projects.length > 0) {
              projectsCache.set(CACHE_KEYS.ALL_PROJECTS, data.projects);
            }
          } else {
            setProjects([]);
          }
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error('[Portfolio] ❌ Error fetching projects:', error);
        setProjects([]);
      } finally {
        setIsLoadingProjects(false);
      }
    };

    fetchProjects();
  }, [serverProjects]);

  const filters: { value: ProjectStatus; label: string }[] = useMemo(() => [
    { value: 'all', label: 'Todos' },
    { value: 'analysis', label: 'Em Análise' },
    { value: 'in-progress', label: 'Em Andamento' },
    { value: 'available', label: 'Disponível' },
    { value: 'sold', label: 'Vendidos' },
  ], []);

  // Filtrar projetos com useMemo
  const filteredProjects = useMemo(() => {
    if (variant === 'homepage') {
      return projects.filter((p) => p.status === 'available').slice(0, 4);
    }
    return activeFilter === 'all' ? projects : projects.filter((p) => p.status === activeFilter);
  }, [activeFilter, projects, variant]);

  // Handler memoizado - abre sempre a página de detalhes do projeto
  const handleProjectClick = useCallback(
    (id: string) => {
      router.push(`/portfolio/${id}`);
    },
    [router]
  );

  return (
    <Section id="portfolio" background="muted">
      <Container>
        <section aria-labelledby="portfolio-title">
          <div
            ref={ref}
            className={`text-center mx-auto ${isInView ? 'anim-fade-in-up' : ''}`}
            style={{
              marginBottom: designSystem.spacing[16],
              maxWidth: '56rem',
              opacity: isInView ? undefined : 0,
            }}
          >
            <div
              className={`inline-flex items-center rounded-full ${isInView ? 'anim-fade-in anim-delay-1' : ''}`}
              style={{
                gap: designSystem.spacing[2],
                paddingLeft: designSystem.spacing[5],
                paddingRight: designSystem.spacing[5],
                paddingTop: designSystem.spacing[3],
                paddingBottom: designSystem.spacing[3],
                marginBottom: designSystem.spacing[6],
                background: designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.08),
                border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.15)}`,
                opacity: isInView ? undefined : 0,
              }}
            >
              <Building2 size={18} style={{ color: designSystem.colors.brand.primary }} />
              <span
                style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.semibold,
                  color: designSystem.colors.brand.primary,
                  textTransform: 'uppercase',
                  letterSpacing: designSystem.typography.letterSpacing.wider,
                }}
              >
                {variant === 'homepage' ? 'Imóveis' : 'Portfólio'}
              </span>
            </div>

            {variant === 'homepage' ? (
              <h2
                id="portfolio-title"
                style={{
                  color: designSystem.colors.neutral[900],
                  marginBottom: designSystem.spacing.md,
                }}
              >
                Imóveis Disponíveis
              </h2>
            ) : (
              <h1
                id="portfolio-title"
                style={{
                  color: designSystem.colors.neutral[900],
                  marginBottom: designSystem.spacing.md,
                }}
              >
                Projetos de Alto Retorno
              </h1>
            )}
            <p
              style={{
                color: designSystem.colors.neutral[600],
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {variant === 'homepage'
                ? 'Descubra os nossos imóveis reabilitados com acabamentos premium e localização privilegiada'
                : 'Conheça os nossos casos de sucesso em reabilitação urbana e investimento imobiliário de alto rendimento em Portugal'}
            </p>
          </div>

          {/* Filters — only in full mode */}
          {variant === 'full' && (
            <div
              className={`flex flex-wrap justify-center ${isInView ? 'anim-fade-in-up anim-delay-2' : ''}`}
              style={{
                gap: designSystem.spacing[3],
                marginBottom: designSystem.spacing[12],
                opacity: isInView ? undefined : 0,
              }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className="rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-pressed={activeFilter === filter.value}
                  aria-label={`Filtrar por ${filter.label}`}
                  style={{
                    paddingLeft: designSystem.spacing[6],
                    paddingRight: designSystem.spacing[6],
                    paddingTop: designSystem.spacing[3],
                    paddingBottom: designSystem.spacing[3],
                    background:
                      activeFilter === filter.value
                        ? designSystem.colors.gradients.secondary
                        : designSystem.colors.neutral.white,
                    color:
                      activeFilter === filter.value
                        ? designSystem.colors.brand.primary
                        : designSystem.colors.brand.primary,
                    border: `2px solid ${
                      activeFilter === filter.value
                        ? 'transparent'
                        : designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.25)
                    }`,
                    fontWeight: designSystem.typography.fontWeight.bold,
                    fontSize: '0.9375rem',
                    boxShadow:
                      activeFilter === filter.value ? designSystem.shadows.secondaryHover : designSystem.shadows.sm,
                    cursor: 'pointer',
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid with Skeleton */}
          <div aria-live="polite">
            {isLoadingProjects ? (
              <PortfolioGridSkeleton count={6} isMobile={isMobile} />
            ) : (
              <div
                key={activeFilter}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 anim-fade-in"
                style={{
                  gap: designSystem.spacing[6],
                }}
              >
                {filteredProjects.map((project, index) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    index={index}
                    isMobile={isMobile}
                    onClick={handleProjectClick}
                  />
                ))}
              </div>
            )}

            {/* Empty state */}
            {!isLoadingProjects && filteredProjects.length === 0 && (
              <div
                className="anim-fade-in text-center max-w-2xl mx-auto"
                style={{
                  padding: designSystem.spacing[12],
                  background: designSystem.colors.neutral.white,
                  borderRadius: designSystem.borderRadius['2xl'],
                  border: `1px solid ${designSystem.colors.neutral[200]}`,
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: designSystem.helpers.hexToRgba(designSystem.colors.brand.secondary, 0.1),
                    borderRadius: designSystem.borderRadius.full,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    marginBottom: designSystem.spacing[6],
                  }}
                >
                  <Building2 size={32} style={{ color: designSystem.colors.brand.secondary }} />
                </div>
                <h3
                  style={{
                    fontSize: designSystem.typography.fontSize['2xl'],
                    fontWeight: designSystem.typography.fontWeight.bold,
                    color: designSystem.colors.brand.primary,
                    marginBottom: designSystem.spacing[4],
                  }}
                >
                  {projects.length === 0 ? 'Em breve, novos projetos' : 'Nenhum projeto neste filtro'}
                </h3>
                <p
                  style={{
                    fontSize: designSystem.typography.fontSize.base,
                    color: designSystem.colors.neutral[600],
                    lineHeight: designSystem.typography.lineHeight.relaxed,
                  }}
                >
                  {projects.length === 0
                    ? 'O nosso portfólio está a ser preparado. Entre em contacto para conhecer as próximas oportunidades.'
                    : 'Tente selecionar um filtro diferente ou veja todos os projetos.'}
                </p>
              </div>
            )}
          </div>

          {/* "Ver todos" link — homepage variant */}
          {variant === 'homepage' && !isLoadingProjects && filteredProjects.length > 0 && (
            <div
              className={`text-center ${isInView ? 'anim-fade-in-up anim-delay-4' : ''}`}
              style={{ marginTop: designSystem.spacing[10], opacity: isInView ? undefined : 0 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full transition-all"
                style={{
                  gap: designSystem.spacing[2],
                  paddingLeft: designSystem.spacing[8],
                  paddingRight: designSystem.spacing[8],
                  paddingTop: designSystem.spacing[4],
                  paddingBottom: designSystem.spacing[4],
                  background: designSystem.colors.gradients.secondary,
                  color: designSystem.colors.brand.primary,
                  fontWeight: designSystem.typography.fontWeight.semibold,
                  fontSize: designSystem.typography.fontSize.base,
                  boxShadow: designSystem.shadows.secondaryHover,
                  textDecoration: 'none',
                }}
              >
                Ver todos os imóveis
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </section>
      </Container>
    </Section>
  );
}