import React from 'react'
import SwipeToSlides, { CarouselComponent } from '../../components/carousel/CarouselComponent'
import SwipeToSlide from '../../components/clients/Clients'
import { Feature } from '../../components/feature/Feature'
import { FreeRetruns } from '../../components/freereturns/FreeRetruns'
import { NavBar } from '../../components/Navbar/NavBar'
import { Product } from '../../components/product/Product'
import { ProductSecOne } from '../../components/product/section_one/ProductSecOne'
import Testimonals  from '../../components/testimonals/Testimonals'
import { TextVideo } from '../../components/textvideo/TextVideo'

export const Home = () => {
  return (
    <>
    <NavBar/>
    <SwipeToSlides/>
    <Feature/>
    <TextVideo/>
    <ProductSecOne/>
    <FreeRetruns/>
    <SwipeToSlide/>
    <Testimonals/>
    </>
  )
}
