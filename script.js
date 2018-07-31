   $(window).scroll(function () {
       $('#object').each(function () {
           var imagePos = $(this).offset().top;

           var topOfWindow = $(window).scrollTop();
           if (imagePos < topOfWindow + 1) {
               $(this).addClass("pulse");
           }
       });
   });


   // スクロールを無効にする
   $(window).on('touchmove.noScroll', function (e) {
       e.preventDefault();
   });

   // スクロール無効を解除する
   $(window).off('.noScroll');
