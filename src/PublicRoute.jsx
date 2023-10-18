import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './components/providers/AuthProvider';
import Loading from './page/Loading/Loading';

const PublicRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
   const location = useLocation();
            
    if(loading){
        return <Loading />
    }

    if(user)
    {
        return <Navigate to={location?.state ? location.state : "/"}></Navigate>
    }
 
    return children;
  

};

export default PublicRoute;