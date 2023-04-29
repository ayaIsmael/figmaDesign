$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true, 

        // rewind: true, //بس يوصل للبطاقة الاخيرة برجع للاولى رجوع سريع وتستخدم بدل اللوب مع الاوتوبلاي
        //autoplayHoverPause: true, // لما اوقف على السلايدر يوقف حركتها التلقائية

        
        smartSpeed: 1000, // نجعل الانتقال سلس من بطاقة للتانية

        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        },
        center: true,

        
        // nav : true,
        // navText : [
        //     'prev', 'next'  ممكن يكون المحتوى كلام
        //     '🠀','🠂' // unicode-table.com  من موقع بس ابحثي كيف بنقدر نغير حجمهم
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-right"></i>'
        // ],

    });
  });