package Exercise20092020_if;

import java.util.Scanner;

public class exercise7 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double record = Double.parseDouble(scan.nextLine());
        double distance = Double.parseDouble(scan.nextLine());
        double timePerMeter = Double.parseDouble(scan.nextLine());

        double lag = Math.floor(distance / 15) * 12.5;

        double time = distance * timePerMeter + lag;

       if (time < record) {
           System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", time);
       } else {
           System.out.printf("No, he failed! He was %.2f seconds slower.", time - record);
       }

    }
}
