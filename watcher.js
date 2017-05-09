// Example of a more typical implementation structure:
import {Actions} from './actions';
import {sendFile} from './connection.js'; 
import {requestFile} from './connection.js';
import {config} from './config';
// Initialize watcher.
var watch = require('watch');

export function startWatch(){
  watch.createMonitor('./root', function (monitor) {
    monitor.files['./root/*'] // Stat object for my zshrc.
    monitor.on("created", function (f, stat) {
      // Handle new files
      console.log(f, " created");
      Actions.initializeFileTable();
    })
    monitor.on("changed", function (f, curr, prev) {
      // Handle file changes
      console.log(f, " changed");
      for(var i=0; i<config.server_addr.length; i++){
        sendFile(config.server_addr[i], './'+f);
      }
      

    })
    monitor.on("removed", function (f, stat) {
      // Handle removed files
      console.log(f, " removed");
    })
    // monitor.stop(); // Stop watching
  });
}
