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
            // IMPORTANT: do not bundle React inside library
            external: ["react", "react-dom", "prop-types"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "prop-types": "PropTypes",
                },
            },
        },
    },
});
