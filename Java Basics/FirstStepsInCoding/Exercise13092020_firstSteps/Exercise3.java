package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Вход от конзола
        // Депозирана сума - реално число
        double depositSum = Double.parseDouble(scanner.nextLine());
        // Срок на депозита - цяло число
        int months = Integer.parseInt(scanner.nextLine());
        // ГЛП - реално число
        double interestRate = Double.parseDouble(scanner.nextLine());
        //Пресмятания
        //сума = депозирана сума + срок ((депозирана сума + годищен лихвен процент) / 12)
        double interestPerMonth = (depositSum * interestRate / 100) / 12;
        double result = depositSum + months * interestPerMonth;
        //Принтиране на резултат
        System.out.println(result);


    }
}
