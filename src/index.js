import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App/>	
			</Provider>
		</React.StrictMode>
	);


