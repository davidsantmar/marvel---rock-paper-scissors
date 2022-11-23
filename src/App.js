import { Provider } from 'react-redux';
import './App.css';
import Arena from './components/Arena';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './redux/stores';
import firebase from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcKfnaCkCQEHWG6cCOa4te3fSggz05hz8",
  authDomain: "marvel-rockpaperscissors.firebaseapp.com",
  projectId: "marvel-rockpaperscissors",
  storageBucket: "marvel-rockpaperscissors.appspot.com",
  messagingSenderId: "280745235683",
  appId: "1:280745235683:web:c4c7cc32250299eb8861d6",
  measurementId: "G-2GXRM9PN29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          <Arena />
          <Footer />
      </div>
    </Provider>
  );
}

export default App;
