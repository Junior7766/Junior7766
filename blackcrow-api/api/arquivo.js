export default function handler(req, res) {
  const code = req.query.activecode;

  // Lista de códigos válidos
  const codigosValidos = ['1111', 'junior', 'carlos'];

  if (codigosValidos.includes(code)) {
    const conteudo = `
      Bem-vindo ao BlackCrowTv!
      Lista de canais:
      - Canal 1
      - Canal 2
      - Canal 3
    `;
    res.status(200).send(conteudo);
  } else {
    res.status(403).send('Acesso negado: código inválido');
  }
}
