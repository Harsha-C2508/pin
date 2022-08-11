import React, { forwardRef } from 'react'

const PinInput = forwardRef(({singleInput,BackSpace},ref) => {
    const handleKeyUp=(e)=>{
        if(e.keyCode === 8 && !e.target.value){
            BackSpace(e);
        }
        else{
            singleInput(e)
        }
    }
  return (
    <div>
         <input 
                ref={ref}
                maxLength={4}
                onKeyUp={handleKeyUp}
                // onChange ={(e)=>singleInput(e)}
            />
    </div>
  )
})

export default PinInput