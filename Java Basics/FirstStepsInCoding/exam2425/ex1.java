package exam2425;

import java.util.Scanner;

public class ex1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double pricePerPageForPrinting = Double.parseDouble(scan.nextLine());
        double pricePerCoverForPrinting = Double.parseDouble(scan.nextLine());
        int discountPercentageForPaperPrint = Integer.parseInt(scan.nextLine());
        double designerSalary = Double.parseDouble(scan.nextLine());
        int percentPaidByStaff = Integer.parseInt(scan.nextLine());

        //една книга има 899 страници и 2 корици

        //тука може да имам грешка
        double sumForPrinting = (pricePerPageForPrinting * 899) + (pricePerCoverForPrinting * 2);
        double sumAfterDiscount = (sumForPrinting - (sumForPrinting * discountPercentageForPaperPrint / 100)) + designerSalary;

        double totalPrice = sumAfterDiscount - (sumAfterDiscount * percentPaidByStaff / 100);

        System.out.printf("Avtonom should pay %.2f BGN.", totalPrice);

    }
}
