const imgViewPort = document.querySelector('.img-container-viewport');
const imgViewPortimg = imgViewPort.children[0];
const imgItemEl = document.querySelectorAll('.img-container-item');
const colorValEl = document.querySelector('.color-val');
const addToCartBtn = document.querySelector('.add-to-cart');
const BLACK = 'black';
const BLUE = 'blue';
const RED = 'red';
const Green ='green';
const popupModalEl = document.querySelector('.popup-modal');
const messageEl = document.querySelector('.message');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const productCountVal = document.querySelector('.product-count');
const cartCoutnEl = document.querySelector('.cart-count');
let productCount = 1;

for (let i = 0; i <= imgItemEl.length - 1; i++) {
  imgItemEl[i].addEventListener('click', () => {
    imgSrc = imgItemEl[i].src;
    imgViewPortimg.setAttribute('src', imgSrc);
  });
}

function changeImageColor(from, to) {
  for (let i = 0; i <= imgItemEl.length - 1; i++) {
    imgSrc = imgItemEl[i].src;
    const updatedSrc = imgSrc.replace(from, to);
    imgItemEl[i].setAttribute('src', updatedSrc);
    const imgViewPortSrcVal = imgViewPortimg.src;
    const updatedimgViewPortSrcVal = imgViewPortSrcVal.replace(from, to);
    imgViewPortimg.setAttribute('src', updatedimgViewPortSrcVal);
  }
}

function selectColor(color) {
  colorValEl.innerHTML = color;
  if (color === RED) {
    changeImageColor(BLACK, RED);
    changeImageColor(BLUE, RED);
  }
  if (color === BLUE) {
    changeImageColor(BLACK, BLUE);
    changeImageColor(RED, BLUE);
  }
  if (color === BLACK) {
    changeImageColor(BLUE, BLACK);
    changeImageColor(RED, BLACK);
  }
  if (color === Green) {
    changeImageColor(BLACK, GREEN);
    changeImageColor(RED, GREEN);
  }
}

addToCartBtn.addEventListener('click', () => {
  popupModalEl.style.cssText = 'display:block';
  messageEl.innerText = 'Product Added';
  cartCoutnEl.innerText = productCount;
  setTimeout(function () {
    popupModalEl.style.cssText = 'display:none';
  }, 4000);
});

incrementBtn.addEventListener('click', () => {
  productCount = productCount + 1;
  productCountVal.innerText = productCount;
});
decrementBtn.addEventListener('click', () => {
  if (productCount > 1) {
    productCount = productCount - 1;
    productCountVal.innerText = productCount;
  }
});
