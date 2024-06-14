const btn = document.getElementById('js-btn-tts');
const btn_stop = document.getElementById('js-btn-stop');
const content = document.getElementById('js-content-tts');

let voices;
let selected_voices = document.getElementById('js-select-tts');

// voices = window.speechSynthesis.getVoices();
// console.log(voices);

speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    voices.forEach((item,i)=>{
        /**
         * <option></option>
         */
        let opt = document.createElement("option");
        /**
         * <option value="i">i</option>
         */
        opt.value = i;

        /**
         * <option value="i>item.name</option>
         */
        opt.innerText = item.name;

        /**
         * add
         */
        selected_voices.appendChild(opt);

    });
}

btn.addEventListener('click', () => {
    
    //TODO getText()
    let txt =content.textContent;

    //TODO
    let speech = new SpeechSynthesisUtterance(txt);

    //TODO update language
    let index_Voice = selected_voices.value;
    console.log(index_Voice);
    /**
     * ! chenge language
     */
    speech.voice = voices[index_Voice];

    //TODO speech
    speechSynthesis.speak(speech);
});

btn_stop.addEventListener('click', () =>{
    speechSynthesis.cancel();
});