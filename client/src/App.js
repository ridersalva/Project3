import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './pages/Style.css'
import Footer from './components/Footer/Footer';
import BackGroundBox from './components/BackGroundBox/BackGroundBox';

function App() {
  return (
    <>
      <Footer />
     <BackGroundBox>
    <AppRoutes />
      </BackGroundBox>
      <Navbar />
    </>
  );
}

export default App;
