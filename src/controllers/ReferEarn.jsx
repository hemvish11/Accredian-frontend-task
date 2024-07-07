import React, { useState } from 'react';
import Tabs from '../components/main/hero/Tabs';
import Footer from '../components/footer/Footer';
import ProgramsTable from '../components/main/refer/ProgramsTable';
import FAQ from '../components/main/faq/FAQ';
import Navbar from '../components/header/Navbar';
import Promotion from '../components/header/Promotion';
import PeopleWithMobile from '../components/main/hero/PeopleWithMobile';
import HowDoIRefer from '../components/main/refer/HowDoIRefer';
import GetInTouch from '../components/main/connect/GetInTouch';
import ReferralModal from '../components/main/refer/ReferralModal';
import SuccessModal from '../../result/SuccessModal';
import FailureModal from '../../result/FailureModal';
import { RingLoader } from 'react-spinners';

const ReferEarn = () => {
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


      <main className="">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Tabs />
          <div className="bg-white p-8 rounded shadow-lg text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Let's Learn & Earn</h1>
            <p className="mb-4">Get a chance to win up to <span className="text-blue-600 font-bold">Rs. 15,000</span></p>
            <button onClick={() => setReferBoxOpened(!referBoxOpened)} className="bg-blue-600 text-white px-4 py-2 rounded">Refer Now</button>
          </div>
        </div>

        <PeopleWithMobile />
        <HowDoIRefer />
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
          <div className="fixed inset-0 bg-black bg-opacity-15 flex items-center justify-center">

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

export default ReferEarn;
