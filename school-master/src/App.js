import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Routers';
import { Provider } from 'react-redux';
import  Store from './Store/Store'
import Footer from './Component/Layout/Footer';

function App() {
  return (
    <Provider store={Store()}>
       <Routers/>
       <Footer/>
    </Provider>
  );
}

export default App;
