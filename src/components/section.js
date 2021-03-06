import React from "react"
import Card from "./card"

const Section = (props) => {

    console.log(props)

    return (
        <div className="mt-7">
            {props.data.displaytitle && (
                <h1 className="flex justify-center font-semibold text-gray-700">
                    {props.data.title}
                </h1>
            )}
            <div className="flex justify-center flex-wrap">
                {props.data.cards.map((card, i) => <Card data={card} key={i} />
                )}
            </div>
        </div>
    )
}
export default Section
