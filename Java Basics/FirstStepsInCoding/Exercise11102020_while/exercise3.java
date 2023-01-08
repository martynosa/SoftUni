package Exercise11102020_while;

import java.util.Scanner;

public class exercise3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double excursionPrice = Double.parseDouble(scan.nextLine());
        double currentMoney = Double.parseDouble(scan.nextLine());

        int spendDays = 0;
        int allDays = 0;

        while (excursionPrice > currentMoney) {
           String command = scan.nextLine();
            double money = Double.parseDouble(scan.nextLine());
            allDays++;
            if (command.equals("spend")) {
                currentMoney -= money;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                spendDays++;
                if (spendDays == 5) {
                    break;
                }

            } else {
                currentMoney += money;
                spendDays = 0;
            }
        }
        String output = "";

        if (currentMoney >= excursionPrice) {
            output = String.format("You saved the money for %d days.",allDays);
        } else {
            output = String.format("You can't save the money.%n" +
                    "%d",allDays);
        }

        System.out.println(output);
    }
}
