import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

let data_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 250000,
    old_price: 300000,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 85000,
    old_price: 120050,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: 60000,
    old_price: 100050,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100000,
    old_price: 150000,
  },
];
//dung regex de chen dau . vao chuoi so
data_product.forEach(product => {
  product.new_price = product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  product.old_price = product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
})

export default data_product;
