import { useState } from 'react';
import './App.css';
import Pin from './components/Pin';

function App() {
const [otp,setOtp] = useState("")
  return (
    <div className="App">
     <Pin length={5} setOtp={setOtp} isOtp/>
       <div>
        The OTP input is {otp}
       </div>
    </div>
  );
}

export default App;
