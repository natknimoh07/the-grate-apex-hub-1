import Svg, { Path } from 'react-native-svg';

import { higherTier, useVerifiedTier, verifiedTierOf } from '@/data/verified';

// The verified tick (X-style scalloped badge with a check): gold or blue.
// Legends (top 5 lifetime XP) get a blue star with a check instead.
// These are badge colours, the same on every theme (like X).
const TIER_COLORS = {
  gold: { fill: '#F4B400', stroke: '#C98A00' },
  blue: { fill: '#1D9BF0', stroke: '#1A7FC4' },
  legend: { fill: '#1D9BF0', stroke: '#0F6CB8' },
} as const;

export function VerifiedBadge({ username, uid, size = 16 }: { username?: string | null; uid?: string | null; size?: number }) {
  const byList = verifiedTierOf(username);
  const byUid = useVerifiedTier(byList === 'legend' ? null : uid);
  const tier = higherTier(byList, byUid);
  if (!tier) return null;
  const colors = TIER_COLORS[tier];
  if (tier === 'legend') {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" accessibilityLabel="Legend: top 5 lifetime XP" accessibilityRole="image">
        <Path
          d="M12 1.2l3.1 6.5 7.1.9-5.2 4.9 1.3 7.1L12 17.2l-6.3 3.4 1.3-7.1-5.2-4.9 7.1-.9z"
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth={0.8}
          strokeLinejoin="round"
        />
        <Path d="m8.4 11.6 2.5 2.5 4.7-4.8" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" accessibilityLabel={tier === 'gold' ? 'Verified (gold)' : 'Verified'} accessibilityRole="image">
      <Path
        d="M12 1.6l2.3 1.7 2.8-.3 1.1 2.6 2.6 1.1-.3 2.8 1.7 2.3-1.7 2.3.3 2.8-2.6 1.1-1.1 2.6-2.8-.3L12 22.4l-2.3-1.7-2.8.3-1.1-2.6-2.6-1.1.3-2.8L1.6 12l1.7-2.3-.3-2.8 2.6-1.1L6.7 3.2l2.8.3z"
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth={0.6}
      />
      <Path d="m7.6 12.2 3 3 5.8-6" fill="none" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
