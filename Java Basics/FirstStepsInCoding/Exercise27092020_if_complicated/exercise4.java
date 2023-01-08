package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int budget = Integer.parseInt(scan.nextLine());
        String season = scan.nextLine();
        int fishers = Integer.parseInt(scan.nextLine());

        double rentBoat = 0.0;

        switch (season) {
            case "Spring":
                rentBoat = 3000;
                break;
            case "Summer":
            case "Autumn":
                rentBoat = 4200;
                break;
            case "Winter":
                rentBoat = 2600;
                break;
        }

        if (fishers <= 6) {
            rentBoat *= 0.90;
        } else if (fishers <= 11) {
            rentBoat *= 0.85;
        } else {
            rentBoat *= 0.75;
        }



        if (fishers % 2 == 0 && !season.equals("Autumn")) {
            rentBoat *= 0.95;
        }



        if (budget >= rentBoat) {
            System.out.printf("Yes! You have %.2f leva left.", budget - rentBoat);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.",rentBoat - budget);
        }







    }
}


