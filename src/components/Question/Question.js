import React, { useState } from 'react'
import "./Question.css"
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const Question = ({title, details}) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className='question-container'>
       <article>
<header>
  <h4>{title}</h4>
  <button onClick={()=> setShowDetails(!showDetails)}>
    {showDetails? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
</header>
 {showDetails && <p>{details}</p>}
 </article>
    </div>

  )
}

export default Question