import React from 'react';
import {
  ImageListItemBar,
  ImageListItem,
  ImageList,
  CircularProgress,
  Box
} from '@mui/material'
import { useEffect, useState } from "react";
import asosApi from "../utils/api/asos";
import ProductModel from "../model/Product.model";
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";

interface ProductsProps {
  searchInput: string
}

const useStyles = makeStyles(() =>
  createStyles({
    circularCenter: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 12
    },
  })
);

const Products = (props: ProductsProps) => {
  const classes = useStyles();

  const [productsList, setProductsList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    asosApi.getProductsList().then((rsp: any) => {
      const { products } = rsp.data;
      setProductsList(products);
      setFilteredProducts(products);
    })
      .catch((err: Error) => {
        console.log(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    const results = productsList.filter((product: ProductModel) => {
      return product.name.toLowerCase().includes(props.searchInput.toLowerCase());
    })

    setFilteredProducts(results);
  }, [props.searchInput])

  return (
    <>
      <Box className={classes.circularCenter}>
        {isLoading && <CircularProgress/> }
      </Box>
      <ImageList sx={{ height: 750 }} cols={4}>
        {filteredProducts?.map((item: ProductModel) => (
          <ImageListItem key={item.url}>
            <ImageListItemBar sx={{ mx: 1 }} position="below" title={item.brandName} />
            <img
              src={`https://${item.imageUrl}`}
              srcSet={`https://${item.imageUrl}`}
              alt={item.imageUrl}
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.price.current.text}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Products;
