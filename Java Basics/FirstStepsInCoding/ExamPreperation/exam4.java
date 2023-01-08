package ExamPreperation;

import java.util.Scanner;

public class exam4 {  // for цикъл броим клиенти и какво правят те във фитнес зала
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int clients = Integer.parseInt(scan.nextLine());
        int backCount = 0;
        int chestCount = 0;
        int legsCount = 0;
        int absCount = 0;
        int shakeCount = 0;
        int barCount = 0;

        for (int i = 0; i < clients; i++) {
            String input = scan.nextLine(); //четем от конзолата какво прави клиента колкото е въведено в clients
            if ("back".equals(input)) {
                backCount++;
            } else if ("Chest".equals(input)) {
                chestCount++;
            } else if ("Legs".equals(input)) {
                legsCount++;
            } else if ("Abs".equals(input)) {
                absCount++;
            } else if ("Protein shake".equals(input)) {
                shakeCount++;
            } else if ("Protein bar".equals(input)) {
                barCount++;
            }
        }
        System.out.printf("%d - back%n", backCount);
        System.out.printf("%d - chest%n", chestCount);
        System.out.printf("%d - legs%n", legsCount);
        System.out.printf("%d - abs%n", absCount);
        System.out.printf("%d - protein shake%n", shakeCount);
        System.out.printf("%d - protein bar%n", barCount);

        int workoutPeople = backCount + chestCount + legsCount + absCount;
        int nonWorkoutPeople = shakeCount + barCount;

        System.out.printf("%.2f%% - work out%n", (workoutPeople * 1.0 / clients) * 100);
        System.out.printf("%.2f%% - non work out%n", (nonWorkoutPeople * 1.0 / clients) * 100);


    }
}
