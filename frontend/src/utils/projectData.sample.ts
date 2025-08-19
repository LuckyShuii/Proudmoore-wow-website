/**
 * Due to the frontend build, all environment variables are broken when passed through the docker compose file.
 * So this is a temporary fix file till I figure something out
 */
const projectData = {
    "FRONTEND_URL": "http://localhost:8081",
    "PROJECT_STATUS": "PROD"
}

export default projectData;