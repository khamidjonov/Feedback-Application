import { createContext, useState } from 'react';
import FeedbackData from '../Data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id)); 
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  };

  const [feedbackEdit, setFeedbeckEdit] = useState({
    item: {},
    edit: false
  })

  const editFeedback = (item) => {
    setFeedbeckEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => item.id === id ? {...item, ...updItem} : item)
      // feedback.filter((item) => item.id !== id).concat(updItem)
    )
  }

  return (
    <FeedbackContext.Provider value={{ 
      feedback,
      feedbackEdit,
      deleteFeedback, 
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
