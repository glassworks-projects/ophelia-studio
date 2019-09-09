import React from "react"

const axios = require("axios");

const imgArr = []

const getStuff = async () => {
    return await axios.get('https://api.are.na/v2/channels/reference-1515719642/thumb')
}
(async () => {
    const stuff = await getStuff()
    stuff.data.contents.forEach(x => {
        console.log(x.image.display.url);
        imgArr.push(<img key={x.id} src={x.image.display.url} alt='' />)
    })
})()

export default function Test () {
    return (<div style={{width: `100%`, height: `1000px`}}>{imgArr} hi</div>)
}