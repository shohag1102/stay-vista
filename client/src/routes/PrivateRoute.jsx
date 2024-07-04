import useAuth from '../hooks/useAuth'
import Loader from '../components/Shared/Loader'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({children}) {
  const {user, loading} = useAuth()
  const location = useLocation()
  console.log('location: ', location)
  if(loading) return <Loader/>
  if (user) return children
//   return <Navigate to={'/login'} state={{from: location.pathname}} replace/>
 return <Navigate state={location.pathname} to={'/login'} replace/>  
}


export default PrivateRoute;