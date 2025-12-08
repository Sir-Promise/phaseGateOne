import time
import random

def run_simple_arithmetic():
    print("*************************************")
    print("Solve subtraction problems") 
    print("2 attempts per problem") 
    print("10 questions max.")
    print("*************************************")
    start_time = time.time()
    correct, total = 0, 0
    for _ in range(10):
        if present_subtraction_problem():
            correct += 1
        total += 1
        print(f"Current score: {correct} correct out of {total}")
    end_time = time.time()
    display_final_results(correct, total, int(end_time - start_time))

def present_subtraction_problem():
    digit1, digit2 = random.randint(1, 100), random.randint(1, 100)
    correct_answer = max(digit1, digit2) - min(digit1, digit2)
    for attempt in range(2):
        user_answer = input(f"{max(digit1, digit2)} - {min(digit1, digit2)} = ")
        try:
            if int(user_answer) == correct_answer:
                print("Correct! ")
                return True
            else:
                print("Incorrect ")
        except ValueError:
            print("Invalid input ")
    print(f"The correct answer was: {correct_answer}")
    return False

def display_final_results(correct, total, time_seconds):
    print("***********************************")
    print(f"Total Questions: {total}")
    print(f"Correct Answers: {correct}")
    print(f"Score: {correct * 100 // total}%")
    print(f"Time Taken: {time_seconds} seconds")

if __name__ == "__main__":
    run_simple_arithmetic()


