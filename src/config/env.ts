import dotenv from "dotenv";


dotenv.config()

interface EnvConfig {
    nodeEnv: string;
    port: string;
    databaseUrl: string;
    Better_Auth_Secret: string;
    Better_Auth_Url: string;

}


const loadEnvVariables = (): EnvConfig => {


    const requiredEnvVariables = [
        "NODE_ENV",
        "PORT",
        "DATABASE_URL",
        "BETTER_AUTH_SECRET",
        "BETTER_AUTH_URL",
    ];
    requiredEnvVariables.forEach((envVar) => {
        if (!process.env[envVar]) {
            throw new Error(`Environment variable ${envVar} is required but is not set. in .env file`);
        }
    });


    return {
        nodeEnv: process.env.NODE_ENV as string,
        port: process.env.PORT as string,
        databaseUrl: process.env.DATABASE_URL as string,
        Better_Auth_Secret: process.env.BETTER_AUTH_SECRET as string,
        Better_Auth_Url: process.env.BETTER_AUTH_URL as string,

    }


}

export const envVars = loadEnvVariables();
