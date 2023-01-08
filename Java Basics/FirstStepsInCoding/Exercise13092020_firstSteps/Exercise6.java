package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int days = Integer.parseInt(scan.nextLine());
        int cooks = Integer.parseInt(scan.nextLine());
        int cakes = Integer.parseInt(scan.nextLine());
        int gof = Integer.parseInt(scan.nextLine());
        int pancakes = Integer.parseInt(scan.nextLine());

        int cakesprice = cakes * 45;
        double gofprice = gof * 5.8;
        double pancakesprice = pancakes * 3.2;
        double priceperday = (cakesprice + pancakesprice + gofprice) * cooks;
        double overallprice = priceperday * days;
        double result = overallprice - overallprice * 0.125;

        System.out.printf( "%.2f", result);
    }

    }

