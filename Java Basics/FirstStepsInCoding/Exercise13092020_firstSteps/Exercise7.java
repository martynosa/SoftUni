package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise7 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double pricepertrawberry = Double.parseDouble(scan.nextLine());
        double amountbanana = Double.parseDouble(scan.nextLine());
        double amountorange = Double.parseDouble(scan.nextLine());
        double amountolive = Double.parseDouble(scan.nextLine());
        double amountstrawberry = Double.parseDouble(scan.nextLine());

        double priceperolive = pricepertrawberry - pricepertrawberry * 0.5;
        double priceperorange = priceperolive - priceperolive * 0.4;
        double priceperbanana = priceperolive - priceperolive * 0.8;

        double pricebanana = amountbanana * priceperbanana;
        double priceorange = amountorange * priceperorange;
        double priceolive = amountolive * priceperolive;
        double pricestrawberry = amountstrawberry * pricepertrawberry;


        double price = pricestrawberry + priceolive + priceorange + pricebanana;

        System.out.printf("%.2f", price);
    }
}
