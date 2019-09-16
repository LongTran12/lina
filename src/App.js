import React from 'react';
import './App.css';
import SectionSlider from "./components/SectionSlider";
import SectionWhat from "./components/SectionWhat";
import SectionInnovation from './components/SectionInnovation';
import SectionIntro from './components/SectionIntro';
import SectionTeam from './components/SectionTeam';
import Header from './components/Header';
import SectionAvisors from './components/SectionAvisors';
import WrapSiteContext from './contexts/siteContext';
import SectionStragic from './components/SectionStragic';
import SectionMedia from './components/SectionMedia';
import Footer from './components/Footer'

function App() {
    return (
        <WrapSiteContext>
            <Header />
            <SectionSlider />
            <SectionWhat />
            <SectionInnovation />
            <SectionIntro />
            <SectionTeam />
            <SectionAvisors />
            <SectionStragic />
            <SectionMedia />
            <Footer />
        </WrapSiteContext>
    );
}

export default App;