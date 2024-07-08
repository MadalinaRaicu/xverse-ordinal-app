import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchInscriptionDetails } from '../services/api';
import type { Details } from '../types/types';
import { Chevron } from '../components/ui-toolkit/Chevron';

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
    return <p className='text-white'>Loading...</p>;
  }

  const contentUrl = `https://ord.xverse.app/content/${inscriptionId}`;
  const isImage = details.content_type.startsWith('image/');

  return (
    <div className='min-h-screen bg-gray-900 text-white font-montserrat text-sm md:text-base font-medium'>
      <div className='container mx-auto py-12 w-full flex flex-col gap-4'>
        <div className='flex items-center justify-between text-sm md:text-base font-medium'>
          <Link to='/'>
            <Chevron className='rotate-180' />
          </Link>
          <span>Details</span>
          <span> </span>
        </div>

        {isImage ? (
          <img
            src={contentUrl}
            alt='Ordinal Content'
            className='w-full h-auto object-contain max-h-[375px]'
          />
        ) : (
          <pre>{details.output}</pre>
        )}

        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-6'>
            <h1 className='[word-break:break-word] text-base md:text-lg font-semibold pt-6 pb-4 border-b-2 border-gray-800'>
              Inscription {details.id}
            </h1>

            <div className='flex flex-col gap-2'>
              <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                Inscription Id
              </span>
              <span className='[word-break:break-word]'>{inscriptionId}</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                Owner address
              </span>
              <span className='[word-break:break-word]'>{address}</span>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h1 className='[word-break:break-word] text-base md:text-lg font-semibold'>
              Attributes
            </h1>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  Output value
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.output}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  Content type
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.content_type}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  Content length
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.content_length}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  Location
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.location}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  Genesis transaction
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.genesis_tx_id}
                </span>
              </div>
              {/* show all other attributes in the same way as above  */}
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  SAT Rarity
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.sat_rarity}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  SAT Type
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.sat_ordinal}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='[word-break:break-word] text-xs md:text-sm text-white/70'>
                  SAT Coinbase Height
                </span>
                <span className='[word-break:break-word] p-3 rounded-lg bg-gray-800'>
                  {details.sat_coinbase_height}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdinalDetails;
