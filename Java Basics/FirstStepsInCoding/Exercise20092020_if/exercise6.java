package Exercise20092020_if;

import java.util.Scanner;

public class exercise6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        int people = Integer.parseInt(scan.nextLine());
        double clothePrice = Double.parseDouble(scan.nextLine());

        double decorPrice = budget * 0.1;

        if(people > 150) {
            clothePrice = clothePrice * 0.90;
        }
        double totalExpanses = clothePrice * people + decorPrice;

        if (budget>=totalExpanses) {
            System.out.printf("Action!%n" +
                    "Wingard starts filming with %.2f leva left.", budget - totalExpanses);
        } else {
            System.out.printf("Not enough money!%n" +
                    "Wingard needs %.2f leva more.", totalExpanses - budget);
        }
    }
}
