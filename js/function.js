// Reference: https://alvarotrigo.com/blog/css-text-animations/
var words = ['Freelancer.', 'Developer.', 'Designer.', 'Vexel and Graphic Artist.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function() {
    setInterval(function() {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function() {
    wordflick();
});


const form = document.querySelector('.contact_form')

function sendMsg(e) {
    e.preventDefault();

    const email = document.querySelector('.contact_form'),
        subject = document.querySelector('.contact_form'),
        message = document.querySelector('.contact_form')

    Email.send({
        SecureToken: "99ae49b0-7060-41ce-a8d8-c5d474204742",
        To: "rejaymorada0@gmail.com",
        From: email.value,
        Subject: subject.value,
        Body: message.value
    }).then(
        message => alert("mail sent successfully")
    );
}

form.addEventListener('submit', sendMsg);