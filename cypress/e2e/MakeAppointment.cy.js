import LoginPage from "../pages/LoginPage";
import MakeAppointment from "../pages/MakeAppointment";
describe("Make An Appointment", () => {
  const loginPage = new LoginPage();
  const makeAppointment = new MakeAppointment();
  beforeEach(() => {
    loginPage.userLogin("John Doe", "ThisIsNotAPassword");
  });
  it("Make Appoinment", () => {
    loginPage.userOnMakeAppoinmentPage();
  });
  it("Select Facility - Seoul CURA Healthcare Center", () => {
    loginPage.userOnMakeAppoinmentPage();
    makeAppointment.facility();
  });
  it("Check on Apply for hospital readmission", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
  });
  it("Select Healthcare Program - Medicaid", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
  });
  it("Select a visiting date", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("16/7/23");
  });
  it("Add a comment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("16/7/23");
    makeAppointment.addComment("Hola!!! ");
  });
  it("Book an Appointment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("16/7/23");
    makeAppointment.addComment("Hola!!! ");
    makeAppointment.bookAppointment();
  });
  it(" Verify the appointment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("16/7/23");
    makeAppointment.addComment("Hola!!! ");
    makeAppointment.bookAppointment();
    makeAppointment.appointmentVerification();
  });
});
