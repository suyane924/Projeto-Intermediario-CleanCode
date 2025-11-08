import ReportBuilder from '../src/services/ReportBuilder';

describe('ReportBuilder', () => {
  let builder;

  beforeEach(() => {
    builder = new ReportBuilder();
  });

  test('deve criar um relatório com paciente, datas e feedback', () => {
    const report = builder
      .setPatient('p123')
      .setDateRange('2024-01-01', '2024-03-31')
      .includeFeedback('interaction')
      .setSummary('Resumo do paciente')
      .build();

    expect(report.patient).toBe('p123');
    expect(report.dateRange).toEqual({ startDate: '2024-01-01', endDate: '2024-03-31' });
    expect(report.feedback).toContain('interaction');
    expect(report.summary).toBe('Resumo do paciente');
  });

  test('deve lançar erro se paciente não definido', () => {
    expect(() => builder.build()).toThrow('O relatório precisa de um paciente definido.');
  });
});
