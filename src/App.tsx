import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID as string}>
        <Routes>
            <Route path='/' element={<TicTacToe />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
            <Route path='/login' element={<TicTacToe />}/>
          </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
