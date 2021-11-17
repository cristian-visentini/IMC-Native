import React, {useState} from 'react';
import {Button, Text, TextInput, View } from 'react-native';
import ResultImc from './ResultImc/index';

export default function Form(){
    const [height, setHeight]= useState(null);
    const [weight, setWeight]= useState(null);
    const [messageImc, setMessageImc]= useState('Prencha Peso e Altura');
    const [imc, setImc]= useState(null);
    const [TextButton, setTextButton]= useState('Calcular');

    function ImcCalc(){
        return setImc((weight/(height * height)).toFixed(2));
    }

    function validatorImc(){
        if(weight != null && height != null){
            ImcCalc();
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu IMC é Igual: ');
            setTextButton('Calcular Novamente');
            return;
        }
        setImc(null);
        setTextButton('Calcular');
        setMessageImc('Preencha o Peso e Altura')
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="1.73"
                keyboardType="numeric"></TextInput>

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="55"
                keyboardType="numeric"></TextInput>

                <Button 
                onPress={()=> validatorImc()}
                title={TextButton}></Button>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    )
}