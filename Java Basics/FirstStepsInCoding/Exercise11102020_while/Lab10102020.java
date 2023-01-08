package Exercise11102020_while;

import java.util.Scanner;

public class Lab10102020 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine(); //Четем като string и после го преубразуваме в double
        double bankAccount =0.0;

        while(!input.equals("NoMoreMoney")) {
            double amount = Double.parseDouble(input); //Преубразува String в double
            if (amount < 0) {
                System.out.println("Invalid operation!");
                break;
            }
            bankAccount = bankAccount + amount;
            System.out.printf("Increase: %.2f%n", amount);
            input = scan.nextLine();
        }

        System.out.printf("Total: %.2f", bankAccount);

    }
}
