import { pacientesData } from '../data/pacientesData';

export async function getPacientes() {
  // Simulação de requisição assíncrona
  return new Promise((resolve) => {
    setTimeout(() => resolve(pacientesData), 300);
  });
}
