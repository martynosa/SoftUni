package ExamPreperation;

import java.util.Scanner;

public class exam1 {
    public static void main(String[] args) { ////прости пресмятания и печат

        Scanner scan = new Scanner(System.in);
        int nylonNeeded = Integer.parseInt(scan.nextLine());
        int paintNeeded = Integer.parseInt(scan.nextLine());
        int dissolveNeeded = Integer.parseInt(scan.nextLine());
        int workersWorkingHours = Integer.parseInt(scan.nextLine());


        double nylonPrice = (nylonNeeded + 2) * 1.50; // +2м найлон по цената
        double paintPrice = paintNeeded * 1.10 * 14.50; //добавяме 10% и тогава умножаваме
        int dissolvePrice = dissolveNeeded * 5;

        double totalPrice = nylonPrice + paintPrice + dissolvePrice + 0.40;
        double workersSalaryPerHour = totalPrice * 0.30;
        double workersTotalSalary = workersSalaryPerHour * workersWorkingHours;

        double finalPrice = totalPrice + workersTotalSalary;

        System.out.printf("Total expenses: %.2f lv.", finalPrice);


    }


}
