import { ComponentProps } from "react"

type Tvariant = "first" | "seconed"

type Button = ComponentProps<"button"> & {
  variant? : Tvariant
}

function Button({children ,variant,style,  ...rest} : Button) {
  return (
    <button {...rest} style={{...style ,...setColor(variant)}}>{children}</button>
  )
}



export default Button


function setColor(variant? : Tvariant) {
  if(variant === "first") {
    return {backgroundColor : "#d65858" , color : "#fff"}
  } else if(variant === "seconed") {
    return {backgroundColor : "#0F969c" , color : "#fff"}
  }
}