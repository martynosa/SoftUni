package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Прочитане на входни данни
        double radians = Double.parseDouble(scanner.nextLine());

        //Пресмятане градус = радиан * 180 / пи
        double degrees = radians * 180 / Math.PI;

        //Резултат
        System.out.printf("%.0f", degrees);
    }
}
