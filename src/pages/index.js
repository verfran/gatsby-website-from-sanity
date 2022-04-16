import * as React from "react"
import { graphql } from "gatsby"

import Page from "../components/page"

export default function IndexPage({ data }) {

  if (null == data.sanitySiteSettings.homepage) {
    return (<div> Home page not defined. Set the home page in the CMS Site settings</div>)
  }

  return (
    <Page pagedata={data.sanitySiteSettings.homepage} />
  )
}

export const query = graphql`
{
  sanitySiteSettings {
    homepage {
      title
      image {
        asset {
          gatsbyImageData(width: 1700, height:650, placeholder: BLURRED, layout:FULL_WIDTH)
        }
      }
      sections {
          title
          displaytitle
          text
          cards {
            image {
              asset {
                gatsbyImageData(width: 500, placeholder: BLURRED)
              }
            }
            title
            text
          }
        }
    }
  }
}
`