<?php
	$CC="g++";
	$out="timeout 10s ./a.out";
	$code=$code;
	$input=$input;
	$filename_code="main.cpp";
	$filename_in="input.txt";
	$filename_error="error.txt";
	$executable="a.out";
	$command=$CC." -lm ".$filename_code;	
	$command_error=$command." 2>".$filename_error;
	$check=0;

	//if(trim($code)=="")
	//die("The code area is empty");
	
	$file_code=fopen($filename_code,"w+");
	fwrite($file_code,$code);
	fclose($file_code);
	$file_in=fopen($filename_in,"w+");
	fwrite($file_in,$input);
	fclose($file_in);
	exec("chmod -R 777 $filename_in");
	exec("chmod -R 777 $filename_code");  
	exec("chmod 777 $filename_error");	

	shell_exec($command_error);
	exec("chmod -R 777 $executable");
	$error=file_get_contents($filename_error);
	$executionStartTime = microtime(true);

	if(trim($error)=="")
	{
		if(trim($input)=="")
		{
			$output=shell_exec($out);
		}
		else
		{
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
			
			
		}
		//echo "<pre>$output</pre>";
              $output;//return output
	}
	else if(!strpos($error,"error"))
	{
		$error; //print error
		
		if(trim($input)=="")
		{
			$output=shell_exec($out);
		}
		else
		{
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}
		                $output;//print output
	}
	else
	{
		$error;//print 
		$check=1;
	}
	$executionEndTime = microtime(true);
	$seconds = $executionEndTime - $executionStartTime;
	$seconds = sprintf('%0.2f', $seconds);
	$seconds; //print total time


	if($check==1)
	{
		$Etype = "CE";
	}
	else if($check==0 && $seconds>3)
	{
		$Etype = "TLE";
	}
	else if(trim($output)=="")
	{
		$Etype = "WA";
	}
	else if($check==0)
	{
		$Etype = "AC";
	}

    exec("rm $filename_code");
	exec("rm *.o");
	exec("rm *.txt");
	exec("rm $executable");
?>
