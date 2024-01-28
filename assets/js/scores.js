let highScoreArray = JSON.parse(localStorage.getItem("highScoreArray"));


let filteredArray = highScoreArray.filter(element => element[1] >10)

let sortedArray = filteredArray.sort((a, b)=> b[1] - a[1]);


sortedArray.forEach(element => {
    
    document.getElementById('highscores').innerHTML+=
    `
    <li>Initials: ${element[0]}, High Score: ${element[1]}</li>
    
    `
});


document.getElementById('clear').onclick = function () {
    localStorage.clear();
location.reload('highscores.html');
}