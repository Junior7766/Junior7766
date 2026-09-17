exports.handler = async (event, context) => {
    // Captura os parâmetros enviados na URL (?test1...)
    const params = event.queryStringParameters || {};
    
    // Suas senhas permitidas
    const senhasValidas = ["test1", "senha123", "minhasenha"];

    // Pega a senha enviada pelo app
    const senhaDigitada = params.senha || Object.keys(params)[0];

    // Se a senha estiver na lista permitida
    if (senhaDigitada && senhasValidas.includes(senhaDigitada)) {
        
        // COLOQUE ABAIXO O CONTEÚDO DO SEU BLACKCROWTV.TXT (entre as crases)
        const conteudoTxt = `http://link-do-servidor.com:8080
usuario_exemplo
senha_exemplo`;

        return {
            statusCode: 200,
            headers: { 
                "Content-Type": "text/plain; charset=utf-8" 
            },
            body: conteudoTxt
        };
    }

    // Retorna erro 403 se a senha for inválida ou vazia
    return {
        statusCode: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: "Acesso Negado: Senha invalida!"
    };
};