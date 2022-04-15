import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Section from "./section"

const Page = (props) => {

    console.log(props)

    return (
        <Layout>
            <Seo title={props.pagedata.title} />
            <GatsbyImage
                image={getImage(props.pagedata.image.asset.gatsbyImageData)}
                alt={props.pagedata.title}
            />
            {props.pagedata.sections.map((section, i) => <Section data={section} key={i} />)}
        </Layout>
    )
}
export default Page
