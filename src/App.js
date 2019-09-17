import React from 'react';
import './App.css';
import SectionSlider from "./components/SectionSlider";
import SectionWhat from "./components/SectionWhat";
import SectionInnovation from './components/SectionInnovation';
import SectionIntro from './components/SectionIntro';
import SectionTeam from './components/SectionTeam';
import SectionAvisors from './components/SectionAvisors';
// import WrapSiteContext from './contexts/siteContext';
import SectionStragic from './components/SectionStragic';
import SectionMedia from './components/SectionMedia';
import SectionReview from './components/SectionReview';
import SectionCharts from './components/SectionCharts';

function App() {
    return (
        <>
            <SectionSlider />
            <SectionWhat />
            <SectionInnovation />
            <SectionIntro />
            <SectionTeam />
            <SectionAvisors />
            <SectionStragic />
            <SectionMedia />
            <SectionReview />
            <SectionCharts />
        </>
    );
}

export default App;