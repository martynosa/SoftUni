package ExamPreperation;

import java.util.Scanner;

public class exam5 {  //задача с while цикъл
    public static void main(String[] args) {   //вземам дължина на стринг
        Scanner scan = new Scanner(System.in);
        double clubTarget = Double.parseDouble(scan.nextLine());
        String input = scan.nextLine();

        double moneyEarned = 0.0;


        while (!"Party!".equals(input)) {
            int count = Integer.parseInt(scan.nextLine());
            double price = input.length() * count; //вземам дължината на стринга като число

            if (price % 2 != 0) {
                price = price * 0.75;
            }
            moneyEarned = moneyEarned + price;

            if (moneyEarned >= clubTarget) { //чупим цикъла когато е достигнат таргета
                break;
            }


            input = scan.nextLine();
        }
        if ("Party!".equals(input)) {
            double moneyNeed = clubTarget - moneyEarned;
            System.out.printf("We need %.2f leva more.%n", moneyNeed);
        } else {
            System.out.println("Target acquired.");
        }

        System.out.printf("Club income - %.2f.", moneyEarned);

    }
}
