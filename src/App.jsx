// src/App.js
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AccountPage from './users';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';

function App ()
{
  return (
    <div className="App">
      <Routes>
        {/* Nhóm route có Header + Footer */ }
        <Route element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/detail/:id" element={ <DetailPage /> } />
        </Route>

        {/* Route account KHÔNG có Header/Footer */ }
        <Route path="/account" element={ <AccountPage /> } />
      </Routes>
    </div>
  );
}

export default App;
