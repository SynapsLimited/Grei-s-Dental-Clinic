'use client'

import React from 'react';
import Head from 'next/head';
import './../css/privacypolicy.css';
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <Head>
        <title>{t('PrivacyPolicy.meta.title')}</title>
        <meta name="description" content={t('PrivacyPolicy.meta.description')} />
        <meta name="keywords" content={t('PrivacyPolicy.meta.keywords')} />
        <meta property="og:title" content={t('PrivacyPolicy.meta.ogTitle')} />
        <meta property="og:description" content={t('PrivacyPolicy.meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/privacy-policy" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/privacy-policy-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('PrivacyPolicy.meta.twitterTitle')} />
        <meta name="twitter:description" content={t('PrivacyPolicy.meta.twitterDescription')} />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/privacy-policy-twitter-image.jpg" />
      </Head>
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
    </>
  );
};

export default PrivacyPolicy;