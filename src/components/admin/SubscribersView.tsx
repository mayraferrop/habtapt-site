'use client';

import { motion } from 'motion/react';
import {
  Mail,
  Users,
  Trash2,
} from '../icons';
import { colors, spacing, shadows, radius, typography } from '../../utils/styles';
import { animations } from '../../utils/animations';
import { designSystem } from '../design-system';
import type { Subscriber } from './types';

// Subscribers View
export function SubscribersView({
  subscribers,
  viewMode,
  onDelete,
}: {
  subscribers: Subscriber[];
  viewMode: 'grid' | 'list';
  onDelete: (id: string, email: string) => void;
}) {
  if (subscribers.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          textAlign: 'center',
          padding: spacing[12],
          color: colors.gray[500],
        }}
      >
        <Users size={64} style={{ margin: '0 auto', marginBottom: spacing[4], opacity: 0.3 }} aria-hidden="true" />
        <h3 style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semibold, marginBottom: spacing[2] }}>
          Nenhum subscrito encontrado
        </h3>
        <p style={{ fontSize: typography.fontSize.base }}>As inscrições aparecerão aqui</p>
      </div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <motion.div
        variants={animations.staggerContainer}
        initial="initial"
        animate="animate"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: spacing[5],
        }}
      >
        {subscribers.map((sub) => (
          <motion.div
            key={sub.id}
            variants={animations.fadeInUp}
            style={{
              background: colors.white,
              border: `2px solid ${colors.gray[200]}`,
              borderRadius: radius.xl,
              padding: spacing[5],
              display: 'flex',
              alignItems: 'center',
              gap: spacing[3],
              transition: 'all 0.2s',
            }}
            whileHover={{ y: -4, boxShadow: shadows.md }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: radius.lg,
                background: designSystem.helpers.hexToRgba(colors.success, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={20} style={{ color: colors.success }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: typography.fontWeight.semibold, color: colors.gray[900], marginBottom: spacing[1], overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {sub.email}
              </p>
              <p style={{ fontSize: typography.fontSize.sm, color: colors.gray[500] }}>{sub.subscribedAt}</p>
            </div>
            <button
              onClick={() => onDelete(sub.id, sub.email)}
              aria-label={`Excluir assinante ${sub.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[1],
                padding: `${spacing[2]} ${spacing[3]}`,
                border: `1px solid ${colors.gray[300]}`,
                borderRadius: radius.md,
                fontSize: typography.fontSize.sm,
                color: colors.gray[700],
                background: colors.white,
                cursor: 'pointer',
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <Trash2 size={14} aria-hidden="true" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: `0 ${spacing[2]}` }}>
        <caption className="sr-only">
          Lista de {subscribers.length} subscritos da newsletter HABTA
        </caption>
        <thead>
          <tr>
            {['Email', 'Data de Inscrição', 'Ações'].map((header) => (
              <th
                key={header}
                scope="col"
                style={{
                  textAlign: 'left',
                  padding: spacing[3],
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.gray[600],
                  textTransform: 'uppercase',
                  letterSpacing: typography.letterSpacing.wide,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subscribers.map((sub, index) => (
            <motion.tr
              key={sub.id}
              variants={animations.fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.05 }}
              style={{
                background: colors.white,
                borderRadius: radius.lg,
              }}
              whileHover={{ backgroundColor: colors.gray[50] }}
            >
              <td style={{ padding: spacing[4], fontWeight: typography.fontWeight.semibold, color: colors.gray[900] }}>
                {sub.email}
              </td>
              <td style={{ padding: spacing[4], color: colors.gray[500], fontSize: typography.fontSize.sm }}>
                {sub.subscribedAt}
              </td>
              <td style={{ padding: spacing[4] }}>
                <button
                  onClick={() => onDelete(sub.id, sub.email)}
                  aria-label={`Excluir assinante ${sub.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing[1],
                    padding: `${spacing[2]} ${spacing[3]}`,
                    border: `1px solid ${colors.gray[300]}`,
                    borderRadius: radius.md,
                    fontSize: typography.fontSize.sm,
                    color: colors.gray[700],
                    background: colors.white,
                    cursor: 'pointer',
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  <Trash2 size={14} aria-hidden="true" />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
