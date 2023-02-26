
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "src/graphql": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
