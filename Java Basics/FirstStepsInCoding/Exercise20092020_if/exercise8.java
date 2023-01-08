package Exercise20092020_if;

import java.util.Scanner;

public class exercise8 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double income = Double.parseDouble(scan.nextLine());
        double averageGrade = Double.parseDouble(scan.nextLine());
        double minSalary = Double.parseDouble(scan.nextLine());

        double socialScholarship = 0.0;
        double excellentScholarship = 0.0;

        if (income < minSalary) {
            if (averageGrade >= 4.5) {
                socialScholarship = Math.floor(minSalary * 0.35);
            }
        }
        if (averageGrade >= 5.5) {
            excellentScholarship = Math.floor(averageGrade * 25);
        }

        boolean isSocial = false;


        if (socialScholarship != 0) {
            if (socialScholarship > excellentScholarship) {
                System.out.printf("You get a Social scholarship %.0f BGN", socialScholarship);
                isSocial = true;
            }
        }
        if (excellentScholarship != 0) {
            if (!isSocial)
                System.out.printf("You get a scholarship for excellent results %.0f BGN", excellentScholarship);
        }

        if (socialScholarship == 0 && excellentScholarship == 0) {
            System.out.println("You cannot get a scholarship!");
        }
    }


}
