import LoginPage from "../pages/LoginPage";

describe("Testin Login Functionality", () => {
  const loginPage = new LoginPage();

  //changing screen resulation
  //if we use beforeEcah it will change viewport for all test cases
  before(() => {
    cy.viewport(1920, 1080);
  });
  it("Testing With Valid Cedentials ", () => {
    loginPage.userLogin("John Doe", "ThisIsNotAPassword");
    loginPage.userOnMakeAppoinmentPage();
  });

  //   it("Testing With Invalid Cedentials ", () => {
  //     loginPage.userLogin("standard_user", "secret_sauces");
  //     loginPage.invalidLoginAssertion();
  //   });
});
