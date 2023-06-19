import "./App.css";
import { BsLightningCharge } from 'react-icons/bs';
import { FaEye, FaRegClock, FaWhatsapp } from 'react-icons/fa';


function App() {
  return (
    <div className="flex items-center min-h-screen w-1/2 mx-auto">
      <div className=" card lg:card-side bg-base-100 shadow-xl md:grid md:grid-cols-2">
        <div className="bg-blue-600 rounded-xl p-6 md:p-2 lg:p-6 text-center">
          <p className=" text-slate-300 pb-6">Your Result</p>
          <div className="flex justify-center">
            <div className="bg-blue-800 text-white w-32 h-32 flex flex-col items-center justify-center rounded-full gap-1 font-bold text-3xl">
              74 <p className="text-slate-300 font-normal text-base">of 100</p>
            </div>
          </div>
          <h1 className="text-white text-xl font-medium pt-6 pb-3">Great</h1>
          <p className="text-slate-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-6 md:p-2 lg:p-6">
          <h2 className="card-title mb-4">Summary</h2>
          <div>
            <div className="w-full flex justify-between p-4 mb-3 bg-red-100 rounded-lg ">
              <div className="flex items-center gap-2 text-red-500">
                <BsLightningCharge></BsLightningCharge>
                <h1>Reaction</h1>
              </div> 
              <div>80 <span className="text-slate-500">/ 100</span></div>
            </div>
            <div className="w-full flex justify-between p-4 mb-3 bg-yellow-100 rounded-lg ">
              <div className="flex items-center gap-2 text-yellow-500">
                <FaRegClock></FaRegClock>
                <h1>Memory</h1>
              </div> 
              <div>92 <span className="text-slate-500">/ 100</span></div>
            </div>
            <div className="w-full flex justify-between p-4 mb-3 bg-green-100 rounded-lg ">
              <div className="flex items-center gap-2 text-green-500">
                <FaWhatsapp></FaWhatsapp>
                <h1>Verbal</h1>
              </div> 
              <div>61 <span className="text-slate-500">/ 100</span></div>
            </div>
            <div className="w-full flex justify-between p-4 mb-3 bg-blue-100 rounded-lg ">
              <div className="flex items-center gap-2 text-blue-800">
                <FaEye></FaEye>
                <h1>Visual</h1>
              </div> 
              <div>61 <span className="text-slate-500">/ 100</span></div>
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="btn btn-neutral rounded-full w-2/3">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
