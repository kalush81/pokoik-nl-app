import React from "react"
import Layout from "../components/layout"
import Offer from "../components/offer"
import { graphql, useStaticQuery } from "gatsby"

export default function AllOffers() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              date
              title
              imgSrc
            }
          }
        }
      }
    }
  `)
  //console.log("html data from graphql :", data.allMarkdownRemark.edges)
  return (
    <Layout>
      <div style={{ minHeight: "60vh" }}>
        <h1>List of all offerts</h1>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Offer
              title={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
              imgSrc={edge.node.frontmatter.imgSrc}
            />
          )
        })}
      </div>
    </Layout>
  )
}
