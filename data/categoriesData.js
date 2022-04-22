const { GITHUB_USERNAME } = require("./config");

const categoriesData = [
  {
    id: "1",
    image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/FoodApp-UI-Design/master/assets/images/pizza-icon.png`,
    title: "Pizza",
    selected: true,
  },
  {
    id: "2",
    image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/FoodApp-UI-Design/master/assets/images/shrimp-icon.png`,
    title: "Seafood",
    selected: false,
  },
  {
    id: "3",
    image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/FoodApp-UI-Design/master/assets/images/soda-icon.png`,
    title: "Soft Drinks",
    selected: false,
  },
];

module.exports = categoriesData;
