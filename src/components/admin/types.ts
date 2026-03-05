// Shared types for admin components

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  createdAt: string;
  timestamp: number;
  pipelineStage?: 'novo' | 'contato' | 'qualificado' | 'visita' | 'proposta' | 'negociacao' | 'ganho' | 'perdido';
  leadNumber?: number;
  // Preferências do lead
  desiredLocations?: string[];
  maxBudget?: string;
  typology?: string;
  notes?: string;
}

export type FollowupType = 'call' | 'email' | 'whatsapp' | 'meeting' | 'task';
export type FollowupPriority = 'low' | 'medium' | 'high' | 'urgent';
export type FollowupStatus = 'pending' | 'completed' | 'skipped' | 'cancelled';
export type FollowupOutcome = 'answered' | 'no_answer' | 'voicemail' | 'interested' | 'not_interested' | 'meeting_booked' | 'sent' | 'replied' | 'rescheduled';

export interface Followup {
  id: string;
  contactId: string;
  title: string;
  type: FollowupType;
  dueDate: string;
  dueTime?: string | null;
  priority: FollowupPriority;
  notes?: string;
  status: FollowupStatus;
  outcome?: FollowupOutcome | null;
  outcomeNotes?: string | null;
  completedAt?: string | null;
  createdAt: string;
  timestamp: number;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  timestamp: number;
}

export type InsightCategory = 'Investimento' | 'Regulamentação' | 'Sustentabilidade' | 'Mercado';

export interface Insight {
  id: string;
  title: string;
  description: string;
  category: InsightCategory;
  readTime: string;
  icon: 'TrendingUp' | 'Building2' | 'Leaf' | 'BookOpen';
  iconColor: string;
  gradient: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  timestamp?: number;
}
