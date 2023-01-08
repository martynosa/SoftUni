package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int N1 = Integer.parseInt(scan.nextLine());
        int N2 = Integer.parseInt(scan.nextLine());
        String operator = scan.nextLine();



        switch (operator) {
            case "+":
                int result = N1 + N2;
                String evenOrOdd = "";
                if (result % 2 ==0) {
                    evenOrOdd = "even";
                } else {
                    evenOrOdd = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator,N2, result, evenOrOdd);
                break;


            case "-":
                int result2 = N1 - N2;
                String evenOrOdd2 = "";
                if (result2 % 2 ==0) {
                    evenOrOdd2 = "even";
                } else {
                    evenOrOdd2 = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator,N2, result2, evenOrOdd2);
                break;


            case "*":
                int result3 = N1 * N2;
                String evenOrOdd3 = "";
                if (result3 % 2 ==0) {
                    evenOrOdd3 = "even";
                } else {
                    evenOrOdd3 = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator,N2, result3, evenOrOdd3);
                break;


            case "/":
                if (N2 == 0){
                    System.out.printf("Cannot divide %d by zero",N1);
                } else {
                    double divideresult = 1.00 * N1 / N2;
                    System.out.printf("%d / %d = %.2f", N1, N2, divideresult);
                }
                break;


            case "%":
                if (N2 == 0){
                    System.out.printf("Cannot divide %d by zero",N1);
                } else {
                    int result4 = N1 % N2;
                    System.out.printf("%d %% %d = %d", N1, N2, result4);
                }
                break;
        }




    }
}
