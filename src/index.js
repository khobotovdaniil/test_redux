import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

// const {dispatch, subscribe, getState} = store;
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const update = () => {
	root.render(
		<React.StrictMode>
			{/* <Counter
				counter={getState().value}
				inc={inc}
				dec={dec}
				rnd={() => {
					const value = Math.floor(Math.random() * 10);
					rnd(value);
				}}
			/> */}
			<Provider store={store}>
				<App/>	
			</Provider>
		</React.StrictMode>
	);
// }

// update();
// subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
	// const value = Math.floor(Math.random() * 10);
	// rnd(value);
// });



