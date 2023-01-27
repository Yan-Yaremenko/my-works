$(document).ready( function() {

// Таби Our Services

    (function($) {
        $(function() {
        
        $('ul.our-servises-tabs').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.our-services-items').find('div.our-servises-tab-items').removeClass('active').eq($(this).index()).addClass('active');
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
    $('.grid-items').filter(':not(.'+category+')').slideUp(500);
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
        $('.our-work-grid').css('grid-template-rows', 'repeat(6, 206px)')
        $(".animate").css('display', 'none');
        $('.our-work-more').css('display', 'none');
        }, 2000);
        

    });
});