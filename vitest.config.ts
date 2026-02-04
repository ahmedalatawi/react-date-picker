import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: [
        "src/components/DateTimePicker",
        "src/components/TimePicker",
        "src/hooks",
        "src/utils",
      ],
    },
  },
});
