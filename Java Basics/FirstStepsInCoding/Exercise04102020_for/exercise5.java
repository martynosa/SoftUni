package Exercise04102020_for;

import java.util.Scanner;

public class exercise5 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int howMany = Integer.parseInt(scan.nextLine());
        double p1 = 0; // na 2
        double p2 = 0; // na 3
        double p3 = 0; // na 4



        for (int i = 0; i < howMany; i++) {
            int number = Integer.parseInt(scan.next());
            if (number % 2 == 0) {
                p1 = p1+1;
            }

            if (number % 3 == 0) {
                p2 = p2+1;
            }

            if (number % 4 == 0) {
                p3 = p3+1;
            }

        }
        //double percent1 = p1 / ((howMany *1.0) * 100);
        //double percent2 = p2 / ((howMany *1.0) * 100);
        //double percent3 = p3 / ((howMany *1.0) * 100);

        System.out.printf("%.2f%%%n", (p1/howMany)*100);
        System.out.printf("%.2f%%%n", (p2/howMany)*100);
        System.out.printf("%.2f%%%n", (p3/howMany)*100);
    }
}
