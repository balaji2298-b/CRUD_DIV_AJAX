$(document).ready(function(){
	$('#created').on('click',function(){
		$mobilenumber = $('#mobilenumber').val();
		$otp = $('#otp').val();

		if($mobilenumber == "" || $otp == ""){
			alert("please completed the required fields");
		}
		else{
		    $.ajax({
				url:' create',
				type: 'POST',
				data: {
					mobilenumber: $mobilenumber,
					otp: $otp,
					csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
				},
				success:function(response){
					alert("Successfully Completed");
				}
			});
		}
	});

	$(document).on('click','.edit',function(){
		$id = $(this).attr('name');
		window.location = "edit/"+ $id;
	});

	$('#update').on('click',function(){
		$mobilenumber = $('#mobilenumber').val();
		$otp = $('#otp').val();

		if($mobilenumber == "" || $otp == ""){
			alert("please completed the required fields");
		}
		else{
		    $id = $('#hitmen_id').val();
		    $.ajax({
				url: 'update/' + $id,
				type: 'POST',
				data: {
					mobilenumber:$mobilenumber,
					otp:$otp,
					csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
				},
				success:function(response){
					window.location = '/';
					alert("Successfully updated!");
				}

			});
		}
	});

	$(document).on('click','.delete', function(){
		$id =$(this).attr('name');
		$.ajax({
			url: 'delete/' + $id,
			type: 'POST',
			data:{
				csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
			},
			success:function(response){
				alert("Successfully deleted");
			}
		});
	});
});