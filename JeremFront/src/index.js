import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import Contact from './pages/Contact'
import Mentions from './pages/MentionsLégales'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faTiktok, faReact, faLinkedin, faHtml5, faCss3Alt, faJs, faWordpress, faGithub} from '@fortawesome/free-brands-svg-icons'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "/mentionslégales" element ={<Mentions />} /> 
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </HashRouter>
  </React.StrictMode>,
);


library.add(fas, faTwitter, faFontAwesome, faTiktok, faLinkedin, faReact, faHtml5, faCss3Alt, faJs, faWordpress, faGithub)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
