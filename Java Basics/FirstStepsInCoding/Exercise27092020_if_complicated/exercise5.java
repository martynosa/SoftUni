package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise5 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        String season = scan.nextLine();

        String destination = "";
        String place = "";

        if (budget <= 100) {
            destination = "Bulgaria";
        } else if (budget <=1000) {
            destination = "Balkans";
        } else if (budget > 1000) {
            destination = "Europe";
        }

        if ("summer".equals(season)) {
            place = "Camp";
        } else if ("winter".equals(season)){
            place = "Hotel";
        }

        if (("Camp".equals(place)) && "Bulgaria".equals(destination)) {
            System.out.printf("Somewhere in %s %n%s - %.2f",destination, place, budget *= 0.30);
        } else if (("Hotel".equals(place)) && "Bulgaria".equals(destination)) {
            System.out.printf("Somewhere in %s %n%s - %.2f",destination, place, budget *= 0.70);
        } else if (("Camp".equals(place)) && "Balkans".equals(destination)) {
            System.out.printf("Somewhere in %s %n%s - %.2f",destination, place, budget *= 0.40);
        } else if (("Hotel".equals(place)) && "Balkans".equals(destination)) {
            System.out.printf("Somewhere in %s %n%s - %.2f",destination, place, budget *= 0.80);
        } else if (("Hotel".equals(place)) && "Europe".equals(destination)){
            System.out.printf("Somewhere in %s %n Hotel - %.2f",destination, budget *= 0.90);
        } else if (("Camp".equals(place)) && "Europe".equals(destination)) {
            System.out.printf("Somewhere in %s %n Hotel - %.2f", destination, budget *= 0.90);
        }



















    }
}
