import React from 'react'
import './FormStyles.css'

function Form() {
  return (
    <div className='back'>
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea><text row='6' aria-placeholder='Type a short massage here' /></textarea>

            <button className='btc sub'>Submit</button>
           
        </form>
        <div><h3 className='guest'>You can also ask all questions to our gmail. We will answer all questions within 5 working days. We will be glad to see your question! We will try to answer your question as soon as possible.you can also write how do you like our company, we will read all the comments and we will try to remove the problems that you did not like</h3></div>
        <hr></hr>
        
    </div></div>
  )
}

export default Form