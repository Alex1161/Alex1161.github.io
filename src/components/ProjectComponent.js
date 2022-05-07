import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 27rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0,0,0,2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3 ease;
  }
`

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};

  ${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
  }
`
const Description = styled.span`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
`

const HashTags = styled.div`
  padding: 0.5rem 0;
`

const Tag = styled.span`
  padding-right: 0.5rem;
`

const Date = styled.span`
  padding: 0.5rem 0;
`

const Container = styled(motion.div)``

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const ProjectComponent = (props) => {
  const {name, tags, date, description, imgSrc, link} = props.project;

  return (
    <Container
    variants={Item}
    >
      <Box target='_blank' href={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <HashTags>
          {
            tags.map((t,id) => {
              return <Tag key={`tag-${id}`}>#{t}</Tag>
            })
          }
        </HashTags>
        <Date>
          {date}
        </Date>
      </Box>
    </Container>
  )
}

export default ProjectComponent