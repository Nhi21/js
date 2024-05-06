import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";

let new_collections = [
  {
    id: 12,
    name: "Váy Nữ Maxi 2 Dây Bèo Ngực",
    image: p1_img,
    new_price: 50000,
    old_price: 80000,
  },
  {
    id: 35,
    name: "Áo Dài Tay Kid Happy Face Mickey",
    image: p2_img,
    new_price: 85000,
    old_price: 120000,
  },
  {
    id: 14,
    name: "Quần Short Nam Túi Cạnh Sườn",
    image: p3_img,
    new_price: 60000,
    old_price: 100000,
  },
  {
    id: 8,
    name: "Váy Nữ Tay Raglan Bồng 2 Lớp",
    image: p4_img,
    new_price: 100000,
    old_price: 150000,
  },
  {
    id: 15,
    name: "Áo Khoác Gió Nam Thông Minh Trượt Nước",
    image: p5_img,
    new_price: 50000,
    old_price: 80000,
  },
  {
    id: 2,
    name: "Đầm Tiệc Nữ Vai Nơ",
    image: p6_img,
    new_price: 85000,
    old_price: 120000,
  },
  {
    id: 17,
    name: "Quần Short Nam Kaki Ống Đứng Lịch Lãm",
    image: p7_img,
    new_price: 60000,
    old_price: 100000,
  },
  {
    id: 28,
    name: "Váy Bé Gái Dáng Suông Cổ Bèo",
    image: p8_img,
    new_price: 100000,
    old_price: 150000,
  },
];
//dung regex de chen dau . vao chuoi so
new_collections.forEach(product => {
  product.new_price = product.new_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  product.old_price = product.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
})

export default new_collections;
