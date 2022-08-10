import React from 'react'
import  PropTypes  from 'prop-types'
import { useState } from 'react'
import { useRef } from 'react'
import PinInput from './PinInput'
const Pin = ({length,setOtp}) => {
    const [inputBoxLength] = useState(new Array(length).fill(1))
    const [inputData] = useState(new Array(length).fill(""))
    const inputRef = useRef([])

    const changeHandler = (e,index) =>{
        inputData[index] = e.target.value

       if(e.target.value.length > 0 && index < length-1){
        inputRef.current[index+1].focus()
       }
       setOtp(inputData.join(""));
    };

    const handleBackSpace = (e,index) =>{

       if(index > 0){
        inputRef.current[index-1].focus()
       }
       inputData[index] = e.target.value;
    }

    const PasteContent=(e)=>{
        const data = e.clipboardData
               .getData("text")
               .split("")
               .filter((_,index)=>index < length);

        data.forEach((item,index)=>{
            inputData[index] = item;

            inputRef.current[index].value = item;
            if(index < length-1){
                inputRef.current[index + 1].focus();
            }
        })

        console.log("paste the data",e.clipboardData.getData("text"));
    }

console.log(inputRef);
  return (
    <div style={{display:"flex",width:"25%",margin:"auto"}} onPaste={PasteContent}>
        {inputBoxLength.map((_,index)=>{
            return (
           <PinInput
              ref={(element)=>{
                        inputRef.current[index] = element
              }}
              key={index}
              singleInput={(e)=>changeHandler(e,index)}
              BackSpace = {(e)=>handleBackSpace(e,index)}
           />
          )

        })}
    </div>
  )
}

export default Pin

Pin.propTypes ={
    length: PropTypes.number.isRequired,
    setOtp: PropTypes.func,
}