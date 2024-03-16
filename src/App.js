import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/index';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

const App = () => {
  const isSignInRoute = routes.some((route) => route.path === '/SignIn');

  return (
    <Router>
      {/* {isSignInRoute && <NavBar />} */}
      <div className='container mt-4'>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
      {/* {isSignInRoute && <Footer />} */}
    </Router>
  );
};

export default App;
