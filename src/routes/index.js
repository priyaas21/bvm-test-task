import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../pages/loginForm';
import SignupForm from '../pages/signupForm';
import Dashboard from '../pages/dashboard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

export default function AppRoutes() {
    return (
      <Router>
      <div className="wrapper">
        {/* <Sidebar /> */}
        <div className="content">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/signup" element={<SignupForm />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
    );
  }

  