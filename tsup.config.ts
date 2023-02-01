import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/index.ts'],

  format: ["cjs"],

  dts: false,

  splitting: false,

  sourcemap: false,

  clean: true
});

