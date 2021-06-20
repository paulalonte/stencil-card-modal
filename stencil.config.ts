import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'card-modal',
  globalStyle: 'src/global/main.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ]
};
