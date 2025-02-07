import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <nav className="mb-[20px] bg-white w-full  flex justify-between items-center">
        <Link className="relative z-[6]" href="/">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </Link>

        <Button />
      </nav>

      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last updated: February 4, 2025
      </p>

      <p className="mb-4">
        Welcome to Cognitive Finance! This Privacy Policy describes our policies
        and procedures on the collection, use, and disclosure of your
        information when you use our Services. It also explains your privacy
        rights and how the law protects you.
      </p>

      <p className="mb-4">
        We use your personal data to provide and improve the Service. By using
        the Service, you agree to the collection and use of information in
        accordance with this Privacy Policy. Individuals in the European
        Economic Area and the European Free Trade Association may have
        additional rights as described in the GDPR Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Definitions</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Account:</strong> A unique account created for you to access
          our Service.
        </li>
        <li>
          <strong>Company:</strong> Cognitive Finance ("We", "Us", "Our").
        </li>
        <li>
          <strong>Cookies:</strong> Small files stored on your device to track
          usage and improve service.
        </li>
        <li>
          <strong>Country:</strong> United Arab Emirates
        </li>
        <li>
          <strong>Device:</strong> Any device such as a computer, cellphone, or
          tablet that accesses the Service.
        </li>
        <li>
          <strong>Personal Data:</strong> Any information that relates to an
          identifiable individual.
        </li>
        <li>
          <strong>Service:</strong> The Website and associated products.
        </li>
        <li>
          <strong>Service Provider:</strong> Third-party companies assisting in
          service facilitation.
        </li>
        <li>
          <strong>Usage Data:</strong> Data collected automatically from service
          usage.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Types of Data Collected
      </h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
      <p className="mb-4">
        While using our Service, we may ask you to provide personally
        identifiable information including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
        <li>Proof of Identity</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
      <p className="mb-4">
        Usage Data is collected automatically and includes information such as
        IP address, browser type, pages visited, and time spent.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Tracking Technologies and Cookies
      </h3>
      <p className="mb-4">
        We use cookies and similar tracking technologies to monitor and analyze
        the use of our Service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Use of Your Personal Data
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our Service.</li>
        <li>To manage your Account and registration.</li>
        <li>To comply with legal obligations.</li>
        <li>To improve our Service, marketing, and user experience.</li>
        <li>To contact you regarding updates and information.</li>
        <li>To ensure security and fraud prevention.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Retention of Your Personal Data
      </h2>
      <p className="mb-4">
        We will retain your Personal Data as necessary to comply with legal
        obligations, resolve disputes, and enforce agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Transfer of Your Personal Data
      </h2>
      <p className="mb-4">
        Your information may be transferred to and maintained on computers
        outside of your jurisdiction where data laws may differ.
      </p>

      <p className="mt-6">
        For more details, contact us at{" "}
        <strong>privacy@cognitivefinance.xyz</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
