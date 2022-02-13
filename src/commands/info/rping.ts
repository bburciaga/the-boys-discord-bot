import { Command } from "../../structures/Command";

export default new Command({
  name: "rping",
  description: "replies with Seth is a cunt",
  run: async ({ interaction }) => {
    interaction.followUp("Seth is a cunt");
  },
});
