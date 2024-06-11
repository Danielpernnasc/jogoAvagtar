class heroi {

    static tipos = [
        { tipo: 'guerreiro', arma: 'espada' },
        { tipo: 'monge', arma: 'artes marciais' },
        { tipo: 'ninja', arma: 'shuriken' },
        { tipo: 'mago', arma: 'Magia' }
        ];
    //static armas = ['espada', 'artes marciais', 'shuriken', 'Magia'];
    constructor(nome = 'Daniel', idade = 43, tipoIndex = 0
    ){

     
        this.nome = nome,
        this.idade = idade,
        this.tipoIndex = tipoIndex;
        this.tipoIndex = tipoIndex;
       }
    

  
    
    Oheroi(){
        //const tipoAvatar = heroi.tipos[this.tipoIndex];
        const tipoAvatar = this.tipoIndex < heroi.tipos.length ? heroi.tipos[this.tipoIndex].tipo : 'arma desconhecida';
        console.log(`O heroi ${this.nome}, de ${this.idade}, é um ${tipoAvatar}`)
        
        return tipoAvatar;
    }

    atacar(){

   
        const tipoHeroi = this.Oheroi();
        //const tipoArma = heroi.armas[this.armaIndex];
        const tipoArma = this.tipoIndex < heroi.tipos.length ? heroi.tipos[this.tipoIndex].arma : 'arma desconhecida';
        console.log(`O ${tipoHeroi}, ${this.nome}, ataca com a ${tipoArma}`);
    }
}


let HERO = new heroi(this.nome, this.idade, 0); //alterna apenas o numeros de de 0 a 3

HERO.atacar();



