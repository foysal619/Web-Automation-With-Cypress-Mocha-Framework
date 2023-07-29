class MakeAppoinment {
  facility() {
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
  }
  checkReadmission() {
    cy.get("#chk_hospotal_readmission").click();
  }
  healthCareProgram() {
    //selecting medicare option
    cy.get("#radio_program_medicare").click();
  }
  selectDate(date) {
    cy.get("#txt_visit_date").type(date);
    cy.get(":nth-child(5) > .col-sm-offset-3").click();
  }
  addComment(comment) {
    cy.get("#txt_comment").type(comment);
  }

  bookAppointment() {
    cy.get("#btn-book-appointment").click();
  }
  appointmentVerification() {
    cy.get(".lead").should(
      "have.text",
      "Please be informed that your appointment has been booked as following:"
    );
  }
}

export default MakeAppoinment;
