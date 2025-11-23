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


const termsAndConditionsData = [
  {
    id: 1,
    name: 'DEFINITIONS',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">For the purposes of these Terms: </p>
    <ul class="list-disc ml-5 mt-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“Bank Partners” means licensed banks that hold users’ funds on behalf of the Company. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“Business Day” means any day other than weekends or public holidays in Zambia. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“FIA” means Financial Intelligence Centre Act. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“FSP” means Financial Service Provider as defined under Zambian law.</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“Investment Service” means asset-based products enabling users to invest in financial instruments offered through licensed partners.</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“KYC” means Know-Your-Customer requirements under Zambian regulatory standards. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“Platform” means the Sunga website, mobile app, APIs, and digital services.</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“Savings Service” means all digital savings products, locked savings, target savings, flexible wallets, and automated saving tools. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > “Sunga Account” means the account you have with us for the Services.</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > “Wallet” means your digital account on the Platform. </li>
    </ul>`,
    status: false
  },
  {
    id: 2,
    name: 'ELIGIBILITY',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">In order to use the Platform, you must: </p>
    <ol class="list-decimal ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Accept and agree to these Terms and our Privacy Policy </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Register with us on the Website/ mobile application </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Be at least 18 years old. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Be a Zambian citizen or legal resident. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Have a valid phone number, email address, and identification document (NRC, Passport, or Driver’s License). </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Have a Bank Account with a Zambian financial institution; </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Complete all required KYC verification steps. </li>
    </ol>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may also be required to provide us with one or more answers to security questions that will be used as part of the requirements to use the Website. </p>
    <p class="text-[#1F2226] mt-2 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may use the Services only if you agree to form a binding contract with Sunga and are not a person barred from receiving services under the laws of the applicable jurisdiction. </p>
    <p class="text-[#1F2226] mt-2 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We may reject or suspend your account if any eligibility requirement is not met. </p>`,
    status: false
  },
  {
    id: 3,
    name: 'REGULATORY COMPLIANCE',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">The Company operates in accordance with applicable laws and guidelines issued by:  </p>
    <ol class="list-decimal ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Bank of Zambia (BoZ) </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Securities and Exchange Commission (SEC), where applicable Data Protection Act No. 3 of 2021 </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Financial Intelligence Centre Act (Anti-Money Laundering and Counter-Terrorist Financing requirements) </li>
    </ol>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We may request additional information to comply with these obligations. </p>`,
    status: false
  },
  {
    id: 4,
    name: 'ACCOUNT REGISTRATION AND VERIFICATION',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">For our compliance purposes and in order to provide the Services to you, you hereby authorize us to, directly or through a third party, obtain, verify, and record information and documentation that helps us verify your identity and Bank Account information. When you register for the Services and from time to time thereafter, we may require you to provide, update and/or confirm information and documentation that will allow us to identify you, such as: </p>
    <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A copy of your government-issued photo ID, such as a passport, NRC or driver’s license and/or a selfie with your valid ID; </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A copy of a utility bill, bank statement, affidavit, or other bill, dated within three months of our request, with your name and address on it; and  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Such other information and documentation that we may require from time to time. </li>
    </ol>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You are fully responsible for maintaining confidentiality of your login credentials. </p>
    <p class="text-[#1F2226]  my-2 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We make no effort to review information obtained from the financial institution holding your Bank Account and other third-party websites and databases for any purpose, including, but not limited to accuracy, legality, or non-infringement. As between Sunga and our third-party service providers, Sunga is the controller of your confidential User Information. </p>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">The information you provide us is subject to our Privacy Policy. </p>`,
    status: false
  },
  {
    id: 5,
    name: 'INVESTMENT SERVICES (IF APPLICABLE)',
    description: ` 
    <ul class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Investments displayed on the Platform are provided through licensed financial and investment partners.  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > The Company is not a financial adviser and does not guarantee returns or the safety of investments. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Users acknowledge that investments carry risks, including loss of capital. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Historical performance does not guarantee future results. e. We will disclose all necessary risk information before you invest. </li>
    </ul>`,
    status: false
  },
  {
    id: 6,
    name: 'FUNDING AND WITHDRAWALS',
    description: `
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">The purpose of the Services is to help you save and invest with minimal effort. </p>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may fund your Wallet via: </p>
    <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Bank transfer</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Mobile money </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Debit/Credit cards </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Other payment channels enabled on the Platform </li>
    </ol>
    <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]"> Generally “funding methods”  </p> 
     <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Withdrawals are subject to:  </p>
   <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > KYC checks </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Fraud review  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Settlement timelines of payment partners </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Applicable fees for withdrawals (displayed clearly in the app) </li>
    </ol> 
    <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Your savings and funds transfer activities via the Website shall be subject to transaction and balance limits in accordance with applicable law. </p>
    <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">If you do not have sufficient funds available in your Sunga Account to cover the amount of the requested withdrawal, your request for the withdrawal will be declined. We may also transfer funds from your Sunga Account to your Bank Account without notice to you upon the closure of your Sunga Account as described below and at any time if required by applicable law or if we, in our sole discretion, suspect the Services are being used for illicit purposes or otherwise in violation of these Terms. </p>
    <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You are solely responsible for determining whether the funds debited from your choice funding method and the funds maintained in your Sunga Account are acceptable to you. We are not responsible for any third-party fees that you may have incurred as a result of using the Services. </p>
    <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Sunga is not a financial adviser, and the Services are not intended to provide financial or investment advice. Your financial situation is unique. We are not responsible for ensuring your choice funding method has sufficient funds for your needs, purposes, or transactions. We do not make any representations, warranties, or guarantees of any kind that the Services are appropriate for
you. Before using the Services, you should consider obtaining additional information and advice from a financial adviser. You are responsible for obtaining any equipment and internet service necessary to access the Website and Services. </p>
    <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We reserve the right to delay withdrawals if suspicious activities are detected. </p>
    <div class="mt-3">
      <b><i>Early Withdrawal </i></b>
      <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">For locked savings products, early withdrawal may attract penalties or loss of accrued interest. </p>
    </div>
     <div class="mt-3">
      <b><i>How do I check the balance in my Sunga Account? </i></b>
      <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may obtain information about the balance of funds in your Sunga Account at any time by logging into your Sunga Account on the Website or App. </p>
    </div>
     <div class="mt-3">
      <b><i>Interest</i></b>
      <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Interest rates may vary based on product type and market conditions. Rates are displayed in the app and may be updated periodically. </p>
    </div>
    `,
    status: false
  },
  {
    id: 7,
    name: 'DUE DILIGENCE, COMPLIANCE, AND LEGAL TERMS',
    description: `
     <div class="mt-3">
      <b><i>Due Diligence and Audit Rights </i></b>
      <p class="text-[#1F2226] mt-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We maintain a robust anti–money laundering (AML) and compliance program. As part of our regulatory obligations, we may conduct due diligence checks on all Users of the Platform. To meet these requirements, we may request information relating to transactions conducted on your Sunga Account, including but not limited to:  </p>
    </div>
       <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > details of the depositor or recipient; </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >the source of funds; and  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >the purpose of the transfer or payment.</li>
     </ol> 
      <p class="text-[#1F2226] lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You agree to provide any requested information within two (2) Business Days and confirm that all information supplied will be accurate and complete. </p>
      <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You further agree to provide any additional information or documentation we may require: </p>
     <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > to confirm your compliance with these Terms; </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >to satisfy a lawful request or order from a court, regulator, or other competent authority; or  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > where required by any applicable law or regulation. </li>
     </ol> 
      <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We reserve the right to suspend your account, reject a transaction, or decline to open an account if you fail to provide requested information, or if information provided is false or misleading. </p>
      <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Certain transactions may require us or our third-party partners to file AML or related regulatory reports without prior notice to you. These reports may contain your personal information, transactional details, and any other data required by law. </p>

    `,
    status: false
  },
  {
    id: 8,
    name: 'DISCLOSURE OF YOUR PERSONAL INFORMATION',
    description: `     
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You agree that we may share your personal and transactional information, where lawful and necessary, with the following:  </p>
  <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Affiliated companies and service providers assisting in delivering our Services. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Financial and non-financial service providers, including email service platforms, marketing partners, and fraud prevention partners acting on our behalf. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Business partners where required to fulfil a contract with you or complete a transaction. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Entities involved in corporate restructuring, including potential buyers or merger partners of our business. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Regulators, courts, and government authorities, where law or regulation requires disclosure.  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Law enforcement and investigative bodies, where we deem it appropriate to investigate suspected fraud or unlawful activity.  </li>
     </ol> 
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Mandatory disclosures will always be made in accordance with applicable law.  </p>
     `,
    status: false
  },
  {
    id: 9,
    name: 'DATA PROTECTION AND PRIVACY',
    description: `
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">We take your privacy seriously. By using the Services, you acknowledge and agree that your personal data will be collected, processed, stored, and shared in line with these Terms and our Privacy Policy. We may collect and use your data for:  </p>
    <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >KYC/AML verification </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Transaction processing </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Service improvement </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Regulatory reporting </li>
     </ol> 
    `,
    status: false
  },
  {
    id: 10,
    name: 'THIRD-PARTY WEBSITES AND SERVICES',
    description: `
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">The Services may include links to third-party websites or services that we do not own or control. These are provided solely for your convenience. We do not:  </p>
    <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Endorse third-party websites or their content, </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Guarantee their availability or accuracy, or </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Assume responsibility for any products, services, policies, or practices of such third parties.</li>
      </ol> 
    <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Your use of third-party sites is governed exclusively by their terms and privacy policies. We encourage you to review those policies before use. </p>

    `,
    status: false
  },
  {
    id: 11,
    name: 'TERMINATING YOUR USE OF THE SERVICES',
    description: `
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may close your Sunga Account and end your relationship with us at any time by contacting hello@sunga.africa and providing sufficient information to verify your identity.  </p>
     <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Upon receiving your request: </p>
    <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If there are pending transactions, we will close your account once they are completed.  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Any remaining funds will be transferred to your linked bank account.  </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Your obligations and our rights under these Terms that arose prior to termination will continue to apply. </li>
      </ol> 
    `,
    status: false
  },
  {
    id: 12,
    name: 'FEES, CHARGES AND TAXES',
    description: `
        <ol class="list-disc ml-5 my-2">
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >The Company may charge service fees, withdrawal fees, or investment management fees. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >All fees will be displayed transparently on the Platform. </li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Users are responsible for any applicable government taxes.</li>
      <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Fees may be updated with prior notice or by delivering notice to you electronically, by posting such fee on the Website, or by any other method permitted by applicable law. If you continue using the Services after such notice, you must pay all applicable fees for the Services.</li>
      </ol> 
    `,
    status: false
  },
  {
    id: 13,
    name: 'TRANSACTING',
    description: `
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">For the security of your funds and in line with regulatory requirements, transaction and daily usage limits may apply to your account. These limits may vary depending on the funding method or service option you select.  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">All deposits, withdrawals, and other transactions on the Platform will be processed exclusively in Zambian Kwacha (ZMW).  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You may access and manage the funds in your Sunga Account at any time through your mobile device or any internet-enabled channel. While we will use reasonable efforts to ensure the availability and performance of the Services as communicated in our promotional and educational materials, the Services are provided on an “as is” and “as available” basis without warranties of any kind.  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Every transaction processed through the Sunga Platform will carry a unique Transaction ID. This identifier is essential for tracking activity on your account and may be required for enquiries or dispute resolution.  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">Sunga will issue a confirmation message for each transaction carried out on your account. Such notifications may be delivered via SMS, email, in-app alert, or any other communication channel available to us.  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">You are required to authorise all transactions using your personal secret PIN or any other authentication method we may introduce from time to time. </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]">All transactions effected through the Sunga Platform are governed by these Terms and Conditions, as may be amended periodically.  </p>
         <p class="text-[#1F2226] my-3 lg:text-[14px] leading-[150%] font-normal font-dm-sans text-[14px]"> We reserve the right to verify and validate any deposit or credit reflected in your account. Our internal records shall be deemed accurate and binding unless you provide evidence to the contrary.  </p>

    `,
    status: false
  },
  {
    id: 14,
    name: 'USER OBLIGATIONS',
    description: `
       <div class="mt-3">
        <b>Permitted Use and Restrictions </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          You may only use the Services for your personal, lawful, and non-commercial purposes, and you must comply with all applicable Zambian
          laws and regulations. You are strictly prohibited from using your Sunga Account or the Services for any of the following: 
        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Engaging in activities that violate Zambian law, regulations, directives, or sanctions. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Defrauding Sunga, other users, financial institutions, or any third party, or providing false, inaccurate, or misleading information. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Conducting or facilitating money laundering, terrorism financing, bribery, corruption, or any other financial crime. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Infringing on Sunga’s intellectual property rights or those of third parties, including using Sunga’s trademarks, name, or logo without prior written consent. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Interfering with or disrupting the experience of other users (including defamation, harassment, threats, abuse, or other harmful conduct). </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Participating in pyramid schemes, Ponzi schemes, or similarly fraudulent investment activities. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Engaging in activities connected to pornography, prostitution, sexually explicit content, or any form of exploitation or endangerment of minors. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Any other activity that Sunga may, from time to time, designate as prohibited. </li>
        </ul>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
            If you engage in or attempt any of the above prohibited activities, Sunga reserves the right to take any necessary lawful action, including but not limited to: restricting or suspending your account, declining or reversing transactions, reporting the matter to regulators or law enforcement, and pursuing any additional remedies available under the law. 
        </p>
    </div>`,
    status: false
  },
  {
    id: 15,
    name: 'ANTI-MONEY LAUNDERING (AML) & FRAUD PREVENTION',
    description: ` <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We comply with the FIC Act and may take actions such as:        </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Reporting suspicious transactions </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Freezing accounts pending investigation </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Requesting proof of source of funds </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Blocking withdrawals until verification is complete</li>
        </ul>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
Failure to provide required documentation may lead to account closure.         </p>`,
    status: false
  },
  {
    id: 16,
    name: 'SECURITY AND UNAUTHORIZED USE',
    description: `
       <div class="mt-3">
        <b>General Security and User Responsibility </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
We utilize industry-standard encryption and security protocols. However, you acknowledge that no system is entirely secure. You are solely responsible for securing your account, and we are not responsible for losses arising from your failure to do so. 
        </p>
    </div>
    <div class="mt-3">
        <b>PIN/ Password Management </b>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Initial PIN and Mandatory Change: You may be provided with a temporary PIN upon registration, which you must change before subsequent transactions. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Authorized Signature: The PIN you select acts as your authorized signature, validating and authorizing instructions given through the service. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Confidentiality and Disclosure: You are responsible for maintaining the confidentiality of your PIN and must change it frequently. You agree not to disclose your PIN to anyone, including any agent or employee of the company (Sunga). It is understood that company employees do not need your PIN for any reason. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Input Protection: You must ensure no one is physically watching you input your PIN and that the PIN is never written down.</li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Transaction Attempts: The PIN is mandatory for transactions. You have three (3) attempts to enter the correct PIN. Entering the wrong PIN on the third attempt may lock your Account. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Lost PIN: If you forget your PIN, you must request a new one by calling the Call Center. </li>
        </ul>
    </div>
        <div class="mt-3">
        <b>Device and Digital Security  </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
You are responsible for protecting your mobile phone, devices, or computer against computer viruses and other malware when accessing our web portal
or other online resources. We are not liable for any computer program or code originating from accessing our systems, and you will indemnify us against any claims made in this regard.         </p>
    </div>
    <div class="mt-3">
        <b>Immediate Notification of Security Incidents  </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
You must notify us immediately of any: </p>
  <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  Unauthorized access </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Loss of device  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Compromised credentials </li>
        </ul>
    </div>

      <div class="mt-3">
        <b>Liability and Indemnification </b>
         
  <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Service Non-Liability: The company (Sunga/Sunga) shall not be held responsible for your failure to safeguard the secrecy of the PIN, nor held liable if you allow anyone to access the PIN, thereby compromising your account. By allowing access, you do so at your own risk.   </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Disputed Transactions: Should you dispute that any purchase or withdrawal debited to your Wallet was authorized by you, you will have the burden to prove it was not authorized.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Transaction Losses: You agree that the company would not be held liable for any loss incurred by information disclosed/exchanged when carrying out your instruction for transactions between your wallet and linked bank account, and you shall fully indemnify and hold the company (Sunga) harmless in this respect..  </li>
        </ul>
    </div>
    `,
    status: false
  },
  {
    id: 17,
    name: 'STATEMENTS AND TRANSACTION RECORDS',
    description: `
      <div class="mt-3">
        <b>Statement Access  </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You can view your account activity by requesting a balance or mini-statement via your mobile phone. Alternatively, you may print your full statement from the Sunga Platform. </p>
    </div>
     <div class="mt-3">
        <b>Statement Queries and Time Limits </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You are required to inform Sunga within 30 days of receiving your statement if you believe it contains any incorrect transactions. Please note that transactions older than 60 days cannot be queried. If you fail to notify us within this 30-day period, you waive your right to dispute the transactions on the statement or to recover any losses from unauthorized activity reflected therein. We strongly advise that you check your statements frequently.  </p>
    </div>
    `,
    status: false
  },
  {
    id: 18,
    name: 'CLOSING, SUSPENSION, AND RESTRICTION OF YOUR SUNGA ACCOUNT',
    description: `
     <div class="mt-3">
        <b><i>Company's Right to Suspend, Restrict, or Terminate </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We may suspend, restrict, or terminate the provision of our services (in whole or in part) and/or close your account without any liability whatsoever under the following circumstances:  </p>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  If you notify us that your phone has been lost or stolen or your PIN/ password has been compromised.   </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  If we know or suspect your account is being used fraudulently, negligently, or for illegal activities, or if we must take action to comply with the law.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > If we believe that you are in breach of these terms, attempting to compromise our systems, or unreasonably interfering with any services, or for any other purpose in protection of our interests.   </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  If your account remains unused for a period of 12 months, following a 6-month period of dormancy.  </li>
        </ul>
    </div>
        <div class="mt-3">
        <b><i>User-Initiated Closure</i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We will close your account upon receiving a request from you at any time.  </p>
    </div>
        <div class="mt-3">
        <b><i>Account Dormancy and Closure Due to Inactivity</i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If your Sunga account remains unused for a period of 6 months, it will go into dormancy. If it remains unused for a period of 12 months, your account will be closed.  </p>
    </div>

         <div class="mt-3">
        <b>Funds Available Upon Closure </b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If your Sunga account is closed for any reason, you will remain entitled to the balance on the Sunga Platform if any, less any fees due to the fund.
Upon your request to Customer Services, this balance will be made available for withdrawal through your linked mobile money wallet or linked bank account within 48 hours, subject to properly following our internal procedures.  </p>
    </div>
        <div class="mt-3">
        <b><i>Disclaimer of Liability </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We will not be responsible to you for any direct, indirect, consequential, or special damages arising from any act or omission by you or any third party for whom you are responsible, whether arising in contract, tort, or statute, as a result of the account suspension or closure in accordance with this clause.  </p>
    </div>
    `,
    status: false
  },
  {
    id: 19,
    name: 'NOTICES',
    description: `   
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >The address, email address, and mobile phone number you provide during your Sunga registration shall be deemed your designated contact details for receiving notices and for service of legal documents. You are responsible for notifying us immediately of any changes to your physical address, postal address, email address, or mobile number.  </p>
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We may send notices to the email address provided in your application or on record. Any such communication will be deemed to have been received by you on the date it is sent, unless you can prove otherwise. This clause applies to all customers who have completed the Sunga Account creation registration process or who access Sunga’s services online. </p>
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Any correspondence sent to you by post will be considered received within seven (7) days of mailing. Correspondence sent by fax or email will be considered received on the date it is transmitted.  </p>
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We may send informational SMS messages to the mobile number supplied in your application and updated from time to time. These SMS messages are strictly for notification and informational purposes. </p>
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Any legal notices from you to us must be delivered to our designated address stated below <a href="mailto:hello@sunga.africa"> hello@sunga.africa </a> </p>

    `,
    status: false
  },
  {
    id: 20,
    name: 'INTELLECTUAL PROPERTY',
    description: `
             <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >All content on the Platform including code, design, logos, text, and graphics—is owned by the Company. Users may not reproduce, modify, or distribute any content without written consent.  </p>
`,
    status: false
  },
  {
    id: 21,
    name: 'COMMUNICATION',
    description: `        
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >By using the Platform, you consent to receive: </p>
   <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Emails  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  SMS alerts  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > In-app notifications   </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >  Calls for verification purposes  </li>
        </ul>
                 <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You may opt out of marketing communications.  </p>

`,
    status: false
  },
  {
    id: 22,
    name: 'ELECTRONIC SIGNATURES, ELECTRONIC COMMUNICATIONS & PRIVACY',
    description: `
     <div class="mt-3">
        <b><i>Consent to Use Electronic Signatures and Communications </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >By agreeing to these Terms, you consent—where permitted by law—to the use of electronic signatures and to receive all notices, disclosures, statements, and other communications from us (“Communications”) electronically rather than in paper form. Your acceptance of these Terms confirms that:  </p>
        <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > You understand and agree to the use of electronic signatures and electronic delivery of Communications.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > You meet the hardware and software requirements described below.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Your consent remains valid until you choose to withdraw it as explained below. </li>
        </ul>
    </div>
      <div class="mt-3">
        <b><i>Right to Withdraw Your Consent </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You may withdraw your consent to receive Communications electronically at any time by contacting us at hello@sunga.africa. 
If you do so: 
</p>
        <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We will close your Sunga Account after completing any pending transactions.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Your remaining balance will be transferred to your linked bank account in accordance with these Terms.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > You will no longer be able to use your Sunga Account or our Services, except where these Terms specifically allow limited post-termination activity.  </li>
        </ul>
                <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Your withdrawal will only take effect after we have had a reasonable time to process it, and it will not apply to Communications already delivered electronically before the withdrawal becomes effective. </p>
    </div>
      <div class="mt-3">
        <b><i>Keeping Your Contact Details Up to Date </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >To ensure uninterrupted delivery of Communications, you must keep your email address, phone number, and any other contact information accurate and updated at all times. You may update these details through your profile on the Website or App. 
</p>
       </div>
         <div class="mt-3">
        <b><i>Accessing and Saving Electronic Communications  </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We encourage you to print or digitally store copies of all Communications we send. You are responsible for retaining your own records of Communications delivered electronically. </p>
       </div>

        <div class="mt-3">
        <b><i> Technical Requirements  </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >To receive and retain electronic Communications, you must have: </p>
         <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A valid and active email address. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > A computer, smartphone, or tablet capable of connecting to the internet. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A stable internet connection.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A current version (“Current Version”) of a supported web browser.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > A program capable of reading PDF documents. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Hardware and operating systems capable of running all necessary software. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >A printer or electronic storage device for saving Communications.  </li>
        </ul>
       </div>

         <div class="mt-3">
        <b><i> Changes to Electronic Communication Practices  </i></b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We may, in our discretion, modify or discontinue electronic delivery of Communications or update the terms under which such Communications are provided. Unless otherwise required by law, we will notify you of any such changes through updates to these Terms or through electronic notification.  </p>
        </div>
    `,
    status: false
  },
  {
    id: 23,
    name: 'LIMITATION OF LIABILITY',
    description: `
    
    
        <div class="mt-3">
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >To the fullest extent permitted by law:  </p>
         <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We are not liable for indirect, consequential, or punitive damages.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We do not guarantee uninterrupted access to the Platform.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We are not liable for losses arising from third-party payment providers or investment partners.  </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > We are not responsible for losses due to force majeure events (network outages, government restrictions, etc.).  </li>
        </ul>
       </div>
       `,
    status: false
  },
  {
    id: 24,
    name: 'INDEMNITY',
    description: `
    
      <div class="mt-3">
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You agree to indemnify and hold the Company harmless from any claims, damages, losses, liabilities, and expenses arising from:   </p>
         <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Breach of these Terms </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Misuse of the Platform </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Violations of law </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" > Third-party claims related to your actions. </li>
         </ul>
       </div>
       
       `,
    status: false
  },
  {
    id: 25,
    name: 'CHANGES TO THESE TERMS',
    description: `
       <div class="mt-3">
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We may update these Terms from time to time. The revised version will be posted on the Platform with the “Last Updated” date. 
Your continued use of the Platform constitutes acceptance of updated Terms. 
 </p>
       </div>
    `,
    status: false
  },
  {
    id: 26,
    name: 'ASSIGNMENT',
    description: `
     <div class="mt-3">
         <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You may not assign, transfer, or delegate your rights or obligations under these Terms, or transfer your Sunga Account, without our prior written approval. Subject to applicable law, we may assign or transfer our rights and obligations under these Terms without seeking your consent. 

 </p>
       </div>`,
    status: false
  },
  {
    id: 27,
    name: 'SERVERABILITY',
    description: `
    
          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If any provision of these Terms is held to be unlawful, invalid, or unenforceable, that provision shall be considered severed, and the remaining provisions will continue in full force and effect. 
 </p>
 
 `,
    status: false
  },
  {
    id: 28,
    name: 'FORCE  MAJEURE',
    description: `          <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >We are not liable for any delay or failure to perform our obligations under these Terms where such delay or failure results from circumstances beyond our reasonable control. These circumstances may include, but are not limited to: natural disasters, epidemics, pandemics, acts of government or regulatory directives, strikes, labour disputes, war, terrorism, civil unrest, system or network failures, telecommunications disruptions, or any other event outside our reasonable control. 
</p>
`,
    status: false
  },
  {
    id: 29,
    name: 'THIRD-PARTY BENEFICIARIES',
    description: ` <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Our third-party service providers are expressly recognized as third-party beneficiaries of the relevant provisions of these Terms. They have the right to enforce such provisions as if they were parties to this agreement. 
</p>
`,
    status: false
  },
  {
    id: 30,
    name: 'TAXES',
    description: `
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You are solely responsible for any taxes, duties, or governmental charges arising from your use of the Services. This includes filing, reporting, and payment obligations. 
</p>
     <p class="text-[#1F2226] my-2 lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Where applicable, transactions or payments made or received in connection with your Sunga Account may be subject to taxes imposed now or in the future. You acknowledge that such taxes are your responsibility. 
</p>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You agree that Sunga may deduct or withhold amounts from your Sunga Account if required by law, regulation, or directive from a tax authority or regulator. You will be notified of such deductions or will see them reflected in your account statements. 
</p>
`,
    status: false
  },
  {
    id: 31,
    name: 'NON-WAIVER',
    description: `     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If either party fails to enforce any right or provision under these Terms, such failure shall not constitute a waiver of that right or provision. All rights and remedies remain enforceable unless formally waived in writing. 
</p>
`,
    status: false
  },
  {
    id: 32,
    name: 'ENTIRE AGREEMENT',
    description: `     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >These Terms, together with our Privacy Policy, form the complete agreement between you and Sunga regarding your use of the Services. They supersede all prior agreements, understandings, or representations, whether oral or written. 
</p>
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >You acknowledge that you are not an employee, agent, representative, or partner of Sunga and do not have authority to bind Sunga in any manner. 
</p>

`,
    status: false
  },
  {
    id: 33,
    name: 'GOVERNING LAW',
    description: `    
     <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >These Terms are governed by the laws of the Republic of Zambia. </p>
`,
    status: false
  },
  {
    id: 34,
    name: 'DISPUTE RESOLUTION',
    description: `
    
     <div class="mt-3">
        <ul class="list-decimal ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If a dispute, claim, or disagreement arises in connection with these Terms or your use of the Services, you and Sunga agree to first attempt to resolve the matter through good-faith discussions. Either party may notify the other in writing of the dispute, and both parties shall use reasonable efforts to resolve the issue within fourteen (14) days of such notice </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >If unresolved within 14 days, disputes may be referred to arbitration under the Arbitration Act of Zambia. </li>
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >Litigation may be pursued only when arbitration is inappropriate or legally restricted. </li>
        </ul>
            </div>

     <div class="mt-3">
        <b>For this section:  </b>
        <ul class="list-disc ml-5 mt-2">
          <li class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >“we” and “us” include Sunga, its affiliates, subsidiaries, successors, assigns, and all respective employees, directors, officers, agents, and representatives. “we” and “us” also includes any third-party providing services or benefits in connection with the Services when such party is named with Sunga in any dispute subject to arbitration. </li>
        </ul>
    </div>
    `,
    status: false
  }
 ];
 
export default function TermsAndConditions() {

  return (
    <div className="relative flex lg:flex-row flex-col gap-[20px] lg:justify-center text-[#000000] justify-center bg-fixed items-center lg:py-[10px]  py-[10px] bg-cover bg-no-repeat bg-center ">
        <TermsAndConditionssSection items={termsAndConditionsData} />
     </div>
  );
}

const TermsAndConditionssSection = ({ items }: { items: any }) => {
  const [termsAndConditionss, settermsAndConditionss] = useState<any[]>(items);

  React.useEffect(() => {
    settermsAndConditionss(items.map((item: any) => ({ ...item, status: false })));
  }, [items]);

  const toggletermsAndConditions = (id: number) => {
    settermsAndConditionss((prevtermsAndConditionss) =>
      prevtermsAndConditionss.map((termsAndConditions) =>
        termsAndConditions.id === id ? { ...termsAndConditions, status: !termsAndConditions.status } : termsAndConditions
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
        {termsAndConditionss.map((item: any) => (
          <motion.div
            key={item.id}
            onClick={() => toggletermsAndConditions(item.id)}
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
      <div className="flex flex-col justify-center w-full gap-4">
        <h4 className="text-[20px] text-[#1F2226] leading-[150%] font-dm-sans font-normal">
          CONTACT INFORMATION
        </h4>
        <p className="text-[#1F2226] lg:text-[20px] leading-[140%] font-normal font-dm-sans text-[14px]">
          For questions or complaints: <br /> <b>Sunga Technologies Limited</b>
        </p>
        <p className="text-[#1F2226] lg:text-[20px] leading-[140%] font-normal font-dm-sans text-[14px]">
          Email: <a href="mailto:hello@sunga.africa" className='text-primary'>hello@sunga.africa</a> <br /> Address:Lusaka, Zambia
        </p>
      </div>
    </motion.div>
  );
};
