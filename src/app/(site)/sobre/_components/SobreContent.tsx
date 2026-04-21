'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Building2,
  Target,
  Shield,
  BarChart3,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from '@/components/icons';
import { motion } from 'motion/react';
import { useInView } from '@/components/useInView';
import { designSystem } from '@/components/design-system';
import { useIsMobile } from '@/utils/hooks/useIsMobile';

export default function SobreContent() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const isMobile = useIsMobile();

  const stats = [
    {
      icon: Building2,
      value: '10+',
      label: 'Projetos em Carteira',
      description: 'Imóveis em reabilitação e desenvolvimento em Portugal',
    },
    {
      icon: TrendingUp,
      value: '1.500+',
      label: 'Metros Quadrados',
      description: 'Área total em processo de reabilitação urbana',
    },
    {
      icon: Users,
      value: '100%',
      label: 'Acompanhamento',
      description: 'Gestão integrada do imóvel à venda, sem intermediários',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Qualidade Técnica',
      description:
        'Acabamentos premium, materiais de durabilidade comprovada e certificação energética classe A/A+. Cada projeto é executado com rigor construtivo e supervisão técnica especializada.',
      color: designSystem.colors.brand.primary,
      gradient: designSystem.colors.gradients.primary,
    },
    {
      icon: BarChart3,
      title: 'Decisões Baseadas em Dados',
      description:
        'Análise de mercado, comparáveis regionais e due diligence técnica e jurídica em cada aquisição. Transformamos dados em decisões de investimento sólidas e previsíveis.',
      color: designSystem.colors.brand.secondary,
      gradient: designSystem.colors.gradients.secondary,
    },
    {
      icon: Shield,
      title: 'Transparência Total',
      description:
        'Orçamento fechado, cronograma público e reporte mensal aos co-investidores. Sem surpresas, sem custos ocultos — cada euro investido tem rastreabilidade completa.',
      color: designSystem.colors.brand.accent,
      gradient: designSystem.colors.gradients.accent,
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/351963290394?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20HABTA.',
      '_blank',
    );
  };

  return (
    <>
      {/* Hero Section */}
      <Section
        background="white"
        style={{
          paddingTop: '7.5rem',
          paddingBottom: '3.75rem',
        }}
      >
        <Container>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center rounded-full"
              style={{
                gap: designSystem.spacing[2],
                paddingLeft: designSystem.spacing[5],
                paddingRight: designSystem.spacing[5],
                paddingTop: designSystem.spacing[3],
                paddingBottom: designSystem.spacing[3],
                marginBottom: designSystem.spacing[6],
                background: designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.08),
                border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.15)}`,
              }}
            >
              <Sparkles size={18} style={{ color: designSystem.colors.brand.primary }} />
              <span
                style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.semibold,
                  color: designSystem.colors.brand.primary,
                  textTransform: 'uppercase',
                  letterSpacing: designSystem.typography.letterSpacing.wider,
                }}
              >
                Sobre a HABTA
              </span>
            </motion.div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: designSystem.typography.fontWeight.black,
                color: designSystem.colors.brand.primary,
                marginBottom: designSystem.spacing[6],
                letterSpacing: designSystem.typography.letterSpacing.tight,
                lineHeight: designSystem.typography.lineHeight.tight,
              }}
            >
              Reabilitação Urbana e Investimento Imobiliário em Portugal
            </h1>

            <p
              className="max-w-3xl mx-auto"
              style={{
                fontSize: designSystem.typography.fontSize.xl,
                color: designSystem.colors.neutral[600],
                lineHeight: designSystem.typography.lineHeight.relaxed,
                marginBottom: designSystem.spacing[8],
              }}
            >
              A HABTA é uma empresa portuguesa sediada em Cascais que transforma
              imóveis com potencial em ativos de rentabilidade comprovada. Operamos
              com rigor técnico, análise de dados e transparência integral — do imóvel à venda.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Quem Somos */}
      <Section background="muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.bold,
                  color: designSystem.colors.brand.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: designSystem.typography.letterSpacing.wider,
                  display: 'block',
                  marginBottom: designSystem.spacing[4],
                }}
              >
                Quem Somos
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: designSystem.typography.fontWeight.black,
                  color: designSystem.colors.brand.primary,
                  marginBottom: designSystem.spacing[6],
                  lineHeight: designSystem.typography.lineHeight.tight,
                }}
              >
                Empresa portuguesa especializada em <em style={{ fontStyle: 'italic', color: designSystem.colors.brand.secondary }}>productizar</em> imóveis
              </h2>
              <div
                style={{
                  fontSize: designSystem.typography.fontSize.lg,
                  color: designSystem.colors.neutral[700],
                  lineHeight: designSystem.typography.lineHeight.relaxed,
                }}
              >
                <p style={{ marginBottom: designSystem.spacing[4] }}>
                  Fundada em Portugal, a HABTA opera sob a <strong>Jornada Prometida LDA</strong>{' '}
                  (NIF 518493644) com sede em Cascais. Nasceu para responder a uma
                  lacuna no mercado imobiliário português: <strong>reabilitação urbana executada com padrão
                  industrial</strong> — orçamento fechado, prazos cumpridos e qualidade auditada.
                </p>
                <p style={{ marginBottom: designSystem.spacing[4] }}>
                  O nosso método assenta em três pilares: <strong>compra estratégica</strong> de imóveis
                  com potencial em zonas de alta valorização, <strong>reforma inteligente</strong> com
                  design contemporâneo e certificação energética, e <strong>venda otimizada</strong> baseada
                  em precificação por dados de mercado.
                </p>
                <p>
                  Acreditamos que cada imóvel pode ser um produto — replicável, rastreável e
                  com performance previsível. É esta filosofia que resumimos em{' '}
                  <em style={{ color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.semibold }}>
                    &ldquo;Every Home, Productized&rdquo;
                  </em>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  aspectRatio: '4/5',
                  background: designSystem.colors.gradients.heroLuxury,
                  boxShadow: designSystem.shadows.xl,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: designSystem.spacing[10],
                    textAlign: 'center',
                  }}
                >
                  <Building2
                    size={80}
                    style={{
                      color: designSystem.helpers.hexToRgba(designSystem.colors.neutral.white, 0.9),
                      marginBottom: designSystem.spacing[6],
                    }}
                  />
                  <h3
                    style={{
                      fontSize: designSystem.typography.fontSize['3xl'],
                      fontWeight: designSystem.typography.fontWeight.black,
                      color: designSystem.colors.neutral.white,
                      marginBottom: designSystem.spacing[3],
                      letterSpacing: designSystem.typography.letterSpacing.tight,
                    }}
                  >
                    HABTA
                  </h3>
                  <p
                    style={{
                      fontSize: designSystem.typography.fontSize.sm,
                      fontWeight: designSystem.typography.fontWeight.semibold,
                      color: designSystem.helpers.hexToRgba(designSystem.colors.neutral.white, 0.8),
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}
                  >
                    Every Home, Productized.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Números / Métricas */}
      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
            style={{ marginBottom: designSystem.spacing[12] }}
          >
            <span
              style={{
                fontSize: designSystem.typography.fontSize.sm,
                fontWeight: designSystem.typography.fontWeight.bold,
                color: designSystem.colors.brand.secondary,
                textTransform: 'uppercase',
                letterSpacing: designSystem.typography.letterSpacing.wider,
                display: 'block',
                marginBottom: designSystem.spacing[4],
              }}
            >
              Em números
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: designSystem.typography.fontWeight.black,
                color: designSystem.colors.brand.primary,
                marginBottom: designSystem.spacing[4],
                lineHeight: designSystem.typography.lineHeight.tight,
              }}
            >
              Projetos que materializam a nossa visão
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const CardWrapper = isMobile ? 'div' : motion.div;
              const cardProps = isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 30 },
                    animate: isInView ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: 0.3 + index * 0.1 },
                    whileHover: { y: -6 },
                  };

              return (
                <CardWrapper
                  key={stat.label}
                  {...cardProps}
                  className="text-center bg-white rounded-3xl p-8 transition-all duration-300"
                  style={{
                    border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.12)}`,
                    boxShadow: designSystem.shadows.md,
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center rounded-2xl"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: designSystem.helpers.hexToRgba(
                        designSystem.colors.brand.primary,
                        0.08,
                      ),
                      marginBottom: designSystem.spacing[5],
                    }}
                  >
                    <stat.icon
                      size={32}
                      style={{ color: designSystem.colors.brand.primary }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                      fontWeight: designSystem.typography.fontWeight.black,
                      color: designSystem.colors.brand.primary,
                      lineHeight: designSystem.typography.lineHeight.tight,
                      marginBottom: designSystem.spacing[3],
                    }}
                  >
                    {stat.value}
                  </div>
                  <h3
                    style={{
                      fontSize: designSystem.typography.fontSize.lg,
                      fontWeight: designSystem.typography.fontWeight.bold,
                      color: designSystem.colors.brand.primary,
                      marginBottom: designSystem.spacing[2],
                    }}
                  >
                    {stat.label}
                  </h3>
                  <p
                    style={{
                      fontSize: designSystem.typography.fontSize.sm,
                      color: designSystem.colors.neutral[600],
                      lineHeight: designSystem.typography.lineHeight.relaxed,
                    }}
                  >
                    {stat.description}
                  </p>
                </CardWrapper>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Valores */}
      <Section background="muted">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
            style={{ marginBottom: designSystem.spacing[12] }}
          >
            <span
              style={{
                fontSize: designSystem.typography.fontSize.sm,
                fontWeight: designSystem.typography.fontWeight.bold,
                color: designSystem.colors.brand.secondary,
                textTransform: 'uppercase',
                letterSpacing: designSystem.typography.letterSpacing.wider,
                display: 'block',
                marginBottom: designSystem.spacing[4],
              }}
            >
              Os Nossos Valores
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: designSystem.typography.fontWeight.black,
                color: designSystem.colors.brand.primary,
                marginBottom: designSystem.spacing[4],
                lineHeight: designSystem.typography.lineHeight.tight,
              }}
            >
              Três princípios que guiam cada decisão
            </h2>
            <p
              style={{
                fontSize: designSystem.typography.fontSize.lg,
                color: designSystem.colors.neutral[600],
                lineHeight: designSystem.typography.lineHeight.relaxed,
              }}
            >
              Valores não são frases em parede — são critérios que definem onde
              investimos, como executamos e o que entregamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const CardWrapper = isMobile ? 'div' : motion.div;
              const cardProps = isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 40 },
                    animate: isInView ? { opacity: 1, y: 0 } : {},
                    transition: {
                      duration: 0.6,
                      delay: 0.3 + index * 0.15,
                      type: 'spring' as const,
                      stiffness: 100,
                    },
                    whileHover: { y: -8, scale: 1.02 },
                  };

              return (
                <CardWrapper
                  key={value.title}
                  {...cardProps}
                  className="bg-white rounded-3xl overflow-hidden transition-all duration-500"
                  style={{
                    border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.12)}`,
                    boxShadow: designSystem.shadows.lg,
                  }}
                >
                  <div
                    className="p-8 pb-6"
                    style={{
                      background: designSystem.helpers.hexToRgba(value.color, 0.05),
                    }}
                  >
                    <div
                      className="inline-flex p-6 rounded-2xl"
                      style={{
                        background: value.gradient,
                        boxShadow: `0 12px 28px ${designSystem.helpers.hexToRgba(value.color, 0.35)}`,
                      }}
                    >
                      <value.icon
                        size={36}
                        style={{ color: designSystem.colors.neutral.white }}
                      />
                    </div>
                  </div>
                  <div className="p-8 pt-4">
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: designSystem.typography.fontSize['2xl'],
                        fontWeight: designSystem.typography.fontWeight.bold,
                        color: designSystem.colors.brand.primary,
                        lineHeight: designSystem.typography.lineHeight.snug,
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        fontSize: designSystem.typography.fontSize.base,
                        color: designSystem.colors.neutral[600],
                        lineHeight: designSystem.typography.lineHeight.relaxed,
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Empresa Info */}
      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: designSystem.helpers.hexToRgba(
                  designSystem.colors.brand.primary,
                  0.04,
                ),
                border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.brand.primary, 0.12)}`,
              }}
            >
              <span
                style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  fontWeight: designSystem.typography.fontWeight.bold,
                  color: designSystem.colors.brand.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: designSystem.typography.letterSpacing.wider,
                  display: 'block',
                  marginBottom: designSystem.spacing[4],
                }}
              >
                A Empresa
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: designSystem.typography.fontWeight.black,
                  color: designSystem.colors.brand.primary,
                  marginBottom: designSystem.spacing[8],
                  lineHeight: designSystem.typography.lineHeight.tight,
                }}
              >
                Informação jurídica e sede
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: designSystem.helpers.hexToRgba(
                        designSystem.colors.brand.primary,
                        0.1,
                      ),
                    }}
                  >
                    <Building2
                      size={22}
                      style={{ color: designSystem.colors.brand.primary }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.bold,
                        color: designSystem.colors.brand.primary,
                        textTransform: 'uppercase',
                        letterSpacing: designSystem.typography.letterSpacing.wider,
                        marginBottom: designSystem.spacing[1],
                      }}
                    >
                      Razão Social
                    </h3>
                    <p
                      style={{
                        fontSize: designSystem.typography.fontSize.base,
                        color: designSystem.colors.neutral[700],
                        lineHeight: designSystem.typography.lineHeight.relaxed,
                      }}
                    >
                      Jornada Prometida LDA
                      <br />
                      <span
                        style={{
                          fontSize: designSystem.typography.fontSize.sm,
                          color: designSystem.colors.neutral[600],
                        }}
                      >
                        NIF: 518493644
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: designSystem.helpers.hexToRgba(
                        designSystem.colors.brand.primary,
                        0.1,
                      ),
                    }}
                  >
                    <MapPin
                      size={22}
                      style={{ color: designSystem.colors.brand.primary }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.bold,
                        color: designSystem.colors.brand.primary,
                        textTransform: 'uppercase',
                        letterSpacing: designSystem.typography.letterSpacing.wider,
                        marginBottom: designSystem.spacing[1],
                      }}
                    >
                      Sede
                    </h3>
                    <p
                      style={{
                        fontSize: designSystem.typography.fontSize.base,
                        color: designSystem.colors.neutral[700],
                        lineHeight: designSystem.typography.lineHeight.relaxed,
                      }}
                    >
                      Rua Fernão Lopes, n.º 23
                      <br />
                      <span
                        style={{
                          fontSize: designSystem.typography.fontSize.sm,
                          color: designSystem.colors.neutral[600],
                        }}
                      >
                        Cascais 2765-088, Portugal
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: designSystem.helpers.hexToRgba(
                        designSystem.colors.brand.primary,
                        0.1,
                      ),
                    }}
                  >
                    <Target
                      size={22}
                      style={{ color: designSystem.colors.brand.primary }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.bold,
                        color: designSystem.colors.brand.primary,
                        textTransform: 'uppercase',
                        letterSpacing: designSystem.typography.letterSpacing.wider,
                        marginBottom: designSystem.spacing[1],
                      }}
                    >
                      Área de Atuação
                    </h3>
                    <p
                      style={{
                        fontSize: designSystem.typography.fontSize.base,
                        color: designSystem.colors.neutral[700],
                        lineHeight: designSystem.typography.lineHeight.relaxed,
                      }}
                    >
                      Reabilitação urbana
                      <br />
                      <span
                        style={{
                          fontSize: designSystem.typography.fontSize.sm,
                          color: designSystem.colors.neutral[600],
                        }}
                      >
                        Investimento imobiliário em Portugal
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="inline-flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: designSystem.helpers.hexToRgba(
                        designSystem.colors.brand.primary,
                        0.1,
                      ),
                    }}
                  >
                    <Calendar
                      size={22}
                      style={{ color: designSystem.colors.brand.primary }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.bold,
                        color: designSystem.colors.brand.primary,
                        textTransform: 'uppercase',
                        letterSpacing: designSystem.typography.letterSpacing.wider,
                        marginBottom: designSystem.spacing[1],
                      }}
                    >
                      Mercado
                    </h3>
                    <p
                      style={{
                        fontSize: designSystem.typography.fontSize.base,
                        color: designSystem.colors.neutral[700],
                        lineHeight: designSystem.typography.lineHeight.relaxed,
                      }}
                    >
                      Grande Lisboa e Cascais
                      <br />
                      <span
                        style={{
                          fontSize: designSystem.typography.fontSize.sm,
                          color: designSystem.colors.neutral[600],
                        }}
                      >
                        Imóveis residenciais e mistos
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" style={{ paddingTop: 0 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div
              className="max-w-3xl mx-auto p-10 rounded-3xl"
              style={{
                background: designSystem.colors.gradients.heroSubtle,
                border: `1px solid ${designSystem.helpers.hexToRgba(designSystem.colors.neutral.white, 0.1)}`,
              }}
            >
              <h3
                className="mb-4"
                style={{
                  fontSize: designSystem.typography.fontSize['2xl'],
                  fontWeight: designSystem.typography.fontWeight.bold,
                  color: designSystem.colors.neutral.white,
                }}
              >
                Quer conhecer a HABTA de perto?
              </h3>
              <p
                className="mb-8"
                style={{
                  fontSize: designSystem.typography.fontSize.lg,
                  color: designSystem.helpers.hexToRgba(
                    designSystem.colors.neutral.white,
                    0.9,
                  ),
                  lineHeight: designSystem.typography.lineHeight.relaxed,
                }}
              >
                Agende uma reunião connosco e perceba como transformamos imóveis em
                ativos de rentabilidade previsível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto" style={{ textDecoration: 'none' }}>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full transition-all duration-300"
                    style={{
                      background: designSystem.colors.neutral.white,
                      color: designSystem.colors.brand.primary,
                      fontWeight: designSystem.typography.fontWeight.semibold,
                      fontSize: designSystem.typography.fontSize.base,
                      boxShadow: designSystem.shadows.xl,
                      cursor: 'pointer',
                    }}
                  >
                    <Phone size={20} />
                    Agendar Reunião
                  </motion.span>
                </Link>

                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full transition-all duration-300"
                  style={{
                    background: 'transparent',
                    color: designSystem.colors.neutral.white,
                    fontWeight: designSystem.typography.fontWeight.semibold,
                    fontSize: designSystem.typography.fontSize.base,
                    border: `2px solid ${designSystem.colors.neutral.white}`,
                    cursor: 'pointer',
                  }}
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </motion.button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/servicos"
                    className="text-white/90 hover:text-white transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2"
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.medium,
                      }}
                    >
                      Ver os Nossos Serviços
                      <ArrowRight size={16} />
                    </motion.span>
                  </Link>

                  <span className="hidden sm:block text-white/40">&bull;</span>

                  <Link
                    href="/portfolio"
                    className="text-white/90 hover:text-white transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2"
                      style={{
                        fontSize: designSystem.typography.fontSize.sm,
                        fontWeight: designSystem.typography.fontWeight.medium,
                      }}
                    >
                      Ver Projetos
                      <TrendingUp size={16} />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
