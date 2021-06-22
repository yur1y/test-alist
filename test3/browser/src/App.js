import './App.css';
import Folders from './Folders';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Folders expandedFolders={['/Common7/IDE', '/VC']} />
      </header>
    </div>
  );
}

export default App;
