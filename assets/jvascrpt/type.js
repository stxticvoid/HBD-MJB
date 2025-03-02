var i = 0;
var txt = '<br><br> I just wanted to take a moment to tell you how much I appreciate you. You’re honestly such an amazing person—your kindness, creativity, and the way you always care for the people around you really blows me away. You have this way of brightening everyone’s day, and I’m honestly so lucky to call you a friend.<br><br> I hope today is everything you deserve and more, and that this year brings you all the things you’ve been dreaming of. You truly deserve all the happiness in the world, and I can’t wait to see all the incredible things you’ll accomplish. <br><br> Here’s to another year of laughter, new adventures, and making unforgettable memories. Enjoy every moment of your special day! <br><br> With love,  Toto <3 <br>';
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
