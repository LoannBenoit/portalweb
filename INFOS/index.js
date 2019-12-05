const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var dataBaseFile = './database.json'

var accounts = 	JSON.parse(fs.readFileSync(dataBaseFile, 'utf-8'));
var sessions = [];

var genToken = function() {
    return Math.random().toString(36).substr(2);
};
 
app.post('/login', function (req, res) {
	if(req && req.body && req.body.pseudo && req.body.password){
		var account = accounts.find( a => a.pseudo === req.body.pseudo && a.password === req.body.password);
		if(account){
			var token = genToken();
			sessions = sessions.filter(s => s.account !== account);
			sessions.push({ token : token, date: Date.now(), account: account} );
			
			res.send({pseudo: account.pseudo, nom: account.lastname, prenom: account.firstname, token: token});
			console.log('login',account.pseudo,token)
			return;
		}
	}
	res.status(401).send()
})
app.post('/edit', function (req, res) {
	if(req && req.body){
		if(!req.body.nom){
			res.send({valid: false, reason:"nom requis"});
		}else if(!req.body.prenom){
			res.send({valid: false, reason:"prénom requis"});
		}else if(!req.body.token){
			res.send({valid: false, reason:"token requis"});
		}else{
			var session = sessions.find(s => s.token === req.body.token);
			if(!session){
				res.send({valid: false, reason:"token invalid"});
			}else{
				session.account.firstname = req.body.prenom;
				session.account.lastname = req.body.nom;
				fs.writeFile(dataBaseFile, JSON.stringify(accounts), function (err) {
					if (err){
						res.send({valid: false, reason:"Register error"});
					}else{
						res.send({valid: true});
						console.log('edit',session.account.pseudo, session.account.firstname, session.account.lastname)
					}
				  });
			}
		}
		return;
	}
	res.send({valid: false, reason : "request malformed"})
})

app.listen(3000);