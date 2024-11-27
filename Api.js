const BASE_URL = 'http://localhost:5197/api/Task'

export const getRequest = async () => {
    try {
        //executa

        const response = await fetch(BASE_URL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/Json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }

        const textData = await response.text();
        const data = JSON.parse(textData);

        return data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}