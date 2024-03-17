
import { Actions, Body, Categories, Content, Form, FormContent, Image, ImageContainer, Ingredient, IngredientsList, Name } from './styles';
import { FormEvent, useEffect, useState } from 'react';
import closeIcon from '../../../assets/icons/close-icon.svg';
import { Checkbox } from '@atlaskit/checkbox';

import emptyIMG from '../../../assets/images/img-empty.png';
import imageIcon from '../../../assets/icons/image.svg';
import { useCategories } from '../../../../../../../app/hooks/useCategories';
import { useProducts } from '../../../../../../../app/hooks/useProducts';
import { useModal } from '../../../../../../app/hooks/useModal';
import { useIngredients } from '../../../../../../../app/hooks/useIngredients';
import { Category as CategoryProps } from '../../../../../../../app/types/Category';
import { Ingredient as IngredientProps } from '../../../../../../../app/types/Ingredient';
import { FormGroup } from '../../../../../../components/FormGroup';
import Input from '../../../../../../components/Input';
import { Category } from '../../../../../../components/Category';
import Button from '../../../../../../components/Button';

export function EditProductModal() {
  const { handleUseModal, handleCloseModal, selectedModalProps } = useModal();
  const { handleEditProduct } = useProducts();
  const { categories } = useCategories();
  const { ingredients: IngredientsInitial } = useIngredients();

  const { product } = selectedModalProps;

  if (!product) {
    return null;
  }

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(product!.ingredients.map(({ ingredient }) => ingredient._id));
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(product.category._id);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState<Blob>();
  const [preview, setPreview] = useState(product.imagePath);
  const [searchInput, setSearchInput] = useState('');

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

    setPreview('');
    setImage(e.currentTarget.files[0]);
  }

  useEffect(() => {
    if (preview !== product.imagePath) {
      if (!image) {
        setPreview('');
        return;
      }

      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

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

  function handleSendForm(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image!);
    formData.set('name', name);
    formData.set('description', description);
    formData.set('category', selectedCategoryId);
    formData.set('price', price.toString());
    formData.append('ingredients', JSON.stringify(selectedIngredients));

    handleEditProduct(product!._id, formData);
    handleCloseModal();
  }

  return (
    <>
      <header>
        <strong>
          Editar Produto
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <Form onSubmit={(e) => handleSendForm(e)}>
          <Body>
            <FormContent>
              <h2>Imagem</h2>
              <ImageContainer>
                {
                  preview ? <Image src={preview} /> : <Image src={emptyIMG} />
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
                  onClick={() => handleUseModal('NewIngredient')}
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
                        isChecked={selectedIngredients.includes(ingredient._id)}
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
    </>
  );
}
