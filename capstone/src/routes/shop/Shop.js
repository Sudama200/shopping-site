import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/CategoriesPreview";
import { setCategoriesMap } from "../../reducer/categoriesToRedux/category.action";
import { getCollectionAndDocuments } from "../../utils/firebase/Firebase.utils";
import Category from "../category/Category";
import { useDispatch } from "react-redux";

import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments('categoriess');
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
