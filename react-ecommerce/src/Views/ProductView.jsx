import { useParams } from 'react-router-dom';

const ProductView = () => {
    const params = useParams();
    const {slug} = params;
  return (
    <div>{slug}</div>
  )
}

export default ProductView