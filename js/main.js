var $input = $('#todo');
var $list = $('.list');
var $form = $('.form');

// add new item
$form.submit(function(evt) {
    evt.preventDefault();
    var $newItem = $('<p>').hide();
    $newItem.append('<input type="checkbox">');
    $newItem.append('<i class="glyphicon glyphicon-star"></i>');
    $newItem.append('<span>' + $input.val() + '</span>');
    $newItem.append('<i class="glyphicon glyphicon-remove"></i>');
    $list.prepend($newItem);
    $newItem.slideDown('slow');
    $input.val('');
});

// mark item complete
$list.on('click', 'input', function() {
    $(this).parent().toggleClass('completed');
});

// favorite items
$list.on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
});

// delete items
$list.on('click', '.glyphicon-remove', function() {
    $(this).parent().slideUp('slow', function() {
        $(this).remove();
    });
});