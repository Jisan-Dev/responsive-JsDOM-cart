const products = [
  {
    name: 'Blue Chair',
    headline: 'Highly comfortable',
    price: '10,000',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'White Chair',
    headline: 'Soft as cloud',
    price: '13,000',
    image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Wooden Chair',
    headline: 'Looks old and cool',
    price: '14,000',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Blue Chair',
    headline: 'Highly comfortable',
    price: '10,000',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'White Chair',
    headline: 'Soft as cloud',
    price: '13,000',
    image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Wooden Chair',
    headline: 'Looks old and cool',
    price: '14,000',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const addProducts = () => {
  let clutter = '';
  products.forEach((product, index) => {
    clutter += `
  <div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img src="${product.image}" class="w-full h-full object-cover" alt="${product.name}">
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">${product.headline}</h3>
          <h4 class="font-semibold mt-2">$${product.price}</h4>
        </div>
        <button data-index="${index}" class="w-10 h-10 rounded-full bg-gradient-to-br from-[#69628a] to-[#040309] text-yellow-400 add"><i data-index="${index}" class="ri-add-line add"></i></button>
      </div>
    </div>
  </div>`;
  });

  document.querySelector('.products').innerHTML = clutter;
};

let cart = [];
const addToCart = () => {
  document.querySelector('.products').addEventListener('click', (event) => {
    if (event.target.classList.contains('add')) {
      cart.push(products[event.target.dataset.index]);
    }
  });
};

const showCart = () => {
  document.querySelector('.carticon').addEventListener('click', () => {
    document.querySelector('.cartexpnd').classList.toggle('hidden');

    let clutter = '';
    cart.forEach((product) => {
      clutter += `
      <div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
          <img class="w-full h-full object-cover" src="${product.image}" />
        </div>
        <div>
          <h3 class="font-semibold"> ${product.name} </h3>
          <h5 class="text-sm opacity-80 font-semibold"> ${product.price} </h5>
        </div>
      </div>
      `;
    });
    document.querySelector('.cartexpnd').innerHTML = clutter;
  });
};

showCart();
addToCart();
addProducts();
