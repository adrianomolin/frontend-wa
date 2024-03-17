import { Actions, Body, Categories, Content, Form, FormContent, Image, ImageContainer, Ingredient, IngredientsList, Name } from './styles';
import { FormEvent, useEffect, useState } from 'react';
import { useIngredients } from '../../../../../../../app/hooks/useIngredients';
import { Checkbox } from '@atlaskit/checkbox';

import emptyIMG from '../../../../../../../assets/images/img-empty.png';
import imageIcon from '../../../../../../../assets/icons/image.svg';
import { FormGroup } from '../../../../../../components/FormGroup';
import { useCategories } from '../../../../../../../app/hooks/useCategories';
import Input from '../../../../../../components/Input';
import { Category } from '../../../../../../components/Category';
import { Ingredient as IngredientProps } from '../../../../../../../app/types/Ingredient';
import { Category as CategoryProps } from '../../../../../../../app/types/Category';
import { useProducts } from '../../../../../../../app/hooks/useProducts';
import { Modal } from '../../../../../../components/Modal';
import Button from '../../../../../../components/Button';
import { useProductsController } from '../../../ProductsContext/useProductsController';

export function NewProductModal() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<Blob>();
  const [preview, setPreview] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const [active, setActive] = useState(false);

  const { categories } = useCategories();
  const { ingredients: IngredientsInitial } = useIngredients();
  const { handleCreateNewProduct } = useProducts();

  const ingredients =
        (searchInput.length > 0) ? (
          IngredientsInitial.filter(ingredient => (
            ingredient.name.match(searchInput)
          ))
        ) : IngredientsInitial;

  function handleImageChange(e: FormEvent<HTMLInputElement>) {
    if (!e.currentTarget.files || e.currentTarget.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.currentTarget.files[0]);
  }

  useEffect(() => {
    if (!image) {
      setPreview('');
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  useEffect(() => {
    !price || !description || !image || !description || !selectedCategoryId ? setActive(false) : setActive(true);
  }, [selectedCategoryId, description, name, price, description, image]);

  function handleNameChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setName(value);
  }

  function handlePriceChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setPrice(parseInt(value));
  }

  function handleDescriptionChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setDescription(value);
  }

  function handleCategoryChange(category: CategoryProps) {
    category && setSelectedCategoryId(category._id);
  }


  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setSearchInput(value);
  }

  function handleCheckboxChange(ingredient: IngredientProps) {
    setSelectedIngredients(prevState => {
      if (prevState.includes(ingredient._id)) {
        return prevState.filter(data => data !== ingredient._id);
      } else {
        return [...prevState, ingredient._id];
      }
    });
  }

  const { isCreateProductModalOpen, handleCloseCreateProductModal } = useProductsController();

  function handleSendForm(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image!);
    formData.set('name', name);
    formData.set('description', description);
    formData.set('category', selectedCategoryId);
    formData.set('price', price.toString());
    formData.append('ingredients', JSON.stringify(selectedIngredients));

    handleCreateNewProduct(formData);
    handleCloseCreateProductModal();
  }

  useEffect(() => {
    console.log(isCreateProductModalOpen);
  }, [isCreateProductModalOpen]);

  return (
    <Modal isOpen={isCreateProductModalOpen} onClose={handleCloseCreateProductModal} title='Novo Produto'>
      <Content>
        <Form onSubmit={(e) => handleSendForm(e)}>
          <Body>
            <FormContent>
              <h2>Imagem</h2>
              <ImageContainer>
                {
                  image ? <Image src={preview} /> : <Image src={emptyIMG} />
                }
                <label htmlFor="file-upload" className="custom-file-upload">
                  <img src={imageIcon} />
                  <h3>Alterar imagem</h3>
                </label>
                <input
                  type='file'
                  accept='image/*'
                  id='file-upload'
                  onChange={handleImageChange}
                />
              </ImageContainer>

              <div className='product'>
                <FormGroup title='Nome do Produto'>
                  <Input
                    width='12.5'
                    value={name}
                    onChange={handleNameChange}
                    placeholder='Quatro Queijos'
                  />
                </FormGroup>

                <FormGroup title='Valor'>
                  <Input
                    width='12.5'
                    type='number'
                    value={price}
                    onChange={handlePriceChange}
                    placeholder='0'
                  />
                </FormGroup>
              </div>

              <FormGroup title='Descrição'>
                <Input
                  width='26'
                  value={description}
                  onChange={handleDescriptionChange}
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
                      onClick={() => handleCategoryChange(category)}
                      key={category._id}
                    >
                      <Category
                        active={category._id === selectedCategoryId}
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
                  placeholder='Ex: Quatro Queijos'
                />
              </FormGroup>
              <IngredientsList>
                {ingredients.map(ingredient => (
                  <Ingredient
                    key={ingredient._id}
                    onClick={() => handleCheckboxChange(ingredient)}
                  >
                    <Name>
                      {ingredient.icon} {ingredient.name}
                    </Name>
                    <Checkbox
                      isChecked={selectedIngredients.includes(ingredient._id)}
                      value='none'
                      size="large"
                      className='checkbox'
                    />

                  </Ingredient>
                ))}
              </IngredientsList>
            </FormContent>
          </Body>

          <Actions>
            <Button
              disabled={!active}
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
