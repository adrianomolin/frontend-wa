import { useState } from 'react';

import { Container, Content } from '../styles';
import { HeaderContainer, NavItem } from './styles';

import { MenuIcon } from '../../../assets/icons/menu';

import { Header } from '../../components/Header';
import Loader from '../../components/Loader';
import { CategoriesList } from './components/Categories/lists/CategoriesList';
import { ProductsList } from './components/Products/lists/ProductsList';
import { ProductsContext, ProductsProvider } from './components/ProductsContext';
import { NewProductModal } from './components/Products/modals/NewProductModal';
import { EditProductModal } from './components/Products/modals/EditProductModal';
import { DeleteProductModal } from './components/Products/modals/DeleteProductModal';
import { CategoriesProvider } from './components/Categories/CategoriesContext';
import { NewCategoryModal } from './components/Categories/modals/NewCategoryModal';

export function Menu() {
  const [selectedTab, setSelectedTab] = useState<'Products' | 'Categories'>('Products');

  return (
    <CategoriesProvider>
      <ProductsProvider>
        <ProductsContext.Consumer>
          {({ selectedProduct }) => (
            <>
              <Container>
                <Header
                  icon={<MenuIcon />}
                  title='Cardápio'
                  description='Gerencie os produtos do seu estabelecimento'
                />
                <Content>
                  <HeaderContainer>
                    <button
                      onClick={() => setSelectedTab('Products')}
                    >
                      <NavItem active={selectedTab === 'Products'}>
                      Produtos
                      </NavItem>
                    </button>

                    <button
                      onClick={() => setSelectedTab('Categories')}
                    >
                      <NavItem active={selectedTab === 'Categories'}>
                      Categorias
                      </NavItem>
                    </button>
                  </HeaderContainer>

                  { selectedTab === 'Products' ? <ProductsList />
                    : selectedTab === 'Categories' ? <CategoriesList />
                      : <Loader />
                  }
                </Content>
              </Container>

              <NewProductModal />
              {selectedProduct && <EditProductModal />}
              <DeleteProductModal />
            </>
          )}
        </ProductsContext.Consumer>
      </ProductsProvider>

      <NewCategoryModal />
    </CategoriesProvider>
  );
}
