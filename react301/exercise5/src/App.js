import './App.css';
import React, {useState, useEffect} from 'react';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

// Translated messages in French with matching IDs to what you declared
const messages = {
  'tr-TR': {
    title: 'Merhaba Dünya',
    description: '{count} yeni mesajınız var.',
  },
  'en-US': {
    title: 'Hello World!',
    description: 'You have {count} new messages.'

  }
}

function App() {

  const isLocale = localStorage.getItem('locale');
  // What is the language of the Browser?
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]} >
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' values={{ count: 3 }} />
        </p>

        <button onClick={() => setLocale('tr-TR')}>TR</button>
        <button onClick={() => setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
