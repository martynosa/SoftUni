package Exercise04102020_for;

import java.util.Scanner;

public class exercise2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        int maxNumber = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            int number = Integer.parseInt(scan.nextLine());
            sum += number;
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
        sum -= maxNumber;
        if (sum == maxNumber) {
            System.out.printf("Yes%nSum = %d", sum);
        } else {
            System.out.printf("No%nDiff = %d", Math.abs(sum - maxNumber));
        }


    }
}
