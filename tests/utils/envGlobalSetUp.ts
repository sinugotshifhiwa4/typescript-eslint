import dotenv from "dotenv";

async function globalSetup() {
  try {
    if (process.env.environment) {
      dotenv.config({
        path: `./envs/.env.${process.env.environment}`,
        override: true,
      });
    } else {
      console.log("Environment variable 'environment' is not set");
    }
  } catch (error) {
    console.error(`Error loading environment variables: ${error}`);
  }
}

export default globalSetup;