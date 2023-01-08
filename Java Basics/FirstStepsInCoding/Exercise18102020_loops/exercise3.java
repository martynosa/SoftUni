package Exercise18102020_loops;

import java.util.Scanner;

public class exercise3 {
    public static void main(String[] args) { // Сума на прости числа

        Scanner scan = new Scanner(System.in);

        String line = scan.nextLine();

        int primeSum = 0;
        int nonPrimeSum = 0;

        while (!line.equals("stop")) {
            boolean flag = false;

            int number = Integer.parseInt(line); //вземам числото от стринга

            if (number < 0) {
                System.out.println("Number is negative.");
                line = scan.nextLine();
                continue;
            }
            for (int i = 2; i < number; i++) {
                if (number % i == 0) {
                    flag = true;
                    break;
                }

            }
            if (flag) {
                nonPrimeSum += number;
            } else {
                primeSum += number;
            }


            line = scan.nextLine(); // отново чете от конзолата докато е различно от Stop
        }

        System.out.printf("Sum of all prime numbers is: %d%n", primeSum);
        System.out.printf("Sum of all non prime numbers is: %d", nonPrimeSum);



    }
}
