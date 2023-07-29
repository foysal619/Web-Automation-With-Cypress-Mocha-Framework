class LoginPage {
  userLogin(username, password) {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    //clicking upon on Make Appoinment will land us to Login page
    cy.get("#btn-make-appointment").click();
    //username field
    cy.get("#txt-username").type(username);

    //password Field
    cy.get("#txt-password").type(password);

    //click On Login Button

    cy.get("#btn-login").click();
  }
  userOnMakeAppoinmentPage() {
    //Make Appointment Title
    cy.get("h2").should("have.text", "Make Appointment");
  }
}
export default LoginPage;
