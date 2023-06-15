
public interface HumanBuilder {

    HumanBuilder addId(String id);

    HumanBuilder addName(String name);

    HumanBuilder addYearOld(int yearOld);

    HumanBuilder addPhone(String phone);

    Human build();
}