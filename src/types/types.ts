export interface Inscription {
    id: string;
    offset: number;
    content_type: string;
}

export interface Utxo {
    block_height: number;
    inscriptions: Inscription[];
    sats: number[];
    txid: string;
    value: number;
    vout: number;
}

export interface Details {
    id: string;
    number: number;
    address: string;
    genesis_address: string;
    genesis_block_height: number;
    genesis_block_hash: string;
    genesis_tx_id: string;
    genesis_fee: number;
    genesis_timestamp: number;
    location: string;
    output: string;
    offset: number;
    sat_ordinal: number;
    sat_rarity: string;
    sat_coinbase_height: number;
    mime_type: string;
    content_type: string;
    content_length: number;
    tx_id: string;
    timestamp: number;
    value: number;
}