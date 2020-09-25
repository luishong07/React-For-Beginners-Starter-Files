import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp  =  firebase.initializeApp({
    apiKey: "AIzaSyCbpZWN44I8CwW5_R-83L9Mmfle-fB67nE",
    authDomain: "catch-of-the-day-luis-hong.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-luis-hong.firebaseio.com"
    
  })

  const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
