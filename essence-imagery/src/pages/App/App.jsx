import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import UserPage from '../UserPage/UserPage';
import PackagePage from '../PackagePage/PackagePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser());
  function estUser() {
    setUser();
  }
  return (
    <main className="App">
      <NavBar user={user} />
      { user ?
        <>
          <Routes>
            <Route path='/orders' element={<UserPage />} />
            <Route path='/orders/new' element={<PackagePage user={user} estUser={estUser} />} />
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
