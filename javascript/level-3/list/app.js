let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

const title = document.querySelectorAll(".card-body h5");
const text = document.querySelectorAll(".card-body p");

title[0].innerHTML = products[0].title;
text[0].innerHTML = products[0].price;

title[1].innerHTML = products[1].title;
text[1].innerHTML = products[1].price;

title[2].innerHTML = products[2].title;
text[2].innerHTML = products[2].price;
