package Exercise13092020_firstSteps;

import java.util.Scanner;

public class Exercise4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int pages = Integer.parseInt(scan.nextLine());
        int pagesperhour = Integer.parseInt(scan.nextLine());
        int days = Integer.parseInt(scan.nextLine());

        int hoursoverall = pages / pagesperhour;
        int hours = hoursoverall / days;
        System.out.println(hours);
    }
}
