import React, {useState} from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  } from "@material-ui/core";

function FormularioCadastro() {
    const [nome, setNome] =useState("");
    const [sobrenome, setSobrenome] =useState("")
    const [cpf,setCpf] =useState("")
    

  return (
    <>
      <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log (nome, sobrenome, cpf)
        }}
      >
        <TextField
        value ={nome}
        onChange={(event)=>{
            let tmpNome = event.target.value;
            setNome(event.target.value);
            if (tmpNome.lenght>=3){
                tmpNome = tmpNome.substr(0,3);
            }
            setNome(tmpNome);
        }}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
            value={sobrenome}
            onChange={(event)=>{
            setSobrenome(event.target.value);
            if (sobrenome.lenght>3){
                setSobrenome(sobrenome.substr(0,3));
            }
        }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          value={cpf} 
          onChange={(event)=>{
            setCpf(event.target.value);
            if (cpf.lenght=11){
                setSobrenome(cpf.substr(0,3));
            }
        }}
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="dense"
        />

        <FormControlLabel
          control={<Switch defaultChecked name="checkedB" color="primary" />}
          label="Promoções"
        />

        <FormControlLabel
          control={<Switch defaultChecked name="checkedB" color="primary" />}
          label="Newsletter"
        />

        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
}

export default FormularioCadastro;
