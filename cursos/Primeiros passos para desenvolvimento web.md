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

>### MODEM (modulator-demodulator)
>>Hardware que converte dados em um formato que possa ser transmitido de um computador para outro

>### ROTEADOR
>>Distribui internet para varios dispositivos; comunicação entre redes;

### Web Server

|Estático| Dinâmico|
|-|-|
|Servidor físico armazenam arquivos, softwares e/ou banco de dados| Softwares que estão presentes no servidor físico

- [O que é um servidor web (web server)?](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_is_a_web_server)

### Stacks
>- Front-end  
>>"Parte da frente"  
Site, Software, App, Web Service    Interface, UI (user interface), UX (user experience)  
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