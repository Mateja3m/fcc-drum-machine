import Music from './Music';
import {audioList} from './data'



function App() {
  return (
    <div className="bg-light min-vh-100 text-success justify-content">
  <div className='text-center'>
  <h2>Drum Machine</h2>
  {audioList.map((clip)=> 
  (<Music key={clip.id} clip={clip} />)
  )}
  </div>
    </div>
  );
}

export default App;
