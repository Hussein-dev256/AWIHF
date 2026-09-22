export const motionTokens = {
  duration: {
    micro: 150,
    short: 220,
    standard: 520,
    long: 720,
  },
  easing: {
    standard: 'cubic-bezier(0.16, 1, 0.3, 1)',
    entrance: 'cubic-bezier(0.22, 1, 0.36, 1)',
    exit: 'cubic-bezier(0.7, 0, 0.84, 0)',
  },
  distance: {
    subtle: 10,
    standard: 20,
    pronounced: 32,
  },
  stagger: {
    compact: 80,
    standard: 110,
  },
} as const;
