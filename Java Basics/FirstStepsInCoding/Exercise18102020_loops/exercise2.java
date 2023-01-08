package Exercise18102020_loops;

import java.util.Scanner;

public class exercise2 {

    public static void main(String[] args) {  //еднакви суми на четни и нечетни позиции
        Scanner scan = new Scanner(System.in);

        int num1 = Integer.parseInt(scan.nextLine());
        int num2 = Integer.parseInt(scan.nextLine());


        for (int i = num1; i <= num2; i++) {
            int number = i;
            int evenSum = 0;
            int oddSum = 0;
            for (int j = 6; j >= 1; j--) {

                int digit = number % 10; //вземаме последната цифра от числото
                number = number / 10; // намаляме числото с 1 цифра отзад напред, защото е int

                if (j % 2 == 0) {
                    evenSum += digit;
                } else {
                    oddSum += digit;
                }

            }
            if (evenSum == oddSum) {
                System.out.print(i + " ");
            }

        }

    }
}
