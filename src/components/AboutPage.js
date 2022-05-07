import React, { Context } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LanguageContext } from './LanguageContext'
import LogoComponent from '../subcomponents/LogoComponent'
import ParticipleComponent from '../subcomponents/ParticipleComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import { Design, Develope } from './Svgs'
import { darkTheme } from './Themes'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
  return (
    <LanguageContext.Consumer>
      {
        (value) => {
          return (
            <ThemeProvider theme={darkTheme}>
              <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticipleComponent theme='dark' />

                <Main>
                  {value.language.about}
                </Main>
              </Box>
            </ThemeProvider>
          )
        }
      }
    </LanguageContext.Consumer>
  )
}

export default AboutPage