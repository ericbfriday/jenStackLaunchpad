var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var counter = 0;


app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on ', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

app.get( '/toast', function( req, res ){
//  res.send( 'I love toast!' );
  counter ++;
  var myCounter = {
    counterProperty: counter
  };
  res.send( myCounter );
// console.log('Counter count: ' + response);
});



























/**
app.get( '/kittens' , function ( req, res) {
  console.log('Inside app.get kittens');
  res.send( 'I love kittens' );
}); 
 */