var app = new Vue({
    el: '#app',
    data: {
      messages: [],
      newMessageText: "",
      loading: true,
    },
    created: async function() {
      console.log("created>>>>", this.currentUser )

      db.collection("messages")
        .orderBy("createdAt", "asc")
        .onSnapshot((querySnapshot)=> {
          this.loading = false;
          const chatArea = document.getElementById('chatArea')
          if(chatArea) {
            chatArea.scrollTop = chatArea.scrollHeight;
          }
            this.messages = [];
            querySnapshot.forEach((doc) => {
              this.messages.push(doc.data())
            });
        });
    },
    methods: {
      addMessage: function() {
        const message = {
          author: "You",
          text: this.newMessageText,
          createdAt: new Date()
        }

        this.addToFirestore(message);
        this.newMessageText = "";
      },
      addToFirestore: function(message) {
        db.collection("messages").add({
          author: message.author,
          text: message.text,
          createdAt: message.createdAt
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
    }
  })