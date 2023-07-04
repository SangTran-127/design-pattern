import java.util.ArrayList;
import java.util.List;

public class Main {

    static class Cat {
        private String name;
        private int yearOld;

        public Cat(String name, int yearOld) {
            this.name = name;
            this.yearOld = yearOld;
        }
    }

    static class CatList {
        private static List<Cat> instance = new ArrayList<>();

        private CatList() {
        }

        static boolean addCat(Cat newCat) {
            return CatList.instance.add(newCat);
        }

        public static List<Cat> getInstance() {

            return CatList.instance;
        }

    }

    public static void main(String[] args) {
        List<Cat> list = CatList.getInstance();
        list.add((new Cat("Shirou", 1)));
        list.add((new Cat("Bong", 1)));
        List<Cat> ls = CatList.getInstance();
        ls.add((new Cat("DucBo", 1)));
        System.out.println(ls.size());
    }
}
