package exam2425;

import java.util.Scanner;

public class ex4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        int m = Integer.parseInt(scan.nextLine());
        int s = Integer.parseInt(scan.nextLine());

        for (int i = m; i >= n; i--) {
            if (i % 2 == 0 && i % 3 == 0 && i != s) {
                System.out.print(i + " ");
            } else if (i % 2 == 0 && i % 3 == 0 && i == s) {
                break;
            }

        }

    }


}

