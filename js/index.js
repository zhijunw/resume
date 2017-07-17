 $(document).ready(function() {
     $('#fullpage').fullpage({
         anchors: ['主页', '关于我', '技能树', '我的项目', '联系我'],
         navigation: true,
         navigationPostion: "right",
         navigationTooltips: ['主页', '关于我', '技能树', '我的项目', '联系我'],
         navigationColor: '#38f',
         slidesNavigation: true,
         slidesNavPosition: 'bottom',
         controlArrowColor: "transparent",
         css3: true,
         resize: true,
         afterLoad: function(anchors, index) {
             console.log('anchors,index:' + anchors + ":" + index);
             if (index == 2) {

                 $(".title_about-me").animate({ width: "130px" }, 800, function() {
                     $(".title_about-me h3").slideDown(400);
                 });
             } else {
                 $(".title_about-me").animate({ width: "0" }, 800, function() {
                     $(".title_about-me h3").slideUp(400);
                 })
             }
             if (index == 3) {
                 $(".title_skill").animate({ width: "130px" }, 800, function() {
                     $(".title_skill h3").slideDown(400);
                 });
             } else {
                 $(".title_skill").animate({ width: "0" }, 800, function() {
                     $(".title_skill h3").slideUp(400);
                 })
             }
             if (index == 4) {
                 $(".title_project").animate({ width: "130px" }, 800, function() {
                     $(".title_project h3").slideDown(400);
                 });
             } else {
                 $(".title_project").animate({ width: "0" }, 800, function() {
                     $(".title_project h3").slideUp(400);
                 })
             }
             if (index == 5) {
                 $(".title_contact").animate({ width: "130px" }, 800, function() {
                     $(".title_contact h3").slideDown(400);
                 });
                 $('.forme p').addClass('p-opacity');
             } else {
                 $('.forme p').removeClass('p-opacity');
                 $(".title_contact").animate({ width: "0" }, 800, function() {
                     $(".title_contact h3").slideUp(400);
                 });

             }
         },
         afterRender: function() {
             $('#code').click(function(event) {
                 event.preventDefault();
                 $('#mask').fadeIn(500);
             });
             $('.mask-middle').click(function(event){
                 event.preventDefault();
                 $('#mask').fadeOut(500);

             });
             $('.person-info').hover(function(){
                $('.name').html('resume');
                $('.resume').html('前端工程师');
             },function(){
                 $('.name').html('王志军');
                $('.resume').html('个人简历');
             })
         }
     });

 });
