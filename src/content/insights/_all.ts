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
import { article as certificacaoEnergeticaEmPortugalGuiaCompleto2026 } from './certificacao-energetica-em-portugal-guia-completo-2026';
import { article as reabilitacaoSustentavelEmPortugalMateriaisSistemas2026 } from './reabilitacao-sustentavel-em-portugal-materiais-sistemas-2026';
import { article as eficienciaEnergeticaEmImoveisReabilitadosGuia2026 } from './eficiencia-energetica-em-imoveis-reabilitados-guia-2026';
import { article as yieldBrutoVsYieldLiquidoOQueOsInvestidoresConfundemEmPortugal } from './yield-bruto-vs-yield-liquido-o-que-os-investidores-confundem-em-portugal';
import { article as regimeJuridicoDoArrendamentoUrbanoOQueMudou } from './regime-juridico-do-arrendamento-urbano-o-que-mudou';
import { article as certificacaoEnergeticaPassosConcretosParaPassarDeD } from './certificacao-energetica-passos-concretos-para-passar-de-d';
import { article as precosMediosPorMNasFreguesiasCentraisDe } from './precos-medios-por-m-nas-freguesias-centrais-de';
import { article as financiamentoHipotecarioParaReabilitacaoEmPortugalOQue } from './financiamento-hipotecario-para-reabilitacao-em-portugal-o-que';
import { article as imiEImtEmReabilitacaoIsencoesEArmadilhas } from './imi-e-imt-em-reabilitacao-isencoes-e-armadilhas';
import { article as materiaisRecicladosEmReabilitacaoOQueRealmenteVale } from './materiais-reciclados-em-reabilitacao-o-que-realmente-vale';
import { article as oMapaDoInvestimentoQueCidadesPortuguesasCrescem } from './o-mapa-do-investimento-que-cidades-portuguesas-crescem';

const articles: InsightArticle[] = [cincoPilares, comoCalcularORoiRealDeUmProjeto, areasDeReabilitacaoUrbanaAruComoConfirmarSe, investirEmImoveisEmPortugalGuiaCompleto2026, reabilitacaoUrbanaEmPortugalGuiaCompleto2026, mercadoImobiliarioPortugal2026AnaliseCompleta, fiscalidadeImobiliariaEmPortugalGuiaCompleto2026, zonasPremiumDeLisboaGuiaInvestimento2026, zonasPremiumDoPortoGuiaInvestimento2026, certificacaoEnergeticaEmPortugalGuiaCompleto2026, reabilitacaoSustentavelEmPortugalMateriaisSistemas2026, eficienciaEnergeticaEmImoveisReabilitadosGuia2026, yieldBrutoVsYieldLiquidoOQueOsInvestidoresConfundemEmPortugal, regimeJuridicoDoArrendamentoUrbanoOQueMudou, certificacaoEnergeticaPassosConcretosParaPassarDeD, precosMediosPorMNasFreguesiasCentraisDe, financiamentoHipotecarioParaReabilitacaoEmPortugalOQue, imiEImtEmReabilitacaoIsencoesEArmadilhas, materiaisRecicladosEmReabilitacaoOQueRealmenteVale, oMapaDoInvestimentoQueCidadesPortuguesasCrescem];

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
