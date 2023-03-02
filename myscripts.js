  var toggle = false;
  
  function hideShow(){
  if (toggle === false){
  toggle = true;
  document.getElementById("calculator").style.display = "none";
  document.getElementById("calc-button").innerHTML = "Show Fee Calculator";
  } else if (toggle === true){
  toggle = false;
  document.getElementById("calculator").style.display = "block";
  document.getElementById("calc-button").innerHTML = "Hide Fee Calculator";
  }
    console.log(toggle);
  }

		function overallCost(amount){
    if (amount <= 0){
    	return 0;
    } else {
    	if (amount <= 5000 && amount > 0){
      return 500;
      } else if (amount >= 5000 && amount <= 10000){
      return 1000;
      } else if (amount >= 10000 && amount <= 20000){
      return 2000;
      } else if (amount >= 20000 && amount <= 30000){
      return 3000;
      } else if (amount >= 30000 && amount <= 40000){
      return 4000;
      } else {
      return 5000;
      }
      }
    };
    
    function setOutput(val1, val2){
    if ((val1 === "") | val2 === ""){
    return 0;
    }
    return parseInt(val2) - parseInt(val1);
    };

    // put in this function because you want to wait until the page loads
      document.getElementById("btn").onclick = function(){

        // grab input from input 1 and input 2
        var val1 = document.getElementById("initial").value;
        var val2 = document.getElementById("negotiated").value;
        var val3 =setOutput(val1, val2)
        

        // set value to input 3
        document.getElementById("calculated-value").innerHTML = "Cost of Service: $"+overallCost(val3);
      };

