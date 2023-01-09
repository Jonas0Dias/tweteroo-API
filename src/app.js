import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


const tweets = [] //aqui eu to criando uma lista vazia onde vao ter todos os tweets
const users=[] // msm coisa aqui, com todos os usuarios
// o user vai ter um nome E avatar... lembrar de dar push no nome e no avatar, nao só no nome
let avatar={avatar:''}
app.post('/tweets', (req, res) => {
    const tweet={username:'', avatar:'', tweet:''}
    tweet.username = req.body.username // aqui eu crio uma variavel que recebe o conteudo do corpo de quando alguem faz um requisição post
    tweet.tweet=req.body.tweet
    
    const isOn=users.find(u=> u===req.body.username)
    res.send(tweet);
    if (!isOn){
        res.send('UNAUTHORIZED')
    }

    tweets.push({...tweet, avatar: avatar}); // aqui eu adiciono um tweet na lista de tweets==
});

app.post('/sign-up', (req, res) => {
    const user = req.body.username
    const avatar = req.body.avatar
    users.push({user, avatar});
    res.send("ok");

});

app.get("/tweets", (req, res) =>{
    const Ultimostweets = tweets.reverse()
    res.send(Ultimostweets.slice(0,11))
})

app.listen(5000, () => { console.log('teste') });
