import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(
      'phc_D2SarLNCWdMadMM7Jcf9r6fo1THUZlpaLqhoIB33J2c',
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
