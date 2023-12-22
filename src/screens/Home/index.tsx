import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

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

      <FlatList 
        data={participants} 
        keyExtractor={(_item, i) => String(i)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            onRemove={() => {handleParticipantRemove(item)}} 
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}> 
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}
