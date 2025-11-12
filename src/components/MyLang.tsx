import { DButton } from '@dynamic-framework/ui-react';
import { useState } from 'react';

import { changeLanguage } from '../config/i18nConfig';
import { SITE_LANG } from '../config/widgetConfig';

export default function MyLang() {
  const [lang, setLang] = useState(SITE_LANG);

  const changeLangHandler = (newLang: 'es' | 'en') => {
    changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className="d-flex gap-1 ms-auto">
      <DButton
        text="Es"
        onClick={() => changeLangHandler('es')}
        variant={lang === 'es' ? undefined : 'outline'}
        size="sm"
      />
      <DButton
        text="En"
        onClick={() => changeLangHandler('en')}
        variant={lang === 'en' ? undefined : 'outline'}
        size="sm"
      />
    </div>
  );
}
