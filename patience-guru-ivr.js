const QUEUE_NAME = 'Patience Guru';

exports.handler = async function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    switch (event.Digits) {
        case '1':
            twiml.say(
                'You are pretty patient. Go ahead and press 2, to see what your next step is.'
            );
            break;
        case '2':
            twiml.say(
                'You are indeed super patient. Press 3, to see what your next step is.'
            );
            break;
        case '3':
            twiml.say(
                'Great, way to stay calm, you might actually be a guru, already. To be sure, press 7 to talk to one.'
            );
            break;
        // TROLLOL
        case '4':
        case '5':
        case '6':
            twiml.say(
                'Ahhh...did you skip some steps, you must remain patient my friend. Press 2 to relax again'
            );
            break;
        case '7':
            twiml.enqueue(
                {
                    waitUrl: '/patience-waiting',
                },
                QUEUE_NAME
            );
            break;
        case '9':
            twiml.dial().queue(
                {
                    url: '/patience-on-connect',
                },
                QUEUE_NAME
            );
            break;
        default:
            twiml.say(
                'Welcome to Patience Guru Training. Press 1 to practice patience.'
            );
    }
    twiml.gather({ numDigits: 1 });
    callback(null, twiml);
};
