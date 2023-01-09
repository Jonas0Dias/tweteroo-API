import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


const tweets = [] //aqui eu to criando uma lista vazia onde vao ter todos os tweets
const users=[] // msm coisa aqui, com todos os usuarios
// o user vai ter um nome E avatar... lembrar de dar push no nome e no avatar, nao só no nome
let usuarioavatar={avatar:""}
app.post('/sign-up', (req, res) => {
    const user = req.body
    users.push(user);
    usuarioavatar.avatar=user.avatar
    res.status(200).send("OK")

});

app.post('/tweets', (req, res) => {
    const tweet=req.body
     // aqui eu crio uma variavel que recebe o conteudo do corpo de quando alguem faz um requisição post
    
    
    const isOn=users.find(u=> u===req.body.username)
    res.send(tweet);
    if (!isOn){
        res.send('UNAUTHORIZED')
    }

    tweets.push({...usuarioavatar, ...tweet}); // aqui eu adiciono um tweet na lista de tweets==
    res.status(200).send("OK")
});

app.get('/tweets', (req,res) => {
    if (tweets.length > 10){
        const ultimostweets = tweets.slice(-10)
        return res.send(ultimostweets)
     }


    res.send(tweets)
})

app.listen(5000, () => { console.log('teste') });
