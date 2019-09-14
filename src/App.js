import React from 'react';
import './App.css';
import SectionSlider from "./components/SectionSlider";
import SectionWhat from "./components/SectionWhat";
import SectionInnovation from './components/SectionInnovation';
import SectionIntro from './components/SectionIntro';
import SectionTeam from './components/SectionTeam';

function App() {
  return (
    <>
      <SectionSlider/>
        <SectionWhat/>
        <SectionInnovation/>
        <SectionIntro/>
        <SectionTeam/>
    </>
  );
}

export default App;