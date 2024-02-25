//recommender quiz
//variables for the results, should be hidden at the beginning
var salamancaDesc = document.getElementById("salamanca");
var dunhuangDesc = document.getElementById("dunhuang");
var zakopaneDesc = document.getElementById("zakopane");
var krabiDesc = document.getElementById("krabi");
var assisiDesc = document.getElementById("assisi");
var rabatDesc = document.getElementById("rabat");
var tsarabanjinaDesc = document.getElementById("tsarabanjina");
var mooreaDesc = document.getElementById("moorea");
var hakoneDesc = document.getElementById("hakone");
var puertoVallartaDesc = document.getElementById("puertoVallarta");
salamancaDesc.style.display = "none";
dunhuangDesc.style.display = "none";
zakopaneDesc.style.display = "none";
krabiDesc.style.display = "none";
assisiDesc.style.display = "none";
rabatDesc.style.display = "none";
tsarabanjinaDesc.style.display = "none";
mooreaDesc.style.display = "none";
hakoneDesc.style.display = "none";
puertoVallartaDesc.style.display = "none";

//hides result
var showResult = document.getElementById("showResult");
showResult.addEventListener("click", displayResult);

//Counter Variables for each of the cities, used to determine city with the most interest
var salamancaCounter = 0;
var dunhuangCounter = 0;
var zakopaneCounter = 0;
var krabiTownCounter = 0;
var assisiCounter = 0;
var rabatCounter = 0;
var tsarabanjinaCounter = 0;
var mooreaCounter = 0;
var hakoneCounter = 0;
var puertoVallartaCounter = 0;


//Keeps track of when all questions have been answered so result is not revealed early
var questionsAnswered = 0;

//Q1
var q1Y = document.getElementById("q1Y");
var q1N = document.getElementById("q1N");
q1Y.addEventListener("click", counterPlus("assisi"),counterPlus("rabat"), counterPlus("dunhuang"), counterPlus("salamanca"));
q1Y.addEventListener("click", disableQ1);
q1N.addEventListener("click", disableQ1);

function disableQ1()
{
    q1Y.disabled = true;
    q1N.disabled = true;
}

//Q2
var q2Y = document.getElementById("q2Y");
var q2N = document.getElementById("q2N");
q2Y.addEventListener("click", counterPlus("assisi"),counterPlus("rabat"), counterPlus("salamanca"));
q2Y.addEventListener("click", disableQ2);
q2N.addEventListener("click", disableQ2);

function disableQ2()
{
    q2Y.disabled = true;
    q2N.disabled = true;
}

//Q3
var q3Y = document.getElementById("q3Y");
var q3N = document.getElementById("q3N");
q3Y.addEventListener("click", counterPlus("moorea"),counterPlus("puertoVallarta"), counterPlus("tsarabanjina"), counterPlus("krabi"));
q3Y.addEventListener("click", disableQ3);
q3N.addEventListener("click", disableQ3);

function disableQ3()
{
    q3Y.disabled = true;
    q3N.disabled = true;
}

//Q4
var q4Y = document.getElementById("q4Y");
var q4N = document.getElementById("q4N");
q4Y.addEventListener("click", counterPlus("moorea"),counterPlus("tsarabanjina"));
q4Y.addEventListener("click", disableQ4);
q4N.addEventListener("click", disableQ4);

function disableQ4()
{
    q4Y.disabled = true;
    q4N.disabled = true;
}

//Q5
var q5Y = document.getElementById("q5Y");
var q5N = document.getElementById("q5N");
q5Y.addEventListener("click", counterPlus("moorea"),counterPlus("tsarabanjina"));
q5Y.addEventListener("click", disableQ5);
q5N.addEventListener("click", disableQ5);

function disableQ5()
{
    q5Y.disabled = true;
    q5N.disabled = true;
}

//Q6
var q6Y = document.getElementById("q6Y");
var q6N = document.getElementById("q6N");
q6Y.addEventListener("click", counterPlus("krabi"),counterPlus("zakopane"));
q6Y.addEventListener("click", disableQ6);
q6N.addEventListener("click", disableQ6);

function disableQ6()
{
    q6Y.disabled = true;
    q6N.disabled = true;
}

//Q7
var q7Y = document.getElementById("q7Y");
var q7N = document.getElementById("q7N");
q7Y.addEventListener("click", counterPlus("hakone"),counterPlus("zakopane"));
q7Y.addEventListener("click", disableQ7);
q7N.addEventListener("click", disableQ7);

function disableQ7()
{
    q7Y.disabled = true;
    q7N.disabled = true;
}

//Q8
var q8Y = document.getElementById("q8Y");
var q8N = document.getElementById("q8N");
q8Y.addEventListener("click", counterPlus("rabat"),counterPlus("dunhuang"));
q8Y.addEventListener("click", disableQ8);
q8N.addEventListener("click", disableQ8);

function disableQ8()
{
    q8Y.disabled = true;
    q8N.disabled = true;
}

//Q9
var q9Y = document.getElementById("q9Y");
var q9N = document.getElementById("q9N");
q9Y.addEventListener("click", counterPlus("salamanca"),counterPlus("rabat"));
q9Y.addEventListener("click", disableQ9);
q9N.addEventListener("click", disableQ9);

function disableQ9()
{
    q9Y.disabled = true;
    q9N.disabled = true;
}

//Q10
var q10Y = document.getElementById("q10Y");
var q10N = document.getElementById("q10N");
q10Y.addEventListener("click", counterPlus("rabat"),counterPlus("hakone"));
q10Y.addEventListener("click", disableQ10);
q10N.addEventListener("click", disableQ10);

function disableQ10()
{
    q10Y.disabled = true;
    q10N.disabled = true;
}

//Q11
var q11Y = document.getElementById("q11Y");
var q11N = document.getElementById("q11N");
q11Y.addEventListener("click", counterPlus("assisi"),counterPlus("salamanca"));
q11Y.addEventListener("click", disableQ11);
q11N.addEventListener("click", disableQ11);

function disableQ11()
{
    q11Y.disabled = true;
    q11N.disabled = true;
}

//Q12
var q12Y = document.getElementById("q12Y");
var q12N = document.getElementById("q12N");
q12Y.addEventListener("click", counterPlus("zakopane"));
q12Y.addEventListener("click", disableQ12);
q12N.addEventListener("click", disableQ12);

function disableQ12()
{
    q12Y.disabled = true;
    q12N.disabled = true;
}

//Q13
var q13Y = document.getElementById("q13Y");
var q13N = document.getElementById("q13N");
q13Y.addEventListener("click", counterPlus("hakone"));
q13Y.addEventListener("click", disableQ13);
q13N.addEventListener("click", disableQ13);

function disableQ13()
{
    q13Y.disabled = true;
    q13N.disabled = true;
}

//Q14
var q14Y = document.getElementById("q14Y");
var q14N = document.getElementById("q14N");
q14Y.addEventListener("click", counterPlus("hakone"), counterPlus("krabi"), counterPlus("zakopane"));
q14Y.addEventListener("click", disableQ14);
q14N.addEventListener("click", disableQ14);

function disableQ14()
{
    q14Y.disabled = true;
    q14N.disabled = true;
}

//Q15
var q15Y = document.getElementById("q15Y");
var q15N = document.getElementById("q15N");
q15Y.addEventListener("click", counterPlus("salamanca"), counterPlus("rabat"), counterPlus("assisi"));
q15Y.addEventListener("click", disableQ15);
q15N.addEventListener("click", disableQ15);

function disableQ15()
{
    q15Y.disabled = true;
    q15N.disabled = true;
}

function counterPlus(city)
{
    questionsAnswered += 1;
    switch(city){
        case "salamanca":
            salamancaCounter += 1;
            break;
        case "dunhuang":
            dunhuangCounter+=1;
            break;
        case "zakopane":
            zakopaneCounter+=1;
            break;
        case "krabi":
            krabiTownCounter+=1;
            break;
        case "assisi":
            assisiCounter+=1;
            break;
        case "rabat":
            rabatCounter+=1;
            break;
        case "tsarabanjina":
            tsarabanjinaCounter +=1;
            break;
        case "moorea":
            mooreaCounter+=1;
            break;
        case "hakone":
            hakoneCounter+=1;
            break;
        case "puertoVallarta":
            puertoVallartaCounter+=1;
            break;
        default:
            print("things have gone terribly wrong");
    }
    if (questionsAnswered == 15)
    {
        console.log("the quiz is done");
    }
}

function displayResult()
{

    if (questionsAnswered >= 1) {
        showResult.disabled = true;
    }
    var citiesCounted = [salamancaCounter, dunhuangCounter, zakopaneCounter, krabiTownCounter, assisiCounter, rabatCounter, tsarabanjinaCounter, mooreaCounter, hakoneCounter, puertoVallartaCounter]
    var mostAlike = Math.max.apply(Math, citiesCounted);
    if (salamancaCounter == mostAlike)
    {
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        salamancaDesc.style.display = "block";
        console.log("salamanca");
    }
    else if (dunhuangCounter == mostAlike)
    {
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        dunhuangDesc.style.display = "block";
        console.log("dunhuang");
    }else if(zakopaneCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        zakopaneDesc.style.display = "block";
        console.log("zakopane");
    }else if(krabiTownCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        krabiDesc.style.display = "block";
        console.log("krabi");
    }else if(assisiCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        assisiDesc.style.display = "block";
        console.log("assisi");
    }else if(rabatCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        rabatDesc.style.display = "block";
        console.log("rabat");
    }else if(tsarabanjinaCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        tsarabanjinaDesc.style.display = "block";
        console.log("tsarabanjina");
    }else if(mooreaCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        mooreaDesc.style.display = "block";
        console.log("moorea");
    }else if(hakoneCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        hakoneDesc.style.display = "block";
        console.log("hakone");
    }else if(puertoVallartaCounter == mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        puertoVallartaDesc.style.display = "block";
        console.log("puerto vallarta");
    }
}
