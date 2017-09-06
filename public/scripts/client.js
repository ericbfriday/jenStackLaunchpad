$(document).ready(onReady);

function onReady() {
    console.log (' onReady loaded');
    $('#requestButton').on('click', clickyFunction);
    $.ajax({
        method: 'GET',
        url: '/toast',
        success: function( response ) {
            console.log('I have a response: ', response);
        }
    });
}

function clickyFunction() {
    console.log('clickyFunction called');
    $.ajax({
        method: 'GET',
        url: '/toast',
        success: function( response ) {
            console.log('I have a response: ', response );
            $('#counterDisplay').html( response.counterProperty );
        }
    });
}










































/** First attempt with Dev's code
 * 
 console.log( 'js' );

$(document).ready( onReady );

function onReady() {
    console.log('onReady is loaded');
    $( '#requestButton' ).on( 'click' , clickFunction);
    $.ajax({
        method: 'GET',
        url: '/kittens',
        success: function (response) {
            console.log('back from server with ' + response);
        }
    });
}

function clickFunction() {
    console.log('clickFunction called');

}

*/
