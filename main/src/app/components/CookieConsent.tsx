// src/components/CookieConsent.tsx

'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './../css/cookieconsent.css';
import { useTranslation } from 'react-i18next';

const CookieConsent: React.FC = () => {
  const { t } = useTranslation('translation');
  const [showConsent, setShowConsent] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('zooparkCookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('zooparkCookieConsent', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('zooparkCookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">
        <p>
          {t('CookieConsent.message')}
          <Link href="/privacypolicy" className="cookie-consent__link text-whitecd">
            {t('CookieConsent.privacyPolicy')}
          </Link>.
        </p>
        <div className="cookie-consent__buttons">
          <button className="cookie-consent__button accept" onClick={acceptCookies}>
            {t('CookieConsent.accept')}
          </button>
          <button className="cookie-consent__button decline" onClick={declineCookies}>
            {t('CookieConsent.decline')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
