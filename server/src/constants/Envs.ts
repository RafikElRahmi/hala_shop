export default {
    NodeEnv: process.env.NODE_ENV ?? "",
    Port: process.env.PORT ?? 0,
    Client: process.env.CLIENT_URL ?? "*",
    db: {
        uri: process.env.DB_URI ?? "",
        Name: process.env.DB_NAME ?? ""
    },
} as const;
    