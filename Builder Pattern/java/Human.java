public class Human {

    private String id;
    private String name;
    private String phone;
    private int yearOld;

    public Human(String id, String name, String phone, int yearOld) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.yearOld = yearOld;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getYearOld() {
        return yearOld;
    }

    public void setYearOld(int yearOld) {
        this.yearOld = yearOld;
    }

}
