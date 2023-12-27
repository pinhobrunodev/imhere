import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import React, {useState} from "react"

export function Home() {
  const EMPTY_VALUE = "";

  const [participants,setParticipants] = useState<string[]>([]);
  const [participantName,setParticipantName] = useState(EMPTY_VALUE);

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe","Já existe um participante com este nome.")
    }
    setParticipants(prevState =>[...prevState,participantName])
    setParticipantName(EMPTY_VALUE);
  }


  function handleParticipantRemove(name: string) {
    
    Alert.alert("Remover",`Remover o participante ${name}?`,[
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}