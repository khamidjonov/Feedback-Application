import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './Shared/Button'
import Card from './Shared/Card'

function FeedbackForm() {
  
  // useContext
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  // useState
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '' || text.trim() === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length !== '' && text.trim().length <= 10) {
      setMessage("Text must be more than 10 characters!")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(text.trim().length >= 10) {
      const newFeedback = {
        text, rating,
      }

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
      addFeedback(newFeedback);
    }

    setText('')
    }

  }


  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleSubmit}> 
        <h2>How would you rate your services with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm