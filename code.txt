public class cs3310hw1 {
    public static void main(String[] args) {
        int[] a = {1,2,-3,3,-4,5,6};
        System.out.println(F(a));
    }

    public static int F(int[] arr){
       int n = arr.length;
       int result = 0;
       int max = arr[result];
       int sum = max;
       for (int i = 1;i<n;++i) {
           sum += arr[i];
           if (sum>max) {
               max = sum;
               result = i;
               System.out.println(sum);
           }
       }
       return result;
    }
}
