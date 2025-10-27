# Bot de Automação (Telegram + n8n) - Desafio Low-Code

Este repositório contém o projeto completo de um bot multifuncional para o Telegram, construído 100% na plataforma de automação n8n.

**Bot no Telegram:** [`@SEU_BOT_AQUI`](https://t.me/SEU_BOT_AQUI) *(<- SUBSTITUA AQUI)*

---

## Visão Geral

O projeto implementa um bot capaz de lidar com 4 casos de uso distintos, utilizando um sistema de gerenciamento de estado com o Google Sheets para permitir conversas complexas e de múltiplos passos.

* **Plataforma:** n8n
* **Interface:** Telegram
* **Banco de Dados (Estado):** Google Sheets
* **Integrações:** Google Drive, Google Docs, Google Apps Script, Gladia.io (IA), G1 (RSS)

## Arquivos do Projeto

* `/workflow-bot-telegram.json`: O arquivo JSON completo do workflow do n8n. Pode ser importado diretamente no n8n (use `Import from File...`).
* `/documentacao-projeto.pdf`: A documentação funcional completa do projeto, com exemplos de uso.
* `/google-apps-script.gs`: O código da "ponte" (Google Apps Script) usado no Caso 2 para inserir imagens em marcadores específicos no Google Docs, contornando uma limitação da API padrão.

## Casos de Uso Implementados

1.  **/criardocs:** Cria um documento PDF a partir de um texto enviado pelo usuário.
2.  **/inserirtextimg:** Inicia um fluxo de múltiplos passos para inserir um texto e uma imagem em marcadores (`<<texto>>` e `<<img>>`) dentro de um modelo do Google Docs.
3.  **/buscarnoticia:** Busca as 5 notícias mais recentes da capa do G1 usando o feed RSS.
4.  **/transcreveraudio:** Pede um áudio, o transcreve usando a API de IA da Gladia.io e retorna o texto para o usuário.
