import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
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

const Background = ({ children, image, styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={ image || fluid }
        className={ styleClass || "bcg"}
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .bcg {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

    .banner {
        min-height: 35vh;
        display: grid;
        padding: 10rem 0;
        place-items: center;
    }
`
export default Background
