let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById('inputText').value = testText;
    //Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innterText = "";

    //start timer
    startTime = new Date().getTime();
}

function endTest(){
    endTime = new Date().getTime();
    //disable user input
    document.getElementById("userInput").readOnly = true;

    //calculate tiem elased and words per minute
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split the text using regular expressions to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed)*60);
    }

    //Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =  "<h2>Typing Test Results:</h2>" +
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";
}