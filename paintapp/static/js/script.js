
   <script type="text/javascript">
   var shape;
   var color;
   function myClickEvent(e){
           var ctx = c.getContext("2d");
           ctx.beginPath();
           if(color==1){
               ctx.strokeStyle="red";
           }else if(color==2){
               ctx.strokeStyle='yellow':
           }else if(color==3){
               ctx.strokeStyle='blue';
           }
           if(shape == 0){
               ctx.arc(e.offsetX,e.offsetY, 45, 0, 2 * Math.PI);
               ctx.stroke();
               
           }else if(shape == 1){
   
               ctx.moveTo(100, 100);
               ctx.lineTo(100, 300);
               ctx.lineTo(300, 300);
               ctx.closePath();
               ctx.stroke();
               
               
               context.closePath()
           }else if(shape == 2){
               ctx.rect(e.offsetX,e.offsetY, 150, 100);
               ctx.stroke();
   
   
           }else if(shape == 3){
               ctx.rect(e.offsetX, e.offsetY, 50, 50);
               ctx.stroke();
           }
       }
   
           function circleClicked(){
               shape=0;
           }
           function triangleClicked(){
               shape=1;
           }
           function rectangleClicked(){
               shape=2;
           }
           function squareClicked(){
               shape=3;
           }
           function redClicked(){
               color=1;
           }
           function blueClicked(){
               color=3;
           }
           function yellowClicked(){
               color=2;
           }
   
   </script>
</head>
<body>
 <div class="container">
   <div class="content">
     <h1>Drawing Application</h1>
   </br>
     <canvas
         id="myCanvas"
         width="1000"
         height="600"
         style="border: 1px solid #000000;"
         >
       </canvas>
 <div> 
   <class class="canvas1"></class>
     <input type="button"  id="circle" value="Circle">
     <input type="button" id="line" value="Triangle">
     <input type="button" id="rectangle" value="Rectangle">
     <input type="button" id="square" value="Square">
     
 </div>
 <div>
   <class class="canvas2"></class>
     <input type="button" id="red" value="Red">
     <input type="button" id="blue" value="Blue">
     <input type="button" id="yellow" value="Yellow">
 </div>
       <div class="footer">
         Developed by M.S.Jeeva
       </div>
   </div>
 </div>
 <script type ="text/javascript">
   var c = document.getElementById("myCanvas");
   c.addEventListener("click", myClickEvent);
   document.getElementById("circle").addEventListener("click", circleClicked);
   document.getElementById("line").addEventListener("click",  triangleClicked);
   document.getElementById("rectangle").addEventListener("click",rectangleClicked);
   document.getElementById("square").addEventListener("click",squareClicked);
   document.getElementById("red").addEventListener("click",redClicked);
   document.getElementById("blue").addEventListener("click",blueClicked);
   document.getElementById("yellow").addEventListener("click",yellowClicked);
  
</script>
</body>
</html>