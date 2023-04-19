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
  function estUser(user) {
    setUser(user);
  }
  return (
    <main className="App">
      <NavBar user={user} estUser={estUser} />
      { user ?
        <>
          <Routes>
            <Route path='/' element={<div className='home-container'>
              <Greeting /> <AboutUs />
              </div>} />
            <Route path='/orders' element={<UserPage user={user} />} />
            <Route path='/packages' element={<PackagePage user={user} estUser={estUser} />} />
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
