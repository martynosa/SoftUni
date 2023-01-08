package exam2425;

import java.util.Scanner;

public class ex6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int companyCount = Integer.parseInt(scan.nextLine());
        int allPassengers = 0;
        int flights = 0;


        for (int i = 0; i < companyCount; i++) {
            String companyName = scan.nextLine();
            String passengersCount = scan.nextLine();


            while (!"Finish".equals(passengersCount)) {
                int passengers = Integer.parseInt(passengersCount);
                allPassengers = allPassengers + passengers;
                passengersCount = scan.nextLine();
                flights++;

            }
            System.out.println(allPassengers);
            System.out.println(flights);
        }








    }
}
