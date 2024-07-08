import React from 'react';
import { Link } from 'react-router-dom';
import type { Utxo } from '../types/types';
import { Chevron } from './ui-toolkit/Chevron';

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

  if (!utxos || utxos.length === 0) {
    return null;
  }

  const inscriptions = utxos.flatMap((utxo) => utxo.inscriptions);

  return (
    <div className='flex flex-col gap-3 w-full text-sm md:text-base font-medium'>
      <span className='px-2'>Results:</span>
      <div className='flex flex-col w-full'>
        {inscriptions?.slice(0, page * 10).map((inscription, index) => {
          return (
            <Link
              to={`/inscription/${address}/${inscription.id}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className='text-white py-2.5 flex gap-3 items-center justify-between hover:bg-gray-800 px-2 rounded-lg'
            >
              <span className='[word-break:break-word]'>
                Inscription&nbsp; {inscription.id.slice(0, 10)}...
              </span>
              <span className='shrink-0'>
                <Chevron />
              </span>
            </Link>
          );
        })}
      </div>
      {utxos.length > page * 10 && (
        <button
          type='button'
          onClick={handleLoadMore}
          className='w-full p-2 mt-4 bg-primary rounded-lg'
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default OrdinalList;
