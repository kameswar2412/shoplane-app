$(document).ready(function(){

console.log("script loaded..!")

var nav=$("<nav>").attr({"id":"topbar"})

$("header").append(nav)

var leftSide=$("<div>").attr("id","left-side-top")

// left side topbar content

var logo=$("<div>").attr("id","logo")

var logoLink=$("<a>").attr("href","../index.html").html("SHOP")  //logo link

var logoText=$("<span>").html("LANE")

logoLink.append(logoText)

logo.append(logoLink)

var clothing=$("<a>").attr({"href":"../index.html#clothing-section","id":"clothing","class":"m-link"}).html("clothing")   //clothing link

var accessories=$("<a>").attr({"href":"../index.html#accessory-container","id":"accessories","class":"m-link"}).html("accessories")   //accessory link

leftSide.append(logo,clothing,accessories)

var middleSide=$("<div>").attr("id","middle-side-top")

// middle content

var searchicon=$("<i>").attr({"class":"fas fa-search","aria-hidden":"true"})

var inputbox=$("<input>").attr({"type":"text","name":"search","placeholder":"Search for Clothing and Accessories","id":"search-box"})

middleSide.append(searchicon,inputbox)

var rightSide=$("<div>").attr("id","right-side-top")

// right side content

var cartWrapper=$("<div>").attr("id","cart-wrapper")

var cartCount=$("<p>").html("0").attr("id","cart-count")

var cartlogo=$("<a>").attr("href","../cart details/cart.html?p")  //cart logo link

var cartIcon=$("<i>").attr({"class":"fas fa-shopping-cart","aria-hidden":"true"})

cartlogo.append(cartIcon)
cartWrapper.append(cartCount,cartlogo)

var userimg=$("<img>").attr("src","https://test-hosting-8f9bf.web.app/assets/avatar.jpg")




var menubtg=$("<div>").attr("id","menu-btn")

var mLine1=$("<div>").attr("id","line1")
var mLine2=$("<div>").attr("id","line2")
var mLine3=$("<div>").attr("id","line3")
menubtg.append(mLine1,mLine2,mLine3)

rightSide.append(cartWrapper,userimg,menubtg)


nav.append(leftSide,middleSide,rightSide)

$(document).on("click", "#menu-btn", function() {
menubtg.addClass("toggle")
clothing.css("display","block")
accessories.css("display","block")
clothing.addClass("nav-active")
accessories.addClass("nav-active")

});
$(document).on("click", ".toggle", function() {
  
  clothing.css("display","none")
  accessories.css("display","none")
  

  menubtg.removeClass("toggle")
  
  });
$(document).on("click", ".m-link", function() {
  
  clothing.css("display","none")
  accessories.css("display","none")
  

  menubtg.removeClass("toggle")
  
  });






var productWraper=$("<div>").attr("class","product-wrapper")
$("main").append(productWraper)
var productImage=$("<div>").attr("class","product-image")

var productImagePreview=$("<img>").attr({"class":"product-image-preview"})

productImage.append(productImagePreview)

var productDetails=$("<div>").attr("class","product-details")


productWraper.append(productImage,productDetails)

// ---------------footer section-----------------

var footerdiv1=$("<div>")

var footerHeading=$("<p>").attr("class","footer-heading").html("Online Store")
var link1=$("<a>").attr({"href":"../index.html#clothing-section","class":"footer-link"}).html("Men Clothing")
var link2=$("<a>").attr({"href":"../index.html#clothing-section","class":"footer-link"}).html("Women Clothing")
var link3=$("<a>").attr({"href":"../index.html#accessroy-section","class":"footer-link"}).html("Men Accessories")
var link4=$("<a>").attr({"href":"../index.html#accessroy-section","class":"footer-link"}).html("Women Accessories")
footerdiv1.append(footerHeading,link1,link2,link3,link4)
var footerdiv2=$("<div>")
var footerHeading2=$("<p>").attr("class","footer-heading").html("Helpful Links")
var link5=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Home")
var link6=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("About")
var link7=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Contact")

footerdiv2.append(footerHeading2,link5,link6,link7)

var footerdiv3=$("<div>")
var footerHeading3=$("<p>").attr("class","footer-heading").html("Partners")
var link8=$("<a>").attr({"href":"#","class":"footer-link"}).html("Zara")
var link9=$("<a>").attr({"href":"#","class":"footer-link"}).html("Pantaloons")
var link10=$("<a>").attr({"href":"#","class":"footer-link"}).html("Levis")
var link11=$("<a>").attr({"href":"#","class":"footer-link"}).html("UCB")
var link12=$("<a>").attr({"href":"#","class":"footer-link"}).html("+ Many More")

footerdiv3.append(footerHeading3,link8,link9,link10,link11,link12)

var footerdiv4=$("<div>")
var footerHeading4=$("<p>").attr("class","footer-heading").html("Address")

var link13=$("<a>").attr({"href":"#","class":"footer-link"}).html("Building 101")
var link14=$("<a>").attr({"href":"#","class":"footer-link"}).html("Central Avenue")
var link15=$("<a>").attr({"href":"#","class":"footer-link"}).html("LA - 902722")
var link16=$("<a>").attr({"href":"#","class":"footer-link"}).html("United States")

footerdiv4.append(footerHeading4,link13,link14,link15,link16)

var projectLogo=$("<img>").attr({"src":"../images/OKAY6Fl.png","alt":"project Logo","id":"project-logo"})
$("footer").prepend(footerdiv1,footerdiv2,footerdiv3,footerdiv4,projectLogo)

// --------------------------------footer end's here-------------------------



function productsmallCard(photo, pos){


    var smallimg1=$("<img>").attr({"src": photo[pos] ,"alt":"img" ,"class":"small-img"})

    if(pos === 0){
      smallimg1.addClass("active")

    }else{
    // console.log("pos failed")
    }
    
 
    
    $(document).on("click", ".small-img", function() {
       
        $(this)

          .addClass("active")
          .siblings()
          .removeClass("active");
          $(".product-image-preview").attr("src",this.src)


      });

return smallimg1;
}

var searchId = window.location.search.split("=")[1];
// console.log(searchId)
var emptyObj;

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + (searchId) ,function(data,status){
                  emptyObj=data       
                       console.log(status) 

              $(".product-image-preview").attr("src",data.preview)
    var productTitle=$("<h1>").attr("class","product-title").html(data.name)
    var productbrand=$("<h2>").attr("class","product-brand").html(data.brand)
    var productRate=$("<h4>").attr("class","product-rate").html("Price: Rs ")
    var rate=$("<span>").html(data.price)
    productRate.append(rate)
    var productDescription=$("<h4>").attr("class","product-rate").html("Description")
    var descriptionPara=$("<p>").attr("class","descr-para").html(data.description)
    var productPreviewImg=$("<h4>").attr("class","preview-img-product").html("Product Preview")
    var productSmallImg=$("<div>").attr("class","product-small-img")
    for(var a=0;a<data.photos.length;a++){
        productSmallImg.append(productsmallCard(data.photos, a))
    }
    var addbtg=$("<button>").attr({"id":"btn-add-to-cart"}).html("Add to Cart")
    productDetails.append(productTitle,productbrand,productRate,productDescription,descriptionPara,productPreviewImg,productSmallImg,addbtg)
})


// ------------------------------button click event------------------------
$(document).on("click", "#btn-add-to-cart", function() {
  console.log("button clicked")
  $("#btn-add-to-cart").addClass("button-size");
  setTimeout(function () {
    $("#btn-add-to-cart").removeClass("button-size");

  },200)


  
var productList = window.localStorage.getItem('product-list');
productList = productList === null || productList === '' ? [] : productList;
productList = productList.length > 0 ? JSON.parse(productList) : [];

console.log(emptyObj)

var atPos= -1;

for(var a=0; a<productList.length; a++){
if(parseInt(productList[a].id) == parseInt(emptyObj.id)){
  atPos= a;
        }
}

if(atPos > -1) {
  productList[atPos].count= productList[atPos].count +1;
  window.localStorage.setItem("product-list",JSON.stringify(productList))
}else{
  emptyObj.count = 1;
  productList.push(emptyObj);
  window.localStorage.setItem("product-list",JSON.stringify(productList))

}

var totalCount = 0;
for(var i=0; i<productList.length; i++) {
    totalCount = totalCount + productList[i].count;
}

$('#cart-count').html(totalCount);



})




var productList = window.localStorage.getItem('product-list');
productList = productList === null || productList === '' ? [] : productList;
productList = productList.length > 0 ? JSON.parse(productList) : [];

var totalCount = 0;
for(var i=0; i<productList.length; i++) {
    totalCount = totalCount + productList[i].count;
}

$('#cart-count').html(totalCount);























  










})