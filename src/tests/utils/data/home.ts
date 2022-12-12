const productOne = {
  category: 'entrée',
  description:
    'composé de cougette, oignons, sel et poivre, eau croutons de pain grillé aux gratons mijoté et mixé au mixeur plongeant avec une pointe de crème fraiche',
  id: 17,
  image: 'http://localhost/image.png',
  price: 5.95,
  rating: { rate: 3.85, count: 154 },
  title: 'velouté de courgette aux gratons'
}

const productTwo = {
  category: 'plat',
  description:
    "burger composé d'un pain brioché aux graines de sésames, tomate, salade sauce BBQ, steack haché grillé et confit oignons accompagné de frites",
  id: 1,
  image: 'http://localhost/image.png',
  price: 15,
  rating: { rate: 4.9, count: 375 },
  title: 'burger de boeuf et frites'
}

const similarCategoryProducts = [
  {
    id: 5,
    title: 'côte de boeuf angus-salers et purée maison',
    price: 45,
    category: 'plat',
    description:
      'côte de boeuf angus-salers braisé sauce vin rouge et purée en accompagnement',
    image: 'http://localhost/image.png',
    rating: {
      rate: 4.9,
      count: 486
    }
  },
  {
    id: 8,
    title: 'pizza',
    price: 15,
    category: 'plat',
    description:
      "composé d'une pate à pizza maison, tomates fraiche (coeur de boeuf), mozzarella et fromage",
    image: 'http://localhost/image.png',
    rating: {
      rate: 3.4,
      count: 171
    }
  },
  {
    id: 12,
    title: "encornet farcie sauce madère accompagné d'un riz basmati",
    price: 29,
    category: 'plat',
    description:
      "composé d'encornet facie avec une farce maison mijoté dans une sauce au madère tomaté accompagné d'un riz basmati",
    image: 'http://localhost/image.png',
    rating: {
      rate: 4.5,
      count: 941
    }
  },
  {
    id: 13,
    title: 'nems au légumes vegan',
    price: 5,
    category: 'plat',
    description: "nems composé d'une farce aux légumes de saison, vendu par 2",
    image: 'http://localhost/image.png',
    rating: {
      rate: 2.4,
      count: 267
    }
  },
  {
    id: 14,
    title: "melon à l'italienne",
    price: 14.5,
    category: 'entrée',
    description:
      "composé d'un demi melon de cavaillon en billes et d'une chiffonnade de charcuterie italienne coupé finement",
    image: 'http://localhost/image.png',
    rating: {
      rate: 4.7,
      count: 105
    }
  },
  {
    id: 18,
    title: 'vol au vent aux légumes de saison',
    price: 3.3,
    category: 'entrée',
    description:
      "composé d'une pate feuilleté cuit à blanc en forme de vol au vent farcie de légumes de saison (courgettes, oignons, aubergines)",
    image: 'http://localhost/image.png',
    rating: {
      rate: 1.62,
      count: 102
    }
  },
  {
    id: 19,
    title: 'pavé de lieu noir au lentilles corail',
    price: 19.95,
    category: 'plat',
    description:
      "composé d'un pavé de lieu noir braisé au beurre à la poele et lentilles corail en accompagnement",
    image: 'http://localhost/image.png',
    rating: {
      rate: 4.32,
      count: 578
    }
  }
]

export default { productOne, productTwo, similarCategoryProducts } as const
