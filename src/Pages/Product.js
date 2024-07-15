import whitesneaker from '../../src/assets/white-senakers.png'
import brownsneaker from '../../src/assets/brown-sneakers.png'
import graysneaker from '../../src/assets/grey-senakers.png'
import blacksneaker from '../../src/assets/black-sneakers.png'

import whitesir from '../../src/assets/white-air-shoe.png';
import airtick from '../../src/assets/white-tick-air.png';
import whitefullsir from '../../src/assets/white-full-air.png';
import airfullblack from '../../src/assets/black-full air.png';


import blackfullcon from '../../src/assets/high-con-black.png';  // Fixed filename to match consistent naming
import blackcon from '../../src/assets/black-con.png';
import graycon from '../../src/assets/grey-con.png';
import grayfullcon from '../../src/assets/high-con-grey.png';  // Fixed filename to match consistent naming

import blackvan from '../../src/assets/black-van.png';
import brownvan from '../../src/assets/brown-van.png';
import greenvan from '../../src/assets/green-van.png';
import grayvan from '../../src/assets/gray-van.png';

import blackformal from '../../src/assets/black-formal-shoe.png';  // Fixed path to match others
import brownformal from '../../src/assets/brown-formal-shoe.png';  // Fixed path and filename to be consistent
import blacklowformal from '../../src/assets/black-low-form.png';
import brownlowformal from '../../src/assets/brown-low-form.png';

// import testimonials from '../../src/assets/testiomonials-img.webp'

const Product = [
  // {
  //   id: 0 , 
  //   name: "White Sneakers",
  //   image: testimonials 
  // },
  {
    id: 1,
    image: whitesneaker,
    image2: "https://i.pinimg.com/564x/96/8d/00/968d0028d284bda054c4b536a678c027.jpg" ,
    name: "White Sneakers",
    description: "White Leather Sneaker with hard sole",
    price: 750,
    quantity: 1,
     details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    image: brownsneaker,
    image2:"https://i.pinimg.com/564x/06/19/98/061998b0412f2c4ed1caa7985e3c7b74.jpg" , 
    name: "Brown Sneakers",
    description: "Brown Leather Sneaker with hard sole",
    price: 750,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  },
  {
    id: 3,
    image: graysneaker,
    image2:"https://i.pinimg.com/736x/62/f0/4e/62f04eb433fb3d569c9c69932ed37cb6.jpg",
    name: "Gray Sneakers",
    description: "Gray Leather Sneaker with hard sole",
    price: 750,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  },
  {
    id: 4,
    image: blacksneaker,
    image2:"https://i.pinimg.com/736x/b2/29/3c/b2293c63e8272cd8c0e119d1f2990a73.jpg",
    name: "Black Sneakers",
    description: "Black Leather Sneaker with hard sole",
    price: 750,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 5,
    image: whitesir,
    image2:"https://i.pinimg.com/736x/05/4d/31/054d318653a1f0ca33c109d1ea72a5f4.jpg",
    name: "White Air Shoe",
    description: "White Air Sneaker",
    price: 850,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 6,
    image: airtick,
    image2: "https://i.pinimg.com/736x/ba/ca/d2/bacad2b0c0536069d82915026e17560e.jpg" , 
    name: "White Tick Air Shoe",
    description: "White Tick Air Sneaker",
    price: 850,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 7,
    image: whitefullsir,
    image2:"https://i.pinimg.com/564x/36/90/63/3690636769f9367b4d792463340ca837.jpg",
    name: "Full White Air Shoe",
    description: "Full White Air Sneaker",
    price: 850,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 8,
    image: airfullblack,
    image2:"https://i.pinimg.com/736x/54/e6/8c/54e68ca4933141a554003e376fa9a85e.jpg",
    name: "Full Black Air Shoe",
    description: "Full Black Air Sneaker",
    price: 850,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 9,
    image: blackfullcon,
    image2:"https://i.pinimg.com/736x/f1/6d/c7/f16dc7b2171a4607ca6234cb00cda1f4.jpg",
    name: "High-Top Black Converse",
    description: " Converse sneakers with hard White sole",
    price: 700,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 10,
    image: blackcon,
    image2:"https://i.pinimg.com/564x/75/f2/c7/75f2c7d1666589d813b8ed479ddb7086.jpg",
    name: "Black Converse",
    description: "Converse Sneakers with hard White sole",
    price: 700,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 11,
    image: graycon,
    image2:"https://i.pinimg.com/564x/94/3a/a4/943aa440ebd59ed9249a99a1fe612890.jpg",
    name: "Gray Converse",
    description: " Converse sneakers with hard White sole",
    price: 700,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 12,
    image: blackcon,
    image2:"https://i.pinimg.com/564x/c7/8d/19/c78d19c5ceb6a4946095523a385f406e.jpg",
    name: "High-Top Gray Converse",
    description: " Converse sneakers with hard White sole",
    price: 700,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 13,
    image: blackvan,
    image2:"https://i.pinimg.com/564x/a9/48/2c/a9482cb3fa7ec25d60dbc21ad9341d5b.jpg",
    name: "Black Old School Vans",
    description: "Black Old School Vans sneakers with hard White sole",
    price: 650,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 14,
    image: grayvan,
    image2:"https://i.pinimg.com/564x/a2/44/b2/a244b2c2dba024180f707cc2646b6965.jpg",
    name: "Gray Van",
    description: "Gray Old School Vans sneakers with hard White sole",
    price: 650,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 15,
    image: greenvan,
    image2:"https://i.pinimg.com/564x/9f/84/9b/9f849b9e88324a648e1d97895a35712a.jpg",
    name: "Green Old School Vans",
    description: "Green Old School Vans sneakers with hard White sole",
    price: 650,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 16,
    image: brownvan,
    image2:"https://i.pinimg.com/564x/95/aa/e3/95aae3c8540dd29b0295ada15623b903.jpg",
    name: "Brown Old School Vans",
    description: "Brown Old School Vans sneakers with hard White sole",
    price: 650,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 17,
    image: blackformal,
    image2:"https://i.pinimg.com/564x/6d/e0/74/6de074f1225aafafcc789de9ba9e0c07.jpg",
    name: "Black Formal Shoe",
    description: "Black Leather Formal Shoe with hard sole and classic look",
    price: 950,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 18,
    image: brownformal,
    image2:"https://i.pinimg.com/736x/e7/4f/13/e74f13c460d36033da4e983235655965.jpg",
    name: "Brown Formal Shoe",
    description: "Brown Leather Formal Shoe with hard sole and classic look",
    price: 950,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 19,
    image: blacklowformal,
    image2:"https://i.pinimg.com/564x/a4/d3/cf/a4d3cfa58a476a815c4636d73573cd66.jpg",
    name: "Black Formal Monk Shoe",
    description: "Black Leather Monk Formal Shoe with hard sole and classic look",
    price: 900,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 20,
    image: brownlowformal,
    image2:"https://i.pinimg.com/564x/c7/e9/b8/c7e9b87227c781c60d2771829ef3fc28.jpg",
    name: "Brown Formal Monk Shoe",
    description: "Brown Leather Monk Formal Shoe with hard sole and classic look",
    price: 900,
    quantity: 1,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default Product;
