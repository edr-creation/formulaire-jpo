import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDtq9Sy4T4zqHO6kBJj6uvSFOm3IkEuxqE',
  authDomain: 'jpo-projets-nws.firebaseapp.com',
  databaseURL: 'https://jpo-projets-nws.firebaseio.com',
  projectId: 'jpo-projets-nws',
  storageBucket: 'jpo-projets-nws.appspot.com',
  messagingSenderId: '286952341231'
};
firebase.initializeApp(config);
export default firebase;
