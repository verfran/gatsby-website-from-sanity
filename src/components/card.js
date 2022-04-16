import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = (props) => {

    console.log(props)

    const imgAlt = props.data.title ? props.data.title : "Image title missing"

    return (
        <div className="bg-white rounded-xl border shadow-md max-w-xs overflow-hidden m-3">
            {props.data.image && (
                <GatsbyImage
                    image={getImage(props.data.image.asset.gatsbyImageData)}
                    alt={imgAlt}
                />
            )}
            <div className="p-3">
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                    {props.data.title}
                </h3>
                <p className="paragraph-normal text-gray-600">
                    {props.data.text}
                </p>
            </div>
        </div>
    )
}
export default Card

// {/* <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
