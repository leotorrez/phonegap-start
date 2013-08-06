$(function(){
$( "#calc" ).on( "pagebeforeshow", function( event, ui ) {
ahora = new Date();
        ahora.setTime(System.currentTimeMillis());
        fecha.setDate(ahora);
        dia.setDate(ahora);
    var fechanac =$('#fechanac').val();
	var auxnac=fechanac.split("-"),
	anonac=auxnac[0],
	mesnac=auxnac[1],
	dianac=auxnac[2];
	var fechahoy =$('#fechahoy').val();
	var auxhoy=fechahoy.split("-"),
	anohoy=auxhoy[0],
	meshoy=auxhoy[1],
	diahoy=auxhoy[2];
	
  $('#biorritmocontenido').html(Date.parse($('#fechahoy').val()));
});
  $( "#calc" ).bind( "click", function(){

  
  
  } );
});