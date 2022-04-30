import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`

const ProjectComponent = (props) => {
  const {name, tags, date, imgSrc, link} = props.project;

  return (
    <Box target='_blank' to={{pathname: link}}>
      Project Item
    </Box>
  )
}

export default ProjectComponent