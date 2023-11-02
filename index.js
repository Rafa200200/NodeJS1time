const express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser')
const app = express();

app.listen(3000 , () => console.log("API Server is running..."));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Main');
});

app.use(express.static('Main'));

app.post('/adicionarprof', (request, response) => {
    let nome = request.body.nome;
    let email = request.body.email;
    let curso = request.body.curso;

    console.log(request.body.nome);
    console.log(request.body.email);

    let adduser = data.adduser(nome,email,curso);
    response.status(201).send(adduser);
});

app.delete('/adicionarprof/:id', (request, response) => {
    const id = Number(request.params.id);


    // Lê o ficheiro 'professores.json'
    fs.readFile('array.json', (error, data) => {
      if (error) {
        response.status(500).end();
        return;
      }

      // Obtém a lista de professores
      let array = JSON.parse(data);

      // Procura o professor com o id especificado
      const index = array.findIndex((p) => p.id === id);
      if (index === -1) {
        response.status(404).end();
        return;
      }


      console.log(index)
      // Remove o professor da lista
      array.splice(index, 1);

      // Atualiza o ficheiro 'professores.json' com a lista atualizada
      fs.writeFile('array.json', JSON.stringify(array), (error) => {
        if (error) {
          response.status(500).end();
          console.log(error)
          return;
        }


        // Envia uma resposta para o cliente indicando que a operação foi bem-sucedida
        response.send({ message: 'Professor removido com sucesso' });
      });
    });
  });
  app.put('/adicionarprof/:id', (request, response) => {
    const id = Number(request.params.id);

    const nome = request.body.nome;
    const email = request.body.email;
    const curso = request.body.curso;


    // Lê os ficheiro
    fs.readFile('array.json', (error, data) => {
        if (error) {
          response.status(500).end();
          return;
        }
  
        // Obtém a lista de professores
        let array = JSON.parse(data);
  
      // Procura o professor com o id especificado
      const index = array.findIndex((p) => p.id === id);
      if (index === -1) {
        response.status(404).end();
        return;
      }
  
      // Atualiza os dados do professor
      array[index].nome = nome;
      array[index].email = email;

      array[index].curso = curso;
  
      fs.writeFile('array.json', JSON.stringify(array), (error) => {
        if (error) {
          response.status(500).end();
          return;
        }

    
        // Envia a lista atualizada de professores como resposta
        response.send({ message: 'Professor atualizado com sucesso' });
      });
    });
});

app.post('/adicionaraluno', (request, response) => {
    let nome = request.body.nome;
    let email = request.body.email;
    let curso = request.body.curso;
    let idade = request.body.idade;

    let adduser2 = data.adduser2(nome,email,curso,idade);
    response.status(201).send(adduser2);
});

app.put('/adicionaraluno/:id', (request, response) => {
    const id = Number(request.params.id);

    const nome = request.body.nome;
    const email = request.body.email;
    const curso = request.body.curso;
    const idade = request.body.idade;

    fs.readFile('arrayalunos.json', (error, data) => {
        if (error) {
          response.status(500).end();
          return;
        }
  
        let array = JSON.parse(data);
  
      const index = array.findIndex((p) => p.id === id);
      if (index === -1) {
        response.status(404).end();
        return;
      }
  
      array[index].nome = nome;
      array[index].email = email;
      array[index].idade = idade;
      array[index].curso = curso;
  
      fs.writeFile('arrayalunos.json', JSON.stringify(array), (error) => {
        if (error) {
          response.status(500).end();
          return;
        }
        response.send({ message: 'Aluno atualizado com sucesso' });
      });
    });
});



app.delete('/adicionaraluno/:id', (request, response) => {
    const id = Number(request.params.id);

    fs.readFile('arrayalunos.json', (error, data) => {
      if (error) {
        response.status(500).end();
        return;
      }

      let array = JSON.parse(data);
  
      const index = array.findIndex((p) => p.id === id);
      if (index === -1) {
        response.status(404).end();
        return;
      }

      console.log(index)
      array.splice(index, 1);
      
      fs.writeFile('arrayalunos.json', JSON.stringify(array), (error) => {
        if (error) {
          response.status(500).end();
          console.log(error)
          return;
        }

  
        response.send({ message: 'Professor removido com sucesso' });
      });
    });
  });

app.post('/adicionarcurso', (request, response) => {
    let nome = request.body.nome;
    let cadeiras = request.body.cadeiras;
    let numero = request.body.numero;

    let addcurso = data.addcurso(nome,cadeiras,numero);
    response.status(201).send(addcurso);
});

app.put('/adicionarcurso/:id', (request, response) => {
  const id = Number(request.params.id);

  const nome = request.body.nome;
  const cadeiras = request.body.cadeiras;
  const numero = request.body.numero;

  fs.readFile('arrayescolacursos.json', (error, data) => {
      if (error) {
        response.status(500).end();
        return;
      }

      let array = JSON.parse(data);

    const index = array.findIndex((p) => p.id === id);
    if (index === -1) {
      response.status(404).end();
      return;
    }

    array[index].nome = nome;
    array[index].cadeiras = cadeiras;
    array[index].numero = numero;


    fs.writeFile('arrayescolacursos.json', JSON.stringify(array), (error) => {
      if (error) {
        response.status(500).end();
        return;
      }

      response.send({ message: 'Curso atualizado com sucesso' });
    });
  });
});

app.delete('/adicionarcurso/:id', (request, response) => {
  const id = Number(request.params.id);

  fs.readFile('arrayescolacursos.json', (error, data) => {
    if (error) {
      response.status(500).end();
      return;
    }

    let array = JSON.parse(data);

    const index = array.findIndex((p) => p.id === id);
    if (index === -1) {
      response.status(404).end();
      return;
    }

    console.log(index)
    array.splice(index, 1);
    
    fs.writeFile('arrayescolacursos.json', JSON.stringify(array), (error) => {
      if (error) {
        response.status(500).end();
        console.log(error)
        return;
      }

      response.send({ message: 'Curso removido com sucesso' });
    });
  });
});

app.get('/arrayescolacursos.json', function(req, res) {
  res.sendFile(__dirname + '/arrayescolacursos.json');
});

app.get('/array.json', function(req, res) {
  res.sendFile(__dirname + '/array.json');
});

app.get('/arrayalunos.json', function(req, res) {
  res.sendFile(__dirname + '/arrayalunos.json');
});

app.listen(port,hostname,()=>{
    console.log("server operacional!");
});