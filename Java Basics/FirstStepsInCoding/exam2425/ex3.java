package exam2425;

import java.util.Scanner;

public class ex3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String month = scan.nextLine();
        int hoursSpent = Integer.parseInt(scan.nextLine());
        int peopleInTheGroup = Integer.parseInt(scan.nextLine());
        String dayOrNight = scan.nextLine();

        double priceForDayOrNight = 0.0;

        switch (month) {
            case "march":
            case "april":
            case "may":
                if ("day".equals(dayOrNight)) {
                    priceForDayOrNight = 10.50;
                } else if ("night".equals(dayOrNight)) {
                    priceForDayOrNight = 8.40;
                }
                break;
            case "june":
            case "july":
            case "august":
                if ("day".equals(dayOrNight)) {
                    priceForDayOrNight = 12.60;
                } else if ("night".equals(dayOrNight)) {
                    priceForDayOrNight = 10.20;
                }
                break;
        }

        if (peopleInTheGroup >= 4) {
            priceForDayOrNight = priceForDayOrNight * 0.90;
        }

        if (hoursSpent >= 5) {
            priceForDayOrNight = priceForDayOrNight * 0.50;
        }


        double priceOfGroup = priceForDayOrNight * hoursSpent * peopleInTheGroup;

        System.out.printf("Price per person for one hour: %.2f%n" +
                "Total cost of the visit: %.2f", priceForDayOrNight, priceOfGroup);


        //от март до май


        //от юни до август


    }
}
