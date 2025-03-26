import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imageNotAvailable from '../../../../assets/images/imageNotAvailable.png'
import { apiUrl } from '../../../constants.ts';

interface Props {
  title: string;
  price: number;
  id: string;
  image: string | null;
}

const ProductItem: React.FC<Props> = ({title, price, id, image}) => {

  let productImage = imageNotAvailable;

  if (image) {
    productImage = apiUrl + image;
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        <CardActionArea/>
        <CardMedia
          sx={{height: 140}}
          image={productImage}
          title={title}/>
        <CardHeader title={title}/>
        <CardContent>
          <strong>
            Price: {price} KGS
          </strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/products/' + id}>
            <ArrowForwardIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;