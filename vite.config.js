import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/index.js",
            name: "CtrlFProUIElements",
            fileName: "ctrlfpro-ui-elements",
        },
        rollupOptions: {
            external: ["react", "react-dom"], // nebal React dovnitř
        },
    },
});
