package Exercise20092020_if;

import java.util.Scanner;

public class exercise5 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());

        int timeBefore15Min = hours * 60 + minutes;
        int timeAfter15MIn = timeBefore15Min + 15;
        int finalTime = timeAfter15MIn / 60;
        int finalMinutes = timeAfter15MIn % 60;

        if (finalTime == 24){
            finalTime = 0;
        }
        System.out.printf("%d:%02d",finalTime,finalMinutes);


    }
}