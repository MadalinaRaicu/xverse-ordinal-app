import React, { useState } from 'react';
import { fetchOrdinalUtxos } from '../services/api';
import OrdinalList from '../components/OrdinalList';
import type { Utxo } from '../types/types';

const Home = () => {
  // This is a test address and it is added as default value for testing purposes.
  const [address, setAddress] = useState('');
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
    <div className='min-h-screen bg-gray-900 text-white font-montserrat'>
      <div className='container mx-auto py-12 w-full flex flex-col gap-4'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2.5 w-full'
        >
          <span className='text-sm md:text-base font-medium'>
            Owner Bitcoin Address:
          </span>
          <input
            type='text'
            className='w-full p-2 bg-gray-800 text-white rounded text-base'
            placeholder='Enter a Bitcoin wallet address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            type='submit'
            className='w-full p-2 bg-primary rounded-lg text-sm md:text-base font-medium'
          >
            Look up
          </button>
        </form>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
        <OrdinalList
          utxos={utxos}
          address={address}
        />
      </div>
    </div>
  );
};

export default Home;
