

$(document).ready(function(){
    $("#submit").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
// Returns successful data submission message when the entered information is stored in database.
        var dataString = 'email='+ email + '&password='+ password;
        if(email==''||password=='')
        {
            alert("Please Fill All Fields");
        }
        else
        {
// AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "ajax-example.php",
                data: dataString,
                cache: false,
                success: function(result){
                    if(result!="success!"){
                    $("#result").innerHtml = result;
                    }
                    else{
                        alert("That's you signed in, chief!!");

                        var form = $('<form action="' + url + '" method="POST">' +
                            '<input type="text" name="api_url" value="home.php" />' +
                            '</form>');
                        $('body').append(form);
                        form.submit();
                        //$.session.set("user", ""+email);
                        //window.location.href = "http://bbhubapp.azurewebsites.net/Home.php";
                    }


                }
            });
        }
        return false;
    });
});