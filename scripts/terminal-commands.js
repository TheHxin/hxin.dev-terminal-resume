const asciiart_text =
`
<pre>
      ___ ___        .__         ___________                  .__              .__
     /   |   \\___  __|__| ____   \\__    ___/__________  _____ |__| ____ _____  |  |
    /    ~    \\  \\/  /  |/    \\    |    |_/ __ \\_  __ \\/     \\|  |/    \\\\__  \\ |  |
    \\    Y    />    <|  |   |  \\   |    |\\  ___/|  | \\/  Y Y  \\  |   |  \\/ __ \\|  |__
     \\___|_  //__/\\_ \\__|___|  /   |____| \\___  >__|  |__|_|  /__|___|  (____  /____/
           \\/       \\/       \\/               \\/            \\/        \\/     \\/
</pre>
`;

const help_text = 
`
<pre>
    help -> shows this menu
    github -> opens TheHxin's GitHub page
    neofetch -> shows the ascii art
    clear -> clears the screen
    exit -> exists the terminal (closes this page)
</pre>
`
/* ---------------------------------------------------------------------------------------- */




function clear(){
    const terminal = document.getElementById('terminal')
    terminal.innerHTML = '';
}
function exit(){
    close()
}
function neofetch(){
    terminal.innerHTML += asciiart_text
}
function help(){
    terminal.innerHTML += help_text
}
function github(){
    addToTerminal("<a href='https://github.com/TheHxin' target='_blank'>TheHxin's GitHub</a>")
    window.open("https://github.com/TheHxin","_blank")
}