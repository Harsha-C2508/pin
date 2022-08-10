import { useState } from 'react';
import './App.css';
import Pin from '../../day9ass/src/Component/Pin';

function App() {
const [otp,setOtp] = useState("")
  return (
    <div className="App">
     <Pin length={4} setOtp={setOtp} />
       <div>
        The OTP input is {otp}
       </div>
       
    </div>
  );
}

export default App;
