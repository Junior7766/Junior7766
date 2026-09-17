exports.handler = async (event, context) => {
    // Pega os parâmetros da URL
    const params = event.queryStringParameters || {};
    
    // Suas senhas permitidas
    const senhasValidas = ["test1", "senha123", "minhasenha"];

    // Extrai todas as chaves e todos os valores enviados na URL
    const chaves = Object.keys(params);
    const valores = Object.values(params);

    // Junta tudo que veio na URL em uma única lista
    const todosParametros = [...chaves, ...valores];

    // Verifica se alguma das senhas válidas está dentro da lista de parâmetros
    const acessoPermitido = senhasValidas.some(senha => todosParametros.includes(senha));

    // Se encontrou a senha
    if (acessoPermitido) {
        
        const conteudoTxt = `{
    "user_info": {
        "username": "listatvs",
        "password": "controliptv",
        "message": "",
        "auth": 1,
        "status": "Active",
        "exp_date": "2147483647",
        "is_trial": "0",
        "active_cons": "1",
        "created_at": "1672332438",
        "max_connections": "999",
        "allowed_output_formats": [
            "m3u8",
            "ts",
            "rtmp"
        ]
    },
    "server_info": {
        "url": "play.dnsrot.vip",
        "port": "80",
        "https_port": "443",
        "server_protocol": "http",
        "rtmp_port": "8080",
        "timezone": "America/Sao_Paulo",
        "timestamp_now": 1709960182,
        "time_now": "2024-03-09 01:56:22",
        "process": true
    }
}`;

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: conteudoTxt
        };
    }

    // Se nenhuma senha válida for encontrada
    return {
        statusCode: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: "Acesso Negado: Senha invalida!"
    };
};
