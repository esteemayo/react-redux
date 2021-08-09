import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import axios from 'axios';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer />
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
