  $(document).ready(function () {
      var counter = 0;
      var $input = $("textarea#input");

 $colorize = $(".colorize");
              $colorize.click(function () {
                  $(this).siblings("textarea").toggleClass("color");
              });

      $("#add").click(function () {

          if ($input.val().length == "") {
              alert("Empty message? Seriously?");
          } else {

              counter++;

              $text = $input.val();

              $remove = $(".removeOff");

              $("#messages").prepend(
                  $("#messagebox")
                    .clone()
                    .attr("id", "messagebox"+counter)
                    );




              $input.val("");

          }

      });
  });
