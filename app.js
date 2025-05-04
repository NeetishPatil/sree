
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        
        speak("Good Morning...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon...")
    }

    else{
        speak("Good Evenining...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing SHREE..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hello')){
        speak("Not SIRI not GEMINI, This is SHREE. How can I Help You?");
    }
    else if(message.includes('hi')){
        speak("Initializing SHREE..");
            wishMe();
    }
    else if(message.includes('neetu')){
        speak("i think she is a big idiot");
    }
    else if(message.includes('tell about yourself') || message.includes('who are you')){
        speak('Hello How are you, I am Shree, i am a artificial intelligence software Made with more perfection. Thank you for using me');
    }
    else if(message.includes('your creator name') || message.includes('who made you')){
        speak('Neetish. He is the person who designed me, in the memoriese of his crush. He is a good person i think.');
    }
    else if(message.includes('can we become friends') || message.includes('will you be my friend')){
        speak('Yah, definately it will be my pleasur to become your friend. It is so fantastic, i got a new friend haha ha ha');
    }
    else if(message.includes('define v square') || message.includes('tell about vikas and vaishnavi')){
        speak('vikas and vaishnavi,   they say they are good friends, but it is not true, they look like good couples(sita , ram), lets hope for it.');
    }
    else if(message.includes('about akshata')){
        speak('Oh, sorry, I m completely crushed. It is hard to find about her, but you know, she is incredibly beautiful—like a doll—and so hardworking. She dreams of becoming a doctor, and I truly believe she’ll succeed. One day, her dedication will take her to the top. And when that day comes, I just hope I’m there to see her shine, standing right beside her.');
    }
    else if(message.includes('thank you') || message.includes('thanks')){
        speak('its ok, i am here to help you any time')
    }
    else if(message.includes('refresh')){
            speak("Initializing SHREE..");
            wishMe();
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "this i found on internet";
	    speak(finalText);
  
    }
    else if(message.includes('open wikipedia')){
        window.open("https://www.wikipedia.org/", "_blank");
        speak("opening wikipedia...")
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('tell the time') || message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('today date') || message.includes('date of the day') || message.includes('date')){
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')){
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message
        speak(finalText);
    }
}