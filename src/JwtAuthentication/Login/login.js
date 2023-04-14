/* JwtAuthentication

Mit POST http://localhost:3000/auth/jwt/sign wird ein 
jwt token erstellt.

Das sind die Login informationen 
mit denen der token erstellt werden sollte:

email : info@example.com
password : m294

also zurück bekommt man einen token, das sieht so aus:
{
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLnN0ZWluZXJAdGVzdC5jb20iLCJpYXQiOjE2NjE1MTE4NDV9.RpqenBNGG2DVlG2Y25SWdvEni8Q16ie9-tulRBSlzoo"
}

Der token muss bei jedem weiteren request mitgeschickt werden,
aslo der Benutzer bleibt eingeloggt bis er sich ausloggt, also
den localstorage löscht.

Kurz zusammengefasst:
Benutzer loggt sich mit Email und Passwort ein, daraus wird
einen Token erstellt, der im Localstorage gespeichert wird, bis
sich der Benutzer ausloggt.
*/

// Prüft ob ich eingelogt bin
// Hole den Token aus dem LocalStorage
const token = localStorage.getItem('token');

// Erstelle das Bild-Element und füge es der body hinzu
const img = document.createElement('img');
img.alt = "Login Icon";
img.className = "login-img";
const loginIcon = document.createElement('div');
loginIcon.className = "login-icon";
loginIcon.appendChild(img);
document.body.appendChild(loginIcon);

// Überprüfe, ob der Token vorhanden ist und setze entsprechend das Bild-Element
if (!token) {
    img.src = "/src/JwtAuthentication/Grafiken/geschlossenesSchloss.png";
    img.title = "You are not logged in";
    console.log("You are not logged in")
} else {
    img.src = "/src/JwtAuthentication/Grafiken/offenes-schloss-hacking-konzept-cyber-security-hintergrund-twa34d-PhotoRoom.png-PhotoRoom.png";
    img.title = "You are logged in";
    console.log("You are logged in")
}




const form = document.querySelector('#login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    const response = await fetch('http://localhost:3000/auth/jwt/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        alert('Login unsuccessful. Please check your credentials and try again.'); // Error message wenn man sich Falsch einloggt
        return;
    }

    const data = await response.json();
    const token = data.token;

    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/src/JwtAuthentication/index.html'; // Pfad für die nächste Seite, also auf die man nach dem erfolgreichen einloggen kommt
    }
});