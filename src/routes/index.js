import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../pages/loginForm';
import SignupForm from '../pages/signupForm';
import Dashboard from '../pages/dashboard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

function AppRoutes() {
    return (
      <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
    );
  }
  
  export default AppRoutes;