const menu = [
  //      MENU NO 1
  {
    id: 1,
    nama: "japanese salad",
    category: "Food",
    harga: "12 k",
    image: "image/food1.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 2
    id: 2,
    nama: "pastel cake",
    category: "Food",
    harga: "10 k",
    image: "image/food2.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 3
    id: 3,
    nama: "sweet sandwich",
    category: "Food",
    harga: "8 k",
    image: "image/food3.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 4
    id: 4,
    nama: "choco chip special",
    category: "Food",
    harga: "9 k",
    image: "image/food4.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 5
    id: 5,
    nama: "special fried noodle",
    category: "Food",
    harga: "10 k",
    image: "image/food5.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 6
    id: 6,
    nama: "oreo milk shake",
    category: "drink",
    harga: "9 k",
    image: "image/drink1.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
  },
  {
    //      MENU NO 7
    id: 7,
    nama: "lemon tea",
    category: "drink",
    harga: "8 k",
    image: "image/drink2.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
  },
  {
    //      MENU NO 8
    id: 8,
    nama: "Oreo Cream Drink",
    category: "drink",
    harga: "11 k",
    image: "image/drink3.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    //      MENU NO 9
    id: 9,
    nama: "Jus Mangga",
    category: "drink",
    harga: "11 k",
    image: "image/drink4.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 10
    id: 10,
    nama: "oreo ice cream",
    category: "drink",
    harga: "19 k",
    image: "image/drink5.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 11
    id: 11,
    nama: " Mini ice cream ",
    category: "Food",
    harga: "5 k",
    image: "image/food6.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 12
    id: 12,
    nama: " Strowbery cake ",
    category: "Food",
    harga: "8 k",
    image: "image/food7.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 13
    id: 13,
    nama: " Breakfast food ",
    category: "Food",
    harga: "9 k",
    image: "image/food8.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 14
    id: 14,
    nama: "Chocolate Ice Cream",
    category: "drink",
    harga: "9 k",
    image: "image/drink6.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    // MENU NO 15
    id: 15,
    nama: "Cup Coffe",
    category: "drink",
    harga: "5 k",
    image: "image/drink7.jpg",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
$("document").ready(function () {
  //  MENJALANKAN JAVASCRIPT SETELAH CONTENT SIAP
  // MENAMPILKAN CART ORDER
  $(".show-order").click(() => {
    $(".cart").addClass("active");
  });
  //  CLOSE CART ORDER
  $(".btn-close").click(() => {
    $(".cart").removeClass("active");
  });

  //  ====== MENJALANKAN PROGRAM BUTTON ALL =========
  $(".btn-all").click(() => {
    let cardMenu = "";
    menu.forEach((item) => {
      cardMenu += showMenu(item);
    });
    $(".menu-contain").html(cardMenu);

    // PROGRAM order to card

    $(".btn-order").click(addCartClick);

    $(".button-modal").click(function () {
      const idmenu = $(this).data("menu");
      const items = menu.filter((item) => item.id === idmenu);
      menuDetail(items);
    });
  });
  //  ========= AKHIR PROGRAM BUTTON ALL =========

  //  ====== MENJALANKAN PROGRAM DRINK =========
  $(".btn-drink").click(() => {
    const drink = menu.filter((item) => item.category === "drink");
    let cardDrink = "";
    drink.forEach((item) => {
      cardDrink += showMenu(item);
    });
    $(".menu-contain").html(cardDrink);

    // PROGRAM order to card

    $(".btn-order").click(addCartClick);

    $(".button-modal").click(function () {
      const idmenu = $(this).data("menu");
      const items = menu.filter((item) => item.id === idmenu);
      menuDetail(items);
    });
  });
  //  ====== MENJALANKAN PROGRAM BUTTON DRINK =========

  //  ====== MENJALANKAN PROGRAM FOOD =========
  $(".btn-food").click(() => {
    const Food = menu.filter((item) => item.category === "Food");
    let cardFood = "";
    Food.forEach((item) => {
      cardFood += showMenu(item);
    });
    $(".menu-contain").html(cardFood);
    // PROGRAM order to card
    $(".btn-order").click(addCartClick);

    $(".button-modal").click(function () {
      const idmenu = $(this).data("menu");
      const items = menu.filter((item) => item.id === idmenu);
      menuDetail(items);
    });
  });

  //  ====== MENJALANKAN PROGRAM BUTTON FOOD =========

  //  == MENJALANKAN PROGRAM SEARCH ======
  $(".btn-search").click(() => {
    const inputValue = $("#input-search").val();
    const menuSearch = menu.find((item) => item.nama === inputValue);
    if (menuSearch) {
      $(".menu-contain").html(showMenu(menuSearch));
      $(".button-modal").click(function () {
        const idmenu = $(this).data("menu");
        const items = menu.filter((item) => item.id === idmenu);
        menuDetail(items);
        // PROGRAM order to card

        $(".btn-order").click(addCartClick);
      });
    }
    if (!menuSearch) {
      showAlert("your input can not be found", "danger");
    }
    if (inputValue == "") {
      showAlert("your input is empty", "warning");
    }
    setBackDefault();
  });

  //  buat function showMenu
  function showMenu(m) {
    return `<div class="col-4 mb-5">
  <div class="card" style="width: 20rem">
    <img id ="image" src="${m.image}" class="card-img-top" alt="food/ drink image"/>
    <div class="card-body">
      <h5 class="card-title"id="judul">${m.nama}</h5>
      <p id="harga">${m.harga}</p>
      <i class="uil uil-plus btn-order"></i>
      <button type="button" class="button-modal"data-bs-toggle="modal" data-menu= ${m.id} data-bs-target="#ShowModalDetail">
      Show Detail 
        </button>
        </div>
      </div>
    </div>`;
  }

  //  buat function show detail menu

  function menuDetail(m) {
    let showMenuDetail = m.map((menu) => {
      return `<div class="contianer-fluid">
      <div class="row">
      <div class="col-md-3">
      <img src="${menu.image}" alt="image menu" class ="img-fluid" >
      </div>
      <div class="col">
      <ul class="list-menu">
        <li class="list-menu-item"><strong>nama :</strong>${menu.nama}</li>
        <li class="list-menu-item"><strong>category :</strong>${menu.category}</li>
        <li class="list-menu-item"><strong>harga :</strong>${menu.harga}</li>
        <li class="list-menu-item"><strong>desc:</strong>${menu.desc}</li>
      </ul>
      </div>
      </div>
      </div>`;
    });
    $(".modal-body").html(showMenuDetail);
  }

  function showAlert(text, color) {
    const alert = `<div class="alert alert-${color}" role="alert">
  ${text}
</div>`;
    $(".menu-contain").html(alert);
  }

  function setBackDefault() {
    $("#input-search").val("");
  }

  // membuat function add to cart restorant
  function addCartClick(event) {
    const button = event.target;
    const parentButton = button.parentElement.parentElement;
    const judulCart = parentButton.querySelector("#judul").innerText;
    const priceCart = parseFloat(parentButton.querySelector("#harga").innerText.replace("k", ""));
    const getImage = parentButton.querySelector("#image").src;
    // pindahkan element yang sudah diambil ke card list
    addProdukToCard(judulCart, priceCart, getImage);
    updateTotal();
  }

  // FUNCTION ADD TO CARD LIST
  function addProdukToCard(judul, price, image) {
    const cardListBox = document.createElement("div");
    cardListBox.classList.add("cart-box");
    const cartList = $(".cart-content");
    const titleCartInput = $(".cart-product-title");
    // seleksi judul list card
    for (let i = 0; i < titleCartInput.length; i++) {
      if (titleCartInput[i].innerHTML == judul) {
        alert("sorry you have input this menu to list ");
        return;
      }
    }
    // akhir seleksi
    const cardMenuContent = `
    <img src="${image}" alt="image" class="cart-img" />
  <div class="detail-box">
    <div class="cart-product-title">${judul}</div>
    <div class="cart-price">${price}k</div>
    <input type="number" value="1" class="cart-quantity" />
  </div>
  <!-- Remove cart -->
  <i class="bx bxs-trash-alt cart-remove"></i>`;

    cardListBox.innerHTML = cardMenuContent;
    cartList.append(cardListBox);
    // jalankan fungsi program icon trush
    const removeCart = document.querySelectorAll(".cart-remove");
    removeCart.forEach((item) => {
      item.addEventListener("click", cardRemoveItem);
    });
    // menu untuk menjalankan buy
  }

  //  function update total
  function updateTotal() {
    const cardList = document.querySelector(".cart-content");
    const cardBox = cardList.querySelectorAll(".cart-box");
    let total = 0;
    cardBox.forEach((cardArray) => {
      // const cardArray = cardBox[i];
      const priceElement = cardArray.getElementsByClassName("cart-price")[0];
      const price = parseFloat(priceElement.innerText.replace("k", ""));
      const quantityElement = cardArray.getElementsByClassName("cart-quantity")[0];
      const quantity = quantityElement.value;
      total = total + price * quantity;
    });

    total = Math.round(total * 100) / 100;
    document.querySelector(".total-price").innerText = total + " k";

    // mengubah harga saat quantity change
    const quantityInput = document.querySelectorAll(".cart-quantity");
    for (let i = 0; i < quantityInput.length; i++) {
      const input = quantityInput[i];
      input.addEventListener("change", quantityChanged);
    }
  }
  // FUNCTION QUANTITY CHANGED
  function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  }
  //  MENGHAPUS CARD DARI BOX LIST
  function cardRemoveItem(event) {
    const buttonButtonClick = event.target;
    buttonButtonClick.parentElement.remove();
    updateTotal();
  }

  // AKHIR READY FUNCTION
});
