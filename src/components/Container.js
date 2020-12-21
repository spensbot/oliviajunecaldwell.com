import React from 'react'

export default function Container({children, maxWidth}) {
  return (
    <div style={{
      margin: '3rem auto 3rem auto',
      width: '95%',
      maxWidth: maxWidth || '850px'
    }}>
      {children}
    </div>
  )
}
