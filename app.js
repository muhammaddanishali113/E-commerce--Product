// ===================
// 1.TOTAL 15 PRODUCTS
// ===================

const products = [
  {
    id: 1,
    title: "Girls Cotton Casual T-Shirt",
    price: 726,
    oldPrice: 1900,
    category: "Fashion",
    rating: 4.5,
    reviews: 145,
    image: "https://hbindustries.pk/cdn/shop/files/13-1_c6fc186c-a557-4451-a617-e3ba0922c918.jpg?v=1761302500&width=832"
  },
  {
    id: 2,
    title: "M10 Wireless Bluetooth Earbuds",
    price: 549,
    oldPrice: 2500,
    category: "Electronics",
    rating: 4.2,
    reviews: 962,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUkLtu-rlLr9uV-G4v1eML8zO79ylcZJ6HozxCLwK_3Xi9NJLon5Plo4&s=10"
  },
  {
    id: 3,
    title: "Zero lifeStyle Bluetooth Earphones",
    price: 239,
    oldPrice: 900,
    category: "Electronics",
    rating: 4.8,
    reviews: 1040,
    image: "https://zerolifestyle.co/cdn/shop/files/Quantum-Red_782d7b07-2385-4b5a-818c-359ca119b4b4.webp?v=1733836416&width=800"
  },
  {
    id: 4,
    title: "3 Pc Sport Water Bottle",
    price: 1100,
    oldPrice: 1300,
    category: "Grocery",
    rating: 4.5,
    reviews: 6,
    image: "https://eveen.pk/cdn/shop/files/77AAC1B9-1D92-43EF-A39E-C4E5AE5054C4.jpg?v=1714152729&width=1414"
  },
  {
    id: 5,
    title: "Men's Casual Sports Sneakers",
    price: 566,
    oldPrice: 2000,
    category: "Shoes",
    rating: 4.6,
    reviews: 33,
    image: "https://www.exportleftovers.com/cdn/shop/files/17221388037e7a7314df69be69b8c4ba775dd0875a_thumbnail_900x_193f5173-4874-4628-a16c-b8736cef57d1_2048x.jpg?v=1743747750"
  },
  {
    id: 6,
    title: "Winter Knitted Beanie Cap",
    price: 172,
    oldPrice: 290,
    category: "Fashion",
    rating: 4.4,
    reviews: 110,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvjBk1jepI7w9ss6ddiWuoXywLARhTjhE2hb5-SWKVCL4x-qslspgYNAD&s=10"
  },
  {
    id: 7,
    title: "Magnetic Sports Wireless Earphones",
    price: 205,
    oldPrice: 700,
    category: "Electronics",
    rating: 4.3,
    reviews: 220,
    image: "https://m.media-amazon.com/images/I/61UoRnycWsL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "Pink salt Bottle",
    price: 589,
    oldPrice: 600,
    category: "Grocery",
    rating: 4.1,
    reviews: 177,
    image: "https://himalayanchef.pk/cdn/shop/products/PinkSaltFine_636302c7-f7b3-4d13-a3f6-2fbbe645dd39_1200x1200.jpg?v=1755002118"
  },
  {
    id: 9,
    title: "Men's Stylish Casual Sandals",
    price: 323,
    oldPrice: 2000,
    category: "Shoes",
    rating: 4.0,
    reviews: 270,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajrktj938xItOBGRQ9wljh475qn9fBNYjVFAuAS5Q_vV2DtWxT_eUMnKD&s=10"
  },
  {
    id: 10,
    title: "Men's Hoodie High Quality",
    price: 734,
    oldPrice: 1500,
    category: "Fashion",
    rating: 4.7,
    reviews: 247,
    image: "https://deeds.pk/cdn/shop/files/02_bc8e2177-dc3f-4222-8ff2-fc851031d816.jpg?v=1737470896"
  },
  {
    id: 11,
    title: "Colorful Fashion Bracelet Set",
    price: 276,
    oldPrice: 750,
    category: "Accessories",
    rating: 4.3,
    reviews: 88,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZr1Bun4gs6Tr9CbDHG-bG42nOpW7TUdu-L0cNLbW9NL4j2LwMOELSZqn&s=10"
  },
  {
    id: 12,
    title: "Premium Winter Tracksuit",
    price: 1120,
    oldPrice: 1900,
    category: "Fashion",
    rating: 4.6,
    reviews: 405,
    image: "https://wearium.pk/cdn/shop/files/9881955C-CBA2-46DC-895E-EDE776CBE8DF-2.png?v=1792235125&width=1080"
  },
  {
    id: 13,
    title: "Classic Stylish Wrist Watch",
    price: 899,
    oldPrice: 1800,
    category: "Accessories",
    rating: 4.4,
    reviews: 310,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbcCGqcPXhMruAvn1tu3-s-Iszfh1-7QqufLjE7g2OtzVrKnqeqBBUyY&s=10"
  },
  {
    id: 14,
    title: "Modern Travel Backpack",
    price: 1250,
    oldPrice: 2500,
    category: "Accessories",
    rating: 4.8,
    reviews: 520,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4--LzfjtCos2bWLxa6VXTVOICokeNO_URd67gL8IP2uhkp16lxQ2YpQ&s=10"
  },
  {
    id: 15,
    title: "Classic Men's Sunglasses",
    price: 450,
    oldPrice: 1000,
    category: "Accessories",
    rating: 4.2,
    reviews: 190,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9n73G0_XE2JZ80bP9m3uB8CpS4VIFVff4n1-jeF5Ew&s=10"
  }
];


// ======================================
// 2. Selected ELEMENTS
// ======================================

const productsGrid = document.getElementById("productsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortSelect = document.getElementById("sortSelect");
const itemsPerPage = document.getElementById("itemsPerPage");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

const applyPrice = document.getElementById("applyPrice");
const clearFilters = document.getElementById("clearFilters");

const resultsCount = document.getElementById("resultsCount");
const pagination = document.getElementById("pagination");
const themeToggle = document.getElementById("themeToggle");



let filteredProducts = [...products];
let currentPage = 1;


// =====================
// 4. CATEGORY FILTER 
// =====================

const categories = [
  ...new Set(products.map(product => product.category))
];

categories.forEach(category => {
  const option = document.createElement("option");

  option.value = category;
  option.textContent = category;

  categoryFilter.appendChild(option);
});


// ==========================
// 5. FILTER  SORT PRODUCT
// ==========================

function filterProducts() {

  const selectedCategory = categoryFilter.value;
  const selectedRating = Number(ratingFilter.value);

  const min = minPrice.value === ""
    ? 0
    : Number(minPrice.value);

  const max = maxPrice.value === ""
    ? Infinity
    : Number(maxPrice.value);

  // Filter
  filteredProducts = products.filter(product => {

    const categoryMatch =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const ratingMatch =
      product.rating >= selectedRating;

    const priceMatch =
      product.price >= min &&
      product.price <= max;

    return categoryMatch && ratingMatch && priceMatch;
  });


  // Sorting
  const sortValue = sortSelect.value;

  if (sortValue === "priceLow") {

    filteredProducts.sort((a, b) => a.price - b.price);

  } else if (sortValue === "priceHigh") {

    filteredProducts.sort((a, b) => b.price - a.price);

  } else if (sortValue === "ratingHigh") {

    filteredProducts.sort((a, b) => b.rating - a.rating);

  } else if (sortValue === "name") {

    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  currentPage = 1;

  renderProducts();
}


// 6. DISPLAY 
// =============

function renderProducts() {

  const perPage = Number(itemsPerPage.value);

  const totalProducts = filteredProducts.length;

  const totalPages = Math.ceil(totalProducts / perPage);

  const startIndex = (currentPage - 1) * perPage;

  const endIndex = startIndex + perPage;

  const visibleProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );


  // Results Count
  if (totalProducts === 0) {

    resultsCount.textContent = "0 Products Found";

  } else {

    resultsCount.textContent =
      `Showing ${startIndex + 1}-${Math.min(endIndex, totalProducts)} of ${totalProducts} Products`;
  }


  // No Products
  if (visibleProducts.length === 0) {

    productsGrid.innerHTML = `
      <div class="no-products">
        <h2>No Products Found!</h2>
        <p>Try changing your filters.</p>
      </div>
    `;

    pagination.innerHTML = "";

    return;
  }


  // Product Cards
  productsGrid.innerHTML = visibleProducts.map(product => {

    const discount = Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) * 100
    );

    const fullStars = Math.floor(product.rating);

    const stars =
      "★".repeat(fullStars) +
      "☆".repeat(5 - fullStars);

    return `
      <div class="product-card">

        <img
          src="${product.image}"
          alt="${product.title}"
          loading="lazy"
          onerror="this.src='https://placehold.co/400x400?text=Product'"
        >

        <div class="product-info">

          <h3 class="product-title">
            ${product.title}
          </h3>

          <div class="price-line">

            <span class="current-price">
              Rs.${product.price.toLocaleString("en-PK")}
            </span>

            <span class="old-price">
              Rs.${product.oldPrice.toLocaleString("en-PK")}
            </span>

          </div>

          <span class="discount">
            -${discount}%
          </span>

          <div class="rating-line">

            <span class="stars">
              ${stars}
            </span>

            <span class="reviews">
              (${product.reviews})
            </span>

          </div>

        </div>

      </div>
    `;

  }).join("");


  renderPagination(totalPages);
}



7



function renderPagination(totalPages) {

  pagination.innerHTML = "";

  if (totalPages <= 1) return;


  // Previous Button
  const previousButton = document.createElement("button");

  previousButton.textContent = "Previous";

  previousButton.disabled = currentPage === 1;

  previousButton.addEventListener("click", () => {

    if (currentPage > 1) {

      currentPage--;

      renderProducts();
    }

  });

  pagination.appendChild(previousButton);


  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {

    const button = document.createElement("button");

    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {

      currentPage = i;

      renderProducts();

    });

    pagination.appendChild(button);
  }


  // Next Button
  const nextButton = document.createElement("button");

  nextButton.textContent = "Next";

  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", () => {

    if (currentPage < totalPages) {

      currentPage++;

      renderProducts();
    }

  });

  pagination.appendChild(nextButton);
}


// ==================
// 8. EVENT LISTENERS

categoryFilter.addEventListener("change", filterProducts);

ratingFilter.addEventListener("change", filterProducts);

sortSelect.addEventListener("change", filterProducts);

itemsPerPage.addEventListener("change", filterProducts);


// Apply Price Button
applyPrice.addEventListener("click", () => {

  const min = minPrice.value === "" ? 0 : Number(minPrice.value);

  const max = maxPrice.value === "" ? Infinity : Number(maxPrice.value);

  if (min < 0 || max < 0) {
    alert("Price cannot be negative!");
    return;
  }

  if (min > max) {
    alert("Minimum price cannot be greater than maximum price!");
    return;
  }

  filterProducts();
});


// Clear All Filters
clearFilters.addEventListener("click", () => {

  categoryFilter.value = "all";

  ratingFilter.value = "0";

  sortSelect.value = "default";

  minPrice.value = "";

  maxPrice.value = "";

  itemsPerPage.value = "15";

  filterProducts();
});


// 9. Dark Light Them


// Load saved theme
const savedTheme = localStorage.getItem("shopTheme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";

} else {

  themeToggle.textContent = "🌙";

}


// Theme Button

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem(
    "shopTheme",
    isDark ? "dark" : "light"
  );

  themeToggle.textContent = isDark ? "☀️" : "🌙";

});


// 10 Render 

filterProducts();























//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////




// // ======================================
// // 1. PRODUCTS DATA - TOTAL 15 PRODUCTS
// // ======================================

// const products = [
//   {
//     id: 1,
//     title: "Girls Cotton Casual T-Shirt",
//     price: 726,
//     oldPrice: 1900,
//     category: "Fashion",
//     rating: 4.5,
//     reviews: 145,
//     image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
//   },
//   {
//     id: 2,
//     title: "M10 Wireless Bluetooth Earbuds",
//     price: 549,
//     oldPrice: 2500,
//     category: "Electronics",
//     rating: 4.2,
//     reviews: 962,
//     image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
//   },
//   {
//     id: 3,
//     title: "Universal Bluetooth Earphones",
//     price: 239,
//     oldPrice: 900,
//     category: "Electronics",
//     rating: 4.8,
//     reviews: 1040,
//     image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
//   },
//   {
//     id: 4,
//     title: "Coca Cola Bottle Pack",
//     price: 1100,
//     oldPrice: 1300,
//     category: "Grocery",
//     rating: 4.5,
//     reviews: 6,
//     image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500"
//   },
//   {
//     id: 5,
//     title: "Men's Casual Sports Sneakers",
//     price: 566,
//     oldPrice: 2000,
//     category: "Shoes",
//     rating: 4.6,
//     reviews: 33,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
//   },
//   {
//     id: 6,
//     title: "Winter Knitted Beanie Cap",
//     price: 172,
//     oldPrice: 290,
//     category: "Fashion",
//     rating: 4.4,
//     reviews: 110,
//     image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500"
//   },
//   {
//     id: 7,
//     title: "Magnetic Sports Wireless Earphones",
//     price: 205,
//     oldPrice: 700,
//     category: "Electronics",
//     rating: 4.3,
//     reviews: 220,
//     image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
//   },
//   {
//     id: 8,
//     title: "Premium Natural Pumpkin Seeds",
//     price: 589,
//     oldPrice: 600,
//     category: "Grocery",
//     rating: 4.1,
//     reviews: 177,
//     image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500"
//   },
//   {
//     id: 9,
//     title: "Men's Stylish Casual Sandals",
//     price: 323,
//     oldPrice: 2000,
//     category: "Shoes",
//     rating: 4.0,
//     reviews: 270,
//     image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500"
//   },
//   {
//     id: 10,
//     title: "Men's Hoodie High Quality",
//     price: 734,
//     oldPrice: 1500,
//     category: "Fashion",
//     rating: 4.7,
//     reviews: 247,
//     image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
//   },
//   {
//     id: 11,
//     title: "Colorful Fashion Bracelet Set",
//     price: 276,
//     oldPrice: 750,
//     category: "Accessories",
//     rating: 4.3,
//     reviews: 88,
//     image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500"
//   },
//   {
//     id: 12,
//     title: "Premium Winter Tracksuit",
//     price: 1120,
//     oldPrice: 1900,
//     category: "Fashion",
//     rating: 4.6,
//     reviews: 405,
//     image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500"
//   },
//   {
//     id: 13,
//     title: "Classic Stylish Wrist Watch",
//     price: 899,
//     oldPrice: 1800,
//     category: "Accessories",
//     rating: 4.4,
//     reviews: 310,
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
//   },
//   {
//     id: 14,
//     title: "Modern Travel Backpack",
//     price: 1250,
//     oldPrice: 2500,
//     category: "Accessories",
//     rating: 4.8,
//     reviews: 520,
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
//   },
//   {
//     id: 15,
//     title: "Classic Men's Sunglasses",
//     price: 450,
//     oldPrice: 1000,
//     category: "Accessories",
//     rating: 4.2,
//     reviews: 190,
//     image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
//   }
// ];

// console.log(products)


// // STEP 2: HTML Elements

// const productsGrid = document.getElementById("productsGrid");

// const categoryFilter = document.getElementById("categoryFilter");

// const ratingFilter = document.getElementById("ratingFilter");

// const sortSelect = document.getElementById("sortSelect");

// const itemsPerPage = document.getElementById("itemsPerPage");

// const minPrice = document.getElementById("minPrice");

// const maxPrice = document.getElementById("maxPrice");

// const applyPrice = document.getElementById("applyPrice");

// const clearFilters = document.getElementById("clearFilters");

// const resultsCount = document.getElementById("resultsCount");

// const pagination = document.getElementById("pagination");

// const themeToggle = document.getElementById("themeToggle");

// console.log(productsGrid);
// console.log(categoryFilter);
// console.log(ratingFilter);


// const showProducts =()=>{
//     productsGrid.innerHTML =products.map((product)=>{
//         return`
//           <div>

//               <img src="${product.image}" alt="${product.title}" width="150">

//                 <h3>${product.title}</h3>
//                 <p>Rs. ${product.price}</p>
//                 <del>Rs. ${product.oldPrice}</del>

//                 <p>⭐ ${product.rating} (${product.reviews} reviews)</p>
//             </div>`;
//     }).join(' ');
// }

// // showProducts();

// const showCategories =()=>{
//      const categories = [...new Set(products.map((product) => {
//         return product.category;
//     }))];

//     categoryFilter.innerHTML=`
//       <option value="all">All Categories</option>
//         ${categories.map((category) => {
//             return `<option value="${category}">${category}</option>`;
//         }).join("")}`
// };

// showCategories();




// const applyFilters = () => {

//     const selectedCategory = categoryFilter.value;
//     const selectedRating = ratingFilter.value;

//     const min = Number(minPrice.value) || 0;
//     const max = Number(maxPrice.value) || Infinity;

//     const filteredProducts = products.filter((product) => {

//         const categoryMatch =
//             selectedCategory === "all" ||
//             product.category === selectedCategory;

//         const priceMatch =
//             product.price >= min && product.price <= max;

//         return categoryMatch && priceMatch;
//     });

//     productsGrid.innerHTML = filteredProducts.map((product) => {
//         return `
//             <div>
//                 <img src="${product.image}" alt="${product.title}" width="150">
//                 <h3>${product.title}</h3>
//                 <p>Rs. ${product.price}</p>
//                 <del>Rs. ${product.oldPrice}</del>
//                 <p>⭐ ${product.rating} (${product.reviews} reviews)</p>
//             </div>
//         `;
//     }).join("");
// };


// const applyRatingFilter = () => {

//     // const selectedRating = ratingFilter.value;
//     const selectedRating = ratingFilter.value;

//     const filteredProducts = products.filter((product) => {

//         const ratingMatch = 
//          selectedRating === "all" ||
//             product.rating >= Number(selectedRating);
//             return categoryMatch && priceMatch && ratingMatch;

//     });

//     // console.log(filteredProducts);
// };

// ratingFilter.addEventListener("change", applyFilters);



















// applyFilters();
// categoryFilter.addEventListener("change", applyFilters);

// applyPrice.addEventListener("click", applyFilters);





































































































