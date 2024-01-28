var startScreen = document.querySelector("#start-screen")
var startBtn = document.querySelector("#start")
var quizSection = document.querySelector("#questions")
var questionText = document.querySelector("#question-title")
var option1 = document.querySelector("#btn1")
var option2 = document.querySelector("#btn2")
var option3 = document.querySelector("#btn3")
var option4 = document.querySelector("#btn4")

var index = 0
var time = 30


startBtn.addEventListener("click", function () {
    startScreen.classList.add("hide")
    quizSection.classList.remove("hide")
    quizSection.classList.add("start")

    setInterval(function () {
        if (time > 0 && index < questions.length-1 ) {
            time--;
            document.getElementById('time').textContent = time;
        } else { 
            clearInterval() }
    }, 1000)

    questionText.textContent = questions[index].question
    option1.textContent = questions[index].answer1
    option2.textContent = questions[index].answer2
    option3.textContent = questions[index].answer3
    option4.textContent = questions[index].answer4


    option1.addEventListener("click", nextQuestion)
    option2.addEventListener("click", nextQuestion)
    option3.addEventListener("click", nextQuestion)
    option4.addEventListener("click", nextQuestion)

}


)

function nextQuestion(e) {


    //check correct answer
    var clickedAnswer = e.target.innerText;

    document.querySelector('#feedback').style.display = "block";


    if (clickedAnswer === questions[index].correctAnswer) {

        document.querySelector('#feedback').innerHTML = `<h3>Correct!</h3>`;
    } else {
        document.querySelector('#feedback').innerHTML = `<h3>Wrong!</h3>`;
        time -= 5
    }
    setTimeout(

        function () {

            document.querySelector('#feedback').innerHTML = '';
            if (index < questions.length - 1 && time > 0) {
                index++
                questionText.textContent = questions[index].question
                option1.textContent = questions[index].answer1
                option2.textContent = questions[index].answer2
                option3.textContent = questions[index].answer3
                option4.textContent = questions[index].answer4
            } else {

                document.querySelector('#questions').classList.add('hide');

                document.getElementById('end-screen').classList.remove('hide');

            }
        },


        1000)


}


let highScoreArray =JSON.parse(localStorage.getItem("highScoreArray")) || [];

document.getElementById("submit").addEventListener("click", function () {
    var initials = document.getElementById("initials").value;

    if (initials === "") {
        alert("Please enter initials");
    }
    let score = parseInt(document.getElementById('time').innerText)
    highScoreArray.push([initials, score]);
    localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
    
})




