// card-1
function clickEven1(){
    const elementsText = getElements('headingText1');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise1'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-2
function clickEven2(){
    const elementsText = getElements('headingText2');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise2'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-3
function clickEven3(){
    const elementsText = getElements('headingText3');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise3'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-4
function clickEven4(){
    const elementsText = getElements('headingText4');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise4'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-5
function clickEven5(){
    const elementsText = getElements('headingText5');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise5'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-6
function clickEven6(){
    const elementsText = getElements('headingText6');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise6'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-7
function clickEven7(){
    const elementsText = getElements('headingText7');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise7'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-8
function clickEven8(){
    const elementsText = getElements('headingText8');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise8'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}
// card-8
function clickEven9(){
    const elementsText = getElements('headingText9');
    showHeadingText('showHeading', elementsText);
    const cardPrise = getElementPrise('cardPrise9'); 
    const totalPrise = getElementPrise('totalPrise'); 
    let sum = cardPrise + totalPrise ;
    display('totalPrise', sum.toFixed(2));
    removeAtribute()
}

document.getElementById('applyBtn').addEventListener('click',function(){
    const inputtext = document.getElementById('inputCoupon');
    const input1 = inputtext.value;
    inputtext.value='';
        if(input1 == 'SELL200'){
            const totalAmount = getElementPrise('totalPrise')
            const discount = getElementPrise('discount');
            const total = getElementPrise('total');
            
            const discountCal = (totalAmount / 100)*20;
            display('discount', discountCal.toFixed(2))
            
            const totalCal = totalAmount - discountCal ;
            display('total', totalCal.toFixed(2))

        }else{
            alert('invalid coupon code');
        }
     })

     function gohome() {
        window.location.href = "index.html";
    }
    


/*===================================================
                // COMMON FUNCTION 
===================================================*/

// get elements Text 
function getElements(getElement){
    const getElements = document.getElementById(getElement);
    const getText = getElements.innerText;
    return getText ;
}


// get Elements Prise 
function getElementPrise(PriseId){
    const totalPrise = document.getElementById(PriseId);
    const prise1 = totalPrise.innerText ;
    const prise2 = parseFloat(prise1)
    return prise2 ;
}


function showHeadingText(showplaseId, text){
    const showHeading =document.getElementById(showplaseId);
    const count = showHeading.childElementCount;
    const p = document.createElement('p');
    p.innerHTML =` ${count+1} ${text}`;
    showHeading.appendChild(p);
}

// display 
function display(whereId, whatId){
    const displayPlase = document.getElementById(whereId);
    displayPlase.innerText = whatId ;
}

// remove btn 
function removeAtribute(){
    const totalAmount  = getElementPrise('totalPrise');
    if(totalAmount > 0){
      const btn =  document.getElementById('purchaseBtn').removeAttribute('disabled');

    }
    if(totalAmount >= 200 ){
        document.getElementById('applyBtn').removeAttribute('disabled');
    }
}


