import { formatCurrency } from '../../utils/formatCurrency';

import { Product } from '../../types/Product';

import { Container, Content, Image } from './styles';

interface ProductProps {
  product: Product
}

export function ProductVisualizer({ product }: ProductProps) {
  const { name, price, category, imagePath } = product;

  return (
    <Container>
      <Image src={imagePath} />
      <Content>
        <header>
          <div>{category.icon}</div>
          <div>{category.name}</div>
        </header>
        <h1>{name}</h1>
        <span>{formatCurrency(price)}</span>
      </Content>
    </Container>
  );
}
