$(document).ready(function(){

console.log("cart scriptloaded..!")





var root=$("<section>").attr("id","root-sec")


$("main").append(root)

var heading=$("<h1>").html("Checkout").attr("id","heading")

var  cartDetails=$("<div>").attr("id","cart-details")  //cart -container

root.append(heading,cartDetails)

var items=$("<div>").attr("id","cart-items")   //left part

var itemsPrice=$("<div>").attr("id","cart-items-price")  //right part

cartDetails.append(items,itemsPrice)

var totalItems=$("<h3>").attr("id","total-items").html("Total Items : ")  //number of items

var itemscounter=$("<span>").html(0)

totalItems.append(itemscounter)

var itemsDiv=$("<div>").attr("class","items-div")  //cards -container

items.append(totalItems,itemsDiv)

var totalAmount=$("<h3>").attr("id","total-items").html("Total Amount")


var amount=$("<p>").attr("id","total-value").html("Amount :Rs ")  //total amount

var amountvalue=$("<span>").html(0)
amount.append(amountvalue)

var orderbtg=$("<button>").attr({"id":"place-order"}).html("Place Order")

itemsPrice.append(totalAmount,amount,orderbtg)

// line 43

function cardCreation(content){

  var cardProduct=$("<div>").attr({"class":"p-card"})

  var productTypeWrapper=$("<div>").attr("class","type-wrapper")

  var productType=$("<img>").attr({"src":content.preview})

  productTypeWrapper.append(productType)

  var productTypeTextWrapper=$("<div>").attr("class","text-wrapper-type")

  var txtTypeName=$("<h4>").html(content.name)
  var typeCount=$("<p>").html("x"+content.count)

  var typeamount=$("<p>").attr("class","type-amount").html()

  var typeSpan=$("<span>").html( parseInt(content.count) * parseInt(content.price))

  productTypeTextWrapper.append(txtTypeName,typeCount,typeamount,typeSpan)

  cardProduct.append(productTypeWrapper,productTypeTextWrapper)

return cardProduct;
}



var productList = window.localStorage.getItem('product-list');
  productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];

 


var sumOfAmount=0;
for(var k=0;k<productList.length; k++){

$(".items-div").append(cardCreation(productList[k]))

var totalAmountForelectedProduct=productList[k].count*productList[k].price;

  sumOfAmount= sumOfAmount + totalAmountForelectedProduct ;
}


 $("#total-items span").html(productList.length);
 $("#total-value span").html(sumOfAmount)


$("#place-order").click( function(){

var orderItems=[];

for (var x= 0; x < productList.length; x++) {
var sendingObj={
  "id": productList[x].id,
  "brand": productList[x].brand,
  "name": productList[x].name,
  "price": productList[x].price,
  "preview": productList[x].preview,
  "isAccessory": productList[x].isAccessory
}  
orderItems.push(sendingObj)
}

var sendCallObj={
  amount:sumOfAmount,
  noOfproducts:orderItems
}


alert("Order Placed Successfully")
location.assign("../order/order.html")
localStorage.setItem("product-list","")

$.post("https://5d76bf96515d1a0014085cf9.mockapi.io/order",sendCallObj,function () {






})



})

var productList = window.localStorage.getItem('product-list');
  productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];

  var totalCount = 0;
  for(var l=0; l<productList.length; l++) {
      totalCount = totalCount + productList[l].count;
  }

    $("#cart-count").text(totalCount);



})