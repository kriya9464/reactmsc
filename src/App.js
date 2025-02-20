
import './App.css';
import EventsPg from "./Events/EventsPg";
import Header from './Header/Header';
import Footer from './Header/Footer';
import Modal from './Header/Modal';
import Contacts from "./Contact/Contacts";
import MainSection from './Teams/MainSection';
import Home from "./Home/Home";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FAQs from './Header/FAQs';
import Blog from "./BlogPages/assets/Blog";
import Blogpg from './BlogPages/BlogPg';
import Bootcamp from './Bootcamp/Bootcamp';
import BlogKhushiSharma from './BlogPages/blogslist/BlogKhushiSharma';
import BlogAasthaSinghal from './BlogPages/blogslist/BlogAasthaSinghal';
import Upcoming from './Home/Upcoming';
// import AboutSec from './Home/AboutSec';
// import CardContainer from './Home/CardContainer';
import Triathlon from './Triathlon/MainPage';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

<Header/>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contacts/>}/>
  <Route path="/team" element={<MainSection/>}/>
  <Route path="/faq" element={<FAQs/>}/>
  <Route path="/events" element={<EventsPg/>}/>
  <Route path="/blog" element={<Blogpg/>}/>
  <Route path="/googlegenerationscholarship" element={<Blog/>}/>
  <Route path="/bootcamp" element={<Bootcamp/>}/>
  <Route path="/mlsaapplicationprocess" element={<BlogKhushiSharma/>}/>
  <Route path="/smarthackathon(ferozpur)" element={<BlogAasthaSinghal/>}/>
  <Route path="/upevent" element={<Upcoming/>}/>
</Routes>
</BrowserRouter>
<Footer/>
{/* <Triathlon /> */}
    </div>
  );
}

export default App;
