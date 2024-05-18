const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");




let currentSlide = 0;

function setSlideWidth() {
    const slideWidth = slides.clientWidth;
    images.forEach((img) => {
        img.style.width = `${slideWidth}px`;
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    setSlidePosition();
}

function setSlidePosition() {
    const slideWidth = images[currentSlide].clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function initSlider() {
    setSlideWidth();
    setSlidePosition();
    setInterval(nextSlide, 3000);
}

// Get the form element
const foodOrderForm = document.getElementById('food-order-form');

// Add event listener to the "Add to Cart" button click
const addToCartBtn = document.getElementById('add-to-cart-btn');
addToCartBtn.addEventListener('click', addToCart);

// Add event listener to the "Checkout" button click
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', checkout);

let cartItems = [];
let totalCost = 0;

function addToCart() {
    const foodItem = document.getElementById('food-item').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    // Calculate the cost based on the selected food item
    let price = 0;
    if (foodItem === 'pizza') {
        price = 10;
    } else if (foodItem === 'burger') {
        price = 5;
    } else if (foodItem === 'salad') {
        price = 8;
    } else if (foodItem === 'pasta') {
        price = 12;
    }

    const itemTotal = price * quantity;

    // Add item to the cart
    cartItems.push({
        foodItem,
        quantity,
        price,
        itemTotal
    });

    // Update the total cost
    totalCost += itemTotal;

    // Update the cart items list
    const cartItemsList = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${quantity} x ${foodItem} - $${itemTotal.toFixed(2)}`;
    cartItemsList.appendChild(listItem);

    // Update the total cost display
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;

    // Reset the form
    foodOrderForm.reset();
}

function checkout() {
    // Perform checkout logic, e.g., submit the cart items and total cost to a server
    console.log('Checkout:', cartItems);
    console.log('Total Cost:', totalCost);

    // Reset the cart
    cartItems = [];
    totalCost = 0;

    // Clear the cart items list and total cost display
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = 'Total Cost: $0.00';
}
document.querySelector('.book-a-table form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting normally

    // show the thank you message
    document.querySelector('.thank-you-message').style.display = 'block';

    // hide the form
    document.querySelector('.book-a-table').style.display = 'none';
});
