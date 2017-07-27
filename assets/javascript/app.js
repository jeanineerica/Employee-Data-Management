var config = {
    apiKey: "AIzaSyB-7aaTYkr2MvHYPZHftX6NHF6nKE18c9g",
    authDomain: "employeedatabase-3b9dd.firebaseapp.com",
    databaseURL: "https://employeedatabase-3b9dd.firebaseio.com",
    projectId: "employeedatabase-3b9dd",
    storageBucket: "",
    messagingSenderId: "335945791762"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

 // Create a variable to reference the database
    var database = firebase.database();

    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!

      // Code in the logic for storing and retrieving the most recent user.
      var name = $(this).attr("name-input");
      var email = $(this).attr("email-input");
      var age = $(this).attr("age-input");
      var comment = $(this).attr("comment-input");

      database.ref().push({ //set method is what saves the data in the database variable, ref() references to the root since () is empty; .set saves at the root of the database
        name: name,
        email: email,
        age: age,
        comment: comment 
      });
      
      // Don't forget to handle the "initial load"
      $("#name-display").html(name);
      $("#email-display").html(email);
      $("#age-display").html(age);
      $("#comment-display").html(comment);


    });


    // Create Firebase "watcher" Hint: .on("value")
    database.ref().on("value", function(snapshot) { //value event: when the value changes, the event is going to run
      console.log(snapshot.val()); //this will log the entire object
      
      var name = snapshot.val().name;
      var email = snapshot.val().email;
      var age = snapshot.val().age;
      var comment = snapshot.val().comment;
      
      $("#name-display").html(name);
      $("#email-display").html(email);
      $("#age-display").html(age);
      $("#comment-display").html(comment);

    }, 

    // Create Error Handling
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });