package controlFlow;

public class SwitchStatement {
    public void switchStatement(){
        String role = "admin";
        
        switch (role) {
            case "admin":
                System.out.println("You are an admin");
                break;
            case "moderator":
                System.out.println("You are a moderator");
                break;
            default:
                System.out.println("You are a guest");

        }
    }
}
