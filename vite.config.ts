import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/simple-greeting.ts",
            formats: ["es"]
        },
        rollupOptions: {
            external: [/^lit/]
        }
    }
})