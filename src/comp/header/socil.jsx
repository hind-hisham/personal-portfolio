import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {ImDribbble} from 'react-icons/im'
const socil = () => {
  return (
    <div className="header-social">
      <a href="https://linkedin.com" target="_blank"><ImLinkedin/></a>
      <a href="https://github.com" target="_blank"><BsGithub/></a>
      <a href="https://dribble.com" target="_blank"><ImDribbble/></a>
    </div>
  )
}

export default socil