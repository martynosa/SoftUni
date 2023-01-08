package Exercise04102020_for;

public class exercise1 {
    public static void main(String[] args) {

        // става и така
        for (int i = 7; i < 1000; i += 10) {
            System.out.println(i);
        }


        //отпечатва всички числа, които завършват на 7
        for (int i = 1; i <= 1000; i++) {
            if (i % 10 == 7) {
                System.out.println(i);
            }
        }
    }
}

