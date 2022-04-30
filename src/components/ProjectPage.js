import React from 'react'
import styled from 'styled-components'
import { English } from '../languages/english'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerButton from '../subcomponents/PowerButton'
import SocialIcons from '../subcomponents/SocialIcons'
import ProjectComponent from './ProjectComponent'

const MainContainer = styled.div`
  width: 100vw;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0, 8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`

const ProjectPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Center>
          <Grid>
            {
              English.projects.map(p => {
                return <ProjectComponent key={p.id} project={p} />
              })
            }
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default ProjectPage