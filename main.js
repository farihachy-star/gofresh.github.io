var grid = $(".special").isotope({
    itemSelector:'.grid-items',
    layoutMode:'fitRows',
});


$(".button-group").on('click','button',function(){
    var filterValue = $(this).attr('data-filter');
    grid.isotope({filter: filterValue});
});