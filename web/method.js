
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