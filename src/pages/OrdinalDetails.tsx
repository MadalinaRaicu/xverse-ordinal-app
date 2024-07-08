import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInscriptionDetails } from '../services/api';
import { Container, Typography } from '@mui/material';
import type { Details } from '../types/types';

const OrdinalDetails = () => {
  const { address, inscriptionId } = useParams();
  const [details, setDetails] = useState<Details>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInscriptionDetails(address, inscriptionId);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching inscription details:', error);
      }
    };

    fetchData();
  }, [address, inscriptionId]);

  if (!details) {
    return <p>Loading...</p>;
  }

  const contentUrl = `https://ord.xverse.app/content/${inscriptionId}`;
  const isImage = details.content_type.startsWith('image/');

  return (
    <Container>
      <Typography variant='h4'>Inscription Details</Typography>
      <Typography variant='body1'>ID: {inscriptionId}</Typography>
      {isImage ? (
        <img
          src={contentUrl}
          alt='Ordinal Content'
        />
      ) : (
        <pre>{details.output}</pre>
      )}
    </Container>
  );
};

export default OrdinalDetails;
