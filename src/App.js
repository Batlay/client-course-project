import './styles/app.css'
import './styles/navbar.css'
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';
import { UserContext } from './context/userContext';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState([])


    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        if(localStorage.getItem('user')) {
            setValue(localStorage.getItem('user'))
        }
        setIsLoading(false)
    }, [])

    return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
        <UserContext.Provider value={{value, setValue}}>
            <Router>
                <AppRouter />
            </Router>
        </UserContext.Provider>
    </AuthContext.Provider>
    )
}

export default App;
