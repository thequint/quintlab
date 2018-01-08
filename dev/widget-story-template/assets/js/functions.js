$(document).ready(function(){
	
$('#addVideo').click(function() {
    $('#formContainer .form-group:last').after('<div class="form-group form-group-media form-group-video"><h4>Video Section </h4><input type="text" class="form-control headline" placeholder="Headline"><input type="text" class="form-control source" placeholder="Video Src"><textarea class="form-control description" placeholder="Description"></textarea><textarea class="form-control subtitle" placeholder="Sub Title"></textarea><a class="remove" href="javascript:void(0);">Remove</a></div>');
	
	
	// Preview section 
	/*$('#previewStory').contents().find('body').append('<div class="swiper-slide slide-4"><video  class="video-background" loop  src="assets/data/slide-4.mp4" webkit-playsinline poster="assets/data/poster/slide-4.jpg"></video><div class="caption"><h1>Wave Ranger</h1><p><span>Pradeep is connected to the River Ganga – the river where Gods descend to bathe. In his boat, Pradeep takes tourists around the Puja pandals on the ghats.</span></p></div>');
	*/
	
	
});
	
	
$('#addImage').click(function() {
    $('#formContainer .form-group:last').after('<div class="form-group form-group-media"><h4>Image Section </h4><input type="text" class=" headline form-control" placeholder="Headline"><input type="text" class="form-control source" placeholder="Image Src"><textarea class="form-control description" placeholder="Description"></textarea><textarea class="form-control subtitle" placeholder="Sub Title"></textarea><a class="remove" href="javascript:void(0);">Remove</a></div>');
	
	
	
});
	
	
$('#formContainer').on('click','.remove',function() {
 	$(this).parent().remove();
});
	
	$( "#formContainer" ).sortable();
    $( "#formContainer" ).disableSelection();
	
	//var framehtml = $('#previewStory').contents().find('body').html();
	
	/*alert(framehtml);
	
	$('#ClickEvent').click(function(){
		$('#previewStory').contents().find('body a.logo').hide();
		
	});*/
var data_array=[]

		
$("#submit_form").click(function(){
	
	data_array =[];
	$(".form-group-media").each(function(){
		
		if($(this).hasClass("form-group-video"))
			{
				
			data_array.push({ 
				"section_type":"video_section",
				"media_source":$(this).find(".source").val(),
				"media_headline":$(this).find(".headline").val(),
				"media_description":$(this).find(".description").val(),
				"media_subtitle":$(this).find(".subtitle").val()
			});
				
			}
		
		else{
			
			data_array.push({ 
				"section_type":"image_section",	
				"media_source":$(this).find(".source").val(),
				"media_headline":$(this).find(".headline").val(),
				"media_description":$(this).find(".description").val(),
				"media_subtitle":$(this).find(".subtitle").val()
			});
			
			}
		//console.log(data_array[0].media_headline);
	});
	console.log(data_array);
	$('#previewStory').contents().find('body .swiper-wrapper').html('');
	for(var i=0;i<data_array.length;i++)
		{
	if(data_array[i].section_type=="video_section")
		{
	$('#previewStory').contents().find('body .swiper-wrapper').append('<div class="swiper-slide"><video class="video-background" loop  src="'+data_array[i].media_source+'" webkit-playsinline poster="assets/data/poster/slide-4.jpg"></video><div class="video-caption byte-text"><div class="caption-container"><p><span>"The security arrangements are really tight. Were on duty from 12 (midnight), and around 2:30-3 am, the devotees started coming in. No untoward incidents like chain-snatching have been reported"</span></p></div></div><div class="caption"><h1>'+data_array[i].media_headline+'</h1><p><span>'+data_array[i].media_description+'</span></p></div><div class="loading"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="gooey"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs></svg><div class="blob blob-0"></div><div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div><div class="blob blob-4"></div><div class="blob blob-5"></div></div>');
		}
			else
				
				{
						$('#previewStory').contents().find('body .swiper-wrapper').append('<div class="swiper-slide" style="background-image:url('+data_array[i].media_source+')"><div class="caption"><h1>'+data_array[i].media_headline+'</h1><p><span>'+data_array[i].media_description+'</span></p></div></div>');
				}
			
	
		}
});	
	
	// Preview Option
	
	
});




















