import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


const tweets = [] //aqui eu to criando uma lista vazia onde vao ter todos os tweets
const users=[] // msm coisa aqui, com todos os usuarios
// o user vai ter um nome E avatar... lembrar de dar push no nome e no avatar, nao só no nome
let avatar=''


app.post('/sign-up', (req, res) => {
    const user = req.body.username
    avatar = req.body.avatar
    users.push({username:user, avatar:avatar});
    res.send(console.log(avatar));

});

app.get('/sign-up', (req, res) => {
    res.send(users)
}) 

app.post('/tweets', (req, res) => {
    const tweet={username:'', tweet:''}
    tweet.username = req.body.username // aqui eu crio uma variavel que recebe o conteudo do corpo de quando alguem faz um requisição post
    tweet.tweet=req.body.tweet
    
    const isOn=users.find(u=> u===req.body.username)
    res.send(tweet);
    if (!isOn){
        res.send('UNAUTHORIZED')
    }

    tweets.push({...tweet, avatar: avatar}); // aqui eu adiciono um tweet na lista de tweets==
});

app.listen(5000, () => { console.log('teste') });
