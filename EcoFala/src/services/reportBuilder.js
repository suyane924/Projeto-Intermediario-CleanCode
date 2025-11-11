export default class reportBuilder {
  constructor() {
    this.report = {
      patient: null,
      dateRange: null,
      feedback: [],
      summary: null,
    };
  }

  setPatient(patientId) {
    this.report.patient = patientId;
    return this;
  }

  setDateRange(startDate, endDate) {
    this.report.dateRange = { startDate, endDate };
    return this;
  }

  includeFeedback(feedbackType) {
    this.report.feedback.push(feedbackType);
    return this;
  }

  setSummary(summaryText) {
    this.report.summary = summaryText;
    return this;
  }

  build() {
    if (!this.report.patient) {
      throw new Error('O relatório precisa de um paciente definido.');
    }
    return this.report;
  }
}
