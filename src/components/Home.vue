<template>
  <v-container fluid>
    <v-form>
        <v-file-input
          label="Selecione as Legendas"
          prepend-icon="mdi-message-text"
          append-outer-icon="mdi-send"
          outlined
          multiple
          chips
          v-model="files"
          @click:append-outer="processSubtitles" />        
    </v-form>
    <div class="pills">
        <Pill v-for="word in groupedWords" :key="word.name"
          :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Pill from './Pill.vue'

export default {
    name: "Home",
    components: { Pill },
    created() {
      console.log(ipcRenderer)
    },
    data: function() {
      return {
        files: [],
        groupedWords: [
          { name: 'i', amount: 1234},
          { name: 'you', amount: 900},
          { name: 'he', amount: 853},
      
        ]
      }
    },
    methods: {
      processSubtitles() {
        console.log(this.files)

        ipcRenderer.send('port', 'ping')
        ipcRenderer.on('port', (event, resp) => {          
          console.log(resp)
        })
      }
    }
    

}
</script>
  
<style>
  .pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>