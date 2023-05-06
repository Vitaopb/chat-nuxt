<template>
  <div>
    <v-card class="pa-4">
      <h1>Join</h1>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="username"
            label="Username"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn @click="join">ENTRAR</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="pa-4">
      <h1>Chat</h1>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="novaMensagem"
            label="Nova mensagem"
            outlined
            dense
            @keyup.enter="enviarMensagem"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn @click="enviarMensagem">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      novaMensagem: "",
      socket: null,
      username: "",
    };
  },
  methods: {

  },
};
</script>
