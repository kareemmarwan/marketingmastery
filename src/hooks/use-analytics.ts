import { useMutation } from "@tanstack/react-query";

export function useTrackClick() {
  return useMutation({
    mutationFn: async (data: '') => {
      // Fire and forget - we don't block navigation on this
      try {
        await fetch('', {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          credentials: "include",
        });
      } catch (error) {
        // Silently fail for analytics to not disrupt user experience
        console.error("Failed to track click:", error);
      }
    },
  });
}
