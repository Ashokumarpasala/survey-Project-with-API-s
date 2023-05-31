import React, { ChangeEvent, useState} from 'react'

const InputQuestion = () => {
  const [question, setQuestion] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };


  return (
    <>
       <div className="input-group flex-nowrap " >
         <input type="text" onChange={handleChange} value={question} placeholder='Type Your Question here' style={{width: '100%', outlineColor: 'none', fontWeight: 'bolder', borderBottom: '3px solid yellow', fontSize: '22px '}} className='py-2'/>
      </div>
    </>
  )
}

export default InputQuestion
