<template>
  <div>
    <div class="form-card">
      <div class="form-title">Welcome 👋</div>

      <div class="form-subtitle">
        Please, enter with fields below to join the chat.
      </div>

      <div class="auth">
        <div class="auth-input d-flex">
          <input
            style="outline: none; border: none; width: 95%; color: white;"
            type="text"
            placeholder="Username"
            v-model="user.name"
          />
          <v-icon color="white">
            mdi-account-outline
          </v-icon>
        </div>
        <div class="d-flex auth-input">
          <input
            style="outline: none; border: none; width: 95%; color: white;"
            type="text"
            placeholder="Email"
            v-model="user.email"
          />
          <v-icon color="white">
            mdi-email-outline
          </v-icon>
        </div>
        <div class="d-flex auth-input">
          <input
            style="outline: none; border: none; width: 95%; color: white;"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            v-model="user.password"
          />
            <v-icon @click="showPassword = !showPassword" color="white">{{ showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline' }}</v-icon>
        </div>
        <button @click="join" class="auth-button">Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    async join() {
      this.socket = await this.$nuxtSocket({
        name: "chat",
      });
      this.socket.emit("set_username", this.user);
      this.socket.on("user_created", (user) => {
        this.user = user;
      });
      this.$store.commit("setUser", this.user);
      this.$store.commit("setSocket", this.socket);
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.form-title {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #e8e8e8;
  padding-bottom: 12px;
}

.form-subtitle {
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #afafaf;
  padding-bottom: 24px;
}

.auth {
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 12px;
}
.auth-label {
  position: absolute;
  top: 8px;
  left: 18px;
  font-size: 11px;
  color: rgb(175, 175, 175);
  width: 100px;
}
.auth-input {
  background-color: #3e404b;
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 18px;
  width: 100%;
  margin-bottom: 12px;
}
.auth-button {
  width: 100%;
  height: 53px;
  color: white;
  background-color: #fa541c;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.44s ease;
  -webkit-transition: all 0.44s ease;
  -moz-transition: all 0.44s ease;
}
.auth-button:hover {
  filter: brightness(145%);
}
</style>
