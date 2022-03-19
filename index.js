//////////////////////////////////////////////
// display calculators////////////////////////

function displayCalc(params){
   let percent = document.querySelector('#percent')
   let imc = document.querySelector('#IMC')
   let temperature = document.querySelector('#temperature')

   switch(params){
      case 1:
         percent.classList.remove('d-none'); imc.classList.add('d-none'); temperature.classList.add('d-none')
         break;
      case 2:
         imc.classList.remove('d-none'); percent.classList.add('d-none'); temperature.classList.add('d-none')
         break;
      case 3:
         temperature.classList.remove('d-none'); imc.classList.add('d-none'); percent.classList.add('d-none')
         break;
      default:
         alert('Erro Inesperado, Contate o Desenvolvedor !')
         window.location.reload()    
   }

   document
      .querySelector('#tutorial-title')
         .classList.add('d-none')
}

///////////////////////////////////////////////////////////
// Class with methods for calculators //////////////////////

class Calculators{
   static percentCalculator(percent, number){
      return percent * number / 100
   }
   static imc_Calculator(weight, size){
      return weight / (size * size)
   }
   static celsiusForFahrenheit(celsius){
      return (celsius * 1.8) + 32
   }
}
/////////////////////////////////////////////////
//Functions calculators /////////////////////////

function percent(){
   let percentValue = document.querySelector('#percentValue').value
   let numberValue = document.querySelector('#numValue').value
   
   let showResult = document.querySelector('#result-percent')

   if(percentValue.length == 0 || numberValue.length == 0){
      alert('Algum campo está vazio')
      showResult.innerHTML = '<strong> Erro: Algum campo está vazio :/ </strong>' 
   }else{
      let result = Calculators.percentCalculator(percentValue, numberValue)
      showResult.innerHTML = `${percentValue}% De ${numberValue} é <strong>${result}</strong>` 
   }
}


function IMC(){
   let weightValue = document.querySelector('#weightValue').value
   let sizeValue = document.querySelector('#sizeValue').value

   let showImc = document.querySelector('#result-imc')
   let showResult = document.querySelector('#result-index')

   if(weightValue.lenght == 0 || sizeValue.length == 0){
      alert('Algum campo está vazio')
      showImc.innerHTML = '<strong> Erro: Algum campo está vazio :/ </strong>' 
      showResult.innerHTML = ""
   }else{
      let result = Calculators.imc_Calculator(weightValue, sizeValue)
      showImc.innerHTML = `Seu IMC é: ${result.toFixed(1)}`
         
         //show the classification of the imc
         if(result < 18.5){
            showResult.innerHTML = 'CLASSIFICAÇÃO: Abaixo do peso'
         }
         else if(result >= 18.5 && result <= 24.9){
            showResult.innerHTML = 'CLASSIFICAÇÃO: Peso Normal'
         }
         else if(result >= 25 && result <= 29.9){
            showResult.innerHTML = 'CLASSIFICAÇÃO: SobrePeso'
         }
         else if(result >= 30 && result <= 34.9){
            showResult.innerHTML = 'CLASSIFICAÇÃO: Obesidade Grau 1'
         }
         else if(result >= 35 && result <= 39.9){
            showResult.innerHTML = 'CLASSIFICAÇÃO: Obesidade Grau 2'
         }
         else if(result >= 40){
            showResult.innerHTML = 'CLASSIFICAÇÃO: Obesidade Grau 3'
         }
   }  
}

function temperature(){
   let celsiusValue = document.querySelector('#celsiusValue').value
   let showResult =  document.querySelector('#result-temperature')

   if(celsiusValue.length == 0){
      alert('Algum campo está vazio')
      showResult.innerHTML = '<strong> Erro: Algum campo está vazio :/ </strong>'
   }else{
      let result = Calculators.celsiusForFahrenheit(celsiusValue)
      showResult.innerHTML = `${celsiusValue} C° equivale a <strong>${result} F°</strong>`
   }
}









