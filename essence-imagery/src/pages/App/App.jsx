import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import UserPage from '../UserPage/UserPage';
import PackagePage from '../PackagePage/PackagePage';
import AuthPage from '../AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState(getUser());
  function estUser() {
    setUser();
  }
  return (
    <main className="App">
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
        <AuthPage estUser={setUser} />
      } 
    </main>
  )
}

export default App
