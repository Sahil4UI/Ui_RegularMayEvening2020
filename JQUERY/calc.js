$(document).ready(function()

{
   
    $("button").click(function()
    {
        var f_num = $("#box1").val();
        var s_num = $("#box2").val();
        var opr =  $(this).html();
        var exp = f_num + opr + s_num;
        var result = eval(exp);
        $(".result").html(result);
  
    });
    


});