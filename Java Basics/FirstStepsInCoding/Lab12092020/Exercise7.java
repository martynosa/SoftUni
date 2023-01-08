package Lab12092020;

import java.util.Scanner;

public class Exercise7  {

    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Четец на това което въвеждам програмата
    String name = scanner.nextLine();
    int projectsCount = Integer.parseInt(scanner.nextLine());

    //Пресмятания
    int neededHours = projectsCount * 3;

    //Отпечатване на резултата
    System.out.printf("The architect %s will need " + "%d hours to complete %d project/s.", name, neededHours, projectsCount);
    }
}
