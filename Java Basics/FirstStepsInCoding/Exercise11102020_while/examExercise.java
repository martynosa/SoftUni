package Exercise11102020_while;

import java.util.Scanner;

public class Изпитна {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double capacity = Double.parseDouble(scan.nextLine());
        int suitcasesCount = 0;
        int suitCasesSuccess = 0;
        boolean isFinishedspace = false;

        String line = scan.nextLine();

        while(!line.equals("End")) {

            double suitCaseVolume = Double.parseDouble(line); //chetem obema na kufara ot konzolata i go pravim chislo
            suitcasesCount++;

            if(suitcasesCount % 3 ==0){ //vseki treti
                suitCaseVolume *= 1.10; //uvelichavame s 10%
            }

            capacity -= suitCaseVolume;

            if (capacity <=0) {
                isFinishedspace = true;
                break;
            }
            suitCasesSuccess ++;

            line = scan.nextLine(); // dokato line e razlichno ot end chetem ot konzolata
        }
        String output = "";

        if(isFinishedspace) {
            output = "No more Space!";
        } else {
            output =  "Congratulations! All suitcases are loaded!";
        }
        System.out.println(output);

        System.out.printf("Statistics:%d suitcases loaded.",suitCasesSuccess);




























    }


}
