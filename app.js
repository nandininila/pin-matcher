document.getElementById('generateBtn').addEventListener('click', function () {
    let generateInput = document.getElementById('generateInput');
    let randomNum = Math.random() * 9999;
    //let roundNum = Math.round(randomNum);

    //majhe majhe 3ta number generate kore tai condition ta dewa hoyeche
    if (randomNum > 999) {
        //parseInt korle fraction (dosomik) number show kore na
        randomNum = parseInt(randomNum);
        generateInput.value = randomNum;
    }
})

//Submit section
function click(id, BtnNum) {
    document.getElementById(id).value = document.getElementById(id).value + BtnNum;
}

document.getElementById('Btn0').addEventListener('click', function () {
    click('submitInput', 0);
})

document.getElementById('Btn1').addEventListener('click', function () {
    click('submitInput', 1);
})

document.getElementById('Btn2').addEventListener('click', function () {
    click('submitInput', 2);
})

document.getElementById('Btn3').addEventListener('click', function () {
    click('submitInput', 3);
})

document.getElementById('Btn4').addEventListener('click', function () {
    click('submitInput', 4);
})

document.getElementById('Btn5').addEventListener('click', function () {
    click('submitInput', 5);
})

document.getElementById('Btn6').addEventListener('click', function () {
    click('submitInput', 6);
})

document.getElementById('Btn7').addEventListener('click', function () {
    click('submitInput', 7);
})

document.getElementById('Btn8').addEventListener('click', function () {
    click('submitInput', 8);
})

document.getElementById('Btn9').addEventListener('click', function () {
    click('submitInput', 9);
})

document.getElementById('BtnC').addEventListener('click', function () {
    document.getElementById('submitInput').value = "";
})

document.getElementById('BtnLessthan').addEventListener('click', function () {
    let submitInput = document.getElementById('submitInput');
    submitInput.value = submitInput.value.substr(0, submitInput.value.length-1);
    //substr = substring (remove kora)
    //substr(jeta remove korte chacchi tar length (position), tar length nai (mane -1) kore dibe
})



//Submit Button
submitBtn.addEventListener('click', function () {
    
    if (generateInput.value == "" && submitInput.value == "") {
        document.getElementById('notifyMatch').style.display = 'none';
        document.getElementById('notifyDontMatch').style.display = 'none';
    }

    else if (generateInput.value == submitInput.value && generateInput.value != "") {
        document.getElementById('notifyMatch').style.display = 'block';
        document.getElementById('notifyDontMatch').style.display = 'none';
    }

    else {
        document.getElementById('notifyDontMatch').style.display = 'block';
        document.getElementById('notifyMatch').style.display = 'none';
    }
    
    let tryTime = parseInt((document.getElementById('tryTime').innerText));

    if (generateInput.value != submitInput.value && generateInput.value != "") {
        document.getElementById('tryTime').innerText = tryTime - 1; 
    }

    if (document.getElementById('tryTime').innerText == 0) {
        submitBtn.disabled = true;
        submitBtn.style.opacity+=0.6;
    }
})
