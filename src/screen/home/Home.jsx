import React from 'react'
import { CarouselComponent } from '../../components/carousel/CarouselComponent'
import { Feature } from '../../components/feature/Feature'
import { FreeRetruns } from '../../components/freereturns/FreeRetruns'
import { NavBar } from '../../components/Navbar/NavBar'
import { Product } from '../../components/product/Product'
import { ProductSecOne } from '../../components/product/section_one/ProductSecOne'
import { TextVideo } from '../../components/textvideo/TextVideo'

export const Home = () => {
  return (
    <>
    <NavBar/>
    <CarouselComponent/>
    <Feature/>
    <TextVideo/>
    <ProductSecOne/>
    <FreeRetruns/>
    </>
  )
}
