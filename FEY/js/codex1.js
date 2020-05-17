
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");


    
  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less"; 
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");


    
  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
  }
}

function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");


    
  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less"; 
    moreText3.style.display = "inline";
  }
}

function myFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("myBtn4");


    
  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Read more"; 
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less"; 
    moreText4.style.display = "inline";
  }
}

function myFunction5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("more5");
  var btnText5 = document.getElementById("myBtn5");


    
  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "Read more"; 
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "Read less"; 
    moreText5.style.display = "inline";
  }
}

function myFunction6() {
  var dots6 = document.getElementById("dots6");
  var moreText6 = document.getElementById("more6");
  var btnText6 = document.getElementById("myBtn6");


    
  if (dots6.style.display === "none") {
    dots6.style.display = "inline";
    btnText6.innerHTML = "Read more"; 
    moreText6.style.display = "none";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = "Read less"; 
    moreText6.style.display = "inline";
  }
}

function myFunction7() {
  var dots7 = document.getElementById("dots7");
  var moreText7 = document.getElementById("more7");
  var btnText7 = document.getElementById("myBtn7");


    
  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "Read more"; 
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "Read less"; 
    moreText7.style.display = "inline";
  }
}

function myFunction8() {
  var dots8 = document.getElementById("dots8");
  var moreText8 = document.getElementById("more8");
  var btnText8 = document.getElementById("myBtn8");


    
  if (dots8.style.display === "none") {
    dots8.style.display = "inline";
    btnText8.innerHTML = "Read more"; 
    moreText8.style.display = "none";
  } else {
    dots8.style.display = "none";
    btnText8.innerHTML = "Read less"; 
    moreText8.style.display = "inline";
  }
}

function myFunction9() {
  var dots9 = document.getElementById("dots9");
  var moreText9 = document.getElementById("more9");
  var btnText9 = document.getElementById("myBtn9");


    
  if (dots9.style.display === "none") {
    dots9.style.display = "inline";
    btnText9.innerHTML = "Read more"; 
    moreText9.style.display = "none";
  } else {
    dots9.style.display = "none";
    btnText9.innerHTML = "Read less"; 
    moreText9.style.display = "inline";
  }
}

function myFunction10() {
  var dots10 = document.getElementById("dots10");
  var moreText10 = document.getElementById("more10");
  var btnText10 = document.getElementById("myBtn10");


    
  if (dots10.style.display === "none") {
    dots10.style.display = "inline";
    btnText10.innerHTML = "Read more"; 
    moreText10.style.display = "none";
  } else {
    dots10.style.display = "none";
    btnText10.innerHTML = "Read less"; 
    moreText10.style.display = "inline";
  }
}

function myFunction11() {
  var dots11 = document.getElementById("dots11");
  var moreText11 = document.getElementById("more11");
  var btnText11 = document.getElementById("myBtn11");


    
  if (dots11.style.display === "none") {
    dots11.style.display = "inline";
    btnText11.innerHTML = "Read more"; 
    moreText11.style.display = "none";
  } else {
    dots11.style.display = "none";
    btnText11.innerHTML = "Read less"; 
    moreText11.style.display = "inline";
  }
}

function myFunction12() {
  var dots12 = document.getElementById("dots12");
  var moreText12 = document.getElementById("more12");
  var btnText12 = document.getElementById("myBtn12");


    
  if (dots12.style.display === "none") {
    dots12.style.display = "inline";
    btnText12.innerHTML = "Read more"; 
    moreText12.style.display = "none";
  } else {
    dots12.style.display = "none";
    btnText12.innerHTML = "Read less"; 
    moreText12.style.display = "inline";
  }
}

function myFunction13() {
  var dots13 = document.getElementById("dots13");
  var moreText13 = document.getElementById("more13");
  var btnText13 = document.getElementById("myBtn13");


    
  if (dots13.style.display === "none") {
    dots13.style.display = "inline";
    btnText13.innerHTML = "Read more"; 
    moreText13.style.display = "none";
  } else {
    dots13.style.display = "none";
    btnText13.innerHTML = "Read less"; 
    moreText13.style.display = "inline";
  }
}

function myFunction14() {
  var dots14 = document.getElementById("dots14");
  var moreText14 = document.getElementById("more14");
  var btnText14 = document.getElementById("myBtn14");


    
  if (dots14.style.display === "none") {
    dots14.style.display = "inline";
    btnText14.innerHTML = "Read more"; 
    moreText14.style.display = "none";
  } else {
    dots14.style.display = "none";
    btnText14.innerHTML = "Read less"; 
    moreText14.style.display = "inline";
  }
}

function myFunction15() {
  var dots15 = document.getElementById("dots15");
  var moreText15 = document.getElementById("more15");
  var btnText15 = document.getElementById("myBtn15");


    
  if (dots15.style.display === "none") {
    dots15.style.display = "inline";
    btnText15.innerHTML = "Read more"; 
    moreText15.style.display = "none";
  } else {
    dots15.style.display = "none";
    btnText15.innerHTML = "Read less"; 
    moreText15.style.display = "inline";
  }
}

function myFunction16() {
  var dots16 = document.getElementById("dots16");
  var moreText16 = document.getElementById("more16");
  var btnText16 = document.getElementById("myBtn16");


    
  if (dots16.style.display === "none") {
    dots16.style.display = "inline";
    btnText16.innerHTML = "Read more"; 
    moreText16.style.display = "none";
  } else {
    dots16.style.display = "none";
    btnText16.innerHTML = "Read less"; 
    moreText16.style.display = "inline";
  }
}

function myFunction17() {
  var dots17 = document.getElementById("dots17");
  var moreText17 = document.getElementById("more17");
  var btnText17 = document.getElementById("myBtn17");


    
  if (dots17.style.display === "none") {
    dots17.style.display = "inline";
    btnText17.innerHTML = "Read more"; 
    moreText17.style.display = "none";
  } else {
    dots17.style.display = "none";
    btnText17.innerHTML = "Read less"; 
    moreText17.style.display = "inline";
  }
}

function myFunction18() {
  var dots18 = document.getElementById("dots18");
  var moreText18 = document.getElementById("more18");
  var btnText18 = document.getElementById("myBtn18");


    
  if (dots18.style.display === "none") {
    dots18.style.display = "inline";
    btnText18.innerHTML = "Read more"; 
    moreText18.style.display = "none";
  } else {
    dots18.style.display = "none";
    btnText18.innerHTML = "Read less"; 
    moreText18.style.display = "inline";
  }
}

function myFunction19() {
  var dots19 = document.getElementById("dots19");
  var moreText19 = document.getElementById("more19");
  var btnText19 = document.getElementById("myBtn19");


    
  if (dots19.style.display === "none") {
    dots19.style.display = "inline";
    btnText19.innerHTML = "Read more"; 
    moreText19.style.display = "none";
  } else {
    dots19.style.display = "none";
    btnText19.innerHTML = "Read less"; 
    moreText19.style.display = "inline";
  }
}

function myFunction20() {
  var dots20 = document.getElementById("dots20");
  var moreText20 = document.getElementById("more20");
  var btnText20 = document.getElementById("myBtn20");


    
  if (dots20.style.display === "none") {
    dots20.style.display = "inline";
    btnText20.innerHTML = "Read more"; 
    moreText20.style.display = "none";
  } else {
    dots20.style.display = "none";
    btnText20.innerHTML = "Read less"; 
    moreText20.style.display = "inline";
  }
}

function myFunction21() {
  var dots21 = document.getElementById("dots21");
  var moreText21 = document.getElementById("more21");
  var btnText21 = document.getElementById("myBtn21");


    
  if (dots21.style.display === "none") {
    dots21.style.display = "inline";
    btnText21.innerHTML = "Read more"; 
    moreText21.style.display = "none";
  } else {
    dots21.style.display = "none";
    btnText21.innerHTML = "Read less"; 
    moreText21.style.display = "inline";
  }
}

function myFunction22() {
  var dots22 = document.getElementById("dots22");
  var moreText22 = document.getElementById("more22");
  var btnText22 = document.getElementById("myBtn22");


    
  if (dots22.style.display === "none") {
    dots22.style.display = "inline";
    btnText22.innerHTML = "Read more"; 
    moreText22.style.display = "none";
  } else {
    dots22.style.display = "none";
    btnText22.innerHTML = "Read less"; 
    moreText22.style.display = "inline";
  }
}

function myFunction23() {
  var dots23 = document.getElementById("dots23");
  var moreText23 = document.getElementById("more23");
  var btnText23 = document.getElementById("myBtn23");


    
  if (dots23.style.display === "none") {
    dots23.style.display = "inline";
    btnText23.innerHTML = "Read more"; 
    moreText23.style.display = "none";
  } else {
    dots23.style.display = "none";
    btnText23.innerHTML = "Read less"; 
    moreText23.style.display = "inline";
  }
}

function myFunction24() {
  var dots24 = document.getElementById("dots24");
  var moreText24 = document.getElementById("more24");
  var btnText24 = document.getElementById("myBtn24");


    
  if (dots24.style.display === "none") {
    dots24.style.display = "inline";
    btnText24.innerHTML = "Read more"; 
    moreText24.style.display = "none";
  } else {
    dots24.style.display = "none";
    btnText24.innerHTML = "Read less"; 
    moreText24.style.display = "inline";
  }
}

function myFunction25() {
  var dots25 = document.getElementById("dots25");
  var moreText25 = document.getElementById("more25");
  var btnText25 = document.getElementById("myBtn25");


    
  if (dots25.style.display === "none") {
    dots25.style.display = "inline";
    btnText25.innerHTML = "Read more"; 
    moreText25.style.display = "none";
  } else {
    dots25.style.display = "none";
    btnText25.innerHTML = "Read less"; 
    moreText25.style.display = "inline";
  }
}

function myFunction26() {
  var dots26 = document.getElementById("dots26");
  var moreText26 = document.getElementById("more26");
  var btnText26 = document.getElementById("myBtn26");


    
  if (dots26.style.display === "none") {
    dots26.style.display = "inline";
    btnText26.innerHTML = "Read more"; 
    moreText26.style.display = "none";
  } else {
    dots26.style.display = "none";
    btnText26.innerHTML = "Read less"; 
    moreText26.style.display = "inline";
  }
}

function myFunction27() {
  var dots27 = document.getElementById("dots27");
  var moreText27 = document.getElementById("more27");
  var btnText27 = document.getElementById("myBtn27");


    
  if (dots27.style.display === "none") {
    dots27.style.display = "inline";
    btnText27.innerHTML = "Read more"; 
    moreText27.style.display = "none";
  } else {
    dots27.style.display = "none";
    btnText27.innerHTML = "Read less"; 
    moreText27.style.display = "inline";
  }
}

function myFunction28() {
  var dots28 = document.getElementById("dots28");
  var moreText28 = document.getElementById("more28");
  var btnText28 = document.getElementById("myBtn28");


    
  if (dots28.style.display === "none") {
    dots28.style.display = "inline";
    btnText28.innerHTML = "Read more"; 
    moreText28.style.display = "none";
  } else {
    dots28.style.display = "none";
    btnText28.innerHTML = "Read less"; 
    moreText28.style.display = "inline";
  }
}

function myFunction29() {
  var dots29 = document.getElementById("dots29");
  var moreText29 = document.getElementById("more29");
  var btnText29 = document.getElementById("myBtn29");


    
  if (dots29.style.display === "none") {
    dots29.style.display = "inline";
    btnText29.innerHTML = "Read more"; 
    moreText29.style.display = "none";
  } else {
    dots29.style.display = "none";
    btnText29.innerHTML = "Read less"; 
    moreText29.style.display = "inline";
  }
}

function myFunction30() {
  var dots30 = document.getElementById("dots30");
  var moreText30 = document.getElementById("more30");
  var btnText30 = document.getElementById("myBtn30");


    
  if (dots30.style.display === "none") {
    dots30.style.display = "inline";
    btnText30.innerHTML = "Read more"; 
    moreText30.style.display = "none";
  } else {
    dots30.style.display = "none";
    btnText30.innerHTML = "Read less"; 
    moreText30.style.display = "inline";
  }
}











// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






