import createCache from "@emotion/cache";

// Client side emotion cache
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}