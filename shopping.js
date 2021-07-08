$(document).ready(function(){


console.log("script loaded...!")

var nav=$("<nav>").attr({"id":"topbar"})

$("header").append(nav)

var leftSide=$("<div>").attr("id","left-side-top")

// left side topbar content

var logo=$("<div>").attr("id","logo")

var logoLink=$("<a>").attr("href","index.html").html("SHOP")

var logoText=$("<span>").html("LANE")

logoLink.append(logoText)

logo.append(logoLink)


var clothing=$("<a>").attr({"href":"#clothing-section","id":"clothing","class":"m-link"}).html("clothing")

var accessories=$("<a>").attr({"href":"#accessroy-section","id":"accessories","class":"m-link"}).html("accessories")

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

var cartlogo=$("<a>").attr("href","./cart details/cart.html?p")

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

$(document).on("click", ".m-link", function() {
  
  clothing.css("display","none")
  accessories.css("display","none")
  

  menubtg.removeClass("toggle")
  
  });

  $(document).on("click", ".toggle", function() {
  
    clothing.css("display","none")
    accessories.css("display","none")
    
  
    menubtg.removeClass("toggle")
    
    });



                                                //  main section product view

var sliderSection=$("<section>")

var sliderwrapper=$("<div>").attr({"class":"center"})

sliderSection.append(sliderwrapper)

var img1=$("<img>").attr("src","./images/img1.png")

var img2=$("<img>").attr("src","./images/img2.png")

var img3=$("<img>").attr("src","./images/img3.png")

var img4=$("<img>").attr("src","./images/img4.png")
sliderwrapper.append(img1,img2,img3,img4)





var clothingSection=$("<section>").attr({"id":"clothing-section","class":"product-section"})

var clothinHeading=$("<h3>").attr("class","section-heading").html("Clothing for Men and Women")

var clothingContainer=$("<div>").attr({"id":"clothing-container","class":"product-container"})

clothingSection.append(clothinHeading,clothingContainer)

var accessorySection=$("<section>").attr({"id":"accessroy-section","class":"product-section"})

var accessoryHeading=$("<h3>").attr("class","section-heading").html("Accessories for Men and Women")

var accessoryContainer=$("<div>").attr({"id":"accessory-container","class":"product-container"})

accessorySection.append(accessoryHeading,accessoryContainer)

$("main").append(sliderSection,clothingSection,accessorySection)

var footerdiv1=$("<div>")

var footerHeading=$("<p>").attr("class","footer-heading").html("Online Store")
var link1=$("<a>").attr({"href":"#","class":"footer-link"}).html("Men Clothing")
var link2=$("<a>").attr({"href":"#","class":"footer-link"}).html("Women Clothing")
var link3=$("<a>").attr({"href":"#","class":"footer-link"}).html("Men Accessories")
var link4=$("<a>").attr({"href":"#","class":"footer-link"}).html("Women Accessories")
footerdiv1.append(footerHeading,link1,link2,link3,link4)
var footerdiv2=$("<div>")
var footerHeading2=$("<p>").attr("class","footer-heading").html("Helpful Links")
var link5=$("<a>").attr({"href":"#","class":"footer-link"}).html("Home")
var link6=$("<a>").attr({"href":"#","class":"footer-link"}).html("About")
var link7=$("<a>").attr({"href":"#","class":"footer-link"}).html("Contact")

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

var projectLogo=$("<img>").attr({"src":"./images/OKAY6Fl.png","alt":"project Logo","id":"project-logo"})
$("footer").prepend(footerdiv1,footerdiv2,footerdiv3,footerdiv4,projectLogo)
//-------------------------slider----------

$('.center').slick({
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// function

function createHomePageProducts(details){
// console.log(details.id)
  var productCard=$("<div>").attr({"class":"product-card"})

  var productImg=$("<div>").attr("class","img-container")

  var imgLink=$("<a>").attr("href","./product details/product.html?p="+ (details.id) )  //

  var pImg=$("<img>").attr({"class":"pro-img","src":details.preview})
   
  imgLink.append(pImg)
  
  productImg.append(imgLink)
  
  var productText=$("<div>").attr("class","product-text")

  var name=$("<h4>").html(details.name)

  var brand=$("<h5>").html(details.brand)
  var price=$("<p>").html("Rs : "+details.price)

  productText.append(name,brand,price)

productCard.append(productImg,productText)
return productCard;
}


$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(data){

for(var a = 0; a<data.length; a++ ){


  // console.log(data[a].isAccessory)

    if(false===data[a].isAccessory) {
    $("#clothing-container").append(createHomePageProducts(data[a]))
    // console.log("clothing")

      } else if(true===data[a].isAccessory) {
    $("#accessory-container").append(createHomePageProducts(data[a]))
    // console.log("access")

      }

}

  var productList = window.localStorage.getItem('product-list');
  productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];

  var totalCount = 0;
  for(var i=0; i<productList.length; i++) {
      totalCount = totalCount + productList[i].count;
  }

  $('#cart-count').html(totalCount);

})

})