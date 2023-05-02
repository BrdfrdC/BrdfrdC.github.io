const data = [
    {
      fileName: "",
      recipeName: "",
      recipeURL: "",
      keywords: [
        ""
      ]
    },
    {
      fileName: "./AirFryerWaffleEgginaHole.html",
      recipeName: "Air Fryer Waffle Egg in a Hole",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Waffle",
        "Egg",
        "Hole"
      ]
    },
    {
      fileName: "./AirFryerCaramelizedBananas.html",
      recipeName: "Air Fryer Caramelized Bananas ",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Caramelized",
        "Bananas"
      ]
    },
    {
      fileName: "./AirFryerLemonPepperRoastedCashews.html",
      recipeName: "Air Fryer Lemon Pepper Roasted Cashews",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Lemon",
        "Pepper",
        "Roasted",
        "Cashews"
      ]
    },
    {
      fileName: "./AirFryerPretzelCrescentRolls.html",
      recipeName: "Air Fryer Pretzel Crescent Rolls",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Pretzel",
        "Crescent",
        "Rolls"
      ]
    },
    {
      fileName: "./AirFryerCrispyCajunBlackEyedPeas.html",
      recipeName: "Air Fryer Crispy Cajun Black-Eyed Peas",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Crispy",
        "Cajun",
        "Black-Eyed",
        "Peas"
      ]
    },
    {
      fileName: "./QuickAirFryerTilapia.html",
      recipeName: "Quick Air Fryer Tilapia",
      recipeURL: "",
      keywords: [
        "Quick",
        "Air",
        "Fryer",
        "Tilapia"
      ]
    },
    {
      fileName: "./AirFryerChickpeas.html",
      recipeName: "Air Fryer Chickpeas",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Chickpeas"
      ]
    },
    {
      fileName: "./AirFryerLoadedMashedPotatoCakes.html",
      recipeName: "Air Fryer Loaded Mashed Potato Cakes",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Loaded",
        "Mashed",
        "Potato",
        "Cakes"
      ]
    },
    {
      fileName: "./AirFryerChickenBiteswithParmesanCheese.html",
      recipeName: "Air Fryer Chicken Bites with Parmesan Cheese",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Chicken",
        "Bites",
        "Parmesan",
        "Cheese"
      ]
    },
    {
      fileName: "./AirFryerMiniCroissantswithNutellaandJam.html",
      recipeName: "Air Fryer Mini Croissants with Nutella and Jam",
      recipeURL: "",
      keywords: [
        "Air",
        "Fryer",
        "Mini",
        "Croissants",
        "Nutella",
        "Jam"
      ]
    }
]

function searchRecipes(query) {
    const matchingRecipes = data.filter((recipe) => {
      return (
        recipe.recipeName.toLowerCase().includes(query.toLowerCase()) ||
        recipe.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query.toLowerCase())
        )
      );
    });
    return matchingRecipes;
}