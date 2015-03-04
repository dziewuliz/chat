$(document).ready(function () {
    var counter = 0;
    var $input = $("textarea#input");

    $(".colorize").click(function () {
        $(this).prevAll("textarea").toggleClass("color");
    });

    $(".remove").click(function () {
        var $messagebox = $(this).parent(".messagebox");
        if ($messagebox.attr("id") !== "messagebox") {
            $messagebox.remove();
        }
    });

    $("#add").click(function () {

        counter++;

        var $cloned = $("#messagebox").clone(true).attr("id", "messagebox" + counter);
        var $eachmessagebox = $("#messagebox" + counter);

        $("#messages").prepend($cloned);
        $("#messagebox" + counter).addClass("topmargin").children("textarea").text('');
        $("#messagebox" + counter).prepend("<hr>");
        $input.val("");
        $input.removeClass("color");
    });
});
