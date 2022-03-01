# Primeiros passos para desenvolvimento web

## TCP/IP 
Protocolos de comunicação entre computadores em rede 

|Sigla|EN|PTBR|
|-|-|-|
|TCP|Transmission Control Protocol|Protocolo de Controle de Transmissão|
|IP|Internet Protocol|Protocolo de Internet|

### 4 camadas do modelo TCP/IP 
1. Física (ex: placa de rede)                              
2. Rede (ex: IP)
3. Transporte (ex: TCP, UDP)
4. Aplicação (ex: FTP, SMTP, HTTP)

![camadas](https://www.datarain.com.br/wp-content/uploads/2020/08/modelo-TCP-IP-300x278.png)

### TCP X UDP (User Datagram Protocol)
|TCP|UDP
|-|-|
|Voltado a conexão|Rápido|
|Integridade, Ordem dos dados|Não confiável, Não sequencial|
|APP de Mensagens|Livestream|

### Portas
|PORTAS (PORTS)|-| 
|-|-|
|20: FTP	|(File Transfer Protocol)|
|22: SSH	|(Conexão segura entre computadores para executar comandos)|
|25: SMTP	|(Envio de emails)|
|53: DNS	|(Tradutor de nome para IP ou IP para nome)|
|80: HTTP	|(Requisição simples da internet)|
|443: HTTPS |(Requisição segura da internet)|
|3306: MySQL |

> FTP, SSH, HTTP, HTTPS,POP3 e IMAP:   
>Exemplos de protocolos de comunicação entre cliente e servidor.

### Segurança em redes
WEP2: Mais segura e indicada; tem maior custo computacional porém levando em conta o poder computacional atual, o maior custo se torna irrelevante;  
- [WEP, WPA, WPA2](https://www.tecmundo.com.br/wi-fi/42024-wep-wpa-wpa2-o-que-as-siglas-significam-para-o-seu-wifi-.htm)

>### MODEM (modulator-demodulator)
>>Hardware que converte dados em um formato que possa ser transmitido de um computador para outro

>### ROTEADOR
>>Distribui internet para varios dispositivos; comunicação entre redes;

### Web Server

|Estático| Dinâmico|
|-|-|
|Servidor físico | Servidor físico com softwares
Armazenam arquivos, softwares e/ou banco de dados | Arquivos (file server), Aplicações (application server), Banco de dados (database)
Servidor envia seus arquivos tal como foram criados e armazenados (hospedados) ao navegador | Servidor de aplicações atualiza os arquivos hospedados antes de enviá-los ao navegador através do servidor HTTP

- [O que é um servidor web (web server)?](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_is_a_web_server)

>### localhost
>localização do sistema que está sendo usado
>> 127.0.0.1

### Programação Web
Por definição, um servidor web sempre procura uma página chamada "index", se nenhuma for definida.

>Podem ser utilizados na programação web:  
>HTML, CSS, JavaScript, C++,C#, PHP

### Stacks
>- Front-end  
>>"Parte da frente"  
Site, Software, App, Web Service    
Interface, UI (user interface), UX (user experience)  
Lógica de programação, HTML, CSS, jQuery/JS/AJAX, PHP, Bootstrap/outros frameworks  

>- Back-end  
>>"Parte de trás"  
Servidores, Banco de dados  
"Meio-de-campo" entre interface e bancos de dados, regra de negócios, validações  
MySQL, Oracle, protocolos de comunicação, PHP, Java, node.js

>- Full-stack  
>>Profissional que sabe trabalhar em todas as camadas das tecnologias de desenvolvimento/execução de um app/software

#### Links Úteis
- [Aprendendo desenvolvimento web - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn)
- [Tutoriais de desenvolvimento web - W3Schools](https://www.w3schools.com)
- [JQuery](https://jquery.com/download/)