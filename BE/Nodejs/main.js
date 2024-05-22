
// Node package managers
// 1. NPM
// 2. Yarn
// 3. PNPM
// 4. NPX
// server.mjs
// import { createServer } from 'node:http';

const http = require('http');

const server = http.createServer((req, res) => {
   console.log('url: ', req.url)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <!-- <link rel="stylesheet" href="/FE/CSS/calculator.css"> -->
  
    <style>
      body {
    background-color: rgb(11, 23, 44);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
  .main {
    width: 350px;
    height: 380px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    background-color: rgb(11, 23, 44);
    /* border: 1px solid red; */
  }
  
  .calculator,
  input {
    width: 300px;
    height: 50px;
    font-size: 22px;
  
  }
  
  input {
  
    border: none;
    background-color: rgb(29, 29, 31);
    color: #fff;
    padding: 10px 20px;
    /* border: 1px solid red; */
  }
  
  .calculator-btns {
    height: 350px;
    width: 300px;
    background-color: rgb(29, 29, 31);
    padding: 10px 20px;
  }
  
  .btn-row {
  
    display: flex;
    gap: 10px;
  }
  
  .num-btn {
    background-color: #fff;
    color: #000;
    width: 60px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0px;
  }
  
  .reset,
  .equals {
    width: 130px;
    height: 40px;
  }
  
  .equals {
    background-color: red;
    color: #fff;
  }
  
  .del {
    background-color: rgb(29, 29, 31);
    color: #fff;
  }
  
  .mt-1 {
    margin-top: 10px;
  }
  
  button {
    /* box-shadow: 0 0 0 0.2rem rgb(241, 225, 225); */
    cursor: pointer;
    border-radius: 5px;
  }
  
  .card {
    border-radius: 10px;
    margin: 20px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    /* background-color: #fff; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
    </style>
   
    <!-- <script src="/JS/calculator.js"></script> -->
  
  <script>
    
  
  const captureValue = ( value) => { 
      let resultHTMl = document.getElementById('inputs_result');
      resultHTMl.value = resultHTMl.value + value;
  }
  
  function submit() { 
      let resultHTMl = document.getElementById('inputs_result');
      const value =   resultHTMl.value;
      const result = eval(value); 
      resultHTMl.value =result;
  }
  
  function deleteValue() {
      let resultHTMl = document.getElementById('inputs_result');
   const value =   resultHTMl.value;
  const leftValues= value.substring(0,resultHTMl.value.length - 1); 
  resultHTMl.value = leftValues;
  
  }
  
  const resetInput = () => { 
      let resultHTMl = document.getElementById('inputs_result');
      resultHTMl.value = ''; 
  }
  //97979
  
  
   
  </script>
  </head>
  
  <body>
  
    <div class="card main ">
      <div class="calculator-input">
        <input type="text" id="inputs_result">
      </div>
      <div class="calculator-btns">
        <div class="btn-row">
          <button class="num-btn" onclick="captureValue(7)">7</button>
          <button class="num-btn" onclick="captureValue(8)"> 8</button>
          <button class="num-btn" onclick="captureValue(9)">9</button>
          <button class="num-btn del" onclick="deleteValue()">DEL</button>
        </div>
  
        <div class="btn-row">
          <button class="num-btn" onclick="captureValue(4)">4</button>
          <button class="num-btn" onclick="captureValue(5)">5</button>
          <button class="num-btn" onclick="captureValue(6)">6</button>
          <button class="num-btn " onclick="captureValue('+')">+</button>
        </div>
        <div class="btn-row">
          <button class="num-btn" onclick="captureValue(1)">1</button>
          <button class="num-btn" onclick="captureValue(2)">2</button>
          <button class="num-btn" onclick="captureValue(3)">3</button>
          <button class="num-btn " onclick="captureValue('-')">-</button>
        </div>
        <div class="btn-row">
          <button class="num-btn" onclick="captureValue('.')">.</button>
          <button class="num-btn" onclick="captureValue(0)">0</button>
          <button class="num-btn" onclick="captureValue('/')">/</button>
          <button class="num-btn" onclick="captureValue('*')">x</button>
        </div>
        <div class="btn-row mt-1">
          <button class="reset del" onclick="resetInput()">RESET</button>
          <button class="equals" onclick="submit()">=</button>
  
        </div>
      </div>
    </div>
  
  
  </body>
  
  </html>\n`);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
