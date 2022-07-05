function createData(
  id: string,
  name: string,
  description: string,
  products: Array<{
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    price: number;
    isActive: boolean;
    priority: number;
  }>,
  tag: string,
  isForce: boolean,
  isActive: boolean,
  from: number,
  to: number
) {
  return { id, name, description, products, tag, isForce, isActive, from, to };
}

const rows = [
  createData(
    "1",
    "Best Seller",
    "Best Seller",
    [
      {
        id: "1",
        name: "Product 1",
        slug: "product-1",
        description: "Product 1",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 1,
      },
      {
        id: "2",
        name: "Product 2",
        slug: "product-2",
        description: "Product 2",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 2,
      },
      {
        id: "3",
        name: "Product 3",
        slug: "product-3",
        description: "Product 3",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 3,
      },
    ],
    "best-seller",
    true,
    true,
    Date.now(),
    Date.now()
  ),
  createData(
    "2",
    "Suggestion",
    "Suggestion",
    [
      {
        id: "1",
        name: "Product 1",
        slug: "product-1",
        description: "Product 1",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 1,
      },
      {
        id: "2",
        name: "Product 2",
        slug: "product-2",
        description: "Product 2",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 2,
      },
      {
        id: "3",
        name: "Product 3",
        slug: "product-3",
        description: "Product 3",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 3,
      },
    ],
    "suggestion",
    false,
    true,
    Date.now(),
    Date.now()
  ),
  createData(
    "2",
    "For Adults",
    "For Adults",
    [
      {
        id: "1",
        name: "Product 1",
        slug: "product-1",
        description: "Product 1",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 1,
      },
      {
        id: "2",
        name: "Product 2",
        slug: "product-2",
        description: "Product 2",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 2,
      },
      {
        id: "3",
        name: "Product 3",
        slug: "product-3",
        description: "Product 3",
        image: '"https://via.placeholder.com/150',
        price: 100000,
        isActive: true,
        priority: 3,
      },
    ],
    "for-adults",
    false,
    false,
    Date.now(),
    Date.now()
  ),
];

export default rows;
