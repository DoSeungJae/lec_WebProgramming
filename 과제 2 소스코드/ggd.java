public class ggd {

    public void Print(int m){ //or public static void Print(int m )
        for(int n=1;n<10;n++){
            System.out.printf("%d * %d = %d\n",m,n,m*n);
        }
    }

    public static void main(String[] args){
        
        ggd obj=new ggd();

        obj.Print(3);
        
    }
    
}
