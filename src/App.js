import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Toolbar, Divider } from '@material-ui/core'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="App">
      {/* Until Admin section is done all passed data is being statically written */}
      <Navbar />
      <Toolbar id="top-anchor" />
      
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
