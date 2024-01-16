import React from "react";
import products from "../../../assets/data/products";
import ProductCategory from "../../../global/productCategory";

const BurgerSection = () => {
  return (
    <>
      <ProductCategory
        // LARGE LEFT IMG
        title={Object.keys(products)[0]}
        productID={products["BURGER SANDWICHES"][0].id}
        productName={products["BURGER SANDWICHES"][0].title}
        img={products["BURGER SANDWICHES"][0].img}
        kcal={products["BURGER SANDWICHES"][0].kcal}
        fat={products["BURGER SANDWICHES"][0].fat}
        saturates={products["BURGER SANDWICHES"][0].saturates}
        sugars={products["BURGER SANDWICHES"][0].sugars}
        salt={products["BURGER SANDWICHES"][0].salt}
        description={products["BURGER SANDWICHES"][0].desc}
        price={products["BURGER SANDWICHES"][0].price}
        category={products["BURGER SANDWICHES"][0].category}
        // SMALL RIGHT IMG 1
        productID_sm_01={products["BURGER SANDWICHES"][1].id}
        productName_sm_01={products["BURGER SANDWICHES"][1].title}
        img_sm_01={products["BURGER SANDWICHES"][1].img}
        kcal_sm_01={products["BURGER SANDWICHES"][1].kcal}
        description_sm_01={products["BURGER SANDWICHES"][1].desc}
        price_sm_01={products["BURGER SANDWICHES"][1].price}
        fat_sm_01={products["BURGER SANDWICHES"][1].fat}
        saturates_sm_01={products["BURGER SANDWICHES"][1].saturates}
        sugars_sm_01={products["BURGER SANDWICHES"][1].sugars}
        salt_sm_01={products["BURGER SANDWICHES"][1].salt}
        category_sm_01={products["BURGER SANDWICHES"][1].category}
        // SMALL RIGHT IMG 2
        productID_sm_02={products["BURGER SANDWICHES"][2].id}
        productName_sm_02={products["BURGER SANDWICHES"][2].title}
        img_sm_02={products["BURGER SANDWICHES"][2].img}
        kcal_sm_02={products["BURGER SANDWICHES"][2].kcal}
        description_sm_02={products["BURGER SANDWICHES"][2].desc}
        price_sm_02={products["BURGER SANDWICHES"][2].price}
        fat_sm_02={products["BURGER SANDWICHES"][2].fat}
        saturates_sm_02={products["BURGER SANDWICHES"][2].saturates}
        sugars_sm_02={products["BURGER SANDWICHES"][2].sugars}
        salt_sm_02={products["BURGER SANDWICHES"][2].salt}
        category_sm_02={products["BURGER SANDWICHES"][2].category}
        // SMALL RIGHT IMG 3
        productID_sm_03={products["BURGER SANDWICHES"][3].id}
        productName_sm_03={products["BURGER SANDWICHES"][3].title}
        img_sm_03={products["BURGER SANDWICHES"][3].img}
        kcal_sm_03={products["BURGER SANDWICHES"][3].kcal}
        description_sm_03={products["BURGER SANDWICHES"][3].desc}
        price_sm_03={products["BURGER SANDWICHES"][3].price}
        fat_sm_03={products["BURGER SANDWICHES"][3].fat}
        saturates_sm_03={products["BURGER SANDWICHES"][3].saturates}
        sugars_sm_03={products["BURGER SANDWICHES"][3].sugars}
        salt_sm_03={products["BURGER SANDWICHES"][3].salt}
        category_sm_03={products["BURGER SANDWICHES"][3].category}
        // SMALL RIGHT IMG 4
        productID_sm_04={products["BURGER SANDWICHES"][4].id}
        productName_sm_04={products["BURGER SANDWICHES"][4].title}
        img_sm_04={products["BURGER SANDWICHES"][4].img}
        kcal_sm_04={products["BURGER SANDWICHES"][4].kcal}
        description_sm_04={products["BURGER SANDWICHES"][4].desc}
        price_sm_04={products["BURGER SANDWICHES"][4].price}
        fat_sm_04={products["BURGER SANDWICHES"][4].fat}
        saturates_sm_04={products["BURGER SANDWICHES"][4].saturates}
        sugars_sm_04={products["BURGER SANDWICHES"][4].sugars}
        salt_sm_04={products["BURGER SANDWICHES"][4].salt}
        category_sm_04={products["BURGER SANDWICHES"][4].category}
      />
    </>
  );
};

export default BurgerSection;
