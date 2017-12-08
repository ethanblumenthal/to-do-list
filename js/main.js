var $input = $('#todo');
var $list = $('.list');
var $form = $('.form');
var $btn = $('.btn');

$form.submit(function(evt) {
    evt.preventDefault();
    var $newItem = $('<p>').hide();
    $newItem.append('<input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>  ' + $input.val() + '</span><i class="glyphicon glyphicon-remove"></i>');
    $list.prepend($newItem);
    $newItem.slideDown('slow');    
    $input.val('');
});

$('.list input').click(function() {
    $(this).parent().toggleClass('strike');
});

