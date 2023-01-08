package Exercise11102020_while;

import java.util.Scanner;

public class exercise4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String steps = scan.nextLine();
        int allSteps = 0;
        boolean jobDone = false;

        while (!steps.equals("Going home")) {
            int stepsWalked = Integer.parseInt(steps);
            allSteps = allSteps + stepsWalked;

            if (allSteps >= 10000) {
                jobDone = true;
                break;
            }
            steps = scan.nextLine();
        }


        String output = "";

        if (jobDone) {
            System.out.printf("Goal reached! Good job!%n" +
                    "%d steps over the goal!", allSteps - 10000);
        } else {
            int stepsHome = Integer.parseInt(scan.nextLine());
            allSteps = allSteps + stepsHome;
            if (allSteps >= 10000){
                System.out.printf("Goal reached! Good job!%n" +
                        "%d steps over the goal!", allSteps - 10000);
            } else {
                System.out.printf("%d more steps to reach goal.",Math.abs(10000 - allSteps));
            }
        }
        System.out.println(output);
    }
}
