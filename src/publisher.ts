interface ISender {
    sendMessage(message: string): void;
}

export class EventGrid implements ISender {
    sendMessage(message: string) {
        console.log(`EVENTGRID: ${message}`);
    }
}

export class Publisher {
    private _sender: ISender;

    constructor(sender: ISender) {
        this._sender = sender;
    }

    send(message: string) {
        this._sender.sendMessage(message);
    }
}