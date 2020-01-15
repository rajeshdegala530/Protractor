$("#addhero-form").submit(function (event) {
    $("#addheroalert").addClass("hide")

    if ($("#heroInput").val() == "") {
        $("#addheroalert").removeClass("hide")
        $("#addheroalert").text("You didn't enter anything!")
    } else {
        $("#hero-list").append("<li class='list-group-item'>" + $("#heroInput").val() + "</li>")
        $("#heroInput").val("")
    }

    event.preventDefault();
});

$("#vote-form").submit(function (event) {

    var movie1votes = $("#movieVotes1").text()
    var movie2votes = $("#movieVotes2").text()
    var movie3votes = $("#movieVotes3").text()
    var movie4votes = $("#movieVotes4").text()
    var movie5votes = $("#movieVotes5").text()

    $("#vote-form").addClass("hide")
    $("#vote-alert").removeClass("hide")

    if ($("#heroMovieRadio1").is(":checked")) {
        movie1votes = parseInt(movie1votes) + 1
        $("#movieVotes1").text(movie1votes)
    } else if ($("#heroMovieRadio2").is(":checked")) {
        movie2votes = parseInt(movie2votes) + 1
        $("#movieVotes2").text(movie2votes)
    }
    else if ($("#heroMovieRadio3").is(":checked")) {
        movie3votes = parseInt(movie3votes) + 1
        $("#movieVotes3").text(movie3votes)
    }
    else if ($("#heroMovieRadio4").is(":checked")) {
        movie4votes = parseInt(movie4votes) + 1
        $("#movieVotes4").text(movie4votes)
    }
    else if ($("#heroMovieRadio5").is(":checked")) {
        movie5votes = parseInt(movie5votes) + 1
        $("#movieVotes5").text(movie5votes)
    }

    event.preventDefault();
});

$("#search-form").submit(function (event) {


    if ($("#search-box").val() == "") {
        alert("Sorry!!.Please try something else")
    } else if ($("#search-box").val().toLowerCase() == "wolverine") {
        alert("Wolverine is awesome")
    } else {
        alert("Your search for " + $("#search-box").val() + " returned 0 results. Try something else.")
    } event.preventDefault();
});

$("#form-login").submit(function (event) {
    $("#login-alert").addClass("hide")



    if ($("#loginemail").val() == "" || $("#loginpassword").val() == "") {
        $("#login-alert").removeClass("hide")
    }
    else {
        if ($("#rememberme").is(":checked")) {
            var email = $("#loginemail").text()
            var password = $("#loginpassword").text()
        }
        else {
            $("#loginpassword").val("")
            $("#loginemail").val("")

        }
        $("#overlay").addClass("hide")
    }
    event.preventDefault();
});

function logout() {
    $("#overlay").removeClass("hide")
    $("#loginemail").val(email)
    $("#login-alert").addClass("hide")


}