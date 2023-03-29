import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container, Content, Image } from './styles';

interface ProductProps {
  product: Product
}

export function ProductVisualizer({ product }: ProductProps) {
  const { category } = product;

  return (
    <Container>
      <Image src={`http://localhost:3001/uploads/${product.imagePath}`} />
      <Content>
        <header>
          <div>{category.icon}</div>
          <div>{category.name}</div>
        </header>
        <h1>{product.name}</h1>
        <span>{formatCurrency(product.price)}</span>
      </Content>
    </Container>
  );
}
