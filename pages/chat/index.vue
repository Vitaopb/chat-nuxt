<template>
  <div style="width: 100%; height: 100%; display: flex">
    <div class="chats">
      <div style="width: 100%">
        <div
          style="
            width: 93%;
            height: 80px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div>
            <h2>My Chats</h2>
          </div>
          <div class="plus-icon">
            <v-icon color="white" size="20">mdi-plus</v-icon>
          </div>
        </div>
        <div class="chat-grid mx-2">
          <div
            @click="viewChat(chat)"
            v-for="(chat, i) in chats"
            :key="i"
            class="chat-card"
          >
            <div>
              <strong>{{ chat.name }}</strong>
            </div>
            <div class="d-flex align-center justify-space-between">
              <span>{{ chat.lastMessage }}</span>
              <span>{{ chat.lastMessageDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-container">
      <div class="chat-container-header">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 97%;
            margin: auto;
            height: 100%;
          "
        >
          <div>
            <h2>{{ currentChatMessages.name }}</h2>
            <strong>
              Created by <span>{{ currentChatMessages.create_name }}</span> at
              <span>{{ currentChatMessages.createdAt }}</span>
            </strong>
          </div>
          <div>
            <v-icon color="white" size="20">mdi-cog</v-icon>
          </div>
        </div>
      </div>
      <div class="chat-container-body">
        <div class="chat-container-body-messages">
          <div
            v-for="(message, i) in currentChatMessages.messages"
            :key="i"
            class="message-card"
          >
            <div
              v-if="message.senderId === user.id"
              class="message-card-sender"
            >
              <div class="message-card-sender-content">
                <span>{{ message.content }}</span>
                <div class="message-card-sender-date">
                  <span>{{ message.createdAt }}</span>
                  <v-icon color="white" size="18">mdi-check</v-icon>
                </div>
              </div>
            </div>
            <div v-else class="message-card-receiver">
              <div class="message-card-receiver-content">
                <span>{{ message.content }}</span>
                <div class="message-card-receiver-date">
                  <span>{{ message.createdAt }}</span>
                  <v-icon color="white" size="18">mdi-check</v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-container-body-input">
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <input
                v-model="newMessage"
                @keyup.enter="sendMessage(currentChatMessages.id)"
                type="text"
                placeholder="Type a message"
              />
              <v-icon color="white" size="20">mdi-paperclip</v-icon>
              <v-icon
                @click="sendMessage(currentChatMessages.id)"
                color="white"
                size="20"
                >mdi-send</v-icon
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        id: 1,
        name: "John Doe",
        email: "test@test.com",
      },
      chats: [
        {
          id: 1,
          name: "Chat 1",
          lastMessage: "Bye, see you later!",
          lastMessageDate: "10:00h",
          creator: "John Doe",
          createdAt: "10:00h",
        },
      ],
      messages: [
        {
          id: 1,
          content: "Hello, how are you?",
          senderId: 1,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 2,
          content: "I'm fine, and you?",
          senderId: 2,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 3,
          content: "I'm fine too!",
          senderId: 1,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 4,
          content: "I'm fine too!",
          senderId: 1,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 5,
          content:
            "I'm fine too! Generate a new message to see the scroll, please, thanks, bye!  please, thanks, bye!  please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye!",
          senderId: 1,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 5,
          content:
            "I'm fine too! Generate a new message to see the scroll, please, thanks, bye!  please, thanks, bye!  please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye!",
          senderId: 2,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 5,
          content:
            "I'm fine too! Generate a new message to see the scroll, please, thanks, bye!  please, thanks, bye!  please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye!",
          senderId: 1,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 5,
          content:
            "I'm fine too! Generate a new message to see the scroll, please, thanks, bye!  please, thanks, bye!  please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye! please, thanks, bye!",
          senderId: 2,
          type: "text",
          chatId: 1,
          createdAt: "10:00h",
        },
        {
          id: 6,
          content: "Bye, see you later!",
          senderId: 2,
          type: "text",
          chatId: 2,
          createdAt: "10:00h",
        },
      ],
      currentChatMessages: [],
      newMessage: "",
    };
  },
  computed: {
    // ...mapGetters(["user", "socket"]),
  },
  created() {},
  methods: {
    viewChat(chat) {
      console.log(chat);
      const messages = this.messages.filter(
        (message) => message.chatId === chat?.id
      );
      this.currentChatMessages = {
        ...chat,
        messages,
      };
    },
    sendMessage(chatId) {
      // this.socket.emit("send_message", {
      //   content: this.newMessage,
      //   senderId: this.user.id,
      //   type: "text",
      //   chatId: chatId,
      // });
      // this.newMessage = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.chats {
  width: 30%;
  height: 100%;
  background-color: #2c2f3d;
  color: white;
  border-right: 2px solid rgba(255, 255, 255, 0.336);
}

.plus-icon {
  border: 1px solid white;
  border-radius: 20px;
  padding: 15px;
  width: 45px;
  height: 30px;
  border: none !important;
  display: flex;
  background-color: #9997fc;
  align-items: center;
  justify-content: center;
}

.chat-card {
  background-color: #726cfe;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
}

.chat-container {
  width: 70%;
  height: 70%;
  background-color: #2c2f3d1d;
  color: white;
}
.chat-container-header {
  height: 80px;
  background-color: #2c2f3d;
}

.chat-container-body {
  height: 89%;
  margin: 15px;
  border-radius: 10px;
  border: 2px solid white;
}

.chat-container-body-messages::-webkit-scrollbar {
  width: 10px;
}

.chat-container-body-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-container-body-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.336);
  border-radius: 15px;
}

.chat-container-body-messages {
  height: calc(100% - 70px) !important;
  overflow-y: auto;
  padding: 10px;
}

.chat-container-body-input {
  padding: 10px;
  background-color: #2c2f3d;
  height: 70px;
  border-radius: 0px 0px 10px 10px;
}

.message-card {
  margin: 10px 0px;
}

.message-card-sender {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.message-card-sender-content {
  background-color: #726cfe;
  padding: 12px;
  border-radius: 17px;
  max-width: 85%;
}

.message-card-sender-date {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font: lighter 12px Arial;
  margin-top: 2px;
  gap: 3px;
}

.message-card-receiver {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.message-card-receiver-content {
  background-color: #726cfe;
  padding: 12px;
  border-radius: 17px;
  max-width: 85%;
}

.message-card-receiver-date {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font: lighter 12px Arial;
  margin-top: 2px;
  gap: 3px;
}
</style>
