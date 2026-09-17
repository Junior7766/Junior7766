exports.handler = async (event, context) => {
    const params = event.queryStringParameters || {};
    
    // Suas senhas permitidas
    const senhasValidas = ["test1", "senha123", "minhasenha"];

    const senhaDigitada = params.senha || Object.keys(params)[0];

    if (senhaDigitada && senhasValidas.includes(senhaDigitada)) {
        
        // Texto da sua configuração IPTV/BlackCrowTV
        const conteudoTxt = `http://link-do-servidor.com:8080
usuario_exemplo
senha_exemplo`;

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
            body: conteudoTxt
        };
    }

    return {
        statusCode: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: "Acesso Negado: Senha invalida!"
    };
};
