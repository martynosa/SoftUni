package Exercise11102020_while;

import java.util.Scanner;

public class exercise1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String searchedBook  = scan.nextLine();
        String currentBook = scan.nextLine();
        boolean isFound = false; //po nachalo e false
        int bookCount = 0;

        while(!currentBook.equals("No More Books")) { // dokato teksta e razlichen ot nomorebooks chetem knigata otdolu

            if (currentBook.equals(searchedBook)){
                isFound = true; //kogato knigata e nameren togava stava na true
                break;
            }
            currentBook = scan.nextLine(); // chetem knigata ot konzolata
            bookCount++;
        }
        String output = "";

        if (isFound) {
          output = String.format("You checked %d books and found it.",bookCount);

        } else {

            output = String.format("The book you search is not here!%n"
                    + "You checked %d books.",bookCount);
        }
        System.out.println(output);




    }
}
