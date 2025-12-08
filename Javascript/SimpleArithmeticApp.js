function runSimpleArithmetic(){
    console.log("*************************************")
    console.log("solve subtraction problems.");
    console.log("2 attempts per problem.");
    console.log("10 questions max.\n");
    console.log("*************************************")
    
    const startTimeMilliseconds = new Date().getTime();
    
    let correctAnswerCount = 0;
    let totalQuestionsAttempted = 0;
    
    function askQuestion() {
        if (totalQuestionsAttempted >= 10) {
            const endTimeMilliseconds = new Date().getTime();
            const timeTakenSeconds = Math.floor((endTimeMilliseconds - startTimeMilliseconds) / 1000);
            
            displayFinalResults(correctAnswerCount, totalQuestionsAttempted, timeTakenSeconds);
            return;
        }
        
        const questionAnsweredCorrectly = presentSubtractionProblem();
        
        if (questionAnsweredCorrectly) {
            correctAnswerCount++;
        }
        
        totalQuestionsAttempted++;
        
        console.log(`Current score: ${correctAnswerCount} correct out of ${totalQuestionsAttempted}`);
        console.log();
        
        askQuestion();
    }
    
    askQuestion();
}

    function presentSubtractionProblem() {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, firstNumber);
    
    const correctAnswer = firstNumber - secondNumber;
    let attemptCount = 0;
    
    function attemptProblem() {
        if (attemptCount >= 2) {
            console.log(`The correct answer was: ${correctAnswer}`);
            return false;
        }
        
        console.log(`Question ${attemptCount + 1} of 2 attempts:`);
        const userAnswerString = userAnswer(`${firstNumber} - ${secondNumber} = `);
        
        const userAnswer = convertStringToInteger(userAnswerString);
        
        if (userAnswer === correctAnswer) {
            console.log("Correct! ✓");
            return true;
        } else {
            console.log("Incorrect ✗");
            attemptCount++;
            
            if (attemptCount < 2) {
                console.log("Try again...");
                return attemptProblem();
            } else {
                console.log(`The correct answer was: ${correctAnswer}`);
                return false;
            }
        }
    }
    
    return attemptProblem();
    }

    function generateRandomNumber(minimumValue, maximumValue) {
    const currentTimeMilliseconds = new Date().getTime();
    const timeBasedSeed = currentTimeMilliseconds % 1000000;
    
    const rangeSize = maximumValue - minimumValue + 1;
    const randomOffset = timeBasedSeed % rangeSize;
    
    return minimumValue + randomOffset;
    }

    function convertStringToInteger(numberString) {
    if (!numberString) {
        return 0;
    }
    
    let convertedNumber = 0;
    let hasNegativeSign = false;
    
    if (numberString[0] === '-') {
        hasNegativeSign = true;
        numberString = numberString.substring(1);
    }
    
    for (let characterPosition = 0; characterPosition < numberString.length; characterPosition++) {
        const currentCharacter = numberString[characterPosition];
        
        if (currentCharacter >= '0' && currentCharacter <= '9') {
            const currentDigit = currentCharacter.charCodeAt(0) - '0'.charCodeAt(0);
            convertedNumber = convertedNumber * 10 + currentDigit;
        }
    }
    
    if (hasNegativeSign) {
        convertedNumber = -convertedNumber;
    }
    
    return convertedNumber;
    }

    function displayFinalResults(correctCount, totalQuestions, timeSeconds) {
    console.log("*********************************");
    console.log(`Total Questions: ${totalQuestions}`);
    console.log(`Correct Answers: ${correctCount}`);
    
    const percentageScore = Math.floor((correctCount * 100) / totalQuestions);
    console.log(`Score: ${percentageScore}%`);
    
    console.log(`Time Taken: ${timeSeconds} seconds`);
    
    }


runSimpleArithmetic();
