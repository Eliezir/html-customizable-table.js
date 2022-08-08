<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <div id="main">
    <div class = "configs">
        <div class="positions"><h1 id="L">L1</h1><h1 id="C">C1</h1></div>
        <hr>
        <div class="setas">
        <i id="up" class="fa-solid fa-circle-arrow-up"></i>
        <div class="divSetas"><i  id="left"class=" fa-solid fa-circle-arrow-left"></i><i  id="right" class="fa-solid fa-circle-arrow-right"></i></div>
        <i  id="down" class="fa-solid fa-circle-arrow-down"></i>
    <div class="radioBtn">
        <p>Editar por:</p>
        <div>
         <div><input type="radio" id="td" name="direction" class="form-check-input" value="Td" checked>
          <label for="td">Célula</label></div>
          <div><input type="radio" id="tr" name="direction" class="form-check-input" value="Tr">
          <label for="tr">Linha</label></div>
          <div><input type="radio" id="col" name="direction" class="form-check-input" value="Col">
          <label for="col">Coluna</label></div></div>
    </div>        
    </div>
        <hr>
        <div class="editTd">
        <div class="texto">
            <div class="textBtns">
                <label class="input-text">
                    <span>Texto</span>
            <input type="text" id="textoTd" name="textoTd">
            <div>
            <button type="button" id="edit"><i class="fa-solid fa-pencil"></i></button>
            <button type="button" id="delete"><i class="fa-solid fa-eraser"></i></button></div></div>
        </div>
        <hr> 
        <div class="cor">
            <div class="color-bar">
            <label for="colorTd">Cor</label>
            <input type="color" id="colorTd" name="colorTd" value="#6320ee";></div>
            <div class="color-btn"><button type="button" id="paint">   <i class="fa-solid fa-fill-drip"></i></button></div>
            </div></div>
            <hr>
            <div class="donwload">
                <button type="button" id="donwload">BAIXAR</button>
            </div>
        </div>
         
        </div>
        <div class="cores"></div>
    </div></div>
   <script src="index.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" integrity="sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>   
</body>
</html>

