// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector(".price span").innerText);
  let quantity = Number(product.querySelector(".quantity input").value);
  let subTotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  const cartProducts = document.querySelectorAll(".product");
  let total = 0;

  cartProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode.parentNode;

  product.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  const createProduct = document.querySelector(".create-product");
  const newProductName = createProduct.querySelector(".new-product-name input")
    .value;
  const cart = document.querySelector("#cart tbody");
  console.log(cart);
  const newProductPrice = createProduct.querySelector(
    ".new-product-price input"
  ).value;

  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  newProduct.innerHTML = `
<tr class="product">
          <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
`;
  cart.appendChild(newProduct);

  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeProductsBtn = document
    .querySelectorAll(".btn-remove")
    .forEach((btn) => {
      btn.addEventListener("click", removeProduct);
    });
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);
  //... your code goes here
});
