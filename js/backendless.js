var APP_ID = '5E5A5680-45DB-0C9E-FFDB-F32B37371F00';
var API_KEY = '3687E41A-4C53-D6E8-FF6A-46A7EEC35600';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

$('.contactForm').on('submit', function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Form Submit',
  eventAction: 'Form Submit Click',
  eventLabel: 'Form Submit Click'
  });
  Backendless.Data.of( "subscribers" ).save( { email:$('#email').val(),fullname:$('#fullname').val(), phoneNumber:$('#phoneNumber').val(),originCity:$('#originCity').val(),destinationCity:$('#destinationCity').val() } )
      .then( function( obj ) {
          console.log( "object saved. objectId " + obj.objectId )
      } )
      .catch( function( error ) {
          console.log( "got error - " + error )
      })
    alert('Thanks for joining our waitlist. We will be in touch shortly!');
    return false;
});
