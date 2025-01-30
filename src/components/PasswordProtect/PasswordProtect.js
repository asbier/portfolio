import React, { useState } from 'react'; 
import PasswordPage from '../PasswordPage/PasswordPage'; 

const PasswordProtect = ({ children }) => { const 
  [isAuthenticated, setIsAuthenticated] = useState(false); const handlePasswordCorrect = () => { setIsAuthenticated(true); }; if (!isAuthenticated) { return <PasswordPage 
    onPasswordCorrect={handlePasswordCorrect} />; } return <>{children}</>; };
    
    export default PasswordProtect;