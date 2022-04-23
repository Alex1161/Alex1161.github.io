import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/Svgs'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  &>*:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};
`

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to={{pathname: 'https://github.com/Alex1161'}}>
          <Github width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to={{pathname: 'https://github.com/Alex1161'}}>
          <Twitter width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to={{pathname: 'https://github.com/Alex1161'}}>
          <Facebook width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to={{pathname: 'https://github.com/Alex1161'}}>
          <YouTube width={25} height={25} fill='currentColor' />
        </NavLink>
      </div>

      <Line />
    </Icons>
  )
}

export default SocialIcons