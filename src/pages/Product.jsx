//import React from 'react'
import { useContext } from "react"
import { ShopContext } from '../context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

const Product = () => {
  const {all_product} = useContext(ShopContext); // Get all products in all_product.js
  const { productId } = useParams(); // To get all product ID
  const product = all_product.find((e) => e.id === Number(productId)); // find the product number
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
