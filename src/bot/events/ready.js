const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("TVD NETWORK", { type: "PLAYING", url:"https://discord.gg/uHB8xVKp" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};
