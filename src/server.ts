import app from "./app";
import { envVars } from "./config/env";

const bootstrap = () => {
    try {
        app.listen(envVars.port, () => {
            console.log(`Server is running on http://localhost:${envVars.port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

bootstrap();