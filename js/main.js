var $input = $('#todo');
var $list = $('.list');
var $form = $('.form');

$form.submit(function(evt) {
    evt.preventDefault();
    var $newItem = $('<p>').hide();
    $newItem.append('<input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $input.val() + '</span><i class="glyphicon glyphicon-remove"></i>');
    $list.prepend($newItem);
    $newItem.slideDown('slow');    
    $input.val('');
});

$list.on('click', 'input', function() {
    $(this).parent().toggleClass('strike');
});

$list.on('click', '.glyphicon-star', function() {
    $(this).toggleClass('yellow');
});

$list.on('click', '.glyphicon-remove', function() {
    $(this).parent().slideUp('slow', function() {
        $(this).remove();
    });
});