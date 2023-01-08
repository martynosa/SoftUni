package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise7 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);


        String month  = scan.nextLine();
        int nights = Integer.parseInt(scan.nextLine());

        double studio = 0.0;
        double apartament = 0.0;

        if ("May".equals(month) || "October".equals(month)) {
            if (nights > 14)  {
                apartament = 65 * 0.90;
            } else {
                apartament = 65;
            }
            if (nights > 14) {
                studio = 50 * 0.70;
            } else if (nights > 7) {
                studio = 50 * 0.95;
            }else {
                studio = 50;
            }
        } else if ("June".equals(month) || "September".equals(month)) {

            if (nights > 14)  {
                apartament = 68.70 * 0.90;
            } else {
                apartament = 68.70;
            }
            if (nights > 14) {
                studio = 75.20 * 0.80;
            } else {
                studio = 75.20;
            }
        } else if ("July".equals(month) || "August".equals(month)) {
            studio = 76;
            if (nights > 14)  {
                apartament = 77 * 0.90;
            } else {
                apartament = 77;
            }
        }
        System.out.printf("Apartment: %.2f lv.%nStudio: %.2f lv.",apartament * nights, studio * nights);

    }
}
