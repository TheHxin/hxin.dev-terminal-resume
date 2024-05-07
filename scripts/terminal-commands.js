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
    support -> support with buying me a coffee
    neofetch -> shows the ascii art
    email -> In case you want to contact me, you can just send an email
    clear -> clears the screen
    exit -> exists the terminal (closes this page)
</pre>
`
/* ---------------------------------------------------------------------------------------- */


function email(){
    addToTerminal("<a href='mailto:radin@hxin.dev'>Email Me!</a>")
    window.open("mailto:radin@hxin.dev","_blank")
}
function support(){
    addToTerminal("<a href='https://www.buymeacoffee.com/hxin' target='_blank'>Buy Me A Coffee</a>")
    addToTerminal("<span> Thanks for your support ! </span>")
    window.open("https://www.buymeacoffee.com/hxin","_blank")
}
function clear(){
    const terminal = document.getElementById('terminal')
    terminal.innerHTML = '';
    addToTerminal(welcome_text);
}
function exit(){
    window.close()
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