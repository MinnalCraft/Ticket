const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("THARAVAD MC", { type: "PLAYING", url:"https://discord.gg/DAkSpgH4rn" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};
