package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int degrees = Integer.parseInt(scan.nextLine());
        String time = scan.nextLine();

        String outfit = "";
        String shoes = "";

        if ("Morning".equals(time)) {
            if (degrees >= 10 && degrees <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
        }

        if ("Afternoon".equals(time)) {
            if (degrees >= 10 && degrees <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
        }

        if ("Evening".equals(time)) {
            if (degrees >= 10 && degrees <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
        }

        System.out.printf("It's %d degrees, get your %s and %s.", degrees, outfit, shoes);

    }
}
//"It's {градуси} degrees, get your {облекло} and {обувки}."