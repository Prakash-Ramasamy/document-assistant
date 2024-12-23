import axios from 'axios';

const AZURE_SERVICE_BASE_URL = 'https://aidocassitant-axbmbxg9bjazfwgq.centralus-01.azurewebsites.net/api/AzServices';

/**
 * Reads a document by sending an ArrayBuffer to the specified Azure service endpoint.
 *
 * @param {ArrayBuffer} arrayBuffer - The ArrayBuffer containing the document data to be read.
 * @returns {Promise<any>} - A promise that resolves to the response data from the Azure service.
 * @throws {Error} - Throws an error if the POST request fails.
 */
export const ReadDocument = async (arrayBuffer: ArrayBuffer): Promise<any> => {
    try {
        const response = await axios.post(`${AZURE_SERVICE_BASE_URL}/ReadDocument`, arrayBuffer, {
            headers: {
            'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error making POST request:', error);
        throw error;
    }
};

/**
 * Summarizes a document by sending the document content and a query to the specified Azure service endpoint.
 *
 * @param {string} documentContent - The content of the document to be summarized.
 * @param {string} query - The query to use for summarization.
 * @returns {Promise<any>} - A promise that resolves to the response data from the Azure service.
 * @throws {Error} - Throws an error if the POST request fails.
 */
export const SummarizeDocument = async (documentContent: string, query: string): Promise<any> => {
    try {
        const body = {
            Content: documentContent,
            Query: query
        };

        const response = await axios.post(`${AZURE_SERVICE_BASE_URL}/SummarizeDocument`, body, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error making POST request:', error);
        throw error;
    }
};