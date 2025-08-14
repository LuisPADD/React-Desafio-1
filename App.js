import React, { Component } from "react";
import { StyleSheet, View, Switch, TextInput, Text, TouchableOpacity , Alert} from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import Slider from "@react-native-community/slider";




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: [{id:0, nome:"Selecione seu Sexo"}, {id:1, nome: 'Masculino'}, {id:2, nome: 'Feminino'}],
      sexoString: 'Vazio',
      sexoselecionado: 0,
      estudante: false,
      limite: 0,
    };

    this.entrar = this.entrar.bind(this);
  }


 entrar() {
    if (this.state.nome === '' || this.state.nome.trim() === '') { 
      Alert.alert('Atenção', 'Preencha o campo Nome');
      return;
    }else if (this.state.idade === '' || this.state.idade.trim() === '') {
      Alert.alert('Atenção', 'Preencha o campo Idade');
      return;
    }else if (this.state.sexoselecionado === 0) {
      Alert.alert('Atenção', 'Selecione o campo Sexo');
      return;
    }else if (this.state.limite === 0) {
      Alert.alert('Atenção', 'Limite deve ser maior que 0');
      return;
    } 
    Alert.alert('Boas Vindas:',
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexoString + '\n' +
      'Estudante: ' + (this.state.estudante ? 'Sim' : 'Não') + '\n' +
      'Limite: R$ ' + this.state.limite.toFixed(2)
    );

  
}

  render() {

   let sexoItems = this.state.sexo.map((v, i) => {return <Picker.Item key={v.id} value={v.id} label={v.nome} enabled={i !==0}/>});

    return (
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 45, fontWeight: 'bold', marginTop: 100}}>Banco Desafio</Text>
        </View>

        <Text style={style.textos}>Nome:</Text>
        <TextInput
        placeholder="Insira o seu Nome"
        borderWidth={1}
        borderRadius={5}
        margin= {5}
        onChangeText={(texto) => this.setState({nome: texto})}

        />
        <Text style={style.textos}>Idade:</Text>
        <TextInput
        placeholder="insira a sua Idade"
        keyboardType="numeric"
        borderWidth={1}
        borderRadius={5}
        margin= {5}
        onChangeText={(texto) => this.setState({idade: texto})}
        />
        <Text style={style.textos}>Sexo:</Text>
        <View style={{borderWidth: 1, borderRadius: 5, margin: 5 }}>
        <Picker
        borderWidth={1}
        selectedValue={this.state.sexoselecionado}
        onValueChange={(itemValue, itemIndex) => this.setState({ sexoselecionado: itemValue, sexoString: this.state.sexo[itemIndex].nome})}
        

        >
          {sexoItems}
        </Picker>
      </View>


        <View >
        <Text style={style.textos}>Estudante?</Text>
        <View style={{alignItems: 'flex-end'}}>
        <Switch 
        value={this.state.estudante}
        onValueChange={(valorSwitch) => this.setState({estudante: valorSwitch})}
        style={{transform: [{ scale: 1.5}], margin: 10}}


        />
        </View>
      </View>

      <View >

        <View style={{alignItems:'center'}}>
        <Text style={style.textos}>Limite:</Text>
        </View>

        <Slider
        minimumValue={0}
        maximumValue={10000}
        maximumTrackTintColor="#ffffffff"
        minimumTrackTintColor="#000000ff"
        thumbTintColor="#000000"
        onValueChange={(valorSlider) => this.setState({ limite: valorSlider})}
        value={this.state.limite}
        
        />

      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold' }}>{this.state.limite.toFixed(2)}</Text>
      </View>
      </View>

      <View style={style.btnArea}>
        <TouchableOpacity
        style={style.botao} 
        onPress={(nome) => this.entrar(nome)}>

        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#ffffffff', marginTop: 10}}>Entrar</Text>
        </TouchableOpacity>

      </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
container: {

  backgroundColor: "#dbdbdbff",
},
textos: {
  margin: 5,
  fontSize: 20,
  fontWeight: 'bold',
},
botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#ffffff7e',
    backgroundColor: '#000000ff',
    borderRadius: 25,
},
btnArea: {
    marginTop: 20,
     alignItems: 'center',
     justifyContent: 'center'
    },
});
