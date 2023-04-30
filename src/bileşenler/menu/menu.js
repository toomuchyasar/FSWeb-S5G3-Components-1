import './Menu.less'

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
  'Gündem',
  'Dünya',
  "Ekonomi",
  'Yazarlar',
  'Burç Yorumları',
  'Diğer'
];

const menuYapici = (menuElemanlari) => {

  const container = document.createElement("div");
  container.className = "menu";

  const ul = document.createElement("ul");
  container.appendChild(ul);
  
  for (let i = 0; i < menuElemanlari.length; i++) {
    const li = document.createElement("li");
    li.textContent = menuElemanlari[i];
    ul.appendChild(li);
  }

  const spanDiv = document.querySelector(".menu-button");
  spanDiv.addEventListener("click", ()=>{
    container.classList.toggle("menu--open");
  });

return container;
};

const headerMenu = document.querySelector(".header");
headerMenu.append(menuYapici(menuElemanlari));
