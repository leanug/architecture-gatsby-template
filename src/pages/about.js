import React from 'react';
import Accordion from '../components/Accordion'
import Background from '../components/Background'
import Facts from '../components/Facts'
import faq from '../constants/questions'
import { graphql } from 'gatsby'
import Image from "gatsby-image"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import styled from 'styled-components'
import { setBreakpoint } from '../styles/'
import Team from '../components/Team'
import Title from '../components/Title'


export const query = graphql`
  {
    img1: file(relativePath: {eq: "about-4.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: {eq: "about-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const about = ({ data }) => {
    return (
      <Layout>
        <SEO 
          description="About web dev"
          title="About"
        />
        <Wrapper>
          <div className="container">
            <Title 
              title="about us" 
              text="Cloud bread live-edge direct trade deep"
              left
            />
          </div>
          
          <Background
                image={ data.img1.childImageSharp.fluid }
            >   
          </Background>

          <section className="section-bg section-padding">
              <div className="container">
              
              <Title 
              title="Our company in numbers" 
              text="Cloud bread live-edge direct trade deep"
              left
            />
              <Facts />
              
              </div>
          </section>

          <section className="container section-padding">
              <Title 
                  title="Meet the team" 
                  text="Cloud bread live-edge direct trade deep"
                  left
              />
              <Team />
          </section>

          <Background styleClass="banner">
              <div className="container center">
                  <h2 className="display-2">Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum!</p>
                  <Link to="/contact" className="btn">Get in touch</Link>
              </div>
          </Background>

          <section className="section-bg section-padding"> 
              <div className="container">
              <Title 
              title="Architects with a different approach" 
              text="Cloud bread live-edge direct trade deep"
              left
            />
            <div className="columns-2">
              <div className="order-2">
                  <h2>Design Process</h2>
                  <p>Adipisicing elit. Quis aspernatur illum eveniet enim fuga ipsam quo pariatur sed, animi tempore eligendi praesentium magnam dolores at voluptate dolor? Error accusamus nostrum corporis qui sint, fugit harum, eum mollitia autem, maxime quasi!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat. Illum eveniet enim fuga ipsam quo pariatur sed, animi tempore</p>
                  <p><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos.</u></p>
                  <p><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos.</u></p>
              </div>
              <div className="order-1">
                <Image fluid={ data.img2.childImageSharp.fluid } />
              </div>
            </div>
              </div>
            
          </section>

          <section className="container section-padding">
            <Title 
              title="Frequently asked questions" 
              text="Cloud bread live-edge direct trade deep"
              left
            />
            <Accordion data={ faq } />
          </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.article`
    margin-top: 14rem;

   .columns-2 {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat( auto-fit, minmax( 30rem, 1fr ) );
    margin-bottom: 4rem;
    
    h2 {
      margin: 3rem 0 2.5rem 0;
    }
  }

  @media screen and ( max-width: ${ setBreakpoint.medium } ) {
    .order-1 { 
      order: 1; 
    }

    .order-2 { 
      order: 2;
    }   
  }

  .content {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr ));
    grid-gap: 3rem;
  }
`

export default about;