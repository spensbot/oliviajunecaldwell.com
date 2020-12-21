import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Container from '../components/Container'
import Olivia from '../img/Olivia-portrait.jpg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        marginBottom: '2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            // boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.46)',
            // backgroundColor: '#ba41f2',
            backgroundColor: '#fff',
            color: '#222',
            lineHeight: '1',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <img alt="Olivia June Caldwell Portrait" src={Olivia} style={{objectFit: "cover", width:"20rem", height:"20rem", margin: "auto"}}/>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem 0', maxWidth: '100%'}}>
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                padding: '0.5em'
              }}
            >
              {title}
            </h1>
            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                padding: '1em'
              }}
            >
              {subheading}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <Container maxWidth="950px">
      <div className="content">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              {heading}
            </h3>
            <p>{description}</p>
          </div>
        </div>
        {/* <Features gridItems={intro.blurbs} />
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/products">
              See all products
            </Link>
          </div>
        </div> */}
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">
            Latest stories
          </h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
