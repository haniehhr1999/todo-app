import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e3f2ff" },
          100: { value: "#b3daff" },
          200: { value: "#81c1ff" },
          300: { value: "#4fa8ff" },
          400: { value: "#1d90ff" },
          500: { value: "#0476e6" },
          600: { value: "#005bb4" },
          700: { value: "#004082" },
          800: { value: "#002651" },
          900: { value: "#000c21" },
        },
      },
    },
  },
});

const system = createSystem(config);

export default system;
