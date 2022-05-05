import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import Header from './Components/Header';
import AboutPage from './Components/Pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
