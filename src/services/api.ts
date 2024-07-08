import axios from 'axios';
import type { Details, Utxo } from '../types/types';

const API_BASE_URL = 'https://api-3.xverse.app/v1';

export const fetchOrdinalUtxos = async (address) => {
    try {
        const response = await axios.get<{ results: Utxo[] }>(`${API_BASE_URL}/address/${address}/ordinal-utxo`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching UTXOs:', error);
        throw error;
    }
};

export const fetchInscriptionDetails = async (address, inscriptionId) => {
    try {
        const response = await axios.get<Details>(`${API_BASE_URL}/address/${address}/ordinals/inscriptions/${inscriptionId}`);
        console.log('response', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching inscription details:', error);
        throw error;
    }
};
