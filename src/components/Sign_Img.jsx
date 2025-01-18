import React from 'react'

const Sign_Img = () => {
  return (
    <div className="right-data mt-5" style={{width:"100%"}}>
    <div className="sign-img">
        <img src={import.meta.env.BASE_URL+"./sign.svg"}  style={{maxWidth:400}} alt="" />
    </div>
</div>
  )
}

export default Sign_Img