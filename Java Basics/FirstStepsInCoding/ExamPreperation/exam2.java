package ExamPreperation;

import java.util.Scanner;

public class exam2 {                              //прости условия
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double peterBudget = Double.parseDouble(scan.nextLine());
        int vidCardCount = Integer.parseInt(scan.nextLine());
        int processorCount = Integer.parseInt(scan.nextLine());
        int ramCount = Integer.parseInt(scan.nextLine());

        int videoCardsTotalPrice = vidCardCount * 250;

        double processorPrice = videoCardsTotalPrice * 0.35;
        double processorTotalPrice = processorCount * processorPrice;

        double ramPrice = videoCardsTotalPrice * 0.10;
        double ramTotalPrice = ramCount * ramPrice;

        double totalPrice = videoCardsTotalPrice + processorTotalPrice + ramTotalPrice;
        if (vidCardCount > processorCount) {
            totalPrice = totalPrice * 0.85;
        }

        if (peterBudget >= totalPrice) {
            double moneyLeft = peterBudget - totalPrice;
            System.out.printf("You have %.2f leva left!", moneyLeft);
        } else {
            double moneyNeed = totalPrice - peterBudget;
            System.out.printf("Not enough money! You need %,2f leva more!",moneyNeed);
        }
    }
}
