
    // This .on("click") function will trigger the AJAX Call
  $("#find-city").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var cityName = $("#city-input").val();

    // Here we construct our URL
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=7d5b8bfa6cf34723bc885e549d3a2702";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#weather-view").text(JSON.stringify(response));
    });

    // -----------------------------------------------------------------------

  });


  
