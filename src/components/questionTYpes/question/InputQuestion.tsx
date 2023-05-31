import React, { ChangeEvent, useState} from 'react'

const InputQuestion = () => {
  const [question, setQuestion] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };


  return (
    <>
       <div className="input-group flex-nowrap " >
         <input type="text" onChange={handleChange} value={question} placeholder='Type Your Question here' style={{width: '100%', outlineColor: 'none', fontWeight: 'bolder', borderBottom: '3px solid hsl(48.24deg 58.62% 65.88%)', fontSize: '22px ', backgroundColor: 'hsl(0deg 0% 98.04%)'}} className='py-2'/>
      </div>
    </>
  )
}

export default InputQuestion
