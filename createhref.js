createForBrand();
function createForBrand() {
  let listBrand = ["apple", "samsung", "xiaomi", "oppo", "realme"];
  let item_top_bar = document.querySelector(".item-top-bar");
  let tmp = "";
  for (let i = 0; i < listBrand.length; i++)
    tmp +=
      '<div class="trademark-Apple animation-unline"><a href="mainpage.html?' +
      listBrand[i] +
      '">' +
      listBrand[i].toUpperCase() +
      "</a></div>";
  item_top_bar.innerHTML = tmp;
}
showProductBrand();
function showProductBrand() {
  let tmp = location.href.split("?");
  if (tmp.length == 2) {
    document.querySelector(".all-products").innerHTML = "";
    let list_json = JSON.parse(localStorage.getItem("json-products"));

    console.log(list_json[1].brand);
    console.log(tmp[1].toUpperCase() == list_json[1].brand);
    for (let i = 0; i < list_json.length; i++) {
      if (tmp[1].toUpperCase() == list_json[i].brand)
        document.querySelector(".all-products").innerHTML += show(list_json[i]);
    }
  }
}
function show(item) {
  return `<div class="product col l-3 m-4 c-6">
<div class="product-box">
  <div class="product-img">
    <img
      src="${item.img}"  alt="lỗi ảnh"
    />
  </div>
  <div class="product-info">
    <h3 class="product-title">${item.title}</h3>
    <div class="product-price">
      <p class="product-price-show">${price_format(item.price_show)}</p>
      <p class="product-price-origin">${price_format(item.price_origin)}</p>
    </div>
    <a href="" class="product-btn">Mua ngay</a>
  </div>
</div>
</div>`;
}
function price_format(price) {
  if (price == "") return "";
  let price_str = "";
  let tmp = price;
  for (i = price.length; i > 3; i -= 3) {
    price_str = "." + tmp.slice(-3) + price_str;
    tmp = tmp.substr(0, i - 3);
  }
  tmp = tmp.slice(0);
  return tmp + price_str + "₫";
}