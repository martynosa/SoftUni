package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise8 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int length = Integer.parseInt(scan.nextLine());
        int width = Integer.parseInt(scan.nextLine());
        int height = Integer.parseInt(scan.nextLine());
        double percent = Double.parseDouble(scan.nextLine());

        int volume = length * width * height;
        double fullvolume = volume * 0.001;
        double percentsand = percent * 0.01;
        double liters = fullvolume * (1 - percentsand);

        System.out.printf("%.2f", liters);


    }
}
