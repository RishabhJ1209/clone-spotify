import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Player from './components/Playerplaylist'

function App() {
  return (
    <>
      <Header />
      <div className='player-container'>
        <div className='side-bar'>
        <Sidebar />
        </div>
        <div className='player-playlist'>
        <Player />
        </div>
      </div>
      <div className='footer'>
      <Footer />
      </div>
      
      
      
    </>
  );
}

export default App;
