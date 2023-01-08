package Exercise20092020_if;

import java.util.Scanner;

public class exercise4 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double lenght = Double.parseDouble(scan.nextLine());

        String lenghtIs = scan.nextLine();
        String lenghtOut = scan.nextLine();

        if (lenghtIs.equals("mm") && lenghtOut.equals("m")) {
            System.out.printf("%.3f", lenght * 0.001);

        } else if (lenghtIs.equals("m") && lenghtOut.equals("cm")) {

            System.out.printf("%.3f", lenght * 100);

        } else if (lenghtIs.equals("cm") && lenghtOut.equals("mm")) {
            System.out.printf("%.3f", lenght * 10);

        } else if (lenghtIs.equals("cm") && lenghtOut.equals("m")) {
            System.out.printf("%.3f", lenght * 0.01);

        } else if (lenghtIs.equals("mm") && lenghtOut.equals("cm")) {

            System.out.printf("%.3f", lenght * 0.1);
        } else if (lenghtIs.equals("m") && lenghtOut.equals("mm")) {
            System.out.printf("%.3f", lenght * 1000);
        }
    }
}
