import React from 'react';
import Background from './Background'
import { Link } from 'gatsby'
import { setColor } from '../styles'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <Background
                image={ fluid }
            >
                <article>
                    <p>Creative Designs and Creative Works</p>
                    <h1>Minimalist and sustainable home and office decorations</h1>
                    <Link to="/portfolio">Portfolio</Link>
                </article>
            </Background>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    article {
        width: 90vw;
        max-width: 80rem;
        text-align: center;

        p {
          font-size: 1.6rem;
        }

        h1 {
          line-height: 1.25;
          margin: 2rem 0 3rem 0;
          letter-spacing: 3px;
        }

        h4 {
          font-weight: 400;
        }
        
        a {
          background: transparent;
          border: 2px solid ${ setColor.colorDelta_2 };
          border-radius: 2px;
          padding: 1rem 2rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.2s ease-in;
        }

        a:hover {
          background: ${ setColor.colorDelta_2 };
          color: ${ setColor.colorSigma };
        }

        @media (min-width: 800px) {
          a {
            font-size: 1.2rem;
            padding: 1.2rem 2rem;
          }

          h1 {
            letter-spacing: 5px;
          }
        }
    }
`

export default Hero;