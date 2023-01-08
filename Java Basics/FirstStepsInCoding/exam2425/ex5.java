package exam2425;

import java.util.Scanner;

public class ex5 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        //Цената на всяка играчка е 5 лв., а цената на един пуловер е 15 лв.

        String familyMember = scan.nextLine();
        int kids = 0;
        int adults = 0;


        while (!"Christmas".equals(familyMember)) {
            int age = Integer.parseInt(familyMember);
            if (age <= 16) {
                kids++;
            } else {
                adults++;
            }
            familyMember = scan.nextLine();
        }

        int moneyForToys = kids * 5;
        int moneyForSweaters = adults * 15;

        System.out.printf("Number of adults: %d%n", adults);
        System.out.printf("Number of kids: %d%n", kids);
        System.out.printf("Money for toys: %d%n", moneyForToys);
        System.out.printf("Money for sweaters: %d%n", moneyForSweaters);

    }
}
