/**
 * Custom Hook: useUnitsFetch
 * Hook para buscar unidades com error handling, cache e fallback
 */

import { useState, useEffect } from 'react';
import { supabaseFetch } from '../supabase/client';
import { projectsCache, CACHE_KEYS } from '../projectsCache';

export interface Unit {
  id: string;
  projectId: string | null;
  title: string;
  slug: string;
  unitRef: string;
  description: string;
  typology: string;
  grossArea: number | null;
  usefulArea: number | null;
  outdoorArea: number | null;
  floor: string;
  orientation: string;
  energyCert: string;
  bedrooms: number;
  bathrooms: number;
  price: number | null;
  priceLabel: string;
  status: 'available' | 'reserved' | 'sold';
  portalUrl: string | null;
  brochureUrl: string | null;
  deliveryDate: string;
  imageUrl: string;
  images: string[];
  floorPlanUrl: string;
  specs: Record<string, string>;
  highlights: string[];
  published: boolean;
  displayOrder: number;
  createdAt?: string;
  updatedAt?: string;
  timestamp?: number;
}

interface UseUnitsFetchResult {
  units: Unit[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook para buscar lista de unidades (opcionalmente filtrada por projeto)
 */
export const useUnitsList = (projectId?: string): UseUnitsFetchResult => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUnits = async () => {
    // Check cache
    const cacheKey = projectId ? CACHE_KEYS.UNITS_BY_PROJECT(projectId) : CACHE_KEYS.UNITS_ALL;
    const cached = projectsCache.get<Unit[]>(cacheKey);
    if (cached) {
      setUnits(cached);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const queryParam = projectId ? `?project_id=${projectId}` : '';
      const response = await supabaseFetch(`units${queryParam}`, {}, 2, true);

      if (!response.ok) {
        throw new Error(`Servidor retornou status ${response.status}`);
      }

      const data = await response.json();
      if (!data.units || !Array.isArray(data.units)) {
        throw new Error('Formato de resposta inválido');
      }

      projectsCache.set(cacheKey, data.units);
      setUnits(data.units);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      console.error(`[useUnitsList] Error fetching units:`, err);
      setError(errorMessage);
      setUnits([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUnits();
  }, [projectId]);

  return { units, isLoading, error, refetch: fetchUnits };
};

/**
 * Hook para buscar uma unidade específica por ID
 */
export const useUnitFetch = (
  unitId: string | undefined
): {
  unit: Unit | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
} => {
  const [unit, setUnit] = useState<Unit | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUnit = async () => {
    if (!unitId) {
      setError('ID da unidade não fornecido');
      setIsLoading(false);
      return;
    }

    const cached = projectsCache.get<Unit>(CACHE_KEYS.UNIT_BY_ID(unitId));
    if (cached) {
      setUnit(cached);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await supabaseFetch(`units/${unitId}`, {}, 2);

      if (!response.ok) {
        throw new Error(`Servidor retornou status ${response.status}`);
      }

      const data = await response.json();
      if (!data.unit) {
        throw new Error('Unidade não encontrada');
      }

      projectsCache.set(CACHE_KEYS.UNIT_BY_ID(unitId), data.unit);
      setUnit(data.unit);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      console.error(`[useUnitFetch] Error fetching unit:`, err);
      setError(errorMessage);
      setUnit(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUnit();
  }, [unitId]);

  return { unit, isLoading, error, refetch: fetchUnit };
};
