import type { PostHog } from "posthog-js";

let loading: Promise<PostHog> | undefined;

/** Loads and starts PostHog once. */
export function startAnalytics() {
  loading ??= import("posthog-js").then(({ default: posthog }) => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: "2026-01-30",
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
    });
    return posthog;
  });
  return loading;
}

/** posthog.capture that also works before PostHog has loaded: an early click starts it. */
export function track(...args: Parameters<PostHog["capture"]>) {
  startAnalytics().then((posthog) => posthog.capture(...args));
}
