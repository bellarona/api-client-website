$(function() {
  $('.getCoupons-form').submit(function(e) {
    e.preventDefault();
    if ($('#getCoupons-form-email').val()!="" && validateEmail($('#getCoupons-form-email').val())) {

        $.post('api-getCoupons', {
        email: $('#getCoupons-form-email').val()
        }, updateGetCoupons);
    } else {
        alert("Please enter a valid email :-)");
    }
  });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  function updateGetCoupons(data) {
   var output = '';
//    $.each(data,function() {
     output += '     <div class="media-list">';
     output += '       You got a <span class="coupon-percentage">30%</span> off coupon for any of the Rechargeable Electric Lighters.<div> The coupon code is: </div>';
     output += '       <div class="coupon-code">30offarc</div>';
     output += '         <div class="getCoupons-head">';
     output += '             <a class="link-to-amazon" href="https://www.amazon.com/gp/product/B01MQDFI2X">Gold Electric Lighter</a>' 
     output += '         </div>';
     output += '     </div>';
     output += '     <br/>';
     output += '     <div class="media-list">';
     output += '       You got a <span class="coupon-percentage">50%</span> off coupon for the Multi-Color Flashflight LED Flying Disc.<div> The coupon code is: </div>';
     output += '       <div class="coupon-code">offmulti</div>';
     output += '         <div class="getCoupons-head">';
     output += '             <a class="link-to-amazon" href="https://www.amazon.com/gp/product/B011KPUDLO">Multi-Color Flashflight LED Flying Disc</a>' 
     output += '         </div>';
     output += '     </div>';
     output += '     <br/>';     
     output += '     <div class="media-list">';
     output += '       You got a <span class="coupon-percentage">50%</span> off coupon for the Blue Color Flashflight LED Flying Disc.<div> The coupon code is: </div>';
     output += '       <div class="coupon-code">bluefris</div>';
     output += '         <div class="getCoupons-head">';
     output += '             <a class="link-to-amazon" href="https://www.amazon.com/gp/product/B011KPUDHS">Blue Color Flashflight LED Flying Disc</a>' 
     output += '         </div>';
     output += '     </div>';
     output += '     <br/>';     
     output += '     <div class="media-list">';
     output += '       You got a <span class="coupon-percentage">50%</span> off coupon for the Silicone Baking Cups + Cake Decoration Pen.<div> The coupon code is: </div>';
     output += '       <div class="coupon-code">bake4all</div>';
     output += '         <div class="getCoupons-head">';
     output += '             <a class="link-to-amazon" href="https://www.amazon.com/gp/product/B010ZHPRWI">Silicone Baking Cups + Cake Decoration Pen</a>' 
     output += '         </div>';
     output += '     </div>';
//    });
   $('.getCoupons-messages').html(output);
  }
});
