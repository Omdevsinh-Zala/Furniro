const dark = document.getElementById('dark');
dark.addEventListener('click',(e) => {
    e.preventDefault();
    let theme = localStorage.getItem('theme')
    if(!theme) {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark')
    }
    if(theme == 'light') {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark')
    } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark')
    }
})

function check() {
    let theme = localStorage.getItem('theme')
    if(theme && theme == 'dark') {
        document.body.classList.add('dark')
    }
}
check();

const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new speechRecognitionList();
const speechRecognitionLists = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionLists;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = 'red';
};
