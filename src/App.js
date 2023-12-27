import logo from './logo.svg';
import './App.css';
import Board from './components/board/Board';
import SideNavbar from './components/sideNavbar/SideNavbar';

function App() {
  return (
    <div className="app__container">
      <SideNavbar />
      <Board />
    </div>
  );
}

export default App;
