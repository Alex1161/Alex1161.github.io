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
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={ lightTheme }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
