<%-- 
    Document   : index
    Created on : 2012-5-24, 14:18:47
    Author     : EnzoZhong
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
     <head> 
          <title>Local Timeline Example</title>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

          <style>
               *{
                    -khtml-user-select : none;
                    -moz-user-select : none;
                    -webkit-user-select : none; 
                    color: red;
               }
          </style>

          <link rel="stylesheet" type="text/css" href="timeline/timeline-bundle.css">  
          <script src="timeline/timeline-api.js?bundle=true" type="text/javascript"></script>

          <!-- Since we don't have our own server, we do something tricky and load our data here as if it were a library file -->
          <script src="local_data.js" type="text/javascript"></script>

          <script>        
               var tl;
               function onLoad() {
                    var tl_el = document.getElementById("tl");
                    var eventSource1 = new Timeline.DefaultEventSource();
            
                    var theme1 = Timeline.ClassicTheme.create();
                    theme1.autoWidth = true; // Set the Timeline's "width" automatically.
                    // Set autoWidth on the Timeline's first band's theme,
                    // will affect all bands.
                    var startTime = -102;
                    var endTime = 15;
                    theme1.timeline_start = new Date(Date.UTC( startTime , 0, 1));
                    theme1.timeline_stop  = new Date(Date.UTC( endTime  , 0, 1));
                    //DECADE
                    var d = Timeline.DateTime.parseGregorianDateTime( ( endTime + startTime ) / 2 );
                        
                    var intervalBase = 77; 
                    var bandInfos = [ 
                         Timeline.createBandInfo({
                              intervalUnit:   Timeline.DateTime.YEAR, 
                              eventSource:    eventSource1,
                              date:           d,
                              theme:          theme1,
                              layout:         "original", 
                              intervalPixels: intervalBase * 2
                         }),
                         Timeline.createBandInfo({
                              intervalUnit:   Timeline.DateTime.DECADE, 
                              eventSource:    eventSource1,
                              date:           d,
                              theme:          theme1,
                              layout:         "original",  
                              intervalPixels: intervalBase * 3
                         })
                    ];
                    bandInfos[0].highlight = true;
                    bandInfos[1].syncWith = 0;
                    bandInfos[1].highlight = true;
                          
                    // create the Timeline
                    tl = Timeline.create( tl_el, bandInfos, Timeline.HORIZONTAL);
            
                    var url = '.'; // The base url for image, icon and background image
                    // references in the data
                    eventSource1.loadJSON( timeline_data , url ); // The data was stored into the 
                    // timeline_data variable.
                    tl.layout(); // display the Timeline
               }
        
               var resizeTimerID = null;
               function onResize() {
                    if ( resizeTimerID == null ) {
                         resizeTimerID = window.setTimeout(function() {
                              resizeTimerID = null;
                              tl.layout();
                         }, 1000);
                    }
               }
          </script>

     </head>
     <body onload="onLoad();" onresize="onResize();">
          <div id="doc3" class="yui-t7">
               <div id="bd" role="main">
                    <div class="yui-g">
                         <div id='tl'></div>
                    </div>
               </div>
               <div id="ft" role="contentinfo">
                    <span id='tl_ver'></span>
                    <script>Timeline.writeVersion('tl_ver')</script> 
               </div>
          </div>

     </body>
</html>
