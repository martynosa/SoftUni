package exam2425;

import java.util.Scanner;

public class ex2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);


        double width = Double.parseDouble(scan.nextLine());
        double length = Double.parseDouble(scan.nextLine());
        double height = Double.parseDouble(scan.nextLine());
        double astronautHeight = Double.parseDouble(scan.nextLine());


        double volumeSpaceship = width * length * height;
        double volumeRoom = (astronautHeight + 0.40) * 2 * 2;
        double enoughRoom = Math.floor(volumeSpaceship / volumeRoom);

        if (enoughRoom < 3) {
            System.out.println("The spacecraft is too small.");
        } else if (enoughRoom >= 3 && enoughRoom <= 10) {
            System.out.printf("The spacecraft holds %.0f astronauts.", enoughRoom);
        } else if (enoughRoom > 10) {
            System.out.println("The spacecraft is too big.");
        }


    }
}
