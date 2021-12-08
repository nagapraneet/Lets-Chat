var firebaseConfig = {
      apiKey: "AIzaSyDLh211V85Rb4wAsDmMWyuq0d-CeqZRgJY",
      authDomain: "lets-chat-b0ca7.firebaseapp.com",
      databaseURL: "https://lets-chat-b0ca7-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b0ca7",
      storageBucket: "lets-chat-b0ca7.appspot.com",
      messagingSenderId: "330082524901",
      appId: "1:330082524901:web:1e57decabe411329c87e0c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
