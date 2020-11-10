import { SingleThing, WebThingServer } from 'webthing'; 
import { RgbLedstripThing } from './RgbLedstripThing';


function runServer() {
    const thing = new RgbLedstripThing();

    // If adding more than one thing, use MultipleThings() with a name.
    // In the single thing case, the thing's name will be broadcast.
    const server = new WebThingServer(new SingleThing(thing), 8888);

    process.on('SIGINT', () => {
        server.stop();
        process.exit();
    });

    server.start();
    console.log('Led strip server started');
}

runServer();