import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import CarsPage from './pages/cars/searchpage';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/protected';
import LoginPage from './pages/login/login';
import DashboardPage from './pages/dashboard/dashboardPage';
import CarsListPage from './pages/dashboard/carsPage';
import AddCarPage from './pages/dashboard/addCarsPage';
import EditCarPage from './pages/dashboard/editPage';
import { GoogleOAuthProvider } from '@react-oauth/google'

export const CLIENT_ID = '1020414211454-vhqkl708cateej0qsl84knc1ok6kslr7.apps.googleusercontent.com'

function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/edit-car/:id" element={<EditCarPage />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
            <Route path='/dashboard/cars' element={<CarsListPage/>}/>
            <Route path='/dashboard/addcar' element={<AddCarPage/>}/>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
    
  );

}

export default App;
