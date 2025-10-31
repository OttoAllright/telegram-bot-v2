import axios from 'axios'

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatID = process.env.TELEGRAM_CHAT_ID
const repoName = process.env.GITHUB_REPOSITORY
const commit = process.env.GITHUB_SHA.substring(0,7);
const actor = process.env.GITHUB_ACTOR;


const message = `
🚀 **Nuevo Push Detectado** 🚀

- **Repositorio:** \`${repoName}\`
- **Autor:** \`${actor}\`
- **Commit:** \`${commit}\`

El código ha sido actualizado en la rama principal.
`;

const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

axios.post(url,
    {
        chat_id : chatID,
        text: message,
        parse_mode: 'Markdown',
    })

.then(()=>{
    console.log('message sended sucessfully')
    process.exit(0);
})
.catch(error=>{
    console.error('error sending message', error.response.data)
    process.exit(1)
})