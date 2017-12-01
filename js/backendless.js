var APP_ID = '5E5A5680-45DB-0C9E-FFDB-F32B37371F00';
var API_KEY = '3687E41A-4C53-D6E8-FF6A-46A7EEC35600';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);
$('#button1').click{function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Scroll Button',
  eventAction: 'Scroll Button1 click',
  eventLabel: 'Scroll Button1 click'
  });
  return true;
}};

$('#button2').click{function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Scroll Button',
  eventAction: 'Scroll Button2 click',
  eventLabel: 'Scroll Button2 click'
  });
  return true;
}};

$('#button3').click{function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Scroll Button',
  eventAction: 'Scroll Button3 click',
  eventLabel: 'Scroll Button3 click'
  });
  return true;
}};

$('#button4').click{function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Scroll Button',
  eventAction: 'Scroll Button4 click',
  eventLabel: 'Scroll Button4 click'
  });
  return true;
}};

$('#button5').click{function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Scroll Button',
  eventAction: 'Scroll Button5 click',
  eventLabel: 'Scroll Button5 click'
  });
  return true;
}};

$('.contactForm').on('submit', function () {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Form Submit',
  eventAction: 'Form Submit Click',
  eventLabel: 'Form Submit Click'
  });
  Backendless.Data.of( "subscribers" ).save( { email:$('#email').val(),fullname:$('#fullname').val(),originCity:$('#originCity').val(),destinationCity:$('#destinationCity').val() } )
      .then( function( obj ) {
          console.log( "object saved. objectId " + obj.objectId )
      } )
      .catch( function( error ) {
          console.log( "got error - " + error )
      })
    alert('Thanks for helping us out!');
    return false;
});
