import { relatorioData } from '../data/relatorioData';

export async function getRelatorio() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(relatorioData), 300);
  });
}
