import * as Sentry from '@sentry/nextjs';

const { SENTRY_DSN } = process.env;

Sentry.init({
  dsn: SENTRY_DSN,

  tracesSampleRate: 1.0,
});
