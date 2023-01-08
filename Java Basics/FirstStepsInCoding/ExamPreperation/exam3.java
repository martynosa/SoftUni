package ExamPreperation;

import java.util.Scanner;

public class exam3 {                //туристическа агенция по-сложни условия / switch за градове и цени
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String cityName = scan.nextLine(); // името на града
        String pack = scan.nextLine(); // различна цена в зависимост от това дали има пакет
        String hasVIP = scan.nextLine();  // ако има вип добавяме отстъпка
        int days = Integer.parseInt(scan.nextLine());

        double singPrice = 0;
        int percentageDiscount = 0;
        boolean isInvalid = false;


        switch (cityName) {
            case "Bansko":
            case "Borovets":
                if ("noEquipment".equals(pack)) {
                    singPrice = 80;
                    percentageDiscount = 5;
                } else {
                    singPrice = 100;
                    percentageDiscount = 10;
                }
                break;
            case "Varna":
            case "Burgas":
                if ("noBreakfast".equals(pack)) {
                    singPrice = 100;
                    percentageDiscount = 7;
                } else if ("withBreakfast".equals(pack)){
                    singPrice = 130;
                    percentageDiscount = 12;
                } else {
                    isInvalid = true;
                }

                break;
            default:
                isInvalid = true;
                break;
        }
        if (days > 7) {
            days--;
        }
        if ("yes".equals(hasVIP)) { //пресмятане на проценти
            //singPrice = singPrice * 0.88; // -12%
            //singPrice = singPrice * (1 - percentageDiscount / 100.0); // 12/100 = 0.12 и 1 - 12 = 0.88
            singPrice = singPrice - (singPrice * percentageDiscount / 100.0); // 100-12 = 88%
        }
        if (days<1) {
            System.out.println("Days must be positive number.");
        } else if (isInvalid) {
            System.out.println("Invalid input");
        } else {
            double finalPrice = days * singPrice;
            System.out.printf("The price is %.2flv! have a nice time!", finalPrice);
        }


    }
}
