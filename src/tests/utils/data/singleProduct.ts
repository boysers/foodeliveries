const product = {
  id: 1,
  title: 'burger de boeuf et frites',
  price: 15,
  category: 'plat',
  description:
    "burger composé d'un pain brioché aux graines de sésames, tomate, salade sauce BBQ, steack haché grillé et confit oignons accompagné de frites",
  image: 'http://localhost/image.png',
  rating: {
    rate: 4.9,
    count: 375
  }
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
  }
]

export default { product, similarCategoryProducts } as const
