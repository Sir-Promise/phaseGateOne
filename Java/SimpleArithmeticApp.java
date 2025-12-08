import java.util.Scanner;
    public class SimpleArithmeticApp {
    public static void runArithmeticPractice() {
        Scanner userInputScanner = new Scanner(System.in);
        
        System.out.println("*******************************");
        System.out.println("Solve subtraction problems.");
        System.out.println("You have 2 attempts per problem.");
        System.out.println("Maximum of 10 questions.\n");
        System.out.println("********************************");
        long startTimeMilliseconds = System.currentTimeMillis();
        
        int correctAnswerCount = 0;
        int totalQuestionsAttempted = 0;
        
        while (totalQuestionsAttempted < 10) {
            boolean questionAnsweredCorrectly = presentSubtractionProblem(userInputScanner);
            
            if (questionAnsweredCorrectly) {
                correctAnswerCount++;
            }
            
            totalQuestionsAttempted++;
            
            System.out.println("Current score: " + correctAnswerCount + " correct out of " + totalQuestionsAttempted);
            System.out.println();
        }
        
        long endTimeMilliseconds = System.currentTimeMillis();
        long timeTakenSeconds = (endTimeMilliseconds - startTimeMilliseconds) / 1000;
        
        displayFinalResults(correctAnswerCount, totalQuestionsAttempted, timeTakenSeconds);
        
        }
        public static boolean presentSubtractionProblem(Scanner inputScanner) {
        int firstNumber = generateRandomNumber(1, 100);
        int secondNumber = generateRandomNumber(1, firstNumber);
        
        int correctAnswer = firstNumber - secondNumber;
        int attemptCount = 0;
        
        while (attemptCount < 2) {
            System.out.println("Question " + (attemptCount + 1) + " of 2 attempts:");
            System.out.print(firstNumber + " - " + secondNumber + " = ");
            
            String userAnswerString = inputScanner.nextLine();
            int userAnswer = convertStringToInteger(userAnswerString);

