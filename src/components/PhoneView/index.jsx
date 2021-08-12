import * as React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
import "./style.css"
import { PhoneScreen } from "./PhoneScreen"

type IPhoneView = {
  theme:any
}

function PhoneView({theme}:IPhoneView) {
  return (
    <div className="PhoneScreen">
      <PhoneScreen background={theme?.color}>
        <Frame center background="" color="white">
          <div className="text-center" style={{textTransform:"uppercase"}}>{theme?.heading}</div>
          <img className="mt-3 mb-2" style={{width:"100%",height:'200px'}} src={theme?.url ? theme?.url : "https://ictcomm.vn/images/original/company_logo_default.png"}/>
          <div className="text-center">{theme?.name}</div>
          <p className="text-center" style={{fontStyle:"italic"}}>{theme?.paragraph ? `"${theme?.paragraph}"` : ""}</p>
        </Frame>
      </PhoneScreen>
    </div>
  )
}

export default PhoneView
