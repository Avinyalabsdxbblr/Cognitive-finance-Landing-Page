import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <nav className="mb-[20px] bg-white w-full  flex justify-between items-center">
        <Link className="relative z-[6]" href="/">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </Link>

        <Button />
      </nav>

      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <h2 className="text-xl font-semibold mb-2">
        User Agreement and Terms of Use
      </h2>

      <p className="mb-4">
        Welcome to Cognitive! This is a User Agreement between you (also
        referred to herein as “Client,” “User,” or customer) and Aperture
        pertaining to purchase, acquisition, and use of its software and app.
        This User Agreement ("Agreement") governs your use of the services,
        technologies, or products provided by Cognitive ("Cognitive Services" or
        "Services"). By using the Services, you agree that you have read,
        understand, and accept all of the terms and conditions contained in
        these Terms including Section 8. "Arbitration; Waiver of Class Action",
        as well as our Privacy Policy.
      </p>

      <p className="mb-4">
        As with any asset, the value of Digital Currencies can go up or down and
        there can be a substantial risk that you lose money buying, selling,
        holding, or investing in digital currencies. You should carefully
        consider whether trading or holding Digital Currencies is suitable for
        you in light of your financial condition. Cognitive is not registered
        with the U.S. Securities and Exchange Commission and does not offer
        securities services in the United States or to U.S. persons.
        Additionally, this is not a solicitation for investment.
      </p>

      <p className="mb-4">
        PLEASE READ THE FOLLOWING TERMS CAREFULLY FOR APERTURE’S SERVICES. THERE
        ARE RISKS ASSOCIATED WITH THE VALUE OF CRYPTOGRAPHIC TOKENS,
        STABLECOINS, AND BLOCKCHAIN-BASED TECHNOLOGIES. IT IS ADVISABLE THAT
        ONLY THOSE WELL-VERSED IN THESE TECHNOLOGIES CHOOSE TO PURCHASE OR STAKE
        TOKENS. PURSUANT TO BELOW SECTIONS, USERS AGREE TO VARIOUS DISCLAIMERS.
        THIRD-PARTY WEBSITES, SUCH AS THE DECENTRALIZED FINANCE (“DEFI”)
        PROTOCOLS APPEARING ON APERTURE’S SERVICES, MAY HAVE ADDITIONAL TERMS OF
        SERVICE THAT APPLY. USE OF THIS SITE AND THESE TECHNOLOGIES IS ENTIRELY
        AT YOUR OWN RISK.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Overview of Products and Services
      </h2>
      <p className="mb-4">
        1.1 Cognitive’s DeFi Yield Aggregator “Invest” and “Invest +”
      </p>
      <p className="mb-4">
        Cognitive’s service and software “Invest” displays a collection of
        various DeFi yield protocols that includes objective data about the
        protocols, such as the yield percentages and the auditing they conduct
        in addition to other factors that may be helpful to someone assessing
        the risk of a potential investment in a DeFi protocol. Aperture does not
        independently verify the information provided by these platforms and
        protocols. IT IS THE USER’S RESPONSIBILITY TO VERIFY THIS INFORMATION
        DIRECTLY WITH THE PLATFORM OR PROTOCOL.
      </p>

      <p className="mb-4">1.2 COF Token</p>
      <p className="mb-4">
        Cognitive aims to launch the Cognitive Token (“COF”), which will serve
        as a utility token for transacting on the Cognitive decentralized
        ecosystem, including generating yield for token stakers and serving as
        the governance token.
      </p>

      <p className="mb-4">1.3 Exclusion of Supplemental Protocols</p>
      <p className="mb-4">
        Unless explicitly announced on the Aperture Site or other official
        public statement of Aperture, supported digital currencies exclude all
        other protocols and/or functionality which supplement or interact with
        the supported digital currencies and platforms. This exclusion includes
        but is not limited to: metacoins, colored coins, side chains, or other
        derivative, enhanced, or forked protocols, tokens, or coins or other
        functionality, such as staking, protocol governance, and/or any smart
        contract functionality, which may supplement or interact with any of
        protocols listed. Any attempted transactions in such items may result in
        loss of the tokens or other losses.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Arbitration; Waiver of Class Action
      </h2>
      <p className="mb-4">
        8.1 Formal Complaint Process. If you have a dispute with Cognitive (a
        “Complaint”), you agree to contact Cognitive through our support team to
        attempt to resolve any such dispute amicably. If we cannot resolve the
        dispute through the Cognitive support team, you and we agree to use the
        Formal Complaint Process set forth below.
      </p>

      <p className="mb-4">
        8.2 Procedural Steps. In the event that your dispute with Aperture is
        not resolved through your contact with Cognitive Support, you agree to
        use our Complaint form to describe your Complaint, how you would like us
        to resolve the Complaint, and any other information related to your
        dispute that you believe to be relevant.
      </p>

      <p className="mb-4">
        8.3 Cognitive Response. We will acknowledge receipt of your Complaint
        form after you submit it. An Cognitive customer relations agent
        ("Agent") will review your Complaint. The Agent will evaluate your
        Complaint based on the information you have provided and information in
        the possession of Cognitive.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Miscellaneous</h2>
      <p className="mb-4">
        These Terms, together with the Privacy Policy and any Additional Terms,
        are the entire and exclusive understanding and agreement between you and
        Aperture regarding your use of the Site.
      </p>

      <p className="mt-6">
        For more details, contact us at{" "}
        <strong>contact@cognitivefinance.xyz</strong>.
      </p>
    </div>
  );
};

export default TermsOfService;
