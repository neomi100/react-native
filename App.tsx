import ReactDOM from 'react-dom';
import Shell from './view/Shell';
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
  return (

    <Provider store={store}>
      <Shell />
    </Provider>

  );

}