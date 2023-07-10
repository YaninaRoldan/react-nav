
import { Routes, Route } from 'react-router-dom'
import Template from './Template'
import Home from './Home'
import WhoWeAre from './WhoWeAre'
import ContactUs from './ContactUs'
import Services from './Services'
import './App.css'

const NotFound = () => <h1>Not Found!</h1>;

const App = () => (
  <Routes>
    <Route path='/' element={<Template />} >
      <Route index element={<Home />} />
      <Route path='who-we-are' element={<WhoWeAre />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='services' element={<Services />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
