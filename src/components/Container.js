import React from 'react'

export default function Container({children, maxWidth}) {
  return (
    <div style={{
      margin: '0 auto 3rem auto',
      width: '90%',
      maxWidth: maxWidth || '850px'
    }}>
      {children}
    </div>
  )
}
