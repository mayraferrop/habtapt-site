/**
 * Tipos centralizados para Project
 * Superset unificado de todas as definicoes encontradas no codebase.
 * Campos opcionais (?) sao aqueles que nao existem em todas as definicoes.
 */

export type ProjectStatus = 'analysis' | 'in-progress' | 'available' | 'sold' | 'draft' | 'active' | 'reserved' | 'rented' | 'delisted' | 'archived';

export type ProjectStatusFilter = ProjectStatus | 'all';

export type InvestmentStrategy =
  | 'buy-hold'
  | 'fix-flip'
  | 'alojamento-local'
  | 'rent-to-rent'
  | 'desenvolvimento'
  | 'co-investimento';

export type ListingType = 'venda' | 'arrendamento' | 'venda_e_arrendamento';

export type PropertyTypeValue =
  | 'apartamento'
  | 'moradia'
  | 'predio'
  | 'terreno'
  | 'loja'
  | 'escritorio'
  | 'armazem';

export type Energycertificate = 'A+' | 'A' | 'B' | 'B-' | 'C' | 'D' | 'E' | 'F';

export type PropertyCondition = 'novo' | 'remodelado' | 'bom' | 'usado' | 'para_renovar' | 'ruina';

export interface Project {
  id: string;
  title: string;
  location: string;
  status: string;
  strategy: string;
  image: string;
  roi: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description?: string;
  highlights?: string[] | string;

  // Preco e financeiros
  price?: string;
  investment?: string;
  salePrice?: string | null;
  forSale?: boolean;

  // Labels
  statusLabel?: string;

  // Timeline
  duration?: string;
  timeline?: string | Array<{ phase: string; duration: string; status: string }>;
  timelinePhases?: string;
  year?: string;

  // Links
  portalLink?: string | null;
  brochureLink?: string | null;
  landingPage?: string | null;

  // Tipo e classificacao
  type?: string;

  // Financials (bloco calculado pelo hook useProjectFetch)
  financials?: {
    acquisition?: string;
    renovation?: string;
    total?: string;
    sale?: string;
    profit?: string;
    roi?: string;
  };

  // Investimento
  estimatedRent?: string;
  grossYield?: string;
  netYield?: string;
  appreciationEstimate?: string;
  propertyType?: string;

  // Moradia
  neighborhood?: string;
  finishes?: string[];
  nearbyAmenities?: string[];
  lifestyle?: string;

  // Geral
  typology?: string;
  deliveryDate?: string;

  // Metadata (admin)
  createdAt?: string;
  updatedAt?: string;
  timestamp?: number;

  // ====== NEW EXPANDED DB FIELDS ======

  // Listing & Classification
  slug?: string;
  shortDescription?: string;
  listingType?: ListingType;

  // Property Characteristics
  grossAreaM2?: number | null;
  netAreaM2?: number | null;
  landAreaM2?: number | null;
  floor?: number | null;
  totalFloors?: number | null;
  constructionYear?: number | null;
  energyCertificate?: Energycertificate | string;
  condition?: PropertyCondition | string;

  // Amenities
  hasElevator?: boolean;
  hasParking?: boolean;
  parkingSpaces?: number | null;
  hasGarage?: boolean;
  hasPool?: boolean;
  hasGarden?: boolean;
  hasTerrace?: boolean;
  hasBalcony?: boolean;
  hasStorage?: boolean;
  hasAirConditioning?: boolean;
  hasCentralHeating?: boolean;
  hasFireplace?: boolean;
  isFurnished?: boolean;
  furnitureIncluded?: string;

  // Location details
  district?: string;
  municipality?: string;
  parish?: string;
  address?: string;
  postalCode?: string;
  latitude?: number | null;
  longitude?: number | null;

  // Pricing
  salePriceNumeric?: number | null;
  salePriceNegotiable?: boolean;
  rentMonthly?: number | null;
  rentDepositMonths?: number | null;
  expensesIncluded?: boolean;
  expensesAmount?: number | null;
  availableFrom?: string | null;
  priceOnRequest?: boolean;

  // Media
  videoUrl?: string;
  videoType?: string;
  virtualTourUrl?: string;
  floorPlanUrl?: string;
  floorPlanImages?: string[];
  beforeImages?: string[];
  afterImages?: string[];

  // Publishing & stats
  featured?: boolean;
  publishedAt?: string | null;
  soldAt?: string | null;
  rentedAt?: string | null;
  viewsCount?: number;
  contactsCount?: number;
  daysOnMarket?: number;

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  keywords?: string;

  // External integration
  externalId?: string;
  externalSource?: string;
  lastSyncedAt?: string | null;
}
