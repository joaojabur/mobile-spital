import React from "react";
import { ScrollView, ScrollViewProps, View } from "react-native";
import { categories } from "../../utils/categories";
import { styles } from "./styles";
import SearchCategory from "../SearchCategory";

interface SearchCategoriesProps extends ScrollViewProps {}

const SearchCategories = ({ ...rest }: SearchCategoriesProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      {...rest}
      style={styles.container}
    >
      <View style={styles.content}>
        {categories.map((category, index) => {
          return (
            <SearchCategory
              key={index}
              Img={category.Img}
              label={category.label}
              goTo={category.goTo}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SearchCategories;
