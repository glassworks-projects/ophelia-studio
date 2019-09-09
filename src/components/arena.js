/* API query to are.na for photo feed */
import React from "react"

const axios = require("axios");
var imgArr = []

const request = async () => {
    return await axios.get('https://api.are.na/v2/channels/reference-1515719642/thumb')
}

(async () => {
    const images = await request()
    images.data.contents.forEach(x => {
        console.log(x.image.display.url);
        imgArr.push(<img key={x.id} src={x.image.display.url} alt='' style={{float: `right`}}/>)
    })
})()

export default function Arena () {
    
    return (
        <div>
            {imgArr}
        </div>
    )
}

// var request = new XMLHttpRequest()
// request.open('GET', 'https://api.are.na/v2/channels/reference-1515719642/thumb', true)

// request.onload = function () {
    
//     var data = JSON.parse(this.response);

//     if (request.status >= 200 && request.status < 400) {
//         data.contents.forEach(x => {
//         imgArr.push(x)
//     })
//     }
// }
// request.send()



// function imgPop (x) {
//     const items = []
//     x.forEach(obj => {
//         items.push(<img 
//             key={obj.id} 
//             src={obj.image.display.url} 
//             alt=''
//             style={{float: `right`}}
//             />)
//     })
//     return items
// }