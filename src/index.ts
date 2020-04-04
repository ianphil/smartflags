import { EventGrid, Publisher } from './publisher';

function go() {
  let eventGrid: EventGrid = new EventGrid();
  let publisher: Publisher = new Publisher(eventGrid);

  publisher.send('Ian was here...');
}

go();
