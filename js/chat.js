  $(document).ready(function () {
    var counter = 0;
    var $input = $("textarea#input");

    $("#add").click(function () {
        if ($input.val().length == "" ) {
        alert("Empty message? Seriously?");
        }
        else {
        counter++;
        //   alert("clicked");

        $text = $input.val();

        $colorize = $("<button>")
            .text("Colorize")
            .append("</button>")
            .addClass("colorize")
            .click(function () {
                $(this).siblings("textarea").toggleClass("color");

            });

        $remove = $("<a>")
            .attr("href", "#")
            .text("Remove")
            .addClass("remove")
            .click(function () {
                $(this).parent().toggle();
            });

        $("#messages").prepend(
            $("<div>").append($input.clone()
            .attr("id", "newdiv" + counter)
            .addClass("message")
            .text($text)
            .after("<br>")
            .after($remove)
            .after($colorize)
        ).prepend("<hr>"));

            $input.val("");

             }

    });
});
