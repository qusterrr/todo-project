import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './screens/Home.js'
import Authentication, {AuthenticationMode} from './screens/Authentication.js'
import ErrorPage from './screens/ErrorPage.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.js'
import UserProvider from './context/UserProvider.js'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>
  },
  {
    path: 'signup',
    element: <Authentication authenticationMode={AuthenticationMode.Register}/>
  },
  {
    path: 'signin',
    element: <Authentication authenticationMode={AuthenticationMode.Login}/>
  },
  {
    element: <ProtectedRoute/>,
    children: [
      {
        path: '',
        element: <Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)