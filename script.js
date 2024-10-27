const menuItems = [
  { name: "Nasi Goreng", price: 20000 },
  { name: "Mie Ayam", price: 15000 },
  { name: "Ayam Bakar", price: 25000 },
];

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.innerHTML = `
    <h2>${item.name}</h2>
    <p>Price: Rp ${item.price}</p>
  `;
  menuContainer.appendChild(menuItem);
});
