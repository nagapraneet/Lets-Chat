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
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "add chat name"
      });

      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function redirectToRoomName() {
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
