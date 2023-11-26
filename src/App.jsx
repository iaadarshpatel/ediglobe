import React from 'react';
import Home from './Home';
import About from './Component/aboutUs/about';
import TermsCondition from './Component/TermsCondition/TermsCondition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FaqPage from './Component/FaqPage/FaqPage';
import Privacy from './Component/Privacy-Policy/Privacy';
import Contact from './Component/ContactUs/Contact';
import AllDeparts from './Component/AllDeparts/AllDeparts';
import Certificates from './Component/All-sub-pages/Certificates/certificates';
import Checkcertificate from './Component/All-sub-pages/Checkcertificate/checkcerttificate';
import Career from './Component/All-sub-pages/Career/Career';
import CampusAmb from './Component/All-sub-pages/CampusAmb/CampusAmb';
import CSE from './Component/All-sub-pages/course-deatils/CSE';
import ECE from './Component/All-sub-pages/course-deatils/ECE';
import Civil from './Component/All-sub-pages/course-deatils/Civil';
import Mechanical from './Component/All-sub-pages/course-deatils/Mechanical';
import Management from './Component/All-sub-pages/course-deatils/Management';
import BioTechnology from './Component/All-sub-pages/course-deatils/Biotechnology';
import AppDev from './Component/All-sub-pages/ComputerScience/AppDev';
import Refundpolicy from './Component/All-sub-pages/refundPolicy/Refundpolicy';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/TermsCondition' element={<TermsCondition/>}/>
        <Route path='/FaqPage' element={<FaqPage/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>    
        <Route path='/Contact' element={<Contact/>}/>    
        <Route path='/AllDeparts' element={<AllDeparts/>}/>    
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/checkcertificate' element={<Checkcertificate/>}/>     
        <Route path='/career' element={<Career/>}/> 
        <Route path='/campusAmb' element={<CampusAmb/>}/> 
        <Route path='/computerscience' element={<CSE/>}/> 
        <Route path='/ece' element={<ECE/>}/> 
        <Route path='/civil' element={<Civil/>}/> 
        <Route path='/mechanical' element={<Mechanical/>}/> 
        <Route path='/management' element={<Management/>}/> 
        <Route path='/biotechnology' element={<BioTechnology/>}/> 
        <Route path='/computerscience/appdevelopment' element={<AppDev/>}/>
        <Route path='/refundpolicy' element={<Refundpolicy/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
