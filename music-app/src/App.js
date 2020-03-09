import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'

const App = () => {
  const [searchParam,setSearchParam] = useState('');

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
    }
    let apiKey = process.env.REACT_APP_SPOTIFY_API_KEY;

  },[])

  const searchNewTerm = e => {
    const term = e.target.value;
    setSearchParam(term);
  }

  return (
    <React.Fragment>
      <div id="login">

      </div>
      <input
        type="text" 
        value={searchParam}
        onChange={e => searchNewTerm(e)}
      />
    </React.Fragment>
  );
}
export default App;
