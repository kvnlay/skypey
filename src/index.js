import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from "./store";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
  console.log(store.getState());
}

const render = () => {
  fancyLog();
  return ReactDOM.render(<Provider store={store}>
                          <App />
                        </Provider>, document.getElementById('root'));
}
store.subscribe(render);
render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
