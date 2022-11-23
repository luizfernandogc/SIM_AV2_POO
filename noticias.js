class jornalista {
    constructor(foto,nome){
    this.foto = foto;
    this.nome = nome;
}
analisarnoticias() {
    console.log('Analisando notícias.');
  }
}
class noticias extends jornalista {
    constructor(foto, nome, noticia) {
        super(foto,nome);
        this.noticia = noticia;
      }
      analisarnoticias() {
        super.analisarnoticias();
        console.log('Analisou');
      }
      analisarvideos() {
        console.log('Analisando vídeos.');
      }
}
const noticiass = new noticias('3x4' ,'Luiz Fernando', 'Foi assaltado');
const jornalistafamoso = new noticias ('Foto do jornalista','Willian Bonner')
console.log(noticiass)
console.log(jornalistafamoso)

var noticias1 = ['1','2','3'];
var jornalistasss = ['willian','João','Maria'];
let str = "willian,João,Maria";
let patt1 = /a+/g;
let result = str.match(patt1);
console.log(result);