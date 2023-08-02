interface Pessoa {
    email: string 
    gerarDocumento(): void 
    gerarCertificado(): void
}

// utility types - PICK
// PICK só gerarDocumento de Pessoa
class PessoaFisica implements Pick<Pessoa, 'gerarDocumento'> {

    nome: string = ''
    cpf: string = ''
    
    gerarDocumento(): void {
        console.log('Documento de PF ' + this.cpf);
    }
}

// Pick só email e gerarDocuemtno de Pessoa
class PessoaJuridica implements Pick<Pessoa, 'email' | 'gerarDocumento'> {
    
    nome: string = ''
    cnpj: string = ''
    email: string = ''
    
    gerarDocumento(): void {
        console.log('Documento de PJ ' + this.cnpj);
    }
}


const pessoaFisica = new PessoaFisica();
pessoaFisica.cpf = '6163773881';
pessoaFisica.nome = 'Pessoa Física';
pessoaFisica.gerarDocumento();

const pessoaJuridica = new PessoaJuridica();
pessoaJuridica.cnpj = '6163773800001-12';
pessoaJuridica.nome = 'Pessoa Jurídica';
pessoaJuridica.email = 'pj@gmail.com'
pessoaJuridica.gerarDocumento();