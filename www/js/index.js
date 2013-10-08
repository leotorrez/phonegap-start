$(function(){
      var m = [        "-1.2", '+1.2', '+2.4', '+3.7', '+4.9', '+6.1', '+7.0', '+6.7', '+5.5', '+4.3', '+3.0', '+1.8', '-0.6', '-1.8', '-3.0', '-4.3', '-5.5', '-6.7', '-7.0', '-6.1', '-4.9', '-3.7', '-2.4'    ];
      var f = [        '-1', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+7', '+6', '+5', '+4', '+3', '+2', '+1', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-7', '-6', '-5', '-4', '-3', '-2'    ];
      var e = [        '-1.7', '+1.7', '+3.4', '+5.1', '+6.8', '+8.5', '+10.2', '+11.9', '+13.6', '+14.0', '+12.7', '+11.0', '+9.3', '+7.6', '+5.9', '+4.3', '+2.6', '-0.9', '-2.6', '-4.3', '-5.9', '-7.6', '-9.3', '-11.0', '-12.7', '-14.0', '-13.6', '-11.9', '-10.2', '-8.5', '-6.8', '-5.1', '-3.4'    ];
$( "#calc" ).on( "pagebeforeshow", function( event, ui ) {
    var fechanac =$('#fechanac').val();
	var fechahoy =$('#fechahoy').val();
	var diasv=(Date.parse($('#fechahoy').val())-Date.parse($('#fechanac').val()))/(1000*60*60*24);
  $('#biorritmocontenido').html('Dias Vividos: '+diasv+'<br>Masculino: '+e[diasv%23]+'<br>Femenino: '+f[diasv%28]+'<br>Espiritual: '+e[diasv%33]+'<br>');
});
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