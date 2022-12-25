
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Video Streaming site</h1>
      <h2>Coin Operated - Animated Short Film</h2>
      <video with="700px" height="400px" controls>
        <source src="https://d2rs871f9yu3lb.cloudfront.net/Coin Operated - Animated Short Film.mp4" type="video/mp4" />
      </video>
      <div>
        <h4>---------------------------------------</h4>
      </div>
      <h2>Current Joys A different age</h2>
      <video with="700px" height="400px" controls>
        <source src="https://d2rs871f9yu3lb.cloudfront.net/Current_Joys_A_different_age.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
