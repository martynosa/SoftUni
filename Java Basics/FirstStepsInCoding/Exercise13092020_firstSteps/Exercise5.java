package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Вход в конзолата
        int hallRent = Integer.parseInt(scanner.nextLine());
        //Пресмятане
        //Торта = 20% от цената на наема
        double cakePrice = hallRent * 0.20;
        //Напитки = 45% по-малко от цената на тортата
        double drinksPrice = cakePrice - cakePrice * 0.45;
        //Аниматор = 1/3 от цената за наем
        double animatorPrice = hallRent / 3;
        double result = hallRent + cakePrice + drinksPrice + animatorPrice;
        //Принтиране на резултат
        System.out.println(result);
    }
}
