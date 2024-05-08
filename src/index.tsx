import { DContextProvider } from '@dynamic-framework/ui-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('widgetName') as Element);
root.render(
  <StrictMode>
    <DContextProvider>
      <App />
    </DContextProvider>
  </StrictMode>,
);
