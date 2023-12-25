let calculation = localStorage.getItem('calculation') || ' ';

    //Display the calculation when the page is first loads.
    displayCalculation();

    function updateCalculation(value){
      calculation+=value;

      displayCalculation();

      localStorage.setItem('calculator', calculator);
    }
    function displayCalculation(){
      document.querySelector('.js-calculation').innerHTML = calculation;
    }