import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinners = ({loading}) => {
  return (
    <ClipLoader
      color='#4338CA'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinners