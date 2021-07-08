$(document).ready(function(){

var success=$("<section>").attr("id","payment-msg-sec")

$("main").append(success)

var tickwrapper=$("<div>").attr("id","tick-wrapper")

var successimg=$("<img>").attr({"id":"success-img","alt":"payment success img", "src":"../images/white-tick.png"})

tickwrapper.append(successimg)

var msg=$("<h3>").html("Order Placed Successfully!!")

var mailmsg=$("<p>").html("We have sent you an email with the order details")
success.append(tickwrapper,msg,mailmsg)



})