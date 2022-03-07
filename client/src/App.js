import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './pages/Style.css'
import Footer from './components/Footer/Footer';
import BackGroundBox from './components/BackGroundBox/BackGroundBox';
import UserMessage from './components/UserMessage/UserMessage';

function App() {
  return (
    <>
      <Navbar />
      <BackGroundBox>
        <AppRoutes />
      </BackGroundBox>
      <UserMessage />
      <Footer />
    </>
  );
}

export default App;
