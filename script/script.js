$(document).ready( function() {

// Таби Our Services

    (function($) {
        $(function() {
        $('.our-servises-tab').click(function() {
            let id = $(this).attr('data-tab'),
                content = $('.our-servises-tab-items[data-tab="'+ id +'"]');
            
            $('.our-servises-tab.active').removeClass('active');
            $(this).addClass('active');
            
            $('.our-servises-tab-items.active').removeClass('active');
            content.addClass('active');
         });
        });
        })(jQuery);

// Фільтр та таби Our Amazing Work

    (function($) {
        $(function() {
        
        $('ul.our-work-tabs').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active') 
        });
        
        });
        })(jQuery);

    let fActive = '';
    
    function filterCatalog(category){
    if(fActive != category){
    $('.grid-items').filter('.'+category).slideDown(500);
    $('.grid-items').filter(':not(.'+category+')').slideUp(500)
    fActive = category;
    }};
    
    $('.f-graphic-design').click(function(){
         filterCatalog('graphic-design'); 
        });
    $('.f-web-design').click(function(){
         filterCatalog('web-design'); 
        });
    $('.f-landing-pages').click(function(){
         filterCatalog('landing-pages'); 
        });
    $('.f-wordpress').click(function(){
         filterCatalog('wordpress'); 
        });
    
    $('.f-all').click(function(){
    $('.grid-items').slideDown(500);
    fActive = 'all';
    });
    

// Кнопка Load more

    $('.our-work-more').click(function() {
        $('.plus').css('display', 'none');
        $(".animate").css('display', 'flex');
        $('.load-more-text').text('LOADING...');

        setTimeout(function() {
        $(".grid-items").removeClass('more-img');
        $(".animate").css('display', 'none');
        $('.our-work-more').css('display', 'none');
        }, 2000);
        

    });
    (function($) {
        $(function() {
    
    $('.grid-items').each(function() {
        $(this).hover(function () {
            $(this).append('<div class="our-work-links">')
            $('.our-work-links').addClass('hidden')
            $('.our-work-links').append('<div class="design-links">','<div class="signed">')
            $('.design-links').append('<a href="#" class="design-link1">', '<a href="#" class="design-link2">')
            $('.signed').append('<a href="#">CREATIVE DESIGN</a>', `<h6>${$(this).data('major')}</h6>`)
            $('.design-link1').load('/img/icon/link-icon.svg')
            setTimeout(function () {
                $('.our-work-links').removeClass('hidden')
            }, 50)
            }, function() {
            $(".our-work-links").remove()
            });
    })
    });
    })(jQuery);
});
