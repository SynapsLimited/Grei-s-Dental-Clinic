// src/components/PrivacyPolicy.jsx

import React from 'react';
import './../css/privacypolicy.css'
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to the Zoo Park of Tirana, operated by the Municipality of Tirana. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect your data when you visit our website or use our services.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect the following types of information to provide and improve our services:
        </p>
        <ul>
          <li>Personal Identification Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: Information on how you access and use our website.</li>
          <li>Cookies and Tracking Technologies: To enhance your experience and analyze website traffic.</li>
          <li>Payment Information: If you make purchases or donations, we collect payment details securely.</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used for various purposes, including:
        </p>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To process transactions and manage your bookings or donations.</li>
          <li>To communicate with you, including sending updates and promotional materials.</li>
          <li>To improve our website and services based on your feedback and usage patterns.</li>
          <li>To ensure compliance with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
        </p>
        <ul>
          <li>With your consent.</li>
          <li>To trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep your information confidential.</li>
          <li>To comply with legal requirements, such as responding to subpoenas or court orders.</li>
          <li>To protect the rights, property, or safety of the Zoo Park of Tirana, our users, or others.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies help us improve your browsing experience by remembering your preferences and visit history.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our website may not function properly.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is protected against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information that we hold. You can also request to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.
        </p>
      </section>

      <section>
        <h2>Policy Changes</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you via email or a prominent notice on our website if the changes are significant. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us using the information below:
        </p>
        <ul>
          <li>
            <b>Email:</b> <Link href="mailto:infoDKPZ@tirana.al">infoDKPZ@tirana.al</Link>
          </li>
          <li>
            <b>Phone:</b> +355 69 000 0000
          </li>
          <li>
            <b>Address:</b> Kopshti Zoologjik, Tiranë, Albania
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
