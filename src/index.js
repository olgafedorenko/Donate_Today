
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';
// import RouterComponent from './router';

// ReactDOM.render(
    
//         <RouterComponent history={browserHistory} />
        
//     , document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import RouterComponent from './router';
import reducers from './reducer';
import { CookiesProvider } from 'react-cookie';


const createStoreWithMiddleware = applyMiddleware(
    promise,
    thunkMiddleware
)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <CookiesProvider>
    <RouterComponent history={browserHistory} />
    </CookiesProvider>
</Provider>
, document.querySelector('#root'));
