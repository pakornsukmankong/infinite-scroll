import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import HomePage from '../pages/HomePage'
import PhotoPage from '../pages/PhotoPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Route>
    </Routes>
  )
}

export default Router
