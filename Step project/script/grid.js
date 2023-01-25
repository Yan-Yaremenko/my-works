$(document).ready( function() {

// masonry галерея

 $('#grid').masonry({
    itemSelector: '#grid-item',
  });
  
  $('.plus-img').css('display', 'none');
  $('#grid').css('height', '1100px');
  

  $('.gallery-load-more').click(function() {
    $('.plus-bottom').css('display', 'none');
    $(".animate-bottom").css('display', 'flex');
    $('.load-more-text-bottom').text('LOADING...');
    
    setTimeout(function() {
    $('.plus-img').css('display', 'block');
    $('#grid').css('margin-bottom', '1100px');
    $('.gallery-load-more').css('display', 'none');
    
    }, 2000);
    
});
});