import type { InsightArticle } from './types';
import { article as cincoPilares } from './cinco-pilares-avaliar-reabilitacao-urbana';
import { article as comoCalcularORoiRealDeUmProjeto } from './como-calcular-o-roi-real-de-um-projeto';
import { article as areasDeReabilitacaoUrbanaAruComoConfirmarSe } from './areas-de-reabilitacao-urbana-aru-como-confirmar-se';
import { article as investirEmImoveisEmPortugalGuiaCompleto2026 } from './investir-em-imoveis-em-portugal-guia-completo-2026';
import { article as reabilitacaoUrbanaEmPortugalGuiaCompleto2026 } from './reabilitacao-urbana-em-portugal-guia-completo-2026';
import { article as mercadoImobiliarioPortugal2026AnaliseCompleta } from './mercado-imobiliario-portugal-2026-analise-completa';
import { article as fiscalidadeImobiliariaEmPortugalGuiaCompleto2026 } from './fiscalidade-imobiliaria-em-portugal-guia-completo-2026';
import { article as zonasPremiumDeLisboaGuiaInvestimento2026 } from './zonas-premium-de-lisboa-guia-investimento-2026';
import { article as zonasPremiumDoPortoGuiaInvestimento2026 } from './zonas-premium-do-porto-guia-investimento-2026';

const articles: InsightArticle[] = [
  cincoPilares,
  comoCalcularORoiRealDeUmProjeto,
  areasDeReabilitacaoUrbanaAruComoConfirmarSe,
  investirEmImoveisEmPortugalGuiaCompleto2026,
  reabilitacaoUrbanaEmPortugalGuiaCompleto2026,
  mercadoImobiliarioPortugal2026AnaliseCompleta,
  fiscalidadeImobiliariaEmPortugalGuiaCompleto2026,
  zonasPremiumDeLisboaGuiaInvestimento2026,
  zonasPremiumDoPortoGuiaInvestimento2026,
];

export function getAllInsights(): InsightArticle[] {
  return [...articles].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return db - da;
  });
}

export function getInsightById(id: string): InsightArticle | null {
  return articles.find((a) => a.id === id) ?? null;
}

export function getRelatedInsights(category: string, excludeId: string, limit = 3): InsightArticle[] {
  const all = getAllInsights();
  const sameCategory = all.filter((a) => a.id !== excludeId && a.category === category).slice(0, limit);
  if (sameCategory.length < limit) {
    const others = all.filter(
      (a) => a.id !== excludeId && a.category !== category && !sameCategory.some((r) => r.id === a.id),
    );
    return [...sameCategory, ...others.slice(0, limit - sameCategory.length)];
  }
  return sameCategory;
}
