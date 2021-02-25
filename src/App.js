import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Toolbar, Divider } from '@material-ui/core'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import EmailSignUp from './components/EmailSignUp'
import ContactForm from './components/ContactForm'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div className="App">
      {/* Until Admin section is done all passed data is being statically written */}
      <Navbar />
      <Toolbar id="top-anchor" />
      <Introduction />
      <EmailSignUp />
      <AboutMe />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
