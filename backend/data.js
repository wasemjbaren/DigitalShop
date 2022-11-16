import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Wasem',
      email: 'wasem@gmail.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'Eyad',
      email: 'eyad@gmail.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Mac-book M1 2022',
      slug: 'mac-book-m1-2022',
      category: 'Laptops',
      image: '/images/p1.jpg',
      price: 1200,
      countInStock: 0,
      brand: 'apple',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality laptop',
    },
    {
      name: 'Asus Gaming G593',
      slug: 'asus-gaming-g593',
      category: 'Laptops',
      image: '/images/p2.jpg', //679 x 829px
      price: 760,
      countInStock: 5,
      brand: 'asus',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Asus ROG TRX',
      slug: 'asus-rog-trx',
      category: 'Laptops',
      image: '/images/p3.jpg',
      price: 1000,
      countInStock: 10,
      brand: 'asus',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Iphone 14',
      slug: 'iphone-14',
      category: 'Mobiles',
      image: '/images/p4.jpg',
      price: 930,
      countInStock: 1,
      brand: 'apple',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
