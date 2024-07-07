import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';
import Promotion from './components/header/Promotion';
import Navbar from './components/header/Navbar';
import Tabs from './components/main/hero/Tabs';
import PeopleWithMobile from './components/main/hero/PeopleWithMobile';
import HowDoIRefer from './components/main/refer/HowDoIRefer';
import FAQ from './components/main/faq/FAQ';
import GetInTouch from './components/main/connect/GetInTouch';
import ReferralModal from './components/main/refer/ReferralModal';
import Footer from './components/footer/Footer';
import SuccessModal from './utilities/SuccessModal';
import FailureModal from './utilities/FailureModal';
import ProgramsTable from './components/main/benefits/ProgramsTable';
import { useSelector } from 'react-redux';
import WhatBenefits from './components/main/benefits/WhatBenefits';

const App = () => {
  const loading=useSelector((state)=> state.referral.loading);
  const isSuccessfull = useSelector((state) => state.referral.isSuccessfull);
  const isFailure = useSelector((state) => state.referral.isFailure);

  return (
    <>
      <header className="w-full bg-white shadow">
        <Promotion />
        <Navbar />
      </header>

      <main className="mt-[179px]">
        <Tabs />
        <PeopleWithMobile/>
        <HowDoIRefer />
        <WhatBenefits />
        <ProgramsTable />
        <FAQ />
        <GetInTouch />
        <ReferralModal />
        {isSuccessfull && <SuccessModal/>}
        {isFailure && <FailureModal />}
        {
          loading &&
          <div className="fixed inset-0 z-50 bg-black bg-opacity-15 flex items-center justify-center">
            <RingLoader
              color="#36d7b7"
              size={150}
            />
          </div>
        }
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
