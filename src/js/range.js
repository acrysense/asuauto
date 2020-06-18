$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 60000,
        values: [ 1541, 50000 ],
        slide: function( event, ui ) {
            $( "#amount-min" ).val( ui.values[ 0 ] + " тг.");
            $( "#amount-max" ).val( ui.values[ 1 ] + " тг.");
        }
    });
    $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " тг.");
    $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " тг.");
});
