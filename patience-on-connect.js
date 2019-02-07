exports.handler = async function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    twiml.say(
        'Thanks for waiting. Your call will be recorded for patience training purposes.'
    );
    twiml.record();
    callback(null, twiml);
};



