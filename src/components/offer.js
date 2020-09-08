import React from "react"

export default function Offer({ title, date, imgSrc, price }) {
    console.log('img src: ', imgSrc)
  return (
    <div>
      {/* <h2>{title}</h2> */}
      <p>
        uploaded: <em>{date}</em>
      </p>
  <p>{price} euro</p>
      <img style={{width: 150}} src={imgSrc} />
      <hr></hr>
    </div>
  )
}
