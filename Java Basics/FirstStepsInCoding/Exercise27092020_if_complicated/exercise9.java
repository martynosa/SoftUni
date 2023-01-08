package Exercise27092020_if_complicated;

import java.util.Scanner;

public class exercise9 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String yearType = scan.nextLine();
        int holidaysInAYear = Integer.parseInt(scan.nextLine());
        int weekendsHometown = Integer.parseInt(scan.nextLine());


        int allWeeks = 48;
        //weekends v 1 godina = 48
        //weekends off work 3/4
        //visokosna godina +15% volleyball
        double weekendsInSofia = 0.00;
        double holidaysPlaying = 0.00;
        double allGames = 0.00;
        double offWeekendsInSofia = 0.00;
        if ("leap".equals(yearType)) {
             weekendsInSofia = (allWeeks - weekendsHometown) * 0.75;
            holidaysPlaying = holidaysInAYear * 0.66666;
             double leapAllGames = holidaysPlaying + weekendsInSofia + weekendsHometown;
            double leapAllGames2 = leapAllGames * 0.15;
            allGames = leapAllGames + leapAllGames2;
        } else if ("normal".equals(yearType)) {
            weekendsInSofia = (allWeeks - weekendsHometown)* 0.75;
            holidaysPlaying = holidaysInAYear * 0.6667;
            allGames = holidaysPlaying + weekendsInSofia + weekendsHometown;
        }
        System.out.println(Math.floor((allGames)));
    }
}
