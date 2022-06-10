import axios from '../axiosSetup';
import { categoryFlatter, productFlatter, sliderFlatter } from '@helpers/flatters';
import {
  ProductFlat,
  Product,
  CategoryFlat,
  Category,
  StrapiArray,
  SliderResponse,
  Slider,
} from '@types';

export const getCategories = async (products?: ProductFlat[]): Promise<CategoryFlat[]> => {
  const res: StrapiArray<Category> = (await axios.get('/kategoris')).data;
  return categoryFlatter(res, products);
};

export const getProducts = async (): Promise<ProductFlat[]> => {
  const res: StrapiArray<Product> = (await axios.get('/uruns')).data;
  return productFlatter(res);
};

export const getSlider = async (): Promise<Slider[]> => {
  const res: SliderResponse = (await axios.get('/slider')).data;
  return sliderFlatter(res);
};

export const getProductsAndCategories = async (): Promise<{
  products: ProductFlat[];
  categories: CategoryFlat[];
}> => {
  const products: ProductFlat[] = await getProducts();
  const categories: CategoryFlat[] = await getCategories(products);
  return { products, categories };
};

export const getAbout = async (): Promise<any> => (await axios('/hakkimizda')).data;
