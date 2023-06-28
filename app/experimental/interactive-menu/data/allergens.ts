export interface IAllergen {
    key: string;
    name: string;
}

export const allergens: IAllergen[] = [
    {
      key: "Mi",
      name: "Milk",
    },
    {
      key: "G",
      name: "Gluten",
    },
    {
      key: "N",
      name: "Nuts",
    },
    {
      key: "P",
      name: "Peanuts"
    },
    {
      key: "Se",
      name: "Sesame Seeds"
    },
    {
      key: "So",
      name: "Soya"
    },
    {
      key: "Su",
      name: "Sulphur Dioxide"
    },
    {
      key: "E",
      name: "Eggs",
    },
    {
      key: "Lu",
      name: "Lupin",
    },
    {
      key: "Cr",
      name: "Crustacean"
    },
    {
      key: "Mo",
      name: "Molluscs"
    },
    {
      key: "Mu",
      name: "Mustard"
    },
    {
      key: "Ce",
      name: "Celery"
    },
    {
      key: "F",
      name: "Fish"
    }
  ];

  export const allergensWithExtras = allergens.map((item) => {
    return {
      ...item,
      checked: false,
      disabled: false
    };
  })