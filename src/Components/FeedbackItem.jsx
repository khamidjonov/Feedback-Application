import Card from './Shared/Card'
import {FaEdit, FaTimes} from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

export default function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close' >
        <FaTimes color='blue' />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color='blue' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
