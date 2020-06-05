import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import actions from './actions';
import reducers from './reducers';
import App from './App';  
import './index.css';
import * as serviceWorker from './serviceWorker';

const dataA = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];
const dataB = [
  createData('00:00', 2400),
  createData('03:00', 2000),
  createData('06:00', 1500),
  createData('09:00', 800),
  createData('12:00', 600),
  createData('15:00', 600),
  createData('18:00', 300),
  createData('21:00', 0),
  createData('24:00', undefined),
];

function createData(time, amount) {
  return { time, amount };
}

const store = configureStore(reducers, {});
store.dispatch(actions.chart.add('daily', dataA));
store.dispatch(actions.chart.add('monthly', dataB));
store.dispatch(actions.chart.get('daily'));

const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>),
    document.getElementById('root')
  );
}
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
