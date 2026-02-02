'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import classNames from 'classnames';
 
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const privacyPolicyData = [
  {
    id: 1,
    name: 'APPLICATION OF THIS PRIVACY POLICY',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]"  >
    This Privacy Policy serves to set out our approach to personal data, inclusive of personal data of our Users. This Privacy Policy applies to systems, operations and processes of Sunga that involve the collection, use, storage, and disclosure etc. of personal information of our Users.
    </p>
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
    This Privacy Policy applies to the use of our website at https://sunga.africa, and all affiliated websites and applications owned and operated by us (collectively, the "Website"), applications, other online services and/or any related services, sales, marketing, promotional or events, and social media activities (together with the Website, our "Services"). Currently, this Website operates only in Zambia, and is only available to users who have Zambian bank accounts. For our Users, this Privacy Policy is part of our Terms of Use. and applies to your offline interactions with Sunga.                
    </p>
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
When you submit an inquiry to us via any means, register for a Sunga account, register to attend a Sunga event, interact with us on social media, partake in competitions and promotional activities and volunteer information to us; we may collect personal information from you, which may include your name, email address, mobile phone number, banking information, image and other information that identifies you (collectively, "Personal Information"). By accessing or using our Services, you agree to this Privacy Policy.    </p>
                
                `,
    status: false
  },
  {
    id: 2,
    name: 'GUIDING PRINCIPLE',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
Sunga is committed to maintaining the principles in the Data Protection Act No. 3 of 2021, Zambia and other applicable privacy and data protection laws regarding the processing of Personal Information.
    </p>
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
To demonstrate this commitment as well as our aim of creating a positive privacy culture within Sunga, Sunga adheres to the following basic principles relating to the processing of Personal Information: lawfulness, fairness and transparency; data accuracy; purpose limitation; data minimization; storage limitation; integrity and confidentiality; and accountability.
    </p>
    `,
    status: false
  },
  {
    id: 3,
    name: 'LAWFUL BASIS FOR USE OF YOUR PERSONAL INFORMATION',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
      We may process your Personal Information under any of the bases provided below as recognised by data protection laws:
    </p>

    <div class="mt-3">
    <b>Consent</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      By using our Services, you consent to the terms of this Privacy Policy, as to allow us to utilise your data to serve you more accurately.
    </p>
    </div>
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
      By accessing our Services and voluntarily providing us with the requested Personal Information, you consent to the collection and use of the information in accordance with this Privacy Policy. 
    </p>

    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        Your consent can be withdrawn at any time by sending a request to that effect to this e-mail: hello@sunga.africa. If you do not consent to the collection, use or disclosure of your Personal Information as outlined in this Privacy Policy, please do not provide any Personal Information to Sunga.
    </p>

     <div class="mt-3">
    <b>Contractual obligations</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      We may process your Personal Information to fulfil our contractual obligations such as providing our Services to you or to take necessary actions at your request before providing our Services to you. This enables us to provide you with the Services you request.
    </p>
    <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      When you enter into a contract with us, such as subscribing to our Services, or engaging in a business agreement, we need to use your Personal Information to carry out our commitments. This includes processing information such as your name, contact details, payment information, and any other data necessary to deliver the agreed-upon Services or products. Without this data, we would be unable to complete transactions or manage our contractual relationship effectively.
    </p>
    </div>

    <div class="mt-3">
    <b>Legal obligations</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      We may also process your Personal Information to fulfil our legal obligations mandated by Zambian law. This includes sharing financial information for tax reporting and accounting, and using employment data to comply with labour laws, payroll requirements, and health and safety regulations. We may also process Personal Information to adhere to legal requests, court orders, and regulatory requirements.
    </p>
    </div>


     <div class="mt-3">
    <b>Legitimate Interest</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
        We may also process your Personal Information on the grounds of legitimate interest such as fraud investigation and prevention, to safeguard our IT systems, and for user-tailored marketing. We may process personal data on this basis as long as same is not in contravention of the other lawful bases, fundamental rights or freedoms of our users or where users would not have a reasonable expectation that the personal data would be processed in the manner envisaged.
    </p>
    </div>

      <div class="mt-3">
    <b>Vital Interest
</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
        We may process your Personal information if necessary to protect your vital interests or the interests of another natural person, where the data subject is physically or legally incapable of giving consent such as in the event of a claim for any amounts in the account of a deceased User by the User’s next-of-kin.
    </p>
    </div>

       <div class="mt-3">
    <b>Public Interest
          </b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      We may process your Personal Information if necessary to perform an obligation in the public interest or by virtue of an official authority bestowed on us.
    </p>
    <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      These lawful bases may be extended to cover any additional grounds for the processing of personal data as may be recognised by data protection laws in force from time to time.
    </p>
    </div>
    `,
    status: false
  },
  {
    id: 4,
    name: 'INFORMATION WE COLLECT AND HOW WE COLLECT IT',
    description: ` 
     <div class="mt-3">
    <b>Information You Provide Us

</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      In general, you can visit https://www.sunga.africa without telling us who you are or revealing any information about yourself.
    </p>
    </div>

     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
        As a User, we will also ask you to create login information for your Sunga account, such as a username and password. When you provide your mobile phone number, we may ask for your consent to receive text messages relating to our Services on that number.
    </p>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      In general, we collect Personal Information you give us by filling out forms or by corresponding with us by phone, email, social media posts & messages, or otherwise.
    </p>

    <div class="mt-3">
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          By providing your Personal Information and any other kind of information or data to us, you expressly agree to our collection, use, storage, and disclosure of such information as described in this Privacy Policy. We may receive, use, store and transfer different kinds of Personal Information about you, including but not limited to the following;
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Identity Data: which includes your first name, last name, maiden name (where applicable), username or similar identifier, marital status, title, date of birth and gender.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Contact Data: which includes your billing address, delivery address, email address and telephone numbers. 
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Transaction Data: which includes details about your transactions, bank account and/or payment card details.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Device Data which includes information on the Devices with which you access the Website (for example, your Device’s IMEI number, the MAC address of the Device’s wireless network interface, or the mobile phone number used by the Device), mobile network information, your operating system, the type of mobile browser you use, time zone setting.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Profile Data: which includes your username and password, picture, transaction history,purchase history, your interests, preferences, feedback and survey responses.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Usage  Data: which includes details of your use of our Services. We may aggregate your usage information to calculate the percentage of Users accessing a specific Website feature.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Marketing and Communications Data: which includes your preferences in receiving marketing from us and our third parties and your communication preferences.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Location  Data: which includes your current location disclosed by GPS technology or any other location territory.
</li>
        </ul>
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            We also collect, use, and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific App feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
        </p>
        <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
          We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.        
        </p>

    </div>

       <div class="mt-3">
    <b>Information About Your Transactions

</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We collect Personal Information about your transactions with us and others.
    </p>
    </div>

         <div class="mt-3">
    <b>Information from Third Parties

</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We also collect Personal Information about you from other companies. For instance, we may receive Personal Information about you from a consumer reporting agency or we may collect Personal Information from your employer where your employer is providing a service to Sunga.
    </p>
    <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We may collect your Personal Information from a User where your Personal Information is filled in a Next-of-Kin form.
    </p>
    </div>
    
          <div class="mt-3">
    <b>Information Automatically Collected


</b>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
      We (or service providers acting on our behalf) may collect information about your use of our Services. This information may include Personal Information as well as statistical information that does not identify you ("Analytics"). Some Analytics may be correlated with Personal Information. When Analytics are, directly or indirectly, associated or combined with Personal Information, such Analytics will be considered Personal Information for purposes of this Privacy Policy.
    </p>
    <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
Information that we automatically collect in connection with your access or use of our Services may include:
    </p>
    <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
Device Information: We may collect Device-specific information (such as hardware model, operating system version, unique Device identifiers, and mobile network Information, including your mobile phone number). We may associate your Device identifiers or mobile phone number with your Sunga account.
    </p>
    </div>

     <div class="mt-3">
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
Log Information: We may record or log information from your Devices, their software, and your activity accessing or using our Services. This information may include:
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >The Device's Internet Protocol ("IP") address
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Identification numbers associated with your Devices
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Device event information, such as crashes, system activity, and hardware settings
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Location preferences
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Date and time stamps of transactions
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >System configuration information
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Other interactions with our Services
</li>
        </ul>
    </div>
    `,
    status: false
  },
  {
    id: 5,
    name: 'FACE DATA COLLECTION AND USE',
    description: `
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
        Sunga respects your privacy and is committed to protecting the personal information we collect. We may collect facial data solely to facilitate identity verification, enhance user security, and improve the user experience on our platform.
        </p>

         <div class="mt-3">
          <b>Collection of Face Data</b>
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            Sunga may collect face data through our mobile application. This data is captured during certain in-app activities requiring identity verification, such as account creation, transaction authorization, or to access specific features of the app that need enhanced security. Sunga only collects face data with the user’s explicit consent, which can be withdrawn at any time.
          </p>
    </div>

    <div class="mt-3">
              <b>Use of Face Data
</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          The face data collected will be used exclusively for:
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Identity Verification: Ensuring the identity of users to prevent fraud and unauthorized access.</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Security Enhancements: Providing additional layers of security, such as facial recognition for app login.</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Service Improvement: Using aggregate, anonymized data to enhance the quality and functionality of our services.</li>
        </ul>
    </div>
    <div class="mt-3">
        <b>Disclosure and Sharing of Face Data</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            Sunga does not disclose or share face data with any third parties except:
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Service Providers: Trusted third-party providers assisting in identity verification and security features, who are bound by confidentiality agreements.</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Legal Compliance: If required by law, Sunga may disclose face data in response to valid legal processes, such as a court order or a subpoena.</li>
        </ul>
    </div>
    <div class="mt-3">
          <b>Retention and Deletion of Face Data</b>
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
              Face data is retained only as long as necessary for identity verification purposes and as required by law. Users may request the deletion of their face data, and we will promptly honor such requests, subject to legal and regulatory requirements.
          </p>
    </div>
    <div class="mt-3">
          <b>User Control and Data Security</b>
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            Users have control over their face data within the app settings and can enable or disable facial recognition features. Sunga employs stringent security measures to safeguard face data, including encryption and secure storage protocols, to prevent unauthorized access, use, or disclosure. <br /> Information Collected Through Cookies and Similar Technologies

          </p>
    </div>    
    `,
    status: false
  },
  {
    id: 6,
    name: 'COOKIES',
    description: `
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We use cookies and/or other tracking technologies to distinguish you from other users of the Website, Apps, or Services Sites and to remember your preferences. This helps us to provide you with a good experience when you use our Services. 
          </p>

           <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
              The cookies we may use in connection with our Services include: <br /> Session cookies:.Session cookies are temporary and automatically deleted when you close your browser. We use them to provide Users with access to content and to allow actions that require being logged into a Sunga account.
          </p>
            <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
             Persistent cookies:
 <br /> Session cookies:Persistent cookies usually have an expiration date in the distant future and remain in your browser until they expire, or you manually delete them. We use persistent cookies to better understand usage patterns so we can improve our Services. For example, we may use a persistent cookie to associate you with your Sunga account or to remember your choices for our Services.Persistent cookies have a distant expiration date and stay in your browser until they expire or you delete them. We use them to understand user patterns better, which helps us improve our Services. For instance, a persistent cookie might link you to your Sunga account or recall your preferences for our Services.
        </p>
            <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
Third-party cookies:
 <br /> We allow specific third parties to deploy cookies through our Services to furnish us with enhanced insights into the utilization of our Services and user demographics, as well as to advertise our Services to you. These third parties may gather data pertaining to your online activities over time and across various websites when you access or employ our Services. For instance, we leverage Google Analytics to scrutinize usage patterns for our Services. Google Analytics generates a cookie to capture information regarding your use of our Services, which Google then employs to compile reports on website activity for us and to offer other associated services. Google may use a segment of your IP address to identify its cookie; however, this will not be correlated with any other data held by Google. We may also permit third-party service providers to deploy cookies for our Services, as previously indicated, to execute analytic or marketing functions where you have been apprised of them and have consented to their use. We do not exercise control over the deployment of such third-party cookies or the resultant information, and we disclaim responsibility for any actions or policies undertaken by such third parties.
<br />When you use our Services, you agree to the use of cookies on your devices as outlined in this Privacy Policy. You can manage your browser's cookie settings by adjusting its privacy and security options if you prefer not to receive cookies through our Services. However, unless you configure your browser to refuse all cookies, our system may still issue them when you access or use our Services. Be aware that refusing all cookies may limit or completely prevent the functionality of certain features within our Services.
</p>
     <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
Do-Not-Track Signals
 <br /> We do not currently recognize or respond to "Do Not Track" (DNT) signals. DNT is an optional browser setting that allows you to communicate your preferences regarding tracking by advertisers and other third parties.
</p>

   <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
How We Use Information:
 <br /> We may use Analytics as described above for research and commercial purposes to improve our Services. We may use Personal Information to fulfil and support our contractual obligations to you, to send important notices such as communications about our Services and changes to our terms, conditions, and policies, for our legitimate interests related to internal purposes such as auditing, data analysis, network and IT security, or to offer our products and services and products and services of third parties that we think you might find of interest and for other purposes contained in this Privacy Policy. Only Sunga and our third-party service providers involved in distributing the offers or providing the products or services will have access to your Personal Information. Our third-party service providers will only be permitted to use Personal Information for the clearly intended purpose.
<br /> We may use your email address to respond to your inquiries and to provide information about our Services. You may elect not to receive promotional emails from us either by "unsubscribing" to an email you receive from us or by contacting us as indicated below. As a User, if you unsubscribe from receiving emails from us, we may still send you non-promotional emails, such as emails about your Sunga account or our ongoing business relations, unless you withdraw your consent to receive electronic communications as provided in our Terms of Use.
</p>
    <div class="mt-3">

   <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
How We Share Information:
 <br />You agree that we can share your Personal Information, and other information that you share with us:
</p>
 <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >if you request or authorise it;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >if the information is provided to help complete a transaction for you;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with any of our affiliated companies and service providers;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with financial service providers, including the financial institutions identified in your cardholder bank agreement that provide banking services in connection with your Sunga account;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with another User, when you sign up for our Services via a referral link. The User that referred you may receive information indicating that you have enrolled with us;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with non-financial companies, such as email service providers that perform marketing services on our behalf, and fraud prevention service providers that use the information to provide services to us;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with a non-affiliated third-party to access and transmit your personal and financial information from a relevant institution. You grant the third-party the right, power, and authority to access and transmit this information according to terms of their privacy policy;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with selected third parties including business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with third parties to whom we may choose to sell, transfer or merge parts of our business or our assets or alternatively, acquire all or parts of their businesses;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >in response to a request for information, if we are required by, or we believe disclosure is in accordance with applicable laws, rules, regulations, governmental and quasi-governmental requests, court orders, or subpoenas or legal process;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >for our everyday business purposes;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >for publication of our events and competitions on digital and print media;
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >protect our rights, property, or safety or the rights, property, or safety of our Users or others; or
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >with relevant law enforcement officials or other third parties, such as investigators or auditors, if we believe it is appropriate to investigate fraud.
</li>
        </ul>
         <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
          We do not share your Personal Information with: (1) other companies for joint marketing purposes without your consent; or (2) any other third parties so they can market to you.
        </p>
       <p class="text-[#1F2226] lg:text-[14px] mt-3  leading-[150%] font-normal font-dm-sans text-[14px]" >
      If you provide us with bank account or debit card information, or any other payment information, through our Services, we may share that information with third-party payment processors and other third-party service providers, solely to the extent necessary to provide you with the relevant Services.
      </p>
       <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
When you are no longer our User, we may continue to share your information as described in this Privacy Policy as permitted by applicable laws.
      </p>
       <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We may disclose Analytics with third parties for our commercial purposes.
      </p>
  </div>
    `,
    status: false
  },
  {
    id: 7,
    name: 'INFORMATION YOU SHARE SOCIALLY',
    description: `
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
        We may disclose Analytics with third parties for our commercial purposes.
      </p>
      <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          You may also use our Services to connect with us on, share on, and utilize third-party websites, applications, and services. We urge you to consider your personal privacy needs and the privacy needs of others when deciding who to connect with and what to share and make public.
      </p>
       <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        Please be aware that we cannot control the privacy or security of information you choose to make public or share with others, nor do we control the privacy practices of third parties. For information regarding their privacy practices, please contact those sites and services directly.
      </p>
      `,
    status: false
  },
  {
    id: 8,
    name: 'SECURITY AND STORAGE OF YOUR PERSONAL INFORMATION',
    description: `
     <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        We have suitable security measures in place to prevent your Personal Information from being accidentally lost or used or accessed in an unauthorised way by a third party. When your bank account information is transmitted via our Services, it will be protected by encryption technology, such as Secure Sockets Layer (SSL). In addition, we limit access to your Personal Information to those employees, employers, agents, contractors and other third parties who have a business need to know. They will only process your Personal Information on our instructions. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
      </p>
       <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        We have, and require our third-party service providers that receive Personal Information from us to have, a comprehensive written information security program that contains administrative, technical, and physical safeguards for our respective physical facilities and in our respective computer systems, databases, and communications networks that are reasonably designed to protect information contained within such systems from loss, misuse, or alteration.
      </p>

       <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        No method of electronic transmission or storage is 100% secure. Therefore, we cannot guarantee absolute security of your Personal Information. You also play a role in protecting your Personal Information. Please safeguard your email address, username and password for your Sunga account and do not share them with others.
      </p>

      <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        If we receive instructions using your Sunga account login information or other Sunga account <br />
        security information, we will consider that you have authorized the instructions. You agree to notify us immediately of any unauthorized use of your Sunga account or any other breach of security. We reserve the right, in our sole discretion, to refuse to provide our Services, terminate Sunga accounts, and to remove or edit content.
      </p>

      <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
Subject to applicable law, which might, from time to time, oblige us to store your Personal Information for a certain period of time, we will retain your Personal Information for as long as necessary to fulfil the purposes we collected it for, including the purposes of satisfying any legal, accounting, or reporting requirements.
      </p>

    `,
    status: false
  },
  {
    id: 9,
    name: "PROTECTING CHILDREN'S PRIVACY",
    description: `
     <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
      Our services are not intended for individuals under eighteen (18) years of age. We do not intentionally gather Personal Information from anyone under 18. If you are under eighteen (18), please refrain from using our Services or providing us with any information.
    </p>
      `,
    status: false
  },
  {
    id: 10,
    name: 'LINKS TO THIRD-PARTY WEBSITES',
    description: `
      <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        When you use our Services, you may be directed to other websites that are beyond our control. We may also allow third-party websites or applications to link to our Services. We are not responsible for the privacy practices of any third parties or the content of linked websites, but we do encourage you to read the applicable privacy policies and terms and conditions of such parties and websites. This Privacy Policy only applies to our Services.
    </p>
    `,
    status: false
  },
  {
    id: 11,
    name: 'DATA SECURITY AND RETENTION',
    description: `  
    <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
We implement robust physical, electronic, and administrative security measures to prevent unauthorized access, unlawful processing, and foreseeable hazards or breaches online. We retain your Personal Information only for as long as necessary to fulfill the purposes for which it was collected and to provide you with enhanced services. We determine the appropriate retention period by considering the volume, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and relevant legal requirements. We are committed to maintaining the confidentiality of your Personal Information throughout this period.
    </p>
     <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
By accessing this Website and any of its pages you are agreeing to the terms set out above. You may also request to have all your Personal Information deleted entirely. Please note that if you request the erasure of your Personal Information, we may retain and use your Personal Information to the extent necessary to comply with our legal obligations, including but not limited to tax, legal reporting and auditing obligations.
    </p>
     <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
If you would like to know more about the retention periods we apply to your Personal Information, please contact us at hello@sunga.africa or 0000
    </p>
    `,
    status: false
  },
  {
    id: 12,
    name: 'INTERNATIONAL TRANSFERS',
    description: `
      <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
        Some of our external third parties are based outside Zambia, so their processing of your personal data will involve a transfer of data outside Zambia. Whenever we transfer your personal data out of Zambia, we ensure a similar degree of protection is afforded to it. Please contact Us if you want further information on the specific mechanism used by Us when transferring your personal data out of Zambia.
    </p>
       <div class="mt-3">
          <b>Opt-Out Rights</b>
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            Should you no longer wish to receive offers or other notifications from us, you may opt out. This can be done by contacting us using the details provided at the end of this Privacy Policy, or by following the "unsubscribe" link in any of our communications. Please note that if you are a User, you cannot opt out of communications concerning your Sunga account or related transactions.
          </p>
    </div>

    <div class="mt-3">
          <b>Other Rights to Your Personal Information with Us</b>
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            Beyond your right to opt out of our processing Personal Information, you also have the option of exercising any of the below rights with respect to your Personal Information:
          </p>
          <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to request Correction to your Personal Information
<br />We respect your wishes to correct inaccurate information and as such you must notify us of any change in your Personal Information. If you are a User, you can change some of your Personal Information by updating your Sunga account profile through our Services. Changes to financial details will require you to contact us directly. If you are not a User, you can contact us as indicated at the end of this Privacy Policy to make any changes or request on Personal Information we hold about you. Any changes will affect only future uses of your Personal Information and we may need to verify the accuracy of the new data you provide to us.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to request Access to your Personal Information
<br />You can ask us whether we are storing your Personal Information, and you can ask to receive a copy of that Personal Information. Before sending you any Personal Information, we will ask you to provide proof of your identity. If you are not able to provide proof of your identity, we reserve the right to refuse to send you any Personal Information. We will respond as quickly as we can to your requests for details of Personal Information we hold about you.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to data portability
<br />In certain circumstances you can request to receive a copy of your Personal Information in a commonly used electronic format. This right only applies to Personal Information that you have provided to us (for example by completing a form or providing information through our Website). Information about you which has been gathered by monitoring your digital behaviour will also be subject to the right to data portability. The right to data portability only applies if the processing is based on your consent or if the Personal Information must be processed for the performance of a contract and the processing is carried out by automated means (i.e., electronically).
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to request us to refrain from doing certain things with your data or restrict the extent of our collection or processing of your data.
<br />You may object to the processing of your Personal Information where you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your Personal Information for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to request partial or complete erasure of your Personal Information.
<br />You may request for us to delete or remove Personal Information where there is no good reason for us to continue to process it. You also have the right to ask us to delete or remove your Personal Information where you have successfully exercised your right to object to processing, where we may have processed your information unlawfully or where we are required to erase your Personal Information to comply with local law. Note however that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to request the transfer of your Personal Information to another party.
<br />We will provide to you, or a third party you have chosen, your Personal Information in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to lodge a complaint with the Commission
<br />If you believe that the processing of your Personal Information violates data protection law, you may contact the Data Protection Commissioner of Zambia through the Office of the Data Protection Commissioner website: https://www.dataprotection.gov.zm
<br />Before lodging a complaint with a supervisory authority, we encourage you to contact us first so we can address your concerns promptly.
<br /> We will acknowledge and investigate all valid complaints in accordance with applicable laws
</li>
<li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to withdraw consent
<br />Where we are relying on consent to process your Personal Information, you may withdraw your consent to the processing of Personal Information. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain Services to you. We may advise you if this is the case at the time you withdraw your consent.
</li>
<li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Right to object to decisions taken by automated means
<br />You have the right to object to decisions made solely based on automated processing of personal data, including profiling, that may have a legal effect on you. This means where the decision impacts your legal right i.e. freedom from discrimination or similarly significant effects. However, this right is not absolute where we have your consent, the decision is necessary for entering into or performing a contract with us, where there are appropriate safeguards for your rights.
</li>
        </ul>
         <p class="text-[#1F2226] lg:text-[14px] mt-3 leading-[150%] font-normal font-dm-sans text-[14px]" >
We would implement appropriate measures to protect your rights and interests. These measures include ensuring you can obtain human intervention in the decision-making process, express your views, and contest the decision.
    </p>
    </div>
    `,
    status: false
  },
  {
    id: 13,
    name: 'GRIEVANCE REDRESS PROCEDURE',
    description: `    
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]" >
      Any complaints, questions, or requests regarding the processing of Personal Information should be directed to our customer service representatives via email at hello@sunga.africa or 0000, or to our Data Protection Officer at legal@sunga.africa. In the event of an infringement of data protection rights, we will ensure any damage is remedied within the shortest possible time.
    </p>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]" >
      We are committed to promptly addressing any violations of data subjects' rights. Upon receiving a complaint or becoming aware of a breach, we will acknowledge the issue within 72 hours. We aim to fully resolve all issues within one (1) month. In cases where more time is required due to complexity, we will inform the data subject of the extension and the reasons for it within the initial one-month period.
    </p>
    `,
    status: false
  },
  {
    id: 14,
    name: 'CHAGES TO OUR PRIVACY POLICY',
    description: ` 
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]" >
Our privacy policy is subject to regular review. This current version was updated in November 2025. Any future changes will be posted through our Services. Unless otherwise specified or required by applicable law, the updated Privacy Policy will become effective upon its posting via our Services. You have the right to choose whether or not to accept a revised version of this Privacy Policy. However, your continued access to or use of our Services is contingent upon your acceptance of the revised Privacy Policy. Should you disagree with the terms of this Privacy Policy or any revised version, your only recourse is to discontinue your access and use of our Services. Unless we expressly state otherwise, your access and use of our Services are governed by the version of this Privacy Policy in effect at the time of your access or use.
    </p>
    `,
    status: false
  },
  {
    id: 15,
    name: 'HOW CAN I CONTACT SUNGA?',
    description: `   
     <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]" >
If you have any questions, comments, or concerns with respect to your Personal Information or this Privacy Policy please contact us at hello@sunga.africa or 00000 
    </p>
`,
    status: false
  }
];
 
export default function FAQs() {

  return (
    <div className="relative flex lg:flex-row flex-col gap-[20px] lg:justify-center text-[#000000] justify-center bg-fixed items-center lg:py-[10px]  py-[10px] bg-cover bg-no-repeat bg-center ">
        <FAQsSection items={privacyPolicyData} />
     </div>
  );
}

const FAQsSection = ({ items }: { items: any }) => {
  const [privacyPolicys, setPrivacyPolicys] = useState<any[]>(items);

  React.useEffect(() => {
    setPrivacyPolicys(items.map((item: any) => ({ ...item, status: false })));
  }, [items]);

  const togglePrivacyPolicys = (id: number) => {
    setPrivacyPolicys((prevPrivacyPolicys) =>
      prevPrivacyPolicys.map((data) =>
        data.id === id ? { ...data, status: !data.status } : data
      )
    );
  };

  return (
    <motion.div
      className="flex flex-col justify-center  w-full gap-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col justify-center w-full gap-6">
        {privacyPolicys.map((item: any) => (
          <motion.div
            key={item.id}
            onClick={() => togglePrivacyPolicys(item.id)}
            className={`flex flex-col gap-[12px] rounded-[12px] lg:py-[40px] lg:px-[40px] py-[24px] px-[14px] cursor-pointer bg-[#F8FAFD] text-[#000000]`}
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div className="lg:font-bold font-bold lg:tracking-[-1.5%] font-dm-sans text-[#1A1A1A] lg:leading-[100%] text-[14px] lg:text-[20px]">
                {item.name}
              </div>
              <div>
                <CaretRight
                  className={classNames({
                    'rotate-90': item.status
                  })}
                  size={18}
                />
              </div>
            </div>

            {item.status && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:text-[14px] text-[14px] leading-[150%] font-normal text-[#1F2226] tracking-[0%]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
