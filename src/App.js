import { 
  BrowserRouter, Routes, Route 
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes'
import GlobalStyle from './globalStyles'

// Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import MySkillsPage from './components/MySkillsPage'
import {LanguageContext} from './components/LanguageContext';
import { english } from './languages/english';
import { React, useState } from 'react';


function App() {
  const [language, setLanguage] = useState(english);

  return (
    <>
      <GlobalStyle />
      <LanguageContext.Provider value={{language, setLanguage}}>
        <ThemeProvider theme={ lightTheme }>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
