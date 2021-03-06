$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevoured = {
            devoured: true
        };

            $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
