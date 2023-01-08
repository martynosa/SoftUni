package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise1 {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String type = scan.nextLine();
        int rows = Integer.parseInt(scan.nextLine());
        int columns = Integer.parseInt(scan.nextLine());

        double income =0.0;

        if ("Premiere".equals(type)) {
            income = rows * columns * 12;
        } else if ("Normal".equals(type)) {
            income = rows * columns * 7.5;
        } else if ("Discount".equals(type)) {
            income = rows * columns * 5;
        }
        System.out.printf("%.2f", income);
    }
}
