/* eslint-disable global-require */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import { SITE_LANG, VARS_CURRENCY } from './config/widgetConfig';

if (process.env.NODE_ENV === 'development') {
  require('@dynamic-framework/ui-react/dist/css/dynamic-ui.css');
}
require('./styles/base.scss');

const root = ReactDOM.createRoot(document.getElementById('widgetName') as Element);
root.render(
  <StrictMode>
    <DContextProvider
      language={SITE_LANG}
      currency={VARS_CURRENCY}
    >
      <App />
    </DContextProvider>
  </StrictMode>,
);
