import { Button, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectProducts } from './productsSlice.ts';
import { fetchProducts } from './productsThunk.ts';
import ProductItem from "./components/ProductItem.tsx";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add product
          </Button>
        </Grid>
      </Grid>
      <Grid item container direction="row" spacing={1}>
        {products.map(product => (
            <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
            />
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;