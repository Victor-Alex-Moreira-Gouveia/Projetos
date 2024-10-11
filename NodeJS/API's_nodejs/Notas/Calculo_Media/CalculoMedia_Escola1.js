import Alunos from "../Dados/Lista_Escola1.js";

// Nota media valentina da Silva
  export function Media_valentina() {
    for (let lista = 0; lista < Alunos.length; lista++) {
      if (Alunos[lista].Nome === "Valentina da Silva") {
        const b1 = Number(Alunos[lista].Bimestre1);
        const b2 = Number(Alunos[lista].Bimestre2);
        const b3 = Number(Alunos[lista].Bimestre3);
        const b4 = Number(Alunos[lista].Bimestre4);
  
        const Calculo = b1 + b2 + b3 + b4;
        const Media = Calculo / 4;
        
        return Media; // Retorna a média
      };
    };
  };

  export function Media_anacarolina() {
    for (let lista = 0; lista < Alunos.length; lista++) {
      if (Alunos[lista].Nome === "Ana Carolina") {
        const b1 = Number(Alunos[lista].Bimestre1);
        const b2 = Number(Alunos[lista].Bimestre2);
        const b3 = Number(Alunos[lista].Bimestre3);
        const b4 = Number(Alunos[lista].Bimestre4);
  
        const Calculo = b1 + b2 + b3 + b4;
        const Media = Calculo / 4;
        
        return Media; // Retorna a média
      };
    };
  };

  export function Media_joaodasilva() {
    for (let lista = 0; lista < Alunos.length; lista++) {
      if (Alunos[lista].Nome === "João Pereira da Silva") {
        const b1 = Number(Alunos[lista].Bimestre1);
        const b2 = Number(Alunos[lista].Bimestre2);
        const b3 = Number(Alunos[lista].Bimestre3);
        const b4 = Number(Alunos[lista].Bimestre4);
  
        const Calculo = b1 + b2 + b3 + b4;
        const Media = Calculo / 4;
        
        return Media; // Retorna a média
      };
    };
  };
