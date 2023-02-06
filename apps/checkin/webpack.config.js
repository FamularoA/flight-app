const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'checkin',

  exposes: {
    './Component': './apps/checkin/src/app/app.component.ts',
  },

  sharedMappings: ['@flight-demo/shared/util-auth'],

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
