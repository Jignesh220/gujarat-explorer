import React from 'react'
import Carousel from '../Carousel/Carousel'
import ByCities from '../Category/ByCities'
import Tranding from './Tranding'
import GalleryHome from '../Gallery/GalleryHome'
// import Export from './Export'
export default function Home() {
  return (
    <div className='my-2'>
      <Carousel/>
      <ByCities/>
      <Tranding/>
    </div>
  )
}
