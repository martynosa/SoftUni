package Exercise11102020_while;

import java.util.Scanner;

public class exercise2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int poorGradesLimit = Integer.parseInt(scan.nextLine());
        String task = scan.nextLine();

        int poorGrades = 0;
        int allGradesSum = 0;
        int gradesCount = 0;
        String currentTask = "";
        //dokato suobshtenieto e razlichno ot Enough
        while(!task.equals("Enough")) {
            //chetem ocenkata
            int grade = Integer.parseInt(scan.nextLine());
            allGradesSum += grade;
            gradesCount++;

            if (grade <= 4) {
                poorGrades++;
                if (poorGrades == poorGradesLimit) {
                    break;
                }
            }
            currentTask = task;
            task = scan.nextLine();
        }

        double averageScore = 1.0 * allGradesSum / gradesCount;



        //printirane
        String output = "";


        if (poorGrades == poorGradesLimit) {
            output = String.format("You need a break, %d poor grades.", poorGrades);
        } else {
            output = String.format("Average score: %.2f%n"+
                    "Number of problems: %d%n" +
                    "Last problem: %s", averageScore, gradesCount, currentTask);
        }

        System.out.println(output);





    }
}
