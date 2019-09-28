var app = new Vue({
  el: '#app',
  data: {
    messages: [],
    newMessage: "",
    unsavedUsername: "",
    username: "",
  },
  created: function(){
    db.collection("messages")
      .orderBy('date', 'asc')
      .onSnapshot(messagesCollection => {
        this.messages = [];
        messagesCollection.forEach(messageItem => {
          this.messages.push(messageItem.data());
        });
      })
  },
  methods: {
    logout: function(){
      this.username = "";
    },
    saveUsername: function(){
      this.username = this.unsavedUsername;
    },
    resetMessageInput: function() {
      this.newMessage = '';
    },
    enterNewMessage: function(){
      const newMessage = {
        message: this.newMessage,
        date: new Date(),
        username: this.username,
      }

      this.addToFirestore(newMessage);
      this.resetMessageInput();
    }, 
    addToFirestore: function(newMessage){
      db.collection('messages')
        .add(newMessage)
        .catch(function(error){
          console.log(error);
        })
    }
  }
})