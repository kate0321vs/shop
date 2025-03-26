import React, { useState } from 'react';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { ProductMutation } from '../../../types';
import { createProduct } from '../productsThunk.ts';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { selectProductCreating } from '../productsSlice.ts';

const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectProductCreating)

  const [state, setState] = useState<ProductMutation>({
    title: '',
    price: '',
    description: ''
  });

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createProduct(state));
    navigate('/')
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };


  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title" label="Title"
            value={state.title}
            onChange={inputChangeHandler}
            name="title"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="price" label="Price"
            value={state.price}
            onChange={inputChangeHandler}
            name="price"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline rows={3}
            id="description" label="Description"
            value={state.description}
            onChange={inputChangeHandler}
            name="description"
          />
        </Grid>
        <Grid item xs>
          <Button
            endIcon={loading ? <CircularProgress size={24} /> : <SendIcon />}
            size="small"
            disabled={loading}
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;