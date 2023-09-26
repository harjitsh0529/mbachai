import React from 'react'

const Section = ({h3,
    text,
    hasbtn=true,
    btntxt,
    imgSrc,
    imgSize="70%",
    backgroundcolor,
    headingColor,
    textcolor,
    btnBgcolor,
    btnColor }) => {

  return (
    <section className='section' style={{
        backgroundColor : backgroundcolor,
    }}>
    <div>
    <h3 style={{
        color :headingColor,
    }}
    > {h3}</h3>

    <p style={{
        color : textcolor
    }}>{text}</p>
{
    hasbtn && <button style={{
        color :btnColor,
        backgroundColor: btnBgcolor
    }}>{btntxt}</button>
}

<div>
    <img src={imgSrc} alt="imgSrc" style={{
        width: imgSize
    }}/>
</div>

    


      
    </div>
    </section>
  )
    }

export default Section
