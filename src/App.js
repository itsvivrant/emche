import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [style, setStyle] = useState(false)

  const noButton = document.querySelector('#no-bttn');
  var x = Math.random() * (window.innerWidth - noButton?.offsetWidth);
  var y = Math.random() * (window.innerHeight - noButton?.offsetHeight);

  useEffect(() => {

  }, [style]);

    const moveNoButton = () => {
      setStyle(true)
    }

  return (
    <div className="App">
      <div className="question-container">
        <header className="App-header">
        <iframe src="https://giphy.com/embed/8hZ5lHJMtUE2iCVK8W" width="480" height="480" class="giphy-embed" allowFullScreen></iframe>
          <p className="question">Emily, Will You Be My Girlfriend ?</p>
        </header>
      </div>
      <div className="choices-container">
        <div className='choiceone'>
          <button
            className="bttn"
            id="yes-bttn">
            <svg class="yes-heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </button>
          <p>Yes</p>
        </div>

        <div className="choicetwo">
          <button
            onClick={moveNoButton()}
            onmouseover={moveNoButton()}
            className="bttn"
            id="no-bttn"
            style ={{
              left: style ? ` ${x}px` : "",
              top: style ? `${y}px` : "",
              position: style ? "absolute" : ""
            }}>
            <svg class="no-heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </button>
          <p>No</p>
        </div>
      </div>
    </div>
  );
}

export default App;
