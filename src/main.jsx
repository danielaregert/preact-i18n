import { render } from 'preact';
import { I18nextProvider } from 'react-i18next';
import App from './app';
import './i18n'; // Esto asegura que i18n se inicialice

render(
  <I18nextProvider i18n={import('./i18n').default}>
    <App />
  </I18nextProvider>,
  document.getElementById('app')
);
