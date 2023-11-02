const fs = require('fs'); 

let array = []
let arraycurso = []

let arrayalunos = []
let arraycurso2 = []

let arrayescolacursos = []

function adduser(nome,email,curso){
  try {
    array = JSON.parse(fs.readFileSync('array.json', 'utf8'));
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }

    let id = array.length + 1;

    let objeto = {
        "id":"",
        "nome": "",
        "email": "",
        "curso":"",
    };

    objeto.id = id;
    objeto.nome = nome;
    objeto.email = email;
    objeto.curso = curso;

    array.push(objeto);


    try {
        fs.writeFileSync('array.json', JSON.stringify(array));
      } catch (error) {
        console.error('Erro ao salvar o arquivo de cursos:', error);
      }
      
    return array;
    
}

function adduser2(nome,email,curso,idade){

  try {
    arrayalunos = JSON.parse(fs.readFileSync('arrayalunos.json', 'utf8'));
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }

  let id = arrayalunos.length + 1;


  let objeto = {
      "id":"",
      "nome": "",
      "curso":"",
      "email": "",
      "idade": "",
  };

  objeto.id = id;
  objeto.nome = nome;
  objeto.curso = curso;
  objeto.email = email;
  objeto.idade = idade;

  arrayalunos.push(objeto);

  try {
      fs.writeFileSync('arrayalunos.json', JSON.stringify(arrayalunos));
    } catch (error) {
      console.error('Erro ao salvar o arquivo de cursos:', error);
    }
    
  return arrayalunos;
  
}

function addcurso(nome,cadeiras,numero){

  try {
    array = JSON.parse(fs.readFileSync('arrayescolacursos.json', 'utf8'));
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }

    let id = array.length + 1;

    let objeto = {
        "id":"",
        "nome": "",
        "cadeiras": "",
        "numero":"",
    };


    objeto.id = id;
    objeto.nome = nome;
    objeto.cadeiras = cadeiras;
    objeto.numero = numero;

    array.push(objeto);


    try {
        fs.writeFileSync('arrayescolacursos.json', JSON.stringify(array));
      } catch (error) {
        console.error('Erro ao salvar o arquivo de cursos:', error);
      }
      
    return array;
  
}

module.exports= {
    adduser: adduser,
    adduser2 : adduser2,
    addcurso : addcurso,
};