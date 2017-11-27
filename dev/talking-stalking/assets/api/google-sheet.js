jQuery( document ).ready(function( $ ) {
    // variable to hold request
    var request;
    
    $("#foo").submit(function(event){

        // Form Validation
        if ($.trim($("#Name").val()) === "" || $.trim($("#Comments").val()) === "" || $.trim($("#Comments").val()) === "") {
            alert('Please insert all fields');
        }
        // 
        $("#default_block").show();
        var input_name = $("#Name").val();
        var input_name = $("#Email").val();
        var input_comment = $("#Comments").val();

        $('#default_block .que-block .author').html(input_name);
        $('#default_block .que-block .comment').html(input_comment);

        // Display Date
        // var myDate = new Date();
        // var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + myDate.getFullYear();
        // $('#default_block .que-block .timestamp').text(displayDate);

        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
    
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        $('#result').text('Sending data...');
    
        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxsnZmBN13aS9kiQte-LZiDfsUnQnFIJ1aCaYVJLrr8UyRegGPw/exec",
            type: "post",
            data: serializedData
        });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            //$('#result').html('<a href="https://docs.google.com/spreadsheets/d/10tt64TiALYhPMqR2fh9JzkuhxW7oC0rXXPb_pmJ7HAY/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
            $('#result').html('<span class="success">Success</span>');
            console.log("Hooray, it worked!");
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
    
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });

        $('#foo').find('input, textarea').val('');
    
        // prevent default posting of form
        event.preventDefault();
    });
});