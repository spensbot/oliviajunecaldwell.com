import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <PageContent className="content" content={content} />
    //           <div
    //             style={{
    //               width: "100%",
    //               height: "40rem",
    //               maxHeight: "80vh",
    //               display: "flex",
    //               justifyContent: "center",
    //               alignItems: "center",
    //               margin: "auto",
    //             }}
    //           >
    //             <iframe
    //               src="https://www.google.com/maps/d/embed?mid=1rkjG1kfLCcOqCcwxsjuqgu27kok"
    //               style={{
    //                 border: "none",
    //                 title: "Olivia's Journey",
    //                 width: "100%",
    //                 height: "100%",
    //               }}
    //             ></iframe>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Container>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />
      <div
        style={{
          width: "100%",
          height: "40rem",
          maxHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1rkjG1kfLCcOqCcwxsjuqgu27kok"
          title="Olivia's Journey"
          style={{ border: "none", width: "100%", height: "100%" }}
          scrolling="no"
        ></iframe>
      </div>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
