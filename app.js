var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.set('port', process.env.PORT || 3001);

app.get('/', function(req, res){

  var html = '<form action="/procesar" method="POST">'+
      
      '<h2 style="text-align:center; font-size: 1.5em;">Responde que actividades hacen las mujeres en tu casa y cuales los hombres </h2>'+
    
    '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
    '<div style="text-align:center; font-size: 1.5em">'+  
        '<h3>MUJERES</h3>' +
        '<input type="radio" id="n1" name="barrer" value="1" /> barrer <br /><br>'+
        '<input type="radio" id="n2" name="lavar" value="1" /> lavar trastes y ropa<br /><br />'+
        '<input type="radio" id="n3" name="mandado" value="1" /> ir al super<br /><br />'+
        '<input type="radio" id="n4" name="cocinar" value="1" /> cocinar<br /><br />'+
        '<input type="radio" id="n5" name="tender" value="1" /> tender las camas<br /><br />'+
        '<input type="radio" id="n6" name="ninos" value="1" /> cuidar a los niños<br /><br />'+
        '<h3>HOMBRES</h3>' +
        '<input type="radio" id="n1" name="barrer1" value="1" /> barrer <br /><br />'+
        '<input type="radio" id="n2" name="lavar1" value="1" /> lavar trastes y ropa<br /><br />'+
        '<input type="radio" id="n3" name="mandado1" value="1" /> ir al super<br /><br />'+
        '<input type="radio" id="n4" name="cocinar1" value="1" /> cocinar<br /><br />'+
        '<input type="radio" id="n5" name="tender1" value="1" /> tender las camas<br /><br />'+
        '<input type="radio" id="n6" name="ninos1" value="1" /> cuidar a los niños<br /><br />'+
   '</div>'+
    '<div style="text-align:center;">'+
      '<button type="submit">Enviar</button>     '+
      '<input type="reset" value="Borrar"/>' +
    '</div>'+
'</form>';
        
  res.send(html);
});

app.post('/procesar', function(req, res){
  var barrer = req.body.barrer;
  var lavar = req.body.lavar;
  var mandado = req.body.mandado;
  var cocinar = req.body.cocinar;
  var tender = req.body.tender;
  var ninos = req.body.ninos;
  var barrer1 = req.body.barrer1;
  var lavar1 = req.body.lavar1;
  var mandado1 = req.body.mandado1;
  var cocinar1 = req.body.cocinar1;
  var tender1 = req.body.tender1;
  var ninos1 = req.body.ninos1;  
  barrer = parseInt(barrer || '0', 10);
  lavar = parseInt (lavar|| '0', 10);
  mandado = parseInt (mandado|| '0', 10);
  cocinar = parseInt (cocinar|| '0', 10);
  tender = parseInt (tender|| '0', 10);
  ninos = parseInt (ninos|| '0', 10);
  barrer1 = parseInt(barrer1 || '0', 10);
  lavar1 = parseInt (lavar1|| '0', 10);
  mandado1 = parseInt (mandado1|| '0', 10);
  cocinar1 = parseInt (cocinar1|| '0', 10);
  tender1 = parseInt (tender1|| '0', 10);
  ninos1 = parseInt (ninos1|| '0', 10);


 const resultado = barrer + lavar + mandado + cocinar + tender + ninos;
 const resultado1 = barrer1 + lavar1 + mandado1 + cocinar1 + tender1 + ninos1;
 var html = '<p style= "margin-top: 50px; text-align:center; font-size: 1.5em;"> Las MUJERES realizan ' + resultado + ' actividades y los HOMBRES realizan ' + resultado1 + ' actividades.</p><br>' +
       '<a style= "margin-top: 50px; text-align:center; font-size: 1.5em;" href="/">Probar de nuevo.</a>';
  res.send(html);
});

app.listen(app.get('port'), function(){
  console.log( 'Express se ha iniciado en http://localhost:' +
    app.get('port') + '; presione Ctrl-C para cerrar el servidor.' );
});

var server=app.listen(8888,function(){
	console.log('Servidor web iniciado');
});