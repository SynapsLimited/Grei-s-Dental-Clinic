// src/components/PrivacyPolicy.tsx
'use client'

import React from 'react';
import './../css/privacypolicy.css';

import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('translation');

  return (
    <div className="privacy-policy-container container">
      <h1>{t('PrivacyPolicy.title')}</h1>

      <section>
        <h2>{t('PrivacyPolicy.sections.introduction')}</h2>
        <p>{t('PrivacyPolicy.sections.introText')}</p>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.informationWeCollect')}</h2>
        <p>{t('PrivacyPolicy.sections.informationWeCollectText')}</p>
        <ul>
          {(t('PrivacyPolicy.sections.informationList', { returnObjects: true }) as string[]).map(
            (item: string, index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.howWeUseYourInformation')}</h2>
        <p>{t('PrivacyPolicy.sections.howWeUseYourInformationText')}</p>
        <ul>
          {(t('PrivacyPolicy.sections.useList', { returnObjects: true }) as string[]).map(
            (item: string, index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.informationSharing')}</h2>
        <p>{t('PrivacyPolicy.sections.informationSharingText')}</p>
        <ul>
          {(t('PrivacyPolicy.sections.sharingList', { returnObjects: true }) as string[]).map(
            (item: string, index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.cookies')}</h2>
        <p>{t('PrivacyPolicy.sections.cookiesText1')}</p>
        <p>{t('PrivacyPolicy.sections.cookiesText2')}</p>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.dataSecurity')}</h2>
        <p>{t('PrivacyPolicy.sections.dataSecurityText')}</p>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.yourRights')}</h2>
        <p>{t('PrivacyPolicy.sections.yourRightsText')}</p>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.policyChanges')}</h2>
        <p>{t('PrivacyPolicy.sections.policyChangesText')}</p>
      </section>

      <section>
        <h2>{t('PrivacyPolicy.sections.contactUs')}</h2>
        <p>{t('PrivacyPolicy.sections.contactUsText')}</p>
        <ul>
          {(t('PrivacyPolicy.sections.contactList', { returnObjects: true }) as string[]).map(
            (item: string, index: number) => (
              <li key={index}>
                <b>{item.split(':')[0]}:</b> {item.split(':')[1].trim()}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
