$(document).ready(function(){
	
	
	$('#addVideo').click(function() {
    $('#formContainer .form-group:last').after('<div class="form-group"><h4>Video Section </h4><input type="text" class="form-control" id=""  placeholder="Headline"><textarea class="form-control" placeholder="Caption"></textarea><textarea class="form-control" placeholder="Sub Title"></textarea><a class="remove" href="javascript:void(0);">Remove</a></div>');
});
	
	
	$('#addImage').click(function() {
    $('#formContainer .form-group:last').after('<div class="form-group"><h4>Image Section </h4><input type="text" class="form-control" id=""  placeholder="Headline"><textarea class="form-control" placeholder="Caption"></textarea><textarea class="form-control" placeholder="Sub Title"></textarea><a class="remove" href="javascript:void(0);">Remove</a></div>');
});
	
	
$('#formContainer').on('click','.remove',function() {
 	$(this).parent().remove();
});
	
	
})





