package Exercise18102020_loops;

import java.util.Scanner;

public class examMovieTickets {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int a1 = Integer.parseInt(scan.nextLine());
        int a2 = Integer.parseInt(scan.nextLine());
        int n = Integer.parseInt(scan.nextLine());

        for (int i = a1; i < a2; i++) {
            for (int j = 1; j < n; j++) {
                for (int k = 1; k <= n / 2 - 1; k++) {
                    if (i % 2 != 0 && (j + k + i) % 2 !=0){
                        System.out.printf("%c-%d%d%d%n", i, j, k, i);
                    }

                }
            }

        }

    }

}

