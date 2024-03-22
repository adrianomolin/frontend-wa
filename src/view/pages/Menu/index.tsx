import { useState } from 'react';

import { Container } from '../styles';
import { Content, HeaderContainer, NavItem } from './styles';

import { MenuIcon } from '@assets/icons/menu';

import { Header } from '@components/Header';
import Loader from '@components/Loader';
import { CategoriesList } from './components/Categories/lists/CategoriesList';
import { ProductsList } from './components/Products/lists/ProductsList';
import { ProductsContext, ProductsProvider } from './components/Products/ProductsContext';
import { NewProductModal } from './components/Products/modals/NewProductModal';
import { EditProductModal } from './components/Products/modals/EditProductModal';
import { DeleteProductModal } from './components/Products/modals/DeleteProductModal';
import { CategoriesContext, CategoriesProvider } from './components/Categories/CategoriesContext';
import { NewCategoryModal } from './components/Categories/modals/NewCategoryModal';
import { EditCategoryModal } from './components/Categories/modals/EditCategoryModal';
import { DeleteCategoryModal } from './components/Categories/modals/DeleteCategoryModal';
import { IngredientsProvider } from './components/Ingredients/IngredientsContext';
import { NewIngredientModal } from './components/Ingredients/modals/NewIngredientModal';

export function Menu() {
  const [selectedTab, setSelectedTab] = useState<'Products' | 'Categories'>('Products');

  return (
    <CategoriesProvider>
      <CategoriesContext.Consumer>
        {({ selectedCategory }) => (
          <IngredientsProvider>
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
            {selectedCategory && <EditCategoryModal />}
            <DeleteCategoryModal />
            <NewIngredientModal />
          </IngredientsProvider>
        )}
      </CategoriesContext.Consumer>
    </CategoriesProvider>
  );
}
