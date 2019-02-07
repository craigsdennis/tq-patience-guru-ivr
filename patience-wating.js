exports.handler = async function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    twiml.say(
        `You are number ${event.QueuePosition} of ${event.CurrentQueueSize} in the queue. Please be patient...you've only been waiting ${event.QueueTime} seconds.`
    );
    callback(null, twiml);
};
