package Exercise18102020_loops;

import java.util.Scanner;

public class Exercise1 {          //Пирамида от числа
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());

        int number = 0;
        boolean flag = false;
        for (int rows = 1; rows <= n; rows++) {

            for (int columns = 1; columns <= rows; columns++) {
                number++;
                System.out.print(number + " ");
                if (number >= n) {
                    flag = true;
                    break;
                }
            }
            if (flag){
                break;
            }
            System.out.println();


        }


    }
}
