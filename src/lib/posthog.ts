import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(
      import.meta.env.VITE_POSTHOG_KEY || 'phc_placeholder',
      {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll capture manually with router
        capture_pageleave: true,
      }
    );
  }
};

export { posthog };
