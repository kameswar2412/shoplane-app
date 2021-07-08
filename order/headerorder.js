$(document).ready(function(){

    console.log("script loaded...!")
    
    var nav=$("<nav>").attr({"id":"topbar"})
    
    $("header").append(nav)
    
    var leftSide=$("<div>").attr("id","left-side-top")
    
    // left side topbar content
    
    var logo=$("<div>").attr("id","logo")
    
    var logoLink=$("<a>").attr("href","../index.html").html("SHOP")
    
    var logoText=$("<span>").html("LANE")
    
    logoLink.append(logoText)
    
    logo.append(logoLink)
    
    var clothing=$("<a>").attr({"href":"../index.html#clothing-section","id":"clothing","class":"m-link"}).html("clothing")
    
    var accessories=$("<a>").attr({"href":"../index.html#accessroy-section","id":"accessories","class":"m-link"}).html("accessories")
    
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
    
    var cartlogo=$("<a>").attr("href","../index.html")
    
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


    
    
                                                    //  main section product view
    
   
    
    var footerdiv1=$("<div>")
    
    var footerHeading=$("<p>").attr("class","footer-heading").html("Online Store")
    var link1=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Men Clothing")
    var link2=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Women Clothing")
    var link3=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Men Accessories")
    var link4=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Women Accessories")
    footerdiv1.append(footerHeading,link1,link2,link3,link4)
    var footerdiv2=$("<div>")
    var footerHeading2=$("<p>").attr("class","footer-heading").html("Helpful Links")
    var link5=$("<a>").attr({"href":"../index.html","class":"footer-link"}).html("Home")
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
    
    var projectLogo=$("<img>").attr({"src":"../images/OKAY6Fl.png","alt":"project Logo","id":"project-logo"})
    $("footer").prepend(footerdiv1,footerdiv2,footerdiv3,footerdiv4,projectLogo)
    
    
    
    
    })