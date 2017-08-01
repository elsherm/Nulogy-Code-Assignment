# Nulogy-Code-Assignment
NuPack Calculator Code

# This code is for the NuPack Calculator assignment. The assignment description is as follows:

NuPack is responsible for taking existing products and repackaging them for sale
at electronic stores like Best Buy. Companies will phone up NuPack, explain the
process and NuPack needs to quickly give them an estimate of how much it will
cost. Different markups to the job:

- Without exception, there is a flat markup on all jobs of 5%
- For each person that needs to work on the job, there is a markup of 1.2%

Markups are also added depending on the types of materials involved:
- If pharmaceuticals are involved, there is an immediate 7.5% markup
For food, there is a 13% markup
- Electronics require a 2% markup
- Everything else, there is no markup

Another system calculates the base price depending on how many products
need to be repackaged. As such, the markup calculator should accept the initial
base price along with the different categories of markups and calculate a final
cost for a project.
The flat markup is calculated first and then all other markups are calculated on
top of the base price plus flat markup.

## Example 1:
Input: $1,299.99, 3 people, food
Output: $1,591.58
## Example 2:
Input: $5,432.00, 1 person, drugs
Output: $6,199.81
## Example 3:
Input: $12,456.95, 4 people, books
Output: $13,707.63

#Code Development
The code was developed on an online JavaScript editor (https://js.do/).
The code can be run on any javaScript Editor or on the Chrome browser under More Tools > Developer Tools > Console.

The inputs are required to be entered in the code in the last line: 

#Example line
document.getElementById("calculator").innerHTML = calculator(1299.99,3,"food");

The flat rates and markup are defined as Global Variables and should be changed if new rates or industries are added

The calculator function is divided into 3 sections:
1) The first section checks the input Statement to check price and number of workers are numeric, and industry exists in the Global Variable definition. The calculations for the first section are done as follows:
  
  markup_price = price + price*markup["flat"];  // Flat Markup Calculation
  
  worker_markup_price = markup_price + markup_price*workers*markup["worker"]; 
  // Calculation with workers markup
  
  total_markup=worker_markup_price + worker_markup_price*markup[industry];
  // Total markup with the industry markup included
  
2) The second section is for an industry where there is no markup charged for packaging. 
The calculations are as follows:
 markup_price = price + price*markup["flat"];  // Flat Markup Calculation
  
 total_markup = markup_price + markup_price*workers*markup["worker"]; 
  // Total markup with the industry markup included

3) The third section is to request that the inputs be checked as 1 or more could be wrong
 return "please check your inputs again";
 
 An isNumerica functions is also used to check if the first 2 inputs are numeric. Code used from:
 https://api.jquery.com/jQuery.isNumeric/ 
 https://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
