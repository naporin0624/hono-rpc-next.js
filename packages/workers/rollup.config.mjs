import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig({
  input: {
    index: "src/index.ts",
    route: "src/route/index.ts",
  },
  output: {
    dir: "build",
    format: "esm",
  },
  plugins: [dts({})],
});
