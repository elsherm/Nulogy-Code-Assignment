<html>
<body>

<p> 
The global function (calculator) returns price:
</p>

<p id="calculator"></p>
<script>
// Global variables for function to define fixed markup rates

var markup = [];
markup["flat"]=0.05;			// Flat Markup Rate
markup["worker"]=0.012;			// Worker Markup Rate
markup["pharma"]=0.075;			// Pharamcutical packaging Markup Rate
markup["food"]=0.13;			// Food packaging Markup Rate
markup["electonics"]=0.02;      // Electronics packaging Markup Rate

function calculator(price, workers, industry) {    // Calculator function
  
  var markup_price, worker_markup_price, total_markup; 
  /* Defining 3 temporary variables for price with Flat Markup,
     Price with number of workers markup, and
     Price based on the industry
  */
  
  if (isNumeric(price) && isNumeric(workers) && markup[industry])
  { // Statement to check price and number of workers are numeric, and industry exists in definition
  
  markup_price = price + price*markup["flat"];  // Flat Markup Calculation
  
  worker_markup_price = markup_price + price*workers*markup["worker"]; 
  // Calculation with workers markup
  
  total_markup=worker_markup_price + worker_markup_price*markup[industry];
  // Total markup with the industry markup included
  
  return total_markup;
   }
   else if (isNumeric(price) && isNumeric(workers) && !markup[industry])
   {  // statement to check price, number of workers and different industry than what is defined
  markup_price = price + price*markup["flat"];  // Flat Markup Calculation
  
  total_markup = markup_price + markup_price*workers*markup["worker"]; 
  // Total markup with the industry markup included
  
  return total_markup;
   }
   else {
   return "please check your inputs again";
   }
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
    }

document.getElementById("calculator").innerHTML = calculator(1299.99,3,"food");  // line to run the calculator function with the inputs
</script>
