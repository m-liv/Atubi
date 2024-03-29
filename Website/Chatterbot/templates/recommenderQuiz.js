/recommender quiz

//variables for restart
var restart = document.getElementById("restartButton");
restart.addEventListener("click", restartQuiz);

//variables for the results, should be hidden at the beginning
var salamancaDesc = document.getElementById("salamanca");
var dunhuangDesc = document.getElementById("dunhuang");
var kashmirDesc = document.getElementById("kashmir");
var krabiDesc = document.getElementById("krabi");
var assisiDesc = document.getElementById("assisi");
var rabatDesc = document.getElementById("rabat");
var tsarabanjinaDesc = document.getElementById("tsarabanjina");
var mooreaDesc = document.getElementById("moorea");
var hakoneDesc = document.getElementById("hakone");
var puertoVallartaDesc = document.getElementById("puertoVallarta");
salamancaDesc.style.display = "none";
dunhuangDesc.style.display = "none";
kashmirDesc.style.display = "none";
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
var kashmirCounter = 0;
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
q1Y.addEventListener("click", incrementAssisi);
q1Y.addEventListener("click",incrementRabat);
q1Y.addEventListener("click",incrementDunhuang);
q1Y.addEventListener("click",incrementSalamanca);

q1Y.addEventListener("click", disableQ1);
q1N.addEventListener("click", disableQ1);

function disableQ1()
{
    q1Y.disabled = true;
    q1N.disabled = true;
    q1Y.style.cursor = "not-allowed";
    q1Y.style.backgroundColor = "#CCCCCC";
    q1N.style.cursor = "not-allowed";
    q1N.style.backgroundColor = "#CCCCCC";
}

//Q2
var q2Y = document.getElementById("q2Y");
var q2N = document.getElementById("q2N");
q2Y.addEventListener("click", incrementAssisi);
q2Y.addEventListener("click", incrementRabat);
q2Y.addEventListener("click", incrementSalamanca);

q2Y.addEventListener("click", disableQ2);
q2N.addEventListener("click", disableQ2);

function disableQ2()
{
    q2Y.disabled = true;
    q2N.disabled = true;
    q2Y.style.cursor = "not-allowed";
    q2Y.style.backgroundColor = "#CCCCCC";
    q2N.style.cursor = "not-allowed";
    q2N.style.backgroundColor = "#CCCCCC";
}

//Q3
var q3Y = document.getElementById("q3Y");
var q3N = document.getElementById("q3N");
q3Y.addEventListener("click", incrementMoorea);
q3Y.addEventListener("click", incrementPuerto);
q3Y.addEventListener("click", incrementTsarabanjina);
q3Y.addEventListener("click", incrementKrabi);


q3Y.addEventListener("click", disableQ3);
q3N.addEventListener("click", disableQ3);

function disableQ3()
{
    q3Y.disabled = true;
    q3N.disabled = true;
    q3Y.style.cursor = "not-allowed";
    q3Y.style.backgroundColor = "#CCCCCC";
    q3N.style.cursor = "not-allowed";
    q3N.style.backgroundColor = "#CCCCCC";
}

//Q4
var q4Y = document.getElementById("q4Y");
var q4N = document.getElementById("q4N");
q4Y.addEventListener("click", incrementMoorea);
q4Y.addEventListener("click", incrementTsarabanjina);
q4Y.addEventListener("click", disableQ4);
q4N.addEventListener("click", disableQ4);

function disableQ4()
{
    q4Y.disabled = true;
    q4N.disabled = true;
    q4Y.style.cursor = "not-allowed";
    q4Y.style.backgroundColor = "#CCCCCC";
    q4N.style.cursor = "not-allowed";
    q4N.style.backgroundColor = "#CCCCCC";
}

//Q5
var q5Y = document.getElementById("q5Y");
var q5N = document.getElementById("q5N");
q5Y.addEventListener("click", incrementMoorea);
q5Y.addEventListener("click", incrementTsarabanjina);

q5Y.addEventListener("click", disableQ5);
q5N.addEventListener("click", disableQ5);

function disableQ5()
{
    q5Y.disabled = true;
    q5N.disabled = true;
    q5Y.style.cursor = "not-allowed";
    q5Y.style.backgroundColor = "#CCCCCC";
    q5N.style.cursor = "not-allowed";
    q5N.style.backgroundColor = "#CCCCCC";
}

//Q6
var q6Y = document.getElementById("q6Y");
var q6N = document.getElementById("q6N");
q6Y.addEventListener("click", incrementKrabi);
q6Y.addEventListener("click", incrementKashmir);
q6Y.addEventListener("click", disableQ6);
q6N.addEventListener("click", disableQ6);

function disableQ6()
{
    q6Y.disabled = true;
    q6N.disabled = true;
    q6Y.style.cursor = "not-allowed";
    q6Y.style.backgroundColor = "#CCCCCC";
    q6N.style.cursor = "not-allowed";
    q6N.style.backgroundColor = "#CCCCCC";
}

//Q7
var q7Y = document.getElementById("q7Y");
var q7N = document.getElementById("q7N");
q7Y.addEventListener("click", incrementHakone);
q7Y.addEventListener("click", incrementKashmir);
q7Y.addEventListener("click", disableQ7);
q7N.addEventListener("click", disableQ7);

function disableQ7()
{
    q7Y.disabled = true;
    q7N.disabled = true;
    q7Y.style.cursor = "not-allowed";
    q7Y.style.backgroundColor = "#CCCCCC";
    q7N.style.cursor = "not-allowed";
    q7N.style.backgroundColor = "#CCCCCC";
}

//Q8
var q8Y = document.getElementById("q8Y");
var q8N = document.getElementById("q8N");
q8Y.addEventListener("click", incrementDunhuang);
q8Y.addEventListener("click", disableQ8);
q8N.addEventListener("click", disableQ8);

function disableQ8()
{
    q8Y.disabled = true;
    q8N.disabled = true;
    q8Y.style.cursor = "not-allowed";
    q8Y.style.backgroundColor = "#CCCCCC";
    q8N.style.cursor = "not-allowed";
    q8N.style.backgroundColor = "#CCCCCC";
}

//Q9
var q9Y = document.getElementById("q9Y");
var q9N = document.getElementById("q9N");
q9Y.addEventListener("click", incrementSalamanca);
q9Y.addEventListener("click", incrementAssisi);
q9Y.addEventListener("click", disableQ9);
q9N.addEventListener("click", disableQ9);

function disableQ9()
{
    q9Y.disabled = true;
    q9N.disabled = true;
    q9Y.style.cursor = "not-allowed";
    q9Y.style.backgroundColor = "#CCCCCC";
    q9N.style.cursor = "not-allowed";
    q9N.style.backgroundColor = "#CCCCCC";
}

//Q10
var q10Y = document.getElementById("q10Y");
var q10N = document.getElementById("q10N");
q10Y.addEventListener("click", incrementAssisi);
q10Y.addEventListener("click", incrementHakone);

q10Y.addEventListener("click", disableQ10);
q10N.addEventListener("click", disableQ10);

function disableQ10()
{
    q10Y.disabled = true;
    q10N.disabled = true;
    q10Y.style.cursor = "not-allowed";
    q10Y.style.backgroundColor = "#CCCCCC";
    q10N.style.cursor = "not-allowed";
    q10N.style.backgroundColor = "#CCCCCC";
}

//Q11
var q11Y = document.getElementById("q11Y");
var q11N = document.getElementById("q11N");
q11Y.addEventListener("click", incrementAssisi);
q11Y.addEventListener("click", incrementSalamanca);

q11Y.addEventListener("click", disableQ11);
q11N.addEventListener("click", disableQ11);

function disableQ11()
{
    q11Y.disabled = true;
    q11N.disabled = true;
    q11Y.style.cursor = "not-allowed";
    q11Y.style.backgroundColor = "#CCCCCC";
    q11N.style.cursor = "not-allowed";
    q11N.style.backgroundColor = "#CCCCCC";
}

//Q12
var q12Y = document.getElementById("q12Y");
var q12N = document.getElementById("q12N");
q12Y.addEventListener("click", incrementKashmir);
q12Y.addEventListener("click", disableQ12);
q12N.addEventListener("click", disableQ12);

function disableQ12()
{
    q12Y.disabled = true;
    q12N.disabled = true;
    q12Y.style.cursor = "not-allowed";
    q12Y.style.backgroundColor = "#CCCCCC";
    q12N.style.cursor = "not-allowed";
    q12N.style.backgroundColor = "#CCCCCC";
}

//Q13
var q13Y = document.getElementById("q13Y");
var q13N = document.getElementById("q13N");
q13Y.addEventListener("click", incrementHakone);
q13Y.addEventListener("click", disableQ13);
q13N.addEventListener("click", disableQ13);

function disableQ13()
{
    q13Y.disabled = true;
    q13N.disabled = true;
    q13Y.style.cursor = "not-allowed";
    q13Y.style.backgroundColor = "#CCCCCC";
    q13N.style.cursor = "not-allowed";
    q13N.style.backgroundColor = "#CCCCCC";
}

//Q14
var q14Y = document.getElementById("q14Y");
var q14N = document.getElementById("q14N");
q14Y.addEventListener("click", incrementHakone);
q14Y.addEventListener("click", incrementKrabi);
q14Y.addEventListener("click", incrementKashmir);


q14Y.addEventListener("click", disableQ14);
q14N.addEventListener("click", disableQ14);

function disableQ14()
{
    q14Y.disabled = true;
    q14N.disabled = true;
    q14Y.style.cursor = "not-allowed";
    q14Y.style.backgroundColor = "#CCCCCC";
    q14N.style.cursor = "not-allowed";
    q14N.style.backgroundColor = "#CCCCCC";
}

//Q15
var q15Y = document.getElementById("q15Y");
var q15N = document.getElementById("q15N");
q15Y.addEventListener("click", incrementSalamanca);
q15Y.addEventListener("click", disableQ15);
q15N.addEventListener("click", disableQ15);

function disableQ15()
{
    q15Y.disabled = true;
    q15N.disabled = true;
    q15Y.style.cursor = "not-allowed";
    q15Y.style.backgroundColor = "#CCCCCC";
    q15N.style.cursor = "not-allowed";
    q15N.style.backgroundColor = "#CCCCCC";
}
function incrementSalamanca(){
    salamancaCounter += 1;
    questionsAnswered += 1;
}

function incrementDunhuang(){
    dunhuangCounter += 1;
    questionsAnswered += 1;
}
function incrementKashmir(){
    kashmirCounter += 1;
    questionsAnswered += 1;
}

function incrementKrabi(){
    krabiTownCounter += 1;
    questionsAnswered += 1;
}

function incrementAssisi(){
    assisiCounter += 1;
    questionsAnswered += 1;
}

function incrementRabat(){
    rabatCounter += 1;
    questionsAnswered += 1;
}

function incrementTsarabanjina(){
    tsarabanjinaCounter +=1;
    questionsAnswered +=1
}

function incrementMoorea(){
    mooreaCounter +=1;
    questionsAnswered +=1
}

function incrementHakone(){
    hakoneCounter +=1;
    questionsAnswered +=1
}

function incrementPuerto(){
    puertoVallartaCounter +=1;
    questionsAnswered +=1
}

function displayResult()
{

    if (questionsAnswered >= 1) {
        showResult.disabled = true;
    }
    var citiesCounted = [salamancaCounter, dunhuangCounter, kashmirCounter, krabiTownCounter, assisiCounter, rabatCounter, tsarabanjinaCounter, mooreaCounter, hakoneCounter, puertoVallartaCounter]
    var mostAlike = Math.max.apply(Math, citiesCounted);
    if (salamancaCounter === mostAlike)
    {
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        salamancaDesc.style.display = "block";
        console.log("salamanca");
    }
    else if (dunhuangCounter === mostAlike)
    {
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        dunhuangDesc.style.display = "block";
        console.log("dunhuang");
    }else if(kashmirCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        kashmirDesc.style.display = "block";
        console.log("kashmir");
    }else if(krabiTownCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        krabiDesc.style.display = "block";
        console.log("krabi");
    }else if(assisiCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        assisiDesc.style.display = "block";
        console.log("assisi");
    }else if(rabatCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        rabatDesc.style.display = "block";
        console.log("rabat");
    }else if(tsarabanjinaCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        tsarabanjinaDesc.style.display = "block";
        console.log("tsarabanjina");
    }else if(mooreaCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        mooreaDesc.style.display = "block";
        console.log("moorea");
    }else if(hakoneCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        hakoneDesc.style.display = "block";
        console.log("hakone");
    }else if(puertoVallartaCounter === mostAlike){
        document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
        puertoVallartaDesc.style.display = "block";
        console.log("puerto vallarta");
    }
}

function restartQuiz()
{
    console.log("the quiz has been restarted");
    salamancaCounter = 0;
    dunhuangCounter = 0;
    kashmirCounter = 0;
    krabiTownCounter = 0;
    assisiCounter = 0;
    rabatCounter = 0;
    tsarabanjinaCounter = 0;
    mooreaCounter = 0;
    hakoneCounter = 0;
    puertoVallartaCounter = 0;


    questionsAnswered = 0;

    q1Y.disabled = false;
    q1N.disabled = false;
    q2Y.disabled = false;
    q2N.disabled = false;
    q3Y.disabled = false;
    q3N.disabled = false;
    q4Y.disabled = false;
    q4N.disabled = false;
    q5Y.disabled = false;
    q5N.disabled = false;
    q6Y.disabled = false;
    q6N.disabled = false;
    q7Y.disabled = false;
    q7N.disabled = false;
    q8Y.disabled = false;
    q8N.disabled = false;
    q9Y.disabled = false;
    q9N.disabled = false;
    q10Y.disabled = false;
    q10N.disabled = false;
    q11Y.disabled = false;
    q11N.disabled = false;
    q12Y.disabled = false;
    q12N.disabled = false;
    q13Y.disabled = false;
    q13N.disabled = false;
    q14Y.disabled = false;
    q14N.disabled = false;
    q15Y.disabled = false;
    q15N.disabled = false;

    showResult.disabled = false;
    document.getElementById("result").innerHTML = "The ideal travel destination for you is: ";
    salamancaDesc.style.display = "none";
    dunhuangDesc.style.display = "none";
    kashmirDesc.style.display = "none";
    krabiDesc.style.display = "none";
    assisiDesc.style.display = "none";
    rabatDesc.style.display = "none";
    tsarabanjinaDesc.style.display = "none";
    mooreaDesc.style.display = "none";
    hakoneDesc.style.display = "none";
    puertoVallartaDesc.style.display = "none";
}
