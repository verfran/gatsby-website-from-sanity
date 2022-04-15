import React from "react"

const Card = (props) => {

    console.log(props)

    return (
        <div className="mt-7">
            <h3 className="flex justify-center font-semibold text-gray-700">
                {props.data.title}
            </h3>
        </div>
    )
}
export default Card
