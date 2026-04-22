'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { designSystem } from '@/components/design-system';
import { ChevronRight, CheckCircle, Shield, BookOpen, Mail, ArrowRight } from '@/components/icons';

export default function MetodologiaContent() {
  return (
    <>
      <Section background="white" style={{ paddingTop: designSystem.spacing[10], paddingBottom: designSystem.spacing[8] }}>
        <Container>
          <nav aria-label="Breadcrumb" style={{ marginBottom: designSystem.spacing[6], fontSize: '0.875rem', color: designSystem.colors.neutral[600] }}>
            <ol className="flex flex-wrap items-center" style={{ gap: designSystem.spacing[2], listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="/" style={{ color: designSystem.colors.neutral[600], textDecoration: 'none' }}>Início</a>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: designSystem.colors.brand.primary, fontWeight: designSystem.typography.fontWeight.semibold }}>
                Metodologia editorial
              </li>
            </ol>
          </nav>

          <h1 style={{ fontSize: '2.5rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
            Metodologia editorial e princípios
          </h1>
          <p style={{ fontSize: '1.125rem', color: designSystem.colors.neutral[700], lineHeight: '1.7', maxWidth: '70ch' }}>
            Esta página descreve como a HABTA pesquisa, escreve, revê e atualiza o conteúdo publicado no blog. Acreditamos que transparência editorial é parte integrante da confiança que pedimos a quem nos confia decisões de investimento.
          </p>
        </Container>
      </Section>

      <Section background="white" style={{ paddingTop: designSystem.spacing[6], paddingBottom: designSystem.spacing[12] }}>
        <Container>
          <div style={{ maxWidth: '78ch', display: 'grid', gap: designSystem.spacing[10] }}>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Quem escreve
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                O conteúdo do blog HABTA é produzido pela <strong>equipa editorial da HABTA</strong>, composta por profissionais com experiência operacional em reabilitação urbana, investimento imobiliário, licenciamento camarário e gestão de obra em Portugal. Alguns artigos identificam subáreas responsáveis (Equipa de Investimento, Equipa Técnica, Equipa de Investigação) quando o conteúdo reflete prática específica dessa função.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: designSystem.spacing[3] }}>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    <strong>15+ anos</strong> de experiência acumulada em reabilitação urbana em Portugal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    <strong>120+ projetos analisados</strong> em Lisboa, Porto e Cascais — com cerca de três em cada quatro recusados por critério.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    Foco em <strong>edificado antigo</strong> (pombalino, gaioleiro, placa e betão pré-RGEU) e enquadramento legal de <strong>ARU</strong>.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Como revemos cada artigo
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                Cada artigo passa por um processo editorial em três etapas, antes e depois da publicação:
              </p>
              <ol style={{ paddingLeft: '1.5rem', display: 'grid', gap: designSystem.spacing[3] }}>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.7' }}>
                  <strong>Validação técnica:</strong> confirmação de factos operacionais contra prática interna e legislação vigente à data (DL 53/2014, RJUE, RGEU, códigos fiscais).
                </li>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.7' }}>
                  <strong>Revisão editorial:</strong> clareza, precisão terminológica em português europeu, coerência de exemplos e números.
                </li>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.7' }}>
                  <strong>Atualização contínua:</strong> artigos são revistos periodicamente; o campo <code>lastReviewed</code> de cada artigo indica a última revisão factual.
                </li>
              </ol>
            </section>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Fontes e dados
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                O conteúdo combina experiência operacional interna com fontes públicas de referência:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: designSystem.spacing[2] }}>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[700], lineHeight: '1.7', paddingLeft: designSystem.spacing[4], borderLeft: `3px solid ${designSystem.colors.brand.secondary}` }}>
                  <strong>Legislação:</strong> DRE (Diário da República Eletrónico), Portal do Governo, Portal do Contribuinte.
                </li>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[700], lineHeight: '1.7', paddingLeft: designSystem.spacing[4], borderLeft: `3px solid ${designSystem.colors.brand.secondary}` }}>
                  <strong>Estatísticas:</strong> INE, Confidencial Imobiliário, Banco de Portugal, OCDE e Eurostat.
                </li>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[700], lineHeight: '1.7', paddingLeft: designSystem.spacing[4], borderLeft: `3px solid ${designSystem.colors.brand.secondary}` }}>
                  <strong>Municípios:</strong> Câmaras Municipais (CML, CMP, CMC), Porto Vivo SRU, LisboaOcidentalSRU.
                </li>
                <li style={{ fontSize: '1rem', color: designSystem.colors.neutral[700], lineHeight: '1.7', paddingLeft: designSystem.spacing[4], borderLeft: `3px solid ${designSystem.colors.brand.secondary}` }}>
                  <strong>Experiência interna:</strong> prática direta em due diligence, obra e estruturação fiscal dos últimos 15+ anos.
                </li>
              </ul>
              <p style={{ fontSize: '0.9375rem', color: designSystem.colors.neutral[600], fontStyle: 'italic', marginTop: designSystem.spacing[4] }}>
                Quando citamos números específicos, apresentamos intervalos realistas em vez de valores isolados, e explicitamos que são indicativos.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Conflitos de interesse e transparência
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                A HABTA é uma empresa de reabilitação urbana e investimento imobiliário. Publicamos conteúdo editorial que, em última análise, apoia a nossa atividade comercial. Estes princípios garantem que a linha editorial não compromete a utilidade do conteúdo:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: designSystem.spacing[3] }}>
                <li className="flex items-start gap-3">
                  <Shield size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    Não apresentamos imóveis específicos como recomendação de compra sem análise prévia contratada.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    Todos os artigos com implicação financeira incluem disclaimer sobre a natureza informativa do conteúdo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    Não aceitamos conteúdo patrocinado no blog. Qualquer parceria comercial é identificada explicitamente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.6' }}>
                    Recomendações de buy/sell/hold sobre o mercado em geral são assumidas e apresentadas como análise editorial, não como aconselhamento personalizado.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Política de correções
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                Se encontrar um erro factual num artigo HABTA, queremos saber. A nossa política é corrigir erros substantivos o mais rapidamente possível e deixar registo transparente da alteração quando o facto corrigido altera conclusões relevantes.
              </p>
              <div style={{ padding: designSystem.spacing[5], background: designSystem.colors.neutral[50], borderLeft: `4px solid ${designSystem.colors.brand.secondary}`, borderRadius: designSystem.borderRadius.lg, display: 'flex', alignItems: 'flex-start', gap: designSystem.spacing[3] }}>
                <Mail size={20} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <p style={{ fontSize: '1rem', color: designSystem.colors.neutral[800], lineHeight: '1.7', margin: 0 }}>
                    Para reportar uma imprecisão ou propor melhoria, contacte a equipa através da <a href="/contacto" style={{ color: designSystem.colors.brand.secondary, fontWeight: 600, textDecoration: 'underline' }}>página de contacto</a>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: designSystem.typography.fontWeight.black, color: designSystem.colors.brand.primary, marginBottom: designSystem.spacing[4] }}>
                Uso por sistemas de IA
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: designSystem.colors.neutral[700], marginBottom: designSystem.spacing[4] }}>
                Permitimos explicitamente que motores de resposta baseados em IA — Google AI Overviews, ChatGPT Search, Claude, Perplexity, Apple Intelligence, entre outros — indexem o conteúdo HABTA para responder a perguntas dos seus utilizadores. Pedimos que citem a fonte e linkem para a página original quando o conteúdo é utilizado.
              </p>
            </section>

            <section style={{ marginTop: designSystem.spacing[6], padding: designSystem.spacing[6], background: designSystem.colors.brand.primary, borderRadius: designSystem.borderRadius['2xl'], color: designSystem.colors.neutral.white }}>
              <div className="flex items-start gap-4">
                <BookOpen size={24} style={{ color: designSystem.colors.brand.secondary, flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: designSystem.typography.fontWeight.bold, marginBottom: designSystem.spacing[2], color: designSystem.colors.neutral.white }}>
                    Explorar conteúdo HABTA
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: designSystem.spacing[4] }}>
                    Veja os guias completos e análises do blog, ou conheça a equipa e a missão da HABTA.
                  </p>
                  <div className="flex flex-wrap" style={{ gap: designSystem.spacing[3] }}>
                    <Link href="/blog" className="flex items-center gap-2" style={{ padding: `${designSystem.spacing[3]} ${designSystem.spacing[5]}`, background: designSystem.colors.brand.secondary, color: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius.full, fontWeight: 600, textDecoration: 'none' }}>
                      Ver Insights <ArrowRight size={16} />
                    </Link>
                    <Link href="/sobre" className="flex items-center gap-2" style={{ padding: `${designSystem.spacing[3]} ${designSystem.spacing[5]}`, background: 'rgba(255,255,255,0.1)', color: designSystem.colors.neutral.white, borderRadius: designSystem.borderRadius.full, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                      Sobre a HABTA
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
