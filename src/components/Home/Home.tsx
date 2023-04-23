import React from 'react'
import Carousel from '../Carousel/Carousel'
import ByCities from '../Category/ByCities'
export default function Home() {
  return (
    <div className='my-2'>
      <Carousel/>
      <ByCities/>
    </div>
  )
}
