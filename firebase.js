// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaifvQtqmevtGMr5IRboPA8-aNrr7Qmco",
    authDomain: "sihinvoice.firebaseapp.com",
    projectId: "sihinvoice",
    storageBucket: "sihinvoice.appspot.com",
    messagingSenderId: "265747400849",
    appId: "1:265747400849:web:37311425dccab012615730",
    measurementId: "G-JR6NBMTTNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

const analytics = getAnalytics(app);

export { app, auth, analytics, signOut, storage };





//Storage setup

export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(Storage, currentUser.uid + '.pdf');

    getDownloadURL(fileRef)
    const snapshot = await uploadBytes(fileRef, file);
    setLoading(true);
}