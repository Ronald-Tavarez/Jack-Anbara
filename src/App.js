import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Toolbar, Container } from '@material-ui/core'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import EmailSignUp from './components/EmailSignUp'
import ContactForm from './components/ContactForm'
import AboutMe from './components/AboutMe'
import OfficeMap from './components/OfficeMap'
import ImageGallery from './components/ImageGallery'

const App = () => {
  return (
    <div className="App">
      {/* Until Admin section is done all passed data is being statically written */}
      <Navbar />
      <Toolbar id="top-anchor" />
      <Container disableGutters={true} maxWidth={false} >
        <Introduction />
        <EmailSignUp />
      </Container>
      <Container id="info_section" disableGutters={true} maxWidth={false} style={{minHeight: "100vh"}}>
        <OfficeMap />
        <AboutMe />
      </Container>
      <ImageGallery />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
