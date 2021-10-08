//************** Declaración y asignación de variables. ***************

//Creando variables que contienen elementos HTML
var lblNumero = document.getElementById("lbl-numero")
var lblSigno = document.getElementById("lbl-signo")
var txtNumero = document.getElementById("txt-numero")
var btnsuma = document.getElementById("btn-suma")
var btnresta = document.getElementById("btn-resta")
var btnmulti = document.getElementById("btn-multi")
var btndivi = document.getElementById("btn-divi")
var btnlog = document.getElementById("btn-log")
var btnraiz = document.getElementById("btn-raiz")
var btncuadrado = document.getElementById("btn-cuadrado")
var btnporcentaje = document.getElementById("btn-porcentaje")
var btnclear = document.getElementById("btn-clear")
var btnIgual = document.getElementById("btn-igual")
var btnin = document.getElementById("btn-in")
var btnans = document.getElementById("btn-ans")
var btnac = document.getElementById("btn-ac")
var btnclear = document.getElementById("btn-clear")
var btnpunto = document.getElementById("btn-punto")
var btn0 = document.getElementById("btn-0")
var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var btn6 = document.getElementById("btn-6")
var btn7 = document.getElementById("btn-7")
var btn8 = document.getElementById("btn-8")
var btn9 = document.getElementById("btn-9")


//Variables internas
var num1, num2 = 0
var ans = 0
var signo = ""

txtNumero.value = ""

//********Código de ejecución********//
console.log("*********")

//******* ESCUCHA DE FUNCIONES Y METODOS EN EVENTOS *********//

btn0.addEventListener('click',selecboton)
btn1.addEventListener('click',selecboton)
btn2.addEventListener('click',selecboton)
btn3.addEventListener('click',selecboton)
btn4.addEventListener('click',selecboton)
btn5.addEventListener('click',selecboton)
btn6.addEventListener('click',selecboton)
btn7.addEventListener('click',selecboton)
btn8.addEventListener('click',selecboton)
btn9.addEventListener('click',selecboton)
btnpunto.addEventListener('click',selecboton)

btnsuma.addEventListener('click',selectorOperacion)
btnresta.addEventListener('click',selectorOperacion)
btndivi.addEventListener('click',selectorOperacion)
btnmulti.addEventListener('click',selectorOperacion)
btncuadrado.addEventListener('click',selectorOperacion)
btnporcentaje.addEventListener('click',selectorOperacion)
btnraiz.addEventListener('click',selectorOperacion)
btnlog.addEventListener('click',selectorOperacion)
btnin.addEventListener('click', selectorOperacion)

btnclear.addEventListener('click',borrarelemento)
btnIgual.addEventListener('click',realizarOperacion)
btnans.addEventListener('click',respuesta)
btnac.addEventListener('click',borrartodo)


//***************** METODOS Y FUNCIONES *********************//
// Acreditación funciones log, In y Base 10: Profe Edson :)//

function realizarOperacion(){
  num2 = parseFloat(txtNumero.value)
  switch (signo) {
     
    case "+":
      {
      console.log(parseInt(btn1.value)+parseInt(btn4.value))
      console.log(num1+num2)
      ans = (num1+num2); txtNumero.value = ans
      break
      }
      
    case "-":
      {
      console.log(parseInt(btn1.value)-parseInt(btn4.value))
      console.log(num1-num2)
      ans = (num1-num2); txtNumero.value = ans
      break
      }
    
    case "x":
      {
      console.log(parseInt(btn1.value)*parseInt(btn4.value))
      console.log(num1*num2)
      ans = (num1*num2); txtNumero.value = ans
      break
      }
      
    case "/":
      {
      console.log(parseInt(btn1.value)/parseInt(btn4.value))
      console.log(num1/num2)
      ans = (num1/num2); txtNumero.value = ans
      break
      }
      
    case "x²":
      {
      console.log(parseInt(num1.value)*parseInt(num1.value))
      console.log(num1*num1)
      ans= (num1*num1); txtNumero.value = ans
      break
      }
    
      //* fuente: StackOverflow*//
    case "%":
      {
      console.log(parseInt(num1.value)/100)
      console.log(num1/100)
      ans = (num1/100); txtNumero.value = ans
      break
      }
    
      //* fuente: StackOverflow*//
    case "√":
      {
      console.log(Math.sqrt(parseInt(num1.value)))
      console.log(Math.sqrt(num1))
      ans = Math.sqrt(num1); txtNumero.value = ans
      break
      } 
      
    case "log":
      {
      console.log(Math.log10(parseInt(num1.value)))
      console.log(Math.log10(num1))
      ans = (Math.log10(num1)); txtNumero.value = ans
      break
      }
      
      //* fuente: StackOverflow*//
    case "In":
      {
      console.log(Math.log(parseInt(num1.value)))
      console.log(Math.log(num1))
      ans = Math.log(num1); txtNumero.value = ans
      break
      }
      
    default:
      console.log("no hay signo seleccionado")
      break
  }
}

function selectorOperacion(){
  signo = this.value
  lblSigno.innerHTML = signo
  num1 = parseFloat(txtNumero.value)
  console.log(num1)
  txtNumero.value = ""
}

function selecboton(){
  console.log("Click correcto")
  txtNumero.value = txtNumero.value + this.value
}

function borrartodo(){
  lblSigno.innerHTML = ""
  txtNumero.value = ""
}

function respuesta(){
  txtNumero.value = ans
  ans = num1
}

function borrarelemento(){
  txtNumero.value = txtNumero.value.substring(0, txtNumero.value.length - 1)
}