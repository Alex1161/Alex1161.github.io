import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import ParticipleComponent from '../subcomponents/ParticipleComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import { Design, Develope } from './Svgs'
import { lightTheme } from './Themes'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  position: relative;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p {
    margin-left: 2rem;
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticipleComponent theme='light' />
        <Main>
          <Title>
            <Design width={40} height={40} />Designer
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          </Description>
          <Description>
            <strong>I like to Learn</strong>
            <ul>
              <li>
                Web design
              </li>
              <li>
                Mobiles Apps
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>
                Figma
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />Frontend developer
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Vscode, Github, Codepen etc</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage