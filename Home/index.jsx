import {Container} from './style'
import { Link } from 'react-router-dom'
import { IoLogoEuro } from "react-icons/io";
import { useState } from 'react'

function Home() {
  let [montgageAmount, setMontgageAmount] = useState('')
  let [montgageTerm, setMontgageTerm] = useState('')
  let [interestRate, setInterestRate] = useState('')
  let [type, setType] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [fullPayment, setFullPayment] = useState(0)
  function clearAll() {
    setMontgageAmount('')
    setMontgageTerm('')
    setInterestRate('')
    setType('')
  }
  const style={style: 'decimal', maximumFractionDigits: 2}

  function calculate() {
    let p = montgageAmount
    let n = montgageTerm
    let i = interestRate
    let t = type

    i = i / (12*100)
    n = n * 12
    console.log('taxa de juros', i)
    console.log('numero total de pagamentos', n)


    if(t === 'repayment'){
      const monthlyPaymentR = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      console.log('mensalidade', monthlyPaymentR)
      const fullPaymentR = monthlyPaymentR * n

      console.log('pagamento total', fullPaymentR)

      setFullPayment(fullPaymentR.toLocaleString( { currency: 'BRL'},{style: 'decimal', maximumFractionDigits: 2}))

      setMonthlyPayment(monthlyPaymentR.toLocaleString( { currency: 'BRL'},{style: 'decimal', maximumFractionDigits: 2}));

    }else if (t ==='interest-only'){

       const monthlyPaymentIO = (p*i)
       console.log('mensalidade', monthlyPaymentIO)

      const fullPaymentIO = monthlyPaymentIO * n
      setFullPayment(fullPaymentIO.toLocaleString( { currency: 'BRL'},{style: 'decimal', maximumFractionDigits: 2}));
      
      setMonthlyPayment(monthlyPaymentIO.toLocaleString( { currency: 'BRL'},{style: 'decimal', maximumFractionDigits: 2}));
    }
  }


  return (
   
  <Container>
   <div className='container'>
    <h2>Calculadora de hipoteca</h2>
   <a href="" onClick={clearAll}><p>Clear all</p></a> 

    <div className='formulario'>
      <label htmlFor="">Valor da hipoteca</label>
      <div className='inputContainer'>
        {/* <IoLogoEuro className='icon' /> */}
      <input type="text" placeholder='R$10.000' className='input' onChange={(e) => setMontgageAmount(e.target.value)} />
      </div>

      <div className="inputs">
        <div className='input-group'>
            <label htmlFor="">Prazo de hipoteca</label>
            <input type="text" placeholder='15'className='input-text'onChange={(e) => setMontgageTerm(e.target.value)}  />
        </div>

        <div className="input-group">
          <label htmlFor="">Taxa de juro</label>
          <input type="text" placeholder='15' className='input-text' onChange={(e) => setInterestRate(e.target.value)}/>
        </div>
      </div>

     
      <div className='radio-type'>
      <label htmlFor="">Tipo de hipoteca</label>
        <div className='box-radio'>
        <input type="radio" name="option" id="" className='input-radio' value="repayment" onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="" for="repayment">Reembolso</label>
        </div >
          <div className='box-radio' >
          <input type="radio" name="option" id="" className='input-radio' value="interest-only" onChange={(e) => setType(e.target.value)}/>
          <label htmlFor="" for="interest-only">Apenas juros</label>
          </div>
         
          <button className='button-calculate' onClick={calculate}>Calcular reembolso</button>
      </div>
      
    </div>
  </div>

    <div className='container2'>
       <h2>Your results</h2>
       <p>Seus resultados são baseados de acordo com as informações fornecidas</p>

       <div className='box'>
        <p>Seu pagamento mensal</p>
        <span>€{monthlyPayment}</span>
        <hr />
        <p>Total que você pagará no prazo </p>
        <h3>€{fullPayment}</h3>
        <h1></h1>
       </div>
    </div>
  </Container>
  
  )
}

export default Home
