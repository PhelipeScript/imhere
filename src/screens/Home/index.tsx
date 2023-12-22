import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}!`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Dezembro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Phelipe" onRemove={() => {handleParticipantRemove('Phelipe')}} />
      <Participant name="Diego" onRemove={() => {handleParticipantRemove('Diego')}} />
      <Participant name="Mayk" onRemove={() => {handleParticipantRemove('Mayk')}} />
    </View>
  )
}
