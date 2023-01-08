package Exercise04102020_for;

import java.util.Scanner;

public class exercise6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int tabs = Integer.parseInt(scan.nextLine());
        int salary = Integer.parseInt(scan.nextLine());

        for (int i = 0; i < tabs; i++) {
            String currentTab = scan.nextLine();

            if (currentTab.equals("Facebook")) {
                salary -= 150;
            } else if (currentTab.equals("Instagram")) {
                salary -= 100;
            } else if (currentTab.equals("Reddit")) {
                salary -= 50;
            }
            if (salary <= 0) {
                break;
            }
        }
        if (salary <= 0) {
            System.out.println("You have lost your salary.");
        } else {
            System.out.println(salary);
        }
    }
}
