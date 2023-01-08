package Lab12092020;

import java.util.Scanner;

public class Exercise8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Променливи
        int dogs = Integer.parseInt(scanner.nextLine());
        int otherAnimals = Integer.parseInt(scanner.nextLine());
        //Пресмятане
        double total = dogs * 2.50 + otherAnimals * 4;
        //Отпечатване
        System.out.println(total);
    }
}
