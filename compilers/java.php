<?php
	$CC="javac";
	$out="timeout 10s java Main";
	$code=$code;
	$input=$input1;
	$filename_code="Main.java";
	$filename_in="input.txt";
	$filename_error="error.txt";
	$runtime_file="runtime.txt";
	$executable="*.class";
	$command=$CC." ".$filename_code;	
	$command_error=$command." 2>".$filename_error;
	$runtime_error_command=$out." 2>".$runtime_file;
	$check=0;

	//if(trim($code)=="")
	//die("The code area is empty");
	//Global variable
	$output = '';
        $error = '';
        $Etype = '';
        $seconds = '';
	
	
	$file_code=fopen($filename_code,"w+");
	fwrite($file_code,$code);
	fclose($file_code);
	$file_in=fopen($filename_in,"w+");
	fwrite($file_in,$input);
	fclose($file_in);
	exec("chmod 777 $executable"); 
	exec("chmod 777 $filename_error");	

	shell_exec($command_error);
	$error=file_get_contents($filename_error);
	$executionStartTime = microtime(true);

	if(trim($error)=="")
	{
		if(trim($input)=="")
		{
			shell_exec($runtime_error_command);
			$runtime_error=file_get_contents($runtime_file);
			$output=shell_exec($out);
		}
		else
		{
			shell_exec($runtime_error_command);
			$runtime_error=file_get_contents($runtime_file);
			$out=$out." < ".$filename_in;
			$output=shell_exec($out);
		}
		//echo "<pre>$runtime_error</pre>";
		//echo "<pre>$output</pre>";	
		  $output;
	}
	else if(!strpos($error,"error"))
	{
		$error;
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
		  $output;
	}
	else
	{
	      $error;
	      $check=1;
	}
	$executionEndTime = microtime(true);
	$seconds = $executionEndTime - $executionStartTime;
	$seconds = sprintf('%0.2f', $seconds);
	$seconds;
	if($check==1){
	    $Etype='CE';
	}
	else if($check==0 && $seconds>10)
	{
		$Etype='TLE';
	}  
	else if(trim($output)=="")
	{
	      $Etype = "WA";
	}
	
	else if($check == 0)
	{
		$Etype="AC";
	}
	exec("rm $filename_code");
	exec("rm *.txt");
	exec("rm $executable");
?>
