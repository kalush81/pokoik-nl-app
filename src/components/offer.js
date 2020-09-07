import React from "react"

export default function Offer({ title, date, imgSrc }) {
    console.log('img src: ', imgSrc)
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <em>{date}</em>
      </p>
      <img style={{width: 150}} src={imgSrc} />
      <hr></hr>
    </div>
  )
}
