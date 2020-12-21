import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Container from '../../components/Container'
import siblings from '../../img/img_1595.jpg'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          {/* <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/img_1595.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                backgroundColor: '#c3e',
                color: 'white',
                padding: '1rem',
              }}
            >
              Latest Stories
            </h1>
          </div> */}
          <img src={siblings} alt="siblings" ></img>
          <h1
              style={{
                padding: '2rem 0',
                fontSize: '2.2rem',
                fontWeight: 'bold'
              }}
            >
            Latest Stories
          </h1>
          <div className="content">
            <BlogRoll />
          </div>
        </Container>
      </Layout>
    )
  }
}
