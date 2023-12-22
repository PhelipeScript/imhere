import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Phelipe', 'Diego', 'Mayk', 'Jake', 'Ana', 'Isa', 'Bia', 'Ste', 'Mey', 'Mari']

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, i) => (
            <Participant 
              key={i} 
              name={participant} 
              onRemove={() => {handleParticipantRemove(participant)}} 
            />
          ))
        }
      </ScrollView>

    </View>
  )
}
