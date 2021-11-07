import './App.css';
import Home from './components/Home'
import DisplayTweets from './components/DisplayTweets';
import DeleteTweet from './components/DeleteTweet';
import EditTweet from './components/EditTweet';
import GetSingleTweet from './components/GetSingleTweet';


function App() {
  return (
    <div>
      <Home />
      <DisplayTweets />
      <DeleteTweet />
      <EditTweet />
      <GetSingleTweet />
    </div>
  );
}

export default App;
