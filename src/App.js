import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../src/components/Navbar';
import PrivateRoute from '../src/components/PrivateRoute';
import Explore from '../src/pages/Explore';
import ForgotPassword from '../src/pages/ForgotPassword';
import Offers from '../src/pages/Offers';
import Category from '../src/pages/Category';
import Profile from '../src/pages/Profile';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import CreateListing from '../src/pages/CreateListing';
import Listing from '../src/pages/Listing';
import Contact from '../src/pages/Contact';
import EditListing from '../src/pages/EditListing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlordId" element={<Contact />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
