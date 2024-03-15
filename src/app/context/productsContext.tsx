import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { Product } from '../types/Product';
import { toast } from 'react-toastify';

interface ProductsContextProps {
  products: Product[],
  handleCreateNewProduct: (product: FormData) => Promise<void>,
  handleEditProduct: (productId: string, product: FormData) => Promise<void>,
  handleDeleteProduct: (categoryId: string) => Promise<void>,
}

interface ProductsProviderProps {
  children: ReactNode,
}

const ProductsContext = createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    await api.get('/products').then(({data}) => {
      setProducts(data);
    });
  }

  useEffect(() => {
    getProducts();
  },[]);

  async function handleCreateNewProduct(product: FormData) {
    if (product) {
      await api.post('products', product);
      getProducts();

      toast.success('Produto criado com sucesso.');
    } else {
      toast.error('Ocorreu um erro ao criar o produto.');
    }
  }

  async function handleEditProduct(productId: string, product: FormData) {
    if (productId && product) {
      await api.patch(`/products/${productId}`, product);
      getProducts();


      toast.success(`Produto (${productId}) atualizado com sucesso`);
    } else {
      toast.error('Ocorreu um erro ao editar o produto.');
    }
  }

  async function handleDeleteProduct(productId: string) {
    if (productId) {
      await api.delete(`/products/${productId}`);
      setProducts(prevState => prevState.filter(product => product._id !== productId));

      toast.success(`Produto (${productId}) deletado com sucesso.`);
    } else {
      toast.error('Ocorreu um erro ao deleltar o produto.');
    }
  }


  return (
    <ProductsContext.Provider value={{
      products,
      handleCreateNewProduct,
      handleEditProduct,
      handleDeleteProduct,
    }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
