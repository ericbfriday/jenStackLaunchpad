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
