export default {
    port: process.env.PORT || 9000,
    databaseUrl:
        process.env.DATABASE_URL ||
        'postgresql://postgres:123456789@localhost:5050/sharekafe.db?schema=public'
}
