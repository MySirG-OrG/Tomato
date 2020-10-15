<?php
include('header.php'); ?>

<body class="w3-theme-l5">
<!-- Navbar -->
<?php include('head.php');?>
<!-- Page Container -->
<div class="w3-container w3-content" style="max-width:2000px;margin-top:80px">    
  <!-- The Grid -->
  <div class="w3-row">
  
    <!-- Left Column -->
    <?php include('leftbar.php');?>
<!--- tabs --->  

  
  
<!-- Middle Column -->

    <div class="w3-col m7">
       <div class="w3-container  w3-margin w3-round">
        
          <div  class="w3-col">
	     <div class="row1">
	     
                <div class="btn btn-default tab " id="tab0" name="0"> 
                  <div class="text">C</div> 
                    <button class="btn btn-default btn-sm closeTab" name="0" style="background-color: rgb(235, 235, 235); display: none;">
                    <i class="fa fa-times-circle"></i></button>  
                </div>
                  
                <div class="btn btn-default tab " style="display:none" id="tab1" name="1"> 
	           <div class="text">C</div> 
	              <button class="btn btn-default btn-sm closeTab" name="1" style="display: none;"><i class="fa fa-times-circle"></i></button>  
                </div>
                  
               <div class="btn btn-default tab" style="display:none" id="tab2" name="2"> 
                  <div class="text">C</div> 
                     <button class="btn btn-default btn-sm closeTab" name="2" style="display: none;"><i class="fa fa-times-circle"></i></button>  
               </div>
                  
               <div class="btn btn-default tab" style="display:none" id="tab3" name="3"> 
                  <div class="text">C</div> 
                    <button class="btn btn-default btn-sm closeTab" name="3" style="display: none;"><i class="fa fa-times-circle"></i></button>  
               </div>
               <div class="btn btn-default tab" style="display:none" id="tab4" name="4"> 
                 <div class="text">Tab4</div> 
                    <button class="btn btn-default btn-sm closeTab" name="4" style="display: none;"><i class="fa fa-times-circle"></i></button>  
               </div>	        		        
              <button class="btn btn-default" id="addTab"><i class="fa fa-plus-circle"></i></button>
	  
         
	       <button class="btn btn-default btnEditor pull-right">Copy</button>
	       <button id="reset1" class="sbt btn btn-default"><i class="fa fa-recycle"></i>Reset</button>
	 
     </div>
         
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
           <div class="wrapper w3-card" style="border:2px solid grey;;">
             <pre id="ace-editorid" class="w3-round">Hello</pre>
           </div> 
        </div>
    </div>  
     
     
     
     
     
      
    
     <br>
      <div class=" ">
       <div class="row11">
	 <div class="">
	   <div class="row inputRunDiv" >
	   
	        <div class="form-group inputDiv" style="float:left;">
		   <textarea id="input" placeholder="Input Goes Here.." maxlength="10000" class="gb wf form-control input" rows="3" cols="50" style="padding:10px;"></textarea>
		   <button class="btn btn-default btnInput" type="button">Copy</button>
		</div>
		
	       <div class="sbt-group btn-group " role="group" style="float:right;" >
		       <button style="background:green;float:right;color:white" id="run" class="sbt btn btn-default" title="Run Program(Ctrl+Enter)">
			       <i class="fas fa-location-arrow"></i>
			       <b>Compile + Run</b>
		       </button>
		       				
	      </div>
	    
	  </div>
       </div>
    </div>
  </div>
  <br>
  
  
  
  
<br>  
<div style="height:100px;"></div> 
  
  
<div class="col-sm-offset-1 col-sm-11 col-xs-12">
    <div style="display:none" class="row err">
        <div class="alert alert-danger">Oops! Something went wrong. You are probably allocating too much memory or producing too much output.</div>
    </div>
    <div class="row url" style="display:none">
      <h3><i class="fa fa-link"></i>Url:<button class="btn btn-default btnLink pull-right">Copy</button></h3>
      <pre class="gb wf" id="preLink"></pre>
    </div>
    
    <div style="display:none;" class="row cmp">
       <h4><b>Info :</b></h4>
       <table id="t01">
         <tr>
	    <th>Status::      <span class="status1"></span> </th>
	    <th>Time(Sec):    <span class="time">0.25</span></th> 
	    <th>Memory(MB):   <span class="memory">0.25</span></th>
         </tr>
      </table>
       
    </div>
    
    
    
    
  <div style="display:none;" class="row rnt">
	  <h4><b>Errors:</b></h4>
	  <pre class="gb wf" style="max-height:100px;overflow-y:scroll"></pre>
  </div>
  <div style="display:none;" class="row out">
	  <h3>Output: <button class="btn btn-default btnOutput pull-right">Copy</button> </h3>
	  <pre class="gb wf" id="preOutput"></pre>
    </div>
    
    
  </div>

  
  
  
  
</div>  

<br>
<br>
<!-- End Middle Column -->










<!--- input Area --->

<!-- Right Column -->

    <?php include('rightbar.php');?>
    
<!-- End Grid -->
  </div>
  
<!-- End Page Container -->
</div>
<br>
<?php include('footer.php');?>
<!-- Footer -->

 
<script>
// Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
<script>
//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js
var theme='ace/theme/tomorrow';
var mode='ace/mode/c_cpp';
var editor= ace.edit('ace-editorid');
    editor.setTheme(theme);
    editor.getSession().setMode(mode);
    // editor.renderer.setShowGutter(false); 

$('#ace-mode').on('change',function(){
  editor.getSession().setMode('ace/mode/' +$(this).val().toLowerCase());
});
$('#ace-theme').on('change',function(){
  editor.setTheme('ace/theme/' +$(this).val().toLowerCase());
});

</script>



</body>
</html> 

