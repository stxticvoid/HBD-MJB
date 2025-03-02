var i = 0;
var txt = '<br><br> Hello Mika, <br><br> I just wanted to take a moment to tell you how much I appreciate you, it’s because of Arrupe Social Formation we’ve got to know each other. Nag effort ka gid na sulatan mo ko sang letter ba haha. Thank you for being patient with me in times na grabe ko ka busy, lagaw lang ta sunod ah. I thank you also for introducing me to ACAC, nag ka org ko biglaan na upod ta haha. I’m honestly so lucky to call you my friend.<br><br> I hope today is everything you deserve and more, and that this year brings you all the things you’ve been dreaming of. You truly deserve all the happiness in the world, and I can’t wait to see all the incredible things you’ll accomplish. Continue to strive for the best. <br><br> Here’s to another year of laughter, new adventures, and making unforgettable memories. Enjoy every moment of your special day! <br><br> - Toto MJ <br>';
var speed = 50;
var isTypingDone = false; // Global variable to track typing status

function typeWriter() {
  if (!isTypingDone) {
    if (i < txt.length) {
      if (txt.charAt(i) === '<') {
        const tagEnd = txt.indexOf('>', i) + 1; // Find the end of the tag
        document.getElementById("demo").innerHTML += txt.substring(i, tagEnd);
        i = tagEnd; // Move index to after the tag
      } else {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
      }
      setTimeout(typeWriter, speed); // Schedule the next character
    } else {
      isTypingDone = true; // Set the flag to true once done
    }
  }
}
