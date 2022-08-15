import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from './App';
import { theme } from './AppTheme';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/rootReducer';
import './satoshi.css';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const logger = createLogger({
  collapsed: true,
  diff: true,
});
const middlewares = [logger];
const root = ReactDOM.createRoot(rootElement);
const store = createStore(rootReducer, applyMiddleware(...middlewares));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();