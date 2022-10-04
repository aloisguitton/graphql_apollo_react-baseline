import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/**/*.gaphql.ts',
  generates: {
    'src/utils/__generated__/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
