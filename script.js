
        function drinkingAge() {
            let age = document.getElementById("user-age").value;
            let canDrink = (age < 21) ? "No drink":"Yes drink";
            document.getElementById("verdict").innerHTML = canDrink;
            // console.log("user age: " + age)
            console.log("hi there from drinking form")
          }
        
          function myFunction() {
            document.getElementById("demo").innerHTML = "Hello World";
            console.log("hello")
          }

  function swap() {
    document.getElementById("lake").style.display = "none"
    document.getElementById("city").style.display = "inline"
    document.getElementById("password").type = "text"
  }

  function swap2() {
    document.getElementById("lake").style.display = "inline"
    document.getElementById("city").style.display = "none"
    document.getElementById("password").type = "password"

  }