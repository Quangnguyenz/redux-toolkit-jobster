import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Dashboard, Register } from './pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile, AddJob, AllJobs, Stats, SharedLayout } from "./pages/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='landing' element={<Landing />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}
export default App;
