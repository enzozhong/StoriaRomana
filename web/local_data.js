

var augusto = [
//Il 15 marzo del 44 aC un gruppo di senatori , che si consideravano custodi e difensori della tradizione e dell'ordinamento repubblicani , assassinò il dittatore Gaio Giulio Cesare , convinti che il loro gesto avrebbe avuto il sostegno del popolo .
{
     "start" : date( "-63/9/23" ),
     "end" : date( "-14/8/19" ),
     "title" : "Augusto的一生",
     "description" : "Augusto的一生"
},
{
     "start" : date( "-27" ),
     "end" : date( "-14/8/19" ),
     "title" : "Augusto任期",
     "description" : "Augusto任期"
},
{
     "start" : date( "-27/1/16" ),
     "title" : "Il Senato gli conferì il titolo di Augustus",
     "description" : "Il Senato gli conferì il titolo di Augustus"
},
{
     "start" : date( "-44/3/15" ),
     "title" : "assassinò il dittatore Gaio Giulio Cesare",
     "description" : "assassinò il dittatore Gaio Giulio Cesare"
},
{
     "start" : date( "-30" ),
     "title" : "Roma imperiale",
     "description" : "Roma imperiale"
},
{
     "start" : date( "-23" ),
     "title" : "Roma imperiale",
     "description" : "Roma imperiale"
},
{
     "start" : date( "-44" ),
     "title" : "augusto e` adottato per testamento come figlio",
     "description" : "augusto e` adottato per testamento come figlio"
},
{
     "start" : date( "-44" ),
     "end" : date( "-31" ),
     "title" : "Guerra civile romana",
     "description" : "Guerra civile romana",
     "link" : "/Guerra_civile_romana.html"
},
{
     "start" : date( "-43/1/1" ),
     "title" : "Primo conflitto con Antonio",
     "description" : "Primo conflitto con Antonio"
},
{
     "start" : date( "-43/4/14" ),
     "end" : date( "-43/4/21" ),
     "title" : "Battaglia di Modena",
     "description" : "Battaglia di Modena"
},
{
     "start" : date( "-43/11/27" ),
     "end" : date( "-33" ),
     "title" : "Il secondo triumvirato",
     "description" : "Il secondo triumvirato"
},
{
     "start" : date( "-42/10/23" ),
     "title" : "Seconda battaglia di Filippi",
     "description" : "Seconda battaglia di Filippi"
},
{
     "start" : date( "-42/10/3" ),
     "title" : "Prima battaglia di Filippi",
     "description" : "Prima battaglia di Filippi"
},
{
     "start" : date( "-41" ),
     "end" : date( "-39" ),
     "title" : "Primi contrasti",
     "description" : "Primi contrasti"
},
{
     "start" : date( "-41" ),
     "end" : date( "-40" ),
     "title" : "La guerra di Perugia",
     "description" : "La guerra di Perugia, anche nota come Bellum Perusinum"
},
{
     "start" : date( "-38" ),
     "end" : date( "-33" ),
     "title" : "Rinnovo e fine del triumvirato",
     "description" : "Rinnovo e fine del triumvirato"
},
{
     "start" : date( "-40" ),
     "end" : date( "-33" ),
     "title" : "Le campagne partiche di Marco Antonio",
     "description" : "Le campagne partiche di Marco Antonio"
},
{
     "start" : date( "-36/9/3" ),
     "title" : "La battaglia navale di Nauloco",
     "description" : "La battaglia navale di Nauloco fu combattuta"
},
{
     "start" : date( "-35" ),
     "end" : date( "-33" ),
     "title" : "Campagne militari di Ottaviano in Illirico",
     "description" : "Campagne militari di Ottaviano in Illirico"
},
{
     "start" : date( "-33" ),
     "end" : date( "-31" ),
     "title" : "Guerra con Antonio e la vittoria di Azio",
     "description" : "Guerra con Antonio e la vittoria di Azio"
},
{
     "start" : date( "-31/9/2" ),
     "title" : "La battaglia di Azio",
     "description" : "La battaglia di Azio"
},
{
     "start" : date( "-30" ),
     "end" : date( "-23" ),
     "title" : "Da Ottaviano ad Augusto",
     "description" : "Da Ottaviano ad Augusto"
},
{
     "start" : date( "-23" ),
     "end" : date( "14" ),
     "title" : "Il principato",
     "description" : "Il principato"
}
];


var timeline_data = {  
     "dateTimeFormat" : "Gregorian",
     "wikiURL" : "http://it.wikipedia.org/wiki/Augusto",
     "wikiSection" : "Gaio Giulio Cesare Ottaviano Augusto",

     "events" : put( [ augusto ] )
}

function put( array ){
     var re = [];
     for( var x in array ){
          var altro = array[ x ];
          for( var y in altro ){
               re.push( altro[ y ] );
          }
     }
     return re;
}

function date( date ){
     while( ( date.split( '/' ) ).length - 1 < 2 ){
          date += "/01";
     }
     var stringDate = date.split( "/" ); 
     var year = stringDate[ 0 ];
     var month = stringDate[ 1 ].length != 2 ? "0" + stringDate[ 1 ] : stringDate[ 1 ];
     var day = stringDate[ 2 ].length != 2 ? "0" + stringDate[ 2 ] : stringDate[ 2 ];
     if( date.indexOf( '-') != -1 ){
          year = parseInt( year ) + 1;
          month = parseInt( month ) - 1;
          return new Date( Date.UTC( year , month , day ) ); 
     }else{ 
          while( year.length < 4 ){
               year = "0" + year; 
          }
          return Timeline.DateTime.parseGregorianDateTime( year + "-" + month + "-" + day );
     }
}
