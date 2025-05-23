
import { h } from 'preact';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    

    <main class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 gap-6">
      <div>
        <h1 class="text-4xl font-bold text-blue-600 mb-4 font-sans">{t('welcome')}</h1>
      </div>

      <div class="text-center">
        <p class="mt-4 text-gray-700">{t('description')}</p>
        <h1 class="text-3xl font-semibold mb-2"></h1>
        <p class="text-lg mb-4">{t('description')}</p>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={toggleLang}
        >
          {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </div>
    </main>
  );
}
