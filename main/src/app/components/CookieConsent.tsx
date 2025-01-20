// src/components/CookieConsent.tsx

'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './../css/cookieconsent.css';

const CookieConsent: React.FC = () => {
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
        We use cookies and similar technologies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts. By continuing to browse our site, you consent to our use of these technologies. You can manage your cookie preferences or learn more about our use of cookies by visiting our 
        <Link href="/privacypolicy" className="cookie-consent__link">Privacy Policy</Link>.
        </p>
        <div className="cookie-consent__buttons">
          <button className="cookie-consent__button accept" onClick={acceptCookies}>
            Accept
          </button>
          <button className="cookie-consent__button decline" onClick={declineCookies}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
