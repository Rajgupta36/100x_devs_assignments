import { RecoilRoot } from 'recoil'
import './App.css'
import Entry from './components/entry'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import OTP from './components/otp';
import Success from './components/succes';

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<Entry />} />
              <Route path="/verify" element={<OTP />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
