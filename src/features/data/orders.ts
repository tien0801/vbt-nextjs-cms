function createData(
  id: string,
  code: string,
  type: string,
  status: string,
  note: string,
  items: Array<{
    id: string;
    name: string;
    total: number;
    quantity: number;
  }>,
  payment: {
    id: string;
    method: string;
    amount: number;
    status: string;
  },
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  },
  shipping: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  }
) {
  return { id, code, type, status, note, items, payment, customer, shipping };
}

const rows = [
  createData(
    "1",
    "ORDER-1",
    "Delivery",
    "Pending",
    "",
    [
      {
        id: "1",
        name: "Product 1",
        total: 10,
        quantity: 1,
      },
      {
        id: "2",
        name: "Product 2",
        total: 20,
        quantity: 2,
      },
      {
        id: "3",
        name: "Product 3",
        total: 30,
        quantity: 3,
      },
    ],
    {
      id: "1",
      method: "COD",
      amount: 10,
      status: "Unpaid",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    }
  ),
  createData(
    "2",
    "ORDER-2",
    "Delivery",
    "Pending",
    "",
    [
      {
        id: "1",
        name: "Product 1",
        total: 10,
        quantity: 1,
      },
      {
        id: "2",
        name: "Product 2",
        total: 20,
        quantity: 2,
      },
      {
        id: "3",
        name: "Product 3",
        total: 30,
        quantity: 3,
      },
    ],
    {
      id: "1",
      method: "COD",
      amount: 10,
      status: "Unpaid",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    }
  ),
  createData(
    "3",
    "ORDER-3",
    "Delivery",
    "Completed",
    "",
    [
      {
        id: "1",
        name: "Product 1",
        total: 10,
        quantity: 1,
      },
      {
        id: "2",
        name: "Product 2",
        total: 20,
        quantity: 2,
      },
      {
        id: "3",
        name: "Product 3",
        total: 30,
        quantity: 3,
      },
    ],
    {
      id: "1",
      method: "ATM",
      amount: 10,
      status: "Paid",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    },
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "test@test.com",
      phone: "0912345678",
      address:
        "367 Nguyễn Văn Quá, Đông Hưng Thuận, District 12, Ho Chi Minh City, Vietnam",
    }
  ),
];

export default rows;
