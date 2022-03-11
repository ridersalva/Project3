import './App.css';
import AppRoutes from './routes/AppRoutes';
import './pages/Style.css'
import Footer from './components/Footer/Footer';
import BackGroundBox from './components/BackGroundBox/BackGroundBox';
import UserMessage from './components/UserMessage/UserMessage';
import Navbar from './components/Navbar/Navbar.jsx';
import Footerw2 from './components/Footer/Footerw2';

function App() {
  return (
    <>
      <Footer />
      <BackGroundBox>
        <AppRoutes />
      </BackGroundBox>
      <UserMessage />
      <Navbar />
     
    </>
  );
}

export default App;
