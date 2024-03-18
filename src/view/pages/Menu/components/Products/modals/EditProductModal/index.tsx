
import { Actions, Body, Categories, Content, Form, FormContent, Image, ImageContainer, Ingredient, IngredientsList, Name } from './styles';
import { useEffect, useState } from 'react';
import { Checkbox } from '@atlaskit/checkbox';

import emptyIMG from '@assets/images/img-empty.png';
import imageIcon from '@assets/icons/image.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import { FormGroup } from '@components/FormGroup';
import { Category } from '@components/Category';
import { Modal } from '@view/components/Modal';

import { useProductsModalController } from '../useProductsModalController';
import { Product } from '@app/types/Product';

export function EditProductModal({ selectedProduct }: { selectedProduct: Product}) {
  const {
    product,
    ingredients,
    categories,
    isEditProductModalOpen,
    searchInput,
    handleSearchInput,
    handleCheckboxChange,
    handleCloseEditProductModal,
    handleInputChange
  } = useProductsModalController(selectedProduct);

  const [preview, setPreview] = useState(selectedProduct?.imagePath ?? '');

  useEffect(() => {
    const image = product.image;

    if (preview !== selectedProduct?.imagePath) {
      if (!image) {
        setPreview('');
        return;
      }

      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [product.image]);

  return (
    <Modal isOpen={isEditProductModalOpen} onClose={handleCloseEditProductModal} title='Editar Produto'>
      <Content>
        <Form>
          <Body>
            <FormContent>
              <h2>Imagem</h2>
              <ImageContainer>
                <Image src={product.image ? preview : emptyIMG} />

                <label htmlFor="file-upload" className="custom-file-upload">
                  <img src={imageIcon} />
                  <h3>Alterar imagem</h3>
                </label>
                <input
                  type='file'
                  accept='image/*'
                  id='file-upload'
                  onChange={(e) => handleInputChange('image', e.currentTarget.files![0])}
                  multiple={false}
                />
              </ImageContainer>

              <div className='product'>
                <FormGroup title='Nome do Produto'>
                  <Input
                    width='12.5'
                    value={product.name}
                    onChange={(e) => handleInputChange('name', e.currentTarget.value)}
                    placeholder='Quatro Queijos'
                  />
                </FormGroup>

                <FormGroup title='Valor'>
                  <Input
                    width='12.5'
                    type='number'
                    value={product.price}
                    onChange={(e) => handleInputChange('price', e.currentTarget.value)}
                    placeholder='0'
                  />
                </FormGroup>
              </div>

              <FormGroup title='Descrição'>
                <Input
                  width='26'
                  value={product.description}
                  onChange={(e) => handleInputChange('description', e.currentTarget.value)}
                  placeholder='Pizza de Quatro Queijos com borda tradicional'
                />
                <small>Máximo 110 caracteres</small>
              </FormGroup>

              <div className='category'>Categoria</div>
              <Categories>
                {
                  categories.map(category => (
                    <button
                      type='button'
                      onClick={() => handleInputChange('category', category._id)}
                      key={category._id}
                    >
                      <Category
                        active={category._id === product.category}
                        icon={category.icon}
                        name={category.name}
                      />
                    </button>
                  ))
                }
              </Categories>
            </FormContent>

            <FormContent>
              <header>
                <h2>Ingredientes</h2>
                <button
                  type='button'
                >
                  Novo Ingrediente
                </button>
              </header>
              <FormGroup title='Busque o ingrediente'>
                <Input
                  width='26'
                  value={searchInput}
                  className='search-input'
                  onChange={handleSearchInput}
                  placeholder='Ex: Queijo'
                />
              </FormGroup>
              <IngredientsList>
                {
                  ingredients.map(ingredient => (
                    <Ingredient
                      key={ingredient._id}
                      onClick={() => handleCheckboxChange(ingredient)}
                    >
                      <Name>
                        {ingredient.icon} {ingredient.name}
                      </Name>
                      <Checkbox
                        isChecked={product.ingredients.includes(ingredient._id)}
                        value='none'
                        size="large"
                        className='checkbox'
                      />

                    </Ingredient>
                  ))
                }
              </IngredientsList>
            </FormContent>
          </Body>

          <Actions>
            <Button
              type="submit"
              width='12.1875'
            >
              Salvar Alterações
            </Button>
          </Actions>
        </Form>
      </Content>
    </Modal>
  );
}
