import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import UserPage from '../UserPage/UserPage';
import PackagePage from '../PackagePage/PackagePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Greeting from '../../components/Greeting/Greeting';
import AboutUs from '../../components/AboutUs/AboutUs';

function App() {
  const [user, setUser] = useState(getUser());
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function estUser(user) {
    setUser(user);
  }
  return (
    <main className="App bg-gradient-to-b from-lime-100 to-lime-200 font-sans">
      <NavBar user={user} estUser={estUser} />
      { user ?
        <>
          <Routes>
            <Route path='/' element={<div className='home-container'>
              <Greeting /> <AboutUs />
              </div>} />
            <Route path='/orders' element={<UserPage user={user} />} />
            <Route path='/packages' element={<PackagePage user={user} estUser={estUser} date={date} setDate={setDate} />} />
            {/* nav to home page if route is invalid */}
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </>
        :
        <AuthPage estUser={estUser} />
      } 
    </main>
  )
}

export default App
