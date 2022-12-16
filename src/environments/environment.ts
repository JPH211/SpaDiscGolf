// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy0Rlb_5TLqLjNbKa6gSDftsmanOWcwTo",
  authDomain: "spadiscgolf.firebaseapp.com",
  databaseURL: "https://spadiscgolf-default-rtdb.firebaseio.com",
  projectId: "spadiscgolf",
  storageBucket: "spadiscgolf.appspot.com",
  messagingSenderId: "847534250110",
  appId: "1:847534250110:web:46570f43fa180bf78ce02f",
  measurementId: "G-3C81H45YMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  API_URL: `https://spadiscgolf-default-rtdb.firebaseio.com/`,
  API_KEY: 'AIzaSyDy0Rlb_5TLqLjNbKa6gSDftsmanOWcwTo',
  minHoles: 1,
  minYards: 10
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
