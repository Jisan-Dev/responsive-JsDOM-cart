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
];

const addProducts = () => {
  let clutter = '';
  products.forEach((product) => {
    clutter += `
  <div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img src="${product.image}" class="w-full h-full" alt="${product.name}">
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">${product.headline}</h3>
          <h4 class="font-semibold mt-2">$${product.price}</h4>
        </div>
        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i class="ri-add-line"></i></button>
      </div>
    </div>
  </div>`;
  });

  document.querySelector('.products').innerHTML = clutter;
};
addProducts();
