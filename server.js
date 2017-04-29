import {getAnotherCommand} from './parser';
import {initServer} from './connection';
import {Actions} from './actions';
import {startWatch} from './watcher';
var figlet = require('figlet');

const main = () => {
  
  figlet('Gormint FS', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
  });
  initServer();
  Actions.initializeFileTable();
  getAnotherCommand();
  startWatch();
}

main();
