import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div` 

margin-top: 200px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, Times, serif;

.container{
width: 500px;
height: 600px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0,0.2);
padding:0 40px;
margin-left:820px;
border-radius: 20px 20px;
position: absolute;
}

.container h2{
    position: absolute;
    color: #133040;
}


.container a{
    position: absolute;
    color: #9c9c9c;
    margin-left: 350px;
    margin-top: 18px;
}

.formulario{
    width: 360px;
    height: 200px;
    margin-top: 100px;
    margin-left: 2px;
}

.input-amount{
    margin-top: 8px;
    width: 390px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 25px;
}

.inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding-left:5px;
    width: 100%;
    margin-top: 8px;
}
.icon{
    position: absolute;
    color: #133040;
    background-color: #E3F4FE;
    width: 55px;
    height:100%;
    
};
.input {
    padding-left: 30px; 
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
};

.inputs {
  display: flex;
  gap: 20px;
}

.input-group {
    margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.input-text {
    width: 150px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-left: 25px;
    margin-right: 10px;
}

label{
    color: #626262;
    word-wrap: break-word;
    margin-bottom: 5px;
    font-size: 18px;
}

.container2{
    position: absolute;
    width: 400px;
    height: 600px;
    background-color:#133040;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding:0 40px;
    margin-left:1300px;
    border-radius: 0px 20px 20px 90px;
    
}

.box{
    background-color: #0E2431;
    margin-top: 50px;
    border-radius: 8px;
    padding: 20px;
    position: absolute;
    width: 360px;
    height: 200px;
    margin-left: 2px;
   
    border-top: 3px  solid #D8DB34;
}
span{
    color: #D8DB34;
    font-weight: bold;
    font-size: 48px;
    margin-left: 5px;
    
}
h3{
    color: #fff;
    font-size: 25px;
    margin-left: 5px;
}
hr{
    border-color: #FBFBFB;
    margin-bottom: 20px;
    border-width: 0; 
	height: 1px;
	border-top-width: 1px;
}
p{
    margin-top: 10px;
    margin-left: 5px;
}
.container2 h2{
    color: #F9F9F9;
}
.container2 p{
    color: #D1D1D1;
}

.input-radio{
    padding-left: 30px;
    color: #133040;
    background-color: #E3F4FE;
    width: 20px;
    cursor: pointer;
}

.box-radio{
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 25px;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    accent-color: #D2DA27;
}
.box-radio label{
    margin-left: 10px;
    margin-top: 7px;
    font-size: 17px;
    font-weight: bold;
}

.box-radio:hover{
    border: 1px solid #D8DB34;
    background-color: #FAFAE0;
}

.button-calculate{
    background-color: #D8DB34;
    color: #133040;
    border: none;
    border-radius: 20px;
    width: 75%;
    height: 45px;
    margin-top: 30px;
    cursor: pointer;
    font-weight: bold;
}
.icon-wrapper{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
};



`

