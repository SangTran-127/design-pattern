public class HumanConcreteBuilder implements HumanBuilder {
    private String id;
    private String name;
    private String phone;
    private int yearOld;

    @Override
    public HumanBuilder addId(String id) {
        this.id = id;
        return this;
    }

    @Override
    public HumanBuilder addName(String name) {
        this.name = name;
        return this;

    }

    @Override
    public HumanBuilder addYearOld(int yearOld) {
        this.yearOld = yearOld;
        return this;
    }

    @Override
    public HumanBuilder addPhone(String phone) {
        this.phone = phone;
        return this;
    }

    @Override
    public Human build() {
        return new Human(id, name, phone, yearOld);
    }

}