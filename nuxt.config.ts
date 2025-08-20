import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.css"],

  imports: {
    dirs: ["composables"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    [
      "shadcn-nuxt",
      {
        prefix: "",
        componentDir: "./components/ui",
      },
    ],
  ],
});
