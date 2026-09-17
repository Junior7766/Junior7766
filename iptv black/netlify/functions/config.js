exports.handler = async (event, context) => {
    // Captura os parâmetros enviados na URL (?test1...)
    const params = event.queryStringParameters || {};
    
    // Suas senhas permitidas
    const senhasValidas = ["luciano0101", "jc7766", "test7766"];

    // Pega a senha enviada pelo app
    const senhaDigitada = params.senha || Object.keys(params)[0];

    // Se a senha estiver na lista permitida
    if (senhaDigitada && senhasValidas.includes(senhaDigitada)) {
        
        // COLOQUE ABAIXO O CONTEÚDO DO SEU BLACKCROWTV.TXT (entre as crases)
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
