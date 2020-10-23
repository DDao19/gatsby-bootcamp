import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Hi! I've been coding since 2017 working with front end and backend technologies such as Python, ReactJS, Django, MySQL and more.

      Working with technology has always been a passion for me which is why I started coding. Soon as I got into coding, I fell in love with it and couldn't let it go. Coding has now become my full-time passion and I want to use my skills in order to help bring value in the technology space while still learning and growing my skills as a developer. I'm highly motivated and self driven person who works great in team evironments and delivering results. The best part of coding is that you never stop learning and growing!</p>
      <br />
      <p>Visit my website: <Link target="_blank" to="https://dungdao.netlify.app/">HERE!</Link></p>
    </Layout>
  )
}



export default AboutPage