import React from "react";
import products from "../../../assets/data/products";
import ProductCategory from "../../../global/productCategory";

const DessertSection = () => {
  return (
    <>
      <ProductCategory
        // LARGE LEFT IMG
        title={Object.keys(products)[4]}
        productID={products["DESSERTS"][0].id}
        productName={products["DESSERTS"][0].title}
        img={products["DESSERTS"][0].img}
        kcal={products["DESSERTS"][0].kcal}
        fat={products["DESSERTS"][0].fat}
        saturates={products["DESSERTS"][0].saturates}
        sugars={products["DESSERTS"][0].sugars}
        salt={products["DESSERTS"][0].salt}
        description={products["DESSERTS"][0].desc}
        price={products["DESSERTS"][0].price}
        category={products["DESSERTS"][0].category}
        // SMALL RIGHT IMG 1
        productID_sm_01={products["DESSERTS"][1].id}
        productName_sm_01={products["DESSERTS"][1].title}
        img_sm_01={products["DESSERTS"][1].img}
        kcal_sm_01={products["DESSERTS"][1].kcal}
        description_sm_01={products["DESSERTS"][1].desc}
        price_sm_01={products["DESSERTS"][1].price}
        fat_sm_01={products["DESSERTS"][1].fat}
        saturates_sm_01={products["DESSERTS"][1].saturates}
        sugars_sm_01={products["DESSERTS"][1].sugars}
        salt_sm_01={products["DESSERTS"][1].salt}
        category_sm_01={products["DESSERTS"][1].category}
        // SMALL RIGHT IMG 2
        productID_sm_02={products["DESSERTS"][2].id}
        productName_sm_02={products["DESSERTS"][2].title}
        img_sm_02={products["DESSERTS"][2].img}
        kcal_sm_02={products["DESSERTS"][2].kcal}
        description_sm_02={products["DESSERTS"][2].desc}
        price_sm_02={products["DESSERTS"][2].price}
        fat_sm_02={products["DESSERTS"][2].fat}
        saturates_sm_02={products["DESSERTS"][2].saturates}
        sugars_sm_02={products["DESSERTS"][2].sugars}
        salt_sm_02={products["DESSERTS"][2].salt}
        category_sm_02={products["DESSERTS"][2].category}
        // SMALL RIGHT IMG 3
        productID_sm_03={products["DESSERTS"][3].id}
        productName_sm_03={products["DESSERTS"][3].title}
        img_sm_03={products["DESSERTS"][3].img}
        kcal_sm_03={products["DESSERTS"][3].kcal}
        description_sm_03={products["DESSERTS"][3].desc}
        price_sm_03={products["DESSERTS"][3].price}
        fat_sm_03={products["DESSERTS"][3].fat}
        saturates_sm_03={products["DESSERTS"][3].saturates}
        sugars_sm_03={products["DESSERTS"][3].sugars}
        salt_sm_03={products["DESSERTS"][3].salt}
        category_sm_03={products["DESSERTS"][3].category}
        // SMALL RIGHT IMG 4
        productID_sm_04={products["DESSERTS"][4].id}
        productName_sm_04={products["DESSERTS"][4].title}
        img_sm_04={products["DESSERTS"][4].img}
        kcal_sm_04={products["DESSERTS"][4].kcal}
        description_sm_04={products["DESSERTS"][4].desc}
        price_sm_04={products["DESSERTS"][4].price}
        fat_sm_04={products["DESSERTS"][4].fat}
        saturates_sm_04={products["DESSERTS"][4].saturates}
        sugars_sm_04={products["DESSERTS"][4].sugars}
        salt_sm_04={products["DESSERTS"][4].salt}
        category_sm_04={products["DESSERTS"][4].category}
      />
    </>
  );
};

export default DessertSection;
