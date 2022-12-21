import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
	document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10);
	rnd(value);
});

root.render(
	<React.StrictMode>
		<>

		</>
	</React.StrictMode>
);

