package Exercise04102020_for;

import java.util.Scanner;

public class examples {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String text = scan.nextLine();




        int length = text.length(); // взема дължината на текста в число
        //текста винаги започва от 0 нагоре
        //текст с 5 букви ще отпечата 5, но text.charAt(позиция на символ) започва от 0,1,2,3,4
        //space е също символ


        //i++/i-(i-=2,3,4,5)- - увеличава или намаля променилавата с 1

        // fori shortcut
        //break; прекъсва цикъла
        for (int i =0; i <= text.length() - 1; i++) {
            char symbol = text.charAt(i);
            System.out.println(symbol);
        }

    }
}
