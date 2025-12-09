import React from 'react'

const FooterListItem = ({text,className}) => {
  return (
     <li className={`text-base text-primary font-inter font-normal cursor-pointer ${className} `}>{text}</li>
     
  )
}

export default FooterListItem
