import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Toolbar, Container, ThemeProvider, createMuiTheme } from '@material-ui/core'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import EmailSignUp from './components/EmailSignUp'
import ContactForm from './components/ContactForm'
import AboutMe from './components/AboutMe'
import OfficeMap from './components/OfficeMap'
import ImageGallery from './components/ImageGallery'



const App = () => {
  const theme = createMuiTheme({ 
    palette: {
      primary: {
        dark: "#B79346",
        main: "#D6AB4E"
      },

    }
  })

  return (
    
    <div className="App">
      {/* Until Admin section is done all passed data is being statically written */}
      <ThemeProvider theme={theme}>
      <Navbar />
      <Toolbar id="top-anchor" />
      <Container disableGutters={true} maxWidth={false} >
        <Introduction />
        <EmailSignUp />
      </Container>

        <AboutMe />

      <ImageGallery />
      <ContactForm />
      <OfficeMap />
      <ScrollToTop />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
