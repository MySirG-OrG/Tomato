<?php

//global variables
	$output = '';
        $error = '';
        $Etype = '';
        $seconds = '';
	
	


if(isset($_POST['code'])){
        
         
         $code = $_POST['code'];
         $lang = $_POST['lang'];
         $input1 = $_POST['input'];
    
    	

    
         switch($lang)
			{
				case "C":
				{
					include("compilers/c.php");
					break;
					
				}
				case "Cpp":
				{
					include("compilers/cpp.php");
					break;
				}

				case "Cpp11":
				{
					include("compilers/cpp11.php");
					break;
				}
				case "Java":
				{	
					include("compilers/java.php");
					break;
				}
				
				case "Python":
				{
					include("compilers/python.php");
					break;
				}
				echo $output;
        
			} 
    
           
       
    
    
    
                $status="SUCCESS";
         	$output_show = $output;
        	$Error_show = $error;
        	$Error_type = $Etype;
        	$Exec_time =$seconds;
        	$Access_token = substr(sha1(time()), 0, 20); 
                $response = array('status'=>$status,'output_show'=>$output_show,'Error'=>$Error_show,'Error_type'=>$Error_type,'Exec_time'=>$Exec_time,'Access_token'=>$Access_token);
        	echo json_encode($response);
    
    
    
   }
?>       
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
         
		
	
	

