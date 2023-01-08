package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise8 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int examHour = Integer.parseInt(scan.nextLine());
        int examMinute = Integer.parseInt(scan.nextLine());
        int hourOfArrival = Integer.parseInt(scan.nextLine());
        int minuteOfArrival = Integer.parseInt(scan.nextLine());

        int examInMinutes = (examHour * 60) + examMinute;
        int arrivalInMinutes = (hourOfArrival * 60) + minuteOfArrival;

        int minutesLeft = examInMinutes - arrivalInMinutes;

        int finalTime = minutesLeft / 60;
        int finalMinutes = minutesLeft % 60;

        if (minutesLeft <= 30 && minutesLeft < 0) {
            if (Math.abs(minutesLeft) >= 60) {
                System.out.printf("Late%n%d:%02d hours after the start",(Math.abs(finalTime)),(Math.abs(finalMinutes)));
            } else {
                System.out.printf("Late%n%d minutes after the start", (Math.abs(finalMinutes)));
            }

        } else if (minutesLeft <= 30 && minutesLeft > 0) {
            System.out.printf("On time%n%d minutes before the start",(Math.abs(finalMinutes)));
        } else if (minutesLeft < 60 && minutesLeft > 0) {
            System.out.printf("Early%n%d minutes before the start", (Math.abs(finalMinutes)));
        } else if (minutesLeft >= 60) {
            System.out.printf("Early%n%d:%02d hours before the start",(Math.abs(finalTime)),(Math.abs(finalMinutes)));
        } else if (minutesLeft == 0) {
            System.out.println("On time");
        }
    }
}

