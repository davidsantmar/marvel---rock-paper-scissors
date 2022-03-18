import { Provider } from 'react-redux';
import './App.css';
import Arena from './components/Arena';
import Footer from './components/Footer';
import Header from './components/Header';
import Score from './components/Score';
import store from './redux/stores'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          <Score />
          <Arena />
          <Footer />
      </div>
    </Provider>
  );
}

export default App;
