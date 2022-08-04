import React from "react"
import XMLData from '../dashbBoard.xml';
export default function Fetched() {
  render();{
    axios.get(XMLData, {
        "Content-Type": "application/xml; charset=utf-8"
     })
     .then((response) => {
        console.log('Your xml file as string', response.data);
     });
  }
    return (
    <div>
    
    </div>
  )
}
