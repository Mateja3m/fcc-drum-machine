import Music from "./Music";
import { audioList } from "./data";
import {useState} from 'react'

function App() {
  const [volume, setVolume] = useState('0.6');
  const [record, setRecord]= useState('');
  return (
    <div className="bg-light min-vh-100 text-success justify-content">
        <h2>Drum Machine</h2>
      <div className="text-center wrapper">
        {audioList.map((clip) => (
          <Music key={clip.id} clip={clip} volume={volume} setRecord={setRecord} />
        ))}
        <br />
        <label className="volume-name">Volume</label> <br/>
        <input className="w-40 volume-slider" type='range' step='0.01' name='volume' min='0' max='1' value={volume} onChange={(e)=> setVolume(e.target.value)} /> 
        <h4 id='display'>{record}</h4>
      </div> 
    </div>
  );
}

export default App;
