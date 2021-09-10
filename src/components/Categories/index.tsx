import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { categoriesHome } from "../../utils/categoriesHome";

import Category from "../Category";
import { styles } from "./styles";

type CategoriesProps = ScrollViewProps;

const Categories = ({ ...rest }: CategoriesProps) => {
  return (
    <ScrollView
      {...rest}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categoriesHome.map((category, key) => {
        return (
          <Category
            Img={category.Img}
            label={category.label}
            goTo={category.goTo}
            key={key}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
