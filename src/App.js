import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import EmailSignUp from './components/EmailSignUp'
import CallToAction from './components/CallToAction'
import { Toolbar, Divider } from '@material-ui/core';


const App = () => {
  return (
    <div className="App">
      {/* Until Admin section is done all passed data is being statically written */}
      <Navbar />
      <Toolbar id="top-anchor" />
      <CallToAction />
      <EmailSignUp />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
