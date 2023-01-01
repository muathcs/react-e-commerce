import React from 'react'
import {Grid, Box} from "@mui/material"
import Product from '../components/Product'

type products = {
    productName: string,

}

function Home() {

   const products: Array<string> = ["pen", "ruler", "ice-cream"]

  return (
<>

    <Grid container spacing={2} >

    {products.map(item => (
        <Grid item md={3} >
            <Product productName={item}/>
        </Grid>
    ))}

    </Grid>
    
</>
  )
}

export default Home