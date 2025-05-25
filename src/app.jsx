
import { h } from 'preact';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen flex flex-col font-sans">
      <header className="flex justify-end p-4">
        <button
          onClick={toggleLang}
          className="fixed inline-flex items-center justify-center border border-blue-500 text-blue-500 font-medium text-sm py-2 px-4 rounded-full hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition duration-150"
        >
          {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16">
          
          
          <p className="text-xl md:text-2xl mb-6">{t('hero.title')}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-1 md:mb-4">{t('hero.subtitle')}</h1>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 w-80 md:w-full"
          >{t('hero.tagline')}</p>
        </section>

     

        {/* Importancia */}
        <section className="bg-white pt-20 px-6 ">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">{t('importance.title')}</h2>
            <p className="text-lg text-gray-700">{t('importance.description')}</p>
          </div>
        </section>

   {/* Proceso */}
  
  <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    
    {/* Título */}
    <div className="">
      <h2 className="inline-flex items-center justify-center border border-blue-500 text-blue-500 font-medium text-sm py-2 px-4 rounded-full hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition duration-150 mb-4">
        {t('steps.title')}
      </h2>
    </div>

    {/* Primeras dos columnas */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">{t('steps.step1')}</h3>
        <p className="text-gray-700">{t('steps.step1-sub')}</p>
      </div>

      <div className="lg:h-60 bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">{t('steps.step2')}</h3>
        <p className="text-gray-700">{t('steps.step2-sub')}</p>
      </div>
    </div>

    {/* Última columna centrada */}
    <div className="grid grid-cols-1">
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">{t('steps.step3')}</h3>
        <p className="text-gray-700">{t('steps.step3-sub')}</p>
      </div>
    </div>

  </div>
</section>


 {/* Valor */}
        <section className="pb-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl text-blue-600 md:text-3xl font-semibold mb-4">{t('value.title')}</h2>
            <p className="text-lg text-gray-700">{t('value.description')}</p>
             <button className="me-2 mt-5 inline-flex items-center justify-center border border-blue-500 text-blue-500 font-medium text-sm py-2 px-4 rounded-full hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition duration-150"
            href="mailto:contacto@gmail.com">{t('value.calendly')}</button>
          </div>
        </section>

      

        {/* Cierre */}
        <section className="py-20 px-6 bg-black text-white hidden">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t('closing.title')}</h2>
            <p className="text-lg">{t('closing.description')}</p>
          </div>
        </section>
      </main>
      <footer className="text-sm text-center text-gray-400 py-6">
{t('footer.copy')}
</footer>
    </div>
  );
}
