import logo from './logo.svg';
import './App.css';
import { Main } from './modules/Main';
import { Provider } from 'react-redux';
import { store } from './modules/store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
