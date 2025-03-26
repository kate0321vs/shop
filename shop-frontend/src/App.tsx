import AppToolbar from './components/UI/AppToolbar/AppToolbar.tsx';
import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Products from './features/Products/Products';
import NewProduct from './features/Products/NewProduct.tsx';

const App = () => {

  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/new" element={<NewProduct/>} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
