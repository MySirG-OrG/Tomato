$(document).ready(function () {
	//auto and live completion 
	ace.require("ace/ext/language_tools");
        editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true
               
        });
	//end
	editor.$blockScrolling = Infinity;
	//disables vertical line in ace editor
	editor.setOption("showPrintMargin", false);

	var tabSize = 4;
        var tabCode = [];
        var tabLang = [];
        var tabVis = [];
        var currentTab = 0;

	var the = localStorage.getItem('theme');
	
	if( the == null) 
	{
		editor.setTheme("ace/theme/chrome");
	}
	else
	{
	//	loadDark();
	}

		
	
		
		
		

	

	if( editor == null ) {
		return;
	}
	editor.focus();

	var norOps = {
		minLines: 25,
		maxLines: null,
		fontSize: "12pt"
	};

	var fullOps = {
		minLines: null,
		maxLines: null
	};

	editor.setOptions( norOps );

	function toggleFullScreen() {
		var elem = document.getElementById("editor");
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	}
	$( "#full" ).click( function() {
		toggleFullScreen();
	});


	$( "#splitScreen" ).click( function() {
		if ( $(window).width() > 768) {
  	        	if ( $("#splitScreen span").hasClass('glyphicon-resize-full'))  {
				$(".leftDiv").append($(".mainleftDiv"));
		                $(".rightDiv").append($('.mainRightDiv'));
				$(".screen").hide();
			        $(".fullScreen").show();
			        $("#splitScreen span").removeClass('glyphicon-resize-full');
			        $("#splitScreen span").addClass('glyphicon-resize-small');
			        $("body").css('overflow-x','hidden');
				$(".inputDiv").css('margin-left','-75px');
		       } else if( $("#splitScreen span").hasClass('glyphicon-resize-small')) {
				$(".normalScreen").append($(".mainleftDiv"));
				$(".normalScreen").append($(".mainRightDiv"));
				$(".leftDiv").empty();
                                $(".rightDiv").empty();
                                $(".fullScreen").hide();
				$(".screen").show();
                                $("#splitScreen span").removeClass('glyphicon-resize-small');
                                $("#splitScreen span").addClass('glyphicon-resize-full');
                                $(".inputDiv").css('margin-left','');
      	      	       }
    		}
	});

	$(document).on('keyup',function(evt) {
        	if (evt.keyCode == 27 && $("#splitScreen span").hasClass('glyphicon-resize-small')) {
			  $(".normalScreen").append($(".mainleftDiv"));
                                $(".normalScreen").append($(".mainRightDiv"));
                                $(".leftDiv").empty();
                                $(".rightDiv").empty();
                                $(".fullScreen").hide();
                                $(".screen").show();
                                $("#splitScreen span").removeClass('glyphicon-resize-small');
                                $("#splitScreen span").addClass('glyphicon-resize-full');
                                $(".inputDiv").css('margin-left','');	
        	} else if(evt.keyCode == 27 && $( "body" ).hasClass( "fullScreen" ) ) {
			 toggleFullScreen();
                        e.preventDefault();
		}
    	});





    var defaultC = '#include <stdio.h>\n\nint main() {\n\t//write from here..\n\treturn 0;\n}';
    var defaultCPP = '#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout<<"Hello Coding World !!!";\n\treturn 0;\n}';
    var defaultJava = '/*Do Not Change Main class.. */\n\nimport java.io.*;\n\nclass Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello Coding World !!");\n\t}\n}';
    var defaultPython = '#code\nprint("Hello Coding World !!")';
    var defaultCs='using System;\n\npublic class GFG{\n\tstatic public void Main (){\n\t\t//Code\n\t}\n}';
    var defaultScala='object Main {\n\tdef main(args: Array[String]) {\n\t\t//Code\n\t}\n}';
    var defaultPerl='#!/usr/bin/perl\n# your code here\n';
    var defaultPhp='<?php\n\t//code\n?>';
    
    editor.session.setMode("ace/mode/c_cpp");
    editor.session.setValue( defaultC );
    editor.clearSelection();
    
    
function insertTemplate() {
		var text = editor.session.getValue();
		if( language == 'C' ) {
                        editor.session.setMode("ace/mode/c_cpp");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultC );
                        }
                } else if( language == 'Cpp' || language=='Cpp14' ) {
                        editor.session.setMode("ace/mode/c_cpp");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultCPP );
                        }
                } else if( language == 'Java' ) {
                        editor.session.setMode("ace/mode/java");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultJava );
                        }
                } else if( language == 'Python' || language == 'Python3' ) {
                        editor.session.setMode("ace/mode/python");
                        if( text === '' || text == defaultJava || text == defaultCPP || text == defaultC || text == defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp) {
                                editor.session.setValue( defaultPython );
                        }
                } else if( language == 'Csharp') {
                        editor.session.setMode("ace/mode/csharp");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultCs);
                        }
                } else if( language == 'Scala') {
                        editor.session.setMode("ace/mode/scala");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultScala);
                        }
                } else if( language == 'Perl') {
                        editor.session.setMode("ace/mode/perl");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultPerl);
                        }
                } else if( language == 'Php') {
                        editor.session.setMode("ace/mode/php");
                        if( text === '' || text==defaultJava || text==defaultCPP || text==defaultC || text==defaultPython || text==defaultCs || text==defaultScala || text==defaultPerl
                                || text==defaultPhp){
                                editor.session.setValue(defaultPhp);
                        }
                }
		tabCode[currentTab] = editor.session.getValue();
	}

	currentTab = parseInt(localStorage.getItem( 'currentTab' ));
        var tabCounter = 0;
        if( currentTab == '' || currentTab == null )currentTab = 0;

        for( var i = 0; i < tabSize; i++ ){
                tabCode[i] = localStorage.getItem( 'code'+i );
                tabLang[i] = localStorage.getItem( 'lang'+i );
                tabVis[i] = $.parseJSON(localStorage.getItem( 'vis'+i ));
                if( tabVis[i] == '' || tabVis[i] == null )tabVis[i] = false;
                if( tabCode[i] == null ) tabCode[i] = '';
                if( tabLang[i] == null || tabLang[i] == '' ) tabLang[i] = 'C';
                if( tabVis[i] == true )tabCounter++;
                $('#tab'+i+' > .text').text( $('[l='+tabLang[i]+']').html() );
        }
	var valid = true;
        if( tabVis[currentTab] == false || tabVis[0] == false )valid = false;
        for( var i = 1; i < tabSize; i++ ){
                if( tabVis[i] == true && tabVis[i-1] == false){
                        valid = false;
                        break;
                }
        }
        if( !valid ){
                for( var i = 1; i < tabSize; i++ ){
                        tabVis[i] = false;
                }
                tabCode[0] = '';
                tabLang[0] = 'C';
                tabVis[0] = true;
                currentTab = 0;
        }
        tabVis[currentTab] = true;
        if( tabLang[currentTab] == '')tabLang[currentTab] = 'C';
        if( tabCounter == 0 )tabCounter = 1;
        var text = editor.session.getValue();
        if( text != ''){ 
                for( var i = 1; i < tabSize; i++ ){
                        tabVis[i] = false;
                }
                tabCode[0] = text;
                tabLang[0] = language;
                tabVis[0] = true;
                currentTab = 0;
                tabCounter = 1;
        }else{
                language = tabLang[currentTab];
        }
        if( tabCode[currentTab] != ''){
                editor.session.setValue( tabCode[currentTab] );
        }
	$('#tab'+currentTab).css({'border-left':'1.5px solid #adadad','border-right':'1.5px solid #adadad','border-top':'1.5px solid #adadad','background-color':'#ebebeb'});
        $('#tab'+currentTab).css({'border-bottom':'none'});
        $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ebebeb'});
        insertTemplate();
        for( var i = 0; i< tabSize; i++ ){
                if( tabVis[i] )$('#tab'+i).show();
                else break;
        }
	if( tabCounter == tabSize )$( '#addTab' ).fadeOut();
	if( tabCounter == 1 )$( '.closeTab' ).fadeOut();
        $('#addTab').click( function(){
            if( tabCounter >= tabSize )
              {
                alert("Can't add more tabs!");
                return;
              }
            $('#tab'+tabCounter).show();
            tabCode[tabCounter] = '';
            tabLang[tabCounter] = 'C';
            tabVis[tabCounter] = true;
            tabCode[currentTab] = editor.session.getValue();
            tabLang[currentTab] = language;
            $('#tab'+tabCounter+' > .text').text( $('[l='+tabLang[tabCounter]+']').html() );
            $('#tab'+currentTab).css({'border-left':'1px solid #adadad','border-right':'1px solid #adadad','border-top':'1px solid #adadad','background-color':'#ffffff'});
            $('#tab'+currentTab).css({'border-bottom':'2px solid #adadad'});
            $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ffffff'});
            currentTab = tabCounter;
            $('#tab'+currentTab).css({'border-left':'1.5px solid #adadad','border-right':'1.5px solid #adadad','border-top':'1.5px solid #adadad','background-color':'#ebebeb'});
            $('#tab'+currentTab).css({'border-bottom':'none'});
            $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ebebeb'});
            language = tabLang[tabCounter];
            editor.session.setValue(tabCode[i]);
            insertTemplate();
            $(".lang").css("background-color", "#ffffff" );
            $(".lang").css("color", "#000000");
            $("[l="+language+"]").css("background-color", "#39B54A");
            $("[l="+language+"]").css("color", "#000000");
            tabCounter++;
		    if( tabCounter == tabSize ){
                $('#addTab').fadeOut();
            }
        	$( '.closeTab' ).fadeIn();
	});
	$('.closeTab').click( function(){
                if( tabCounter == 1 ){
                        alert('Can\'t close this tab!');
                        return;
                }
                var name = parseInt($(this).attr('name'));
                var tmp = name;
                tabCode[currentTab] = editor.session.getValue();
		tabLang[currentTab] = language;
		for( var i = name + 1; i < tabSize; i++ ){
                        if( tabVis[i] ){
                                tabVis[name] = true;
                                tabCode[name] = tabCode[i];
                                tabLang[name] = tabLang[i];
                                $('#tab'+name+' > .text').text($('[l='+tabLang[i]+']').html());
                                name++;
                        }
                }
                $('#tab'+name).hide();
                tabVis[name] = false;
                $('#tab'+currentTab).css({'border-left':'1px solid #adadad','border-right':'1px solid #adadad','border-top':'1px solid #adadad','background-color':'#ffffff'});
                $('#tab'+currentTab).css({'border-bottom':'2px solid #adadad'});
                $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ffffff'});
                if( parseInt(tabCounter) == parseInt(currentTab)+1 )currentTab--;
                $('#tab'+currentTab).css({'border-left':'1.5px solid #adadad','border-right':'1.5px solid #adadad','border-top':'1.5px solid #adadad','background-color':'#ebebeb'});
                $('#tab'+currentTab).css({'border-bottom':'none'});
                $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ebebeb'});
                language = tabLang[currentTab];
                editor.session.setValue(tabCode[currentTab]);
                insertTemplate();
                $(".lang").css("background-color", "#ffffff" );
                $(".lang").css("color", "#000000");
                $("[l="+language+"]").css("background-color", "#39B54A");
                $("[l="+language+"]").css("color", "#000000");
                tabCounter--;
		if( tabCounter == 1 )$( '.closeTab' ).fadeOut();
		$( '#addTab' ).fadeIn();
        });
	$('.tab').click( function(e){
                if( e.target.tagName != 'DIV' )return;
                var id = $(this).attr('name');
                tabCode[currentTab] = editor.session.getValue();
                tabLang[currentTab] = language;
                $('#tab'+currentTab).css({'border-left':'1px solid #adadad','border-right':'1px solid #adadad','border-top':'1px solid #adadad','background-color':'#ffffff'});
                $('#tab'+currentTab).css({'border-bottom':'2px solid #adadad'});
                $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ffffff'});
                currentTab = id;
                $('#tab'+currentTab).css({'border-left':'1.5px solid #adadad','border-right':'1.5px solid #adadad','border-top':'1.5px solid #adadad','background-color':'#ebebeb'});
                $('#tab'+currentTab).css({'border-bottom':'none'});
                $('#tab'+currentTab+' > .closeTab').css({'background-color':'#ebebeb'});
                language = tabLang[currentTab];
                editor.session.setValue(tabCode[currentTab]);
                insertTemplate();
                $(".lang").css("background-color", "#ffffff" );
                $(".lang").css("color", "#000000");
                $("[l="+language+"]").css("background-color", "#39B54A");
                $("[l="+language+"]").css("color", "#000000");
        });

        $(window).unload( function(){
                tabCode[currentTab] = editor.session.getValue();
                tabLang[currentTab] = language;
                for( var i = 0; i < tabSize; i++ ){
                        localStorage.setItem( 'code'+i, tabCode[i] );
                        localStorage.setItem( 'lang'+i, tabLang[i] );
                        localStorage.setItem( 'vis'+i, tabVis[i] );
                }
                localStorage.setItem( 'currentTab', currentTab );
        });
//add tabs section  ends here

	$("[l="+language+"]").css("background-color", "#39B54A");
	$("[l="+language+"]").css("color", "#000000");
	$('#tab'+currentTab+' > .text').text($('[l='+language+']').html());
    
	$(".lang").click(function(){
		language = $(this).attr('l');
		tabLang[currentTab] = language;
		$('#tab'+currentTab+' > .text').text($('[l='+language+']').html());
		$(".lang").css("background-color", "#ffffff" );
		$(".lang").css("color", "#000000");
		$($('[l='+language+']')).css("background-color", "#39B54A");
		$($('[l='+language+']')).css("color", "#000000");
		insertTemplate();
	});

	function getExtension() {
		if( language == 'C' )		return 'c';
		if( language == 'Cpp' || language == 'Cpp14' )	return 'cpp';
		if( language == 'Java' )	return 'java';
		if( language == 'Python' || language == 'Python3' )	return 'py';
		if( language == 'Scala' ) return 'scala';
		if( language == 'Php' ) return 'php';
		if( language == 'Perl') return 'perl';
		if( language == 'Csharp') return 'cs';
	}
	$( "#saveFile" ).add('#saveFileSmallScreen').click( function() {
		var saver = document.createElement('a');
		saver.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(editor.getSession().getValue()));
		saver.setAttribute('download', 'code.' + getExtension() );
		saver.style.display = 'none';
		document.body.appendChild(saver);
		saver.click();
		document.body.removeChild(saver);
		return false;
	});

	$("#reset").add('#reset1').click(function() {
		editor.getSession().setValue('');
		insertTemplate();
		return false;
	});

	var subResult;
	var isSubmissionQueued = false;
	
   function GetOutput( ) 
           {
		$.ajax({
                	type: "POST",
	                url: 'compiler.php',
        	        data: { lang: language, code: editor.getSession().getValue(), input: $( "#input" ).val()},
			dataType: "json",
                	success: function(data) {
                	        var data =  JSON.parse(JSON.stringify(data));
				if(data['status'] == 'SUCCESS') {
					clearInterval(subResult);
		        	        isSubmissionQueued = false;

					var stats = "";
					
					//runtime error
					if( data.Error != "" && data.Error != null ) {
						$( ".rnt" ).show();
						$( ".rnt pre" ).text( data.Error );
					}
					
					//status error
					if( data.Error_type != "" && data.Error_type != null  ) 
					{
					      $( ".cmp" ).show();
					      if(data.Error_type=="AC")
					        {
							$( ".cmp .status1" ).text('Success');
							$( ".cmp .time" ).text( data.Exec_time);
							$( ".cmp .memory" ).text( data.memory );
					         }
					       if(data.Error_type=="CE")
					        {
							$( ".cmp .status1" ).text('Compile Error');
							$( ".cmp .time" ).text( data.Exec_time);
							$( ".cmp .memory" ).text( data.memory );
					         }
					        if(data.Error_type=="WA")
					        {
							$( ".cmp .status1" ).text('Warning');
							$( ".cmp .time" ).text( data.Exec_time);
							$( ".cmp .memory" ).text( data.memory );
					         }
					         if(data.Error_type=="TLE")
					        {
							$( ".cmp .status1" ).text('Try Again');
							$( ".cmp .time" ).text( data.Exec_time);
							$( ".cmp .memory" ).text( data.memory );
					         }
						
					 }
					
					//displaying output
					if( data.output_show != "" && data.output_show != null ) 
					{        $( ".out" ).show();
						$( ".out pre" ).text( data.output_show );
					} 
					else 
					{       $( ".out" ).show();
						$( ".out pre" ).text( 'Nothing to Show' );
					}
					
					
					$("html, body").animate({ scrollTop: $(".sbt-group").offset().top + 60 }, "slow");
					
					if ( save == true ) {
		                                 $("#runshare").html('<i class="fas fa-save"></i> <b>Run+Share</b>');
                 			         $("#runshare").removeAttr( "disabled" );
						 if( data.hasOwnProperty('id') ) {
		                                        var permaLink = (data.id !=null && data.id != '') ? 'http://ide-corona-ide-corona.apps.us-west-1.starter.openshift-online.com/' + data.id : 'contact:developer.ide@chetan.com';
                		                        $( ".url pre" ).text( permaLink );
                                		        $( ".url" ).show();
		                                        if(data.id !=null && data.id != '') {
                		                                history.pushState( null, "", permaLink );
                                		        }
                                		}
					} else {
		                                 $("#run").html('<i class="fas fa-location-arrow"></i> <b>Compile + Run</b>');
                 			         $("#run").removeAttr( "disabled" );
					} 


				}

			},
			error: function(jqXHR, exception, errorThrown) {
                        },
                        complete: function() {
                        }
		});
	}   

	var save = false;

  	$("#run, #runshare").click(function() {
		
		if ( isSubmissionQueued != false ) {
	            if ( confirm ("You have one request in queue alraedy. Are you sure you want to make another submission?") ) {
		        $("#runshare").html('<i class="fas fa-save"></i><b>Run+Share</b>');
		        $("#run").html('<i class="fas fa-location-arrow"></i>s <b>Compile + Run </b>');
    			$("#runsave").removeAttr( "disabled" );
    			$("#run").removeAttr( "disabled" );
        	    	clearInterval(subResult);
	            }
	            else {
        	        return;
            	    }
        	}
        	
		this1 = $(this);
		$(this).html('<i class="fas fa-cog fa-spin"></i> <b>Request Queued</b>');
		$(this).attr( "disabled", "disabled" );
		$("html, body").animate({ scrollBottom: $(document).height() }, "slow");
		$( ".cmp" ).hide();
		$( ".rnt" ).hide();
		$( ".out" ).hide();
		$( ".war" ).hide();
		$( "#linkDiv" ).hide();
		$( ".stats" ).hide();
		$( ".url" ).hide();
		isSubmissionQueued = true;
		save = (this1.attr("id") == "run") ? false: true;
		
		
		
		
		subResult = setInterval(function() { GetOutput(); }, 2000);
		return false;
	});// save button closed
	
	
	

	//copy to clipboard section
	//copy code from editor
	var clipboard=new Clipboard('.btnEditor', {
		text:function() {
			return editor.session.getValue();
		}
	});
	//change copy to copied for 2 secs
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy input
	var clipboard=new Clipboard('.btnInput', {
                text:function() { 
                        return document.getElementById('input').value;
                }
        });
	
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy output
	var clipboard=new Clipboard('.btnOutput', {
                text:function() {
                        return document.getElementById('preOutput').innerHTML;
                }
        });
	
	clipboard.on('success',function(event){
                event.clearSelection();
                event.trigger.textContent='Copied';
                window.setTimeout(function(){
                        event.trigger.textContent='Copy';
                },2000);
        });
	
	//copy link
	var clipboard=new Clipboard('.btnLink', {
                text:function() {
                        return document.getElementById('preLink').innerHTML;
                }
        });

	clipboard.on('success',function(event){
		event.clearSelection();
		event.trigger.textContent='Copied';
		window.setTimeout(function(){
			event.trigger.textContent='Copy';
		},2000);
	});

	

	
       

	

	

});

// ctrl+enter key combination for run program code
$('body').keydown(function (e) {
	if (e.ctrlKey && e.keyCode == 13) {
    		// Ctrl-Enter pressed
		$('#run').click();
  	}
});

$(".shortkeys").click(function(e) {
    $("#shortkeysModal").modal('show');
});









