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

const App = () => {
  const [referBoxOpened, setReferBoxOpened] = useState(false);
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeReferBox = () => {
    setReferBoxOpened(false);
  }
  return (
    <>
      <header className="w-full bg-white shadow">
        <Promotion />
        <Navbar />
      </header>


      <main className="mt-[179px]">
        <Tabs />
        <PeopleWithMobile referBoxOpened={referBoxOpened} setReferBoxOpened={setReferBoxOpened} />
        <HowDoIRefer referBoxOpened={referBoxOpened} setReferBoxOpened={setReferBoxOpened} />
        <ProgramsTable />
        <FAQ />
        <GetInTouch />
        <ReferralModal
          isOpen={referBoxOpened}
          onClose={closeReferBox}
          setIsSuccessfull={setIsSuccessfull}
          setIsFailure={setIsFailure}
          setLoading={setLoading}
        />
        {isSuccessfull && <SuccessModal isOpen={isSuccessfull} setIsSuccessfull={setIsSuccessfull} />}
        {isFailure && <FailureModal isOpen={isFailure} setIsFailure={setIsFailure} />}
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
