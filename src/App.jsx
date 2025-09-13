// src/App.js
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AccountPage from './users';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App ()
{
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/detail/:id' element={ <DetailPage /> } />
        <Route path='/account' element={ <AccountPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;