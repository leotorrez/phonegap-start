$(function(){
$( "#calc" ).on( "pagebeforeshow", function( event, ui ) {
ahora = new Date();
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
  
			
            $("#fechanac").mobiscroll($.extend({}, currentSettings, MS.fechanac));
			$("#fechahoy").mobiscroll($.extend({}, currentSettings, MS.fechahoy));
});
    var currentSettings = {};
    var MS = MS || {};
    MS.demopage = {};
    MS.demopage.main = false;
    MS.demopage.name = 'date';
    MS.demopage.component = 'datetime';
    
    MS.fechanac = {
        preset: 'date',
		theme: 'android-ics',
        lang: 'es',
        display: 'modal',
        mode: 'scroller',
        animate: 'pop',
        dateOrder: 'D ddmmyy'
    }
	MS.fechahoy = {
        preset: 'date',
		theme: 'android-ics',
        lang: 'es',
        display: 'modal',
        mode: 'scroller',
        animate: 'pop',
        dateOrder: 'D ddmmyy'
    };