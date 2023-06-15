class Runner {
    public static void main(String[] args) {
        HumanBuilder sangBuilder = new HumanConcreteBuilder()
                .addId("SE161175")
                .addName("Tran Quang Sang")
                .addPhone("0399716348")
                .addYearOld(20);

        Human sang = sangBuilder.build();
        System.out.println(sang.getName());

    }
}