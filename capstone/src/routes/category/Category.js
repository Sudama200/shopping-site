import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../product-card/ProductCard';
import { selectCategoriesMap } from '../../reducer/categoriesToRedux/category.selector';

import { CategoryContainer, CategoryTitle } from './Category.styled';

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    const {category} = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

  return (
    <div>
        <CategoryTitle >{category}</CategoryTitle>
        <CategoryContainer>
        { products &&
            products.map((product) => {
            return (
                <div>
                <ProductCard key={product.id} product={product} />
                </div>
            )})
        }
        </CategoryContainer>
    </div>
    
  )
}

export default Category
