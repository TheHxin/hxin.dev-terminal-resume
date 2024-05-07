const terminal = document.getElementById('terminal');
var lastInputLine = null;

const welcome_text = 
`<pre style="color: red;">
                  Please enter "help" for the list of commands 
</pre>`;

function welcome(){
  addToTerminal(welcome_text);
}

function addToTerminal(text) {
  terminal.innerHTML += '<p style="margin:0;">' + text + '</p>';
  terminal.scrollTop = terminal.scrollHeight;
}

function processCommand(command) {
  if (command === "email") {email();}
  else if (command === "support") {support();}
  else if (command === "clear") {clear();}
  else if (command === "exit") {exit();}
  else if (command === "help") {help();}
  else if (command === "github") {github();}
  else if (command === "neofetch") {neofetch();}
  else {addToTerminal('<span>command not found:</span> ' + command)}
}

function addInputLine() {    
  const inputLine = document.createElement('div');
  inputLine.classList.add('input-line');
  inputLine.innerHTML = '<span class="prompt">hxin@kali:~$</span><input class="input" type="text">';
  terminal.appendChild(inputLine);
  const input = inputLine.querySelector('.input');
  input.focus();
  lastInputLine = inputLine;
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      if (command !== '') {
        lastInputLine.remove()
        addToTerminal('<span style="margin-right:10px;" class="prompt">hxin@kali:~$</span>' + command);
        processCommand(command);
        addInputLine();
      }
      else{

        lastInputLine.remove()
        addToTerminal('<span style="margin-right:10px;" class="prompt">hxin@kali:~$</span>' + command);
        addInputLine()
      }
    }
  });
}
welcome();
addInputLine();