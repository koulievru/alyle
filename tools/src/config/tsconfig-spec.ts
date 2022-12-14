export const tsConfigSpec = {
  'extends': '../../../tsconfig.json',
  'compilerOptions': {
    'outDir': '../../../out-tsc/spec',
    'types': [
      'jasmine',
      'node'
    ]
  },
  'files': [
    'test.ts'
  ],
  'include': [
    '**/*.spec.ts',
    '**/*.d.ts'
  ]
};
