import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
    <Layout>
      <SEO 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
        title="Home"
      />
      <Hero />
    </Layout>
)

export default IndexPage
