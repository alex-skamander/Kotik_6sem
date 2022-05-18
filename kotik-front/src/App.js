import './App.css';
import {Cart, Home, Products} from "./pages";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Outlet,
    Navigate
} from "react-router-dom";
import {Header} from "./components";
import LoginForm from "./components/LoginForm";
import {useSelector} from "react-redux";
import Profile from "./components/Profile";


function RequireAuth() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    let location = useLocation();

    if (!isLoggedIn) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
}

function App() {
  return (
    <div className="App">
      {/*<Products/>*/}
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<RequireAuth />}>
                    <Route path="/cats" key="cats" element={<Products />} />
                    <Route path="/dogs" key="dogs" element={<Products />} />
                    <Route path="/bird" key="bird" element={<Products />} />
                    <Route path="/rodents" key="rodents" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/login" element={<LoginForm />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
