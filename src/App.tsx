import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route';
// import { useMoch } from './Api/--MOCH--';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  // useMoch()
  return (
    <>
      <div className='w-full h-dvh flex overflow-hidden justify-center items-center '>
        <div className='w-full max-w-[32rem]'>
            <GoogleOAuthProvider clientId="750278697489-u68emmire3d35234obo1mne9v0eobmsu.apps.googleusercontent.com">
              <RouterProvider router={route} />
              <ToastContainer />

            </GoogleOAuthProvider>
        </div>          
      </div>
    </>
  )
}

export default App
