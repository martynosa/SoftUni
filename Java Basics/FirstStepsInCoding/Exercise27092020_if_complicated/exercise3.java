package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise3 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String flowers = scan.nextLine();
        int numflowers = Integer.parseInt(scan.nextLine());
        int budget = Integer.parseInt(scan.nextLine());

        double expenses = 0;

        if (flowers.equals("Roses")) {
            expenses = numflowers * 5;
            if (numflowers > 80) {
                expenses *= 0.90;
            }


        } else if (flowers.equals("Dahlias")) {
            expenses = numflowers * 3.8;
            if (numflowers > 90) {
                expenses *= 0.85;
            }

        } else if (flowers.equals("Tulips")) {
            expenses = numflowers * 2.8;
            if (numflowers > 80) {
                expenses *= 0.85;
            }

        } else if (flowers.equals("Narcissus")) {
            expenses = numflowers * 3;
            if (numflowers < 120) {
                expenses *= 1.15;
            }

        } else if (flowers.equals("Gladiolus")) {
            expenses = numflowers * 2.50;
            if (numflowers < 80) {
                expenses *= 1.20;
            }
        }
        double leftover = budget - expenses;

        if (budget >= expenses) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", numflowers, flowers, leftover);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", (Math.abs(leftover)));
        }

    }
}
