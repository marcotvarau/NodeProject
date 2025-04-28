{/*Representação de um espaço na memória do computador*/}
{/*
   Guarda como binário
   JS lida muito bem com strings, mas não com binários
   Buffer é performático para I/O
 */}

 const buf = Buffer.from('hello world')
  console.log(buf.toJSON()) 