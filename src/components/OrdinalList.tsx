import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import type { Utxo } from '../types/types';

const OrdinalList = ({
  utxos,
  address
}: {
  utxos: Utxo[];
  address: string;
}) => {
  const [page, setPage] = React.useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  console.log({ utxos });

  return (
    <div>
      <List>
        {utxos?.slice(0, page * 10).map((utxo, index) => (
          <ListItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            component={Link}
            to={`/inscription/${address}/${utxo.inscriptions[0].id}`}
          >
            <ListItemText primary={utxo.txid} />
          </ListItem>
        ))}
      </List>
      {utxos.length > page * 10 && (
        <Button
          onClick={handleLoadMore}
          variant='contained'
          color='secondary'
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default OrdinalList;
