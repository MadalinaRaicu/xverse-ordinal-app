import React, { useState } from 'react';
import { fetchOrdinalUtxos } from '../services/api';
import OrdinalList from '../components/OrdinalList';
import { TextField, Button, Container } from '@mui/material';
import type { Utxo } from '../types/types';

const Home = () => {
  const [address, setAddress] = useState(
    'bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs'
  );
  const [utxos, setUtxos] = useState<Utxo[]>([]);
  const [error, setError] = useState<string>();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchOrdinalUtxos(address);
      setUtxos(data);
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Bitcoin Wallet Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          margin='normal'
          placeholder='Enter a Bitcoin wallet address to lookup ordinals'
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
        >
          Lookup Ordinals
        </Button>
      </form>
      {error && <p>{error}</p>}
      <OrdinalList
        utxos={utxos}
        address={address}
      />
    </Container>
  );
};

export default Home;
