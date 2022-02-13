declare global {
  namespace NodeJS {
    interface ProcessEnv {
      botToken: string;
      guildId: string;
      environmnet: "dev" | "prod" | "debug";
    }
  }
}

export {};
