import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Explore from '../src/pages/Explore';
import ForgotPassword from '../src/pages/ForgotPassword';
import Offers from '../src/pages/Offers';
import Profile from '../src/pages/Profile';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
