// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAryxlrVUeev6zrCx7vGMfY9yR7bN9aS4Q',
    authDomain: 'scoolx-3cef4.firebaseapp.com',
    projectId: 'scoolx-3cef4',
    storageBucket: 'scoolx-3cef4.appspot.com',
    messagingSenderId: '260377741009',
    appId: '1:260377741009:web:5f20bcbe0d0a6d113567f0',
    measurementId: 'G-S49E9F6821',
  },
  contentful: {
    spaceId: 'u7opxkb285ma',
    token: '71qHFK6AYpVp6yxT6hKAqcuDuqp1yTw741VXDi1-AKo',
  },
  stripe: {
    key: 'pk_test_51JssCMSHoIau0eIW0F0Ojtsp4QJgEBIuFejhESLQ7nsGlAJkwLYZmkrL3fcN4weJgY5wndqvtdzDOCNmuqjZzeuZ007H2Mgvxv',
  },

  emulator: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
