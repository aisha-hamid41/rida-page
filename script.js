const text =
    "Salam Rida🥹 I hope you find it in your heart to forgive me.  Sometimes the heart speaks best in silence, but today, mine needed to speak through code :), I honeslty feel bad about what I did, It was a mistake, I messed up :( I miss our conversations, I'm just gonna be real here. My brain is jacked and I'm sooo stressed😂, I've no idea what to even be saying😂, but then yeah, I've never quite done this before, coding ain't for the weak😂, but then Alhamdulillah this is sort of like a brain dump, Okay I don't think I deserve forgiveness, ughhh I'm the worst😭, I'm so sorry my sister😔, I keep messing up these days and regretting it baig time, okay I don't think I'll end up showing this to you cos it dosen't seem good enough😔, I think i'll shut up now, Ok but I won't re-read this cos I know I'll prolly not end up sending it, but then yeah, I miss you girl🫂, May Allah soften your heart🥹🫂............";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
    if(i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textcount").textContent += arr[i];

        i++;
        console.log("The i count: " + i);
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]))
    }
}

function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin() {
    i = 0;
    dashOut(paragraph);
}

startFromBegin();