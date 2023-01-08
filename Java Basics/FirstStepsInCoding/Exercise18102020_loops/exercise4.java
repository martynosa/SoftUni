package Exercise18102020_loops;

import java.util.Scanner;

public class exercise4 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        String line = scan.nextLine();
        double allGradesSum = 0.0;
        int countPresentation = 0;

        while (!line.equals("Finish")) {
            String presentation = line;
            countPresentation++;
            double gradesSum = 0;
            double averageGrade = 0.0;
            for (int i = 0; i < n; i++) {
                double grade = Double.parseDouble(scan.nextLine());
                gradesSum += grade;
            }
            averageGrade = gradesSum / n;
            allGradesSum += averageGrade;
            System.out.printf("%s - %.2f.%n", presentation, averageGrade);


            line = scan.nextLine();
        }

        System.out.printf("Student's final assessment is %.2f.", allGradesSum / countPresentation);
    }
}
