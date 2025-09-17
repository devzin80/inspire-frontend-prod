'use client'
import React from 'react'
import DOMPurify from 'dompurify'

const About = ({content}) => {
     const safeContent = DOMPurify.sanitize(content)
  return <div dangerouslySetInnerHTML={{ __html: safeContent }} />
}

export default About