import React from 'react'


type ContainerProps = {
  // styles: React.CSSProperties,
  children: React.ReactNode,
  className: string
}
export const Container = (props: ContainerProps) => {
  console.log(props.className);

  return (
    // <div className= {props.className}>
    <div style= {{display:"flex",justifyContent: "center", alignItems: "center",textAlign: "center", border: "5px solid #19647E", margin:"10px", borderRadius: "10px", backgroundColor:"#f0f0c9"}}>
        {props.children}
    </div>
  )
}
