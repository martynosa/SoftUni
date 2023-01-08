package Exercise11102020_while;

import java.util.Scanner;

public class exercise6Cake {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int length = Integer.parseInt(scan.nextLine());
        int width = Integer.parseInt(scan.nextLine());
        int cakePieces = length * width; //broi parcheta
        String line = scan.nextLine();
        boolean isfinished = false;

        while (!line.equals("STOP")) {
            int currentPieces = Integer.parseInt(line); //vzema ot Line stringa chislo
            cakePieces -= currentPieces;
            if (cakePieces <= 0) {
                isfinished = true;
                break;
            }



            line = scan.nextLine();

        }
        String output = "";
        if (isfinished) {
            output = String.format("No more cake left! You need %d pieces more.",Math.abs(cakePieces));
        } else {
            output = String.format("%d pieces are left.",Math.abs(cakePieces));
        }
        System.out.println(output);

    }
}
