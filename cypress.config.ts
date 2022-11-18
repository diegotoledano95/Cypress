import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://www.liverpool.com.mx/",
    chromeWebSecurity: false
  }
})



//import * as path from 'path';
//const wp = require('@cypress/webpack-preprocessor')
//
//export default defineConfig({
//  video: false,
//  e2e: {
//    // We've imported your old cypress plugins here.
//    // You may want to clean this up later by importing these.
//    setupNodeEvents(on, config) {
//      const options = {
//        webpackOptions: {
//          resolve: {
//            extensions: ['.ts', '.tsx', '.js'],
//            alias: { 
//              '@': path.resolve(__dirname, 'cypress')            }
//          },
//          module: {
//            rules: [
//              {
//                test: /\.tsx?$/,
//                loader: 'awesome-typescript-loader',
//                options: { transpileOnly: true }
//              },
//              {
//                test: /\.gql$/,
//                loader: 'raw-loader'
//              }
//            ]
//          }
//        },
//      };
//      on('file:preprocessor', wp(options));
//    },
//    baseUrl: 'http://localhost:4000',
//    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
//  },
//});
