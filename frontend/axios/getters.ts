import axios from '../axios';
import { categoryFlatter, productFlatter } from '../helpers/flatters';
import { ProductFlat, Product, CategoryFlat, Category, StrapiArray } from '../types';

export const getCategories = async (products?: ProductFlat[]): Promise<CategoryFlat[]> => {
  const res: StrapiArray<Category> = (await axios.get('/kategoris')).data;
  return categoryFlatter(res, products);
};

export const getProducts = async (): Promise<ProductFlat[]> => {
  const res: StrapiArray<Product> = (await axios.get('/uruns')).data;
  return productFlatter(res);
};
