
const comparar_contraseñas = (contraseña,repetir_contraseña)=>{
   console.log(contraseña,repetir_contraseña)
    if(contraseña === repetir_contraseña){
        console.log("son iguales")
       /* const contraseñaSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contraseña);
        if (!contraseñaSegura) {
            console.log("contraseña segura")
            return true
        }
        else{
            return 'La contraseña debe contener al menos una mayúscula, una minúscula, un número, un carácter especial y tener 8 caracteres o más'
        }*/
        
    }
}
const validar_usuario =async (datos_usuario) => {
    let usuario = datos_usuario.find((dato) => dato.Usuario) 
    let correo = datos_usuario.find((dato) => dato.Correo) 
    let contra = datos_usuario.find((dato) => dato.Contraseña)
    let repetir_contraseña = datos_usuario.find((dato) => dato.Repetir_Contraseña) 
    if(usuario && correo && contra && repetir_contraseña){
        usuario= usuario.Usuario
        correo = correo.Correo
        contra = contra.Contraseña
        repetir_contraseña = repetir_contraseña.Repetir_Contraseña
        comparar_contraseñas(contra,repetir_contraseña)
       
      
          // Realizar la solicitud fetch al servidor
          await fetch('http://localhost/registro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({usuario:usuario, correo:correo,contra:contra}) // Convertir los datos a JSON
          });
    }
    
    
    

 


};

 
const enviar_datos_usuario = (entradas,datos_usuario) =>{
    entradas.forEach(datos => {
        datos_usuario.push({[datos.nombre]:datos.valor})
        
    });
      validar_usuario(datos_usuario)
    return {
        enviar_datos_usuario
    }
}

export{
    enviar_datos_usuario
}