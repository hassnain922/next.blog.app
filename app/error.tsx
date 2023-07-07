'use client' // Error components must be Client Components


import log from 'loglevel';
import { useEffect } from 'react';

log.setLevel(log.levels.ERROR); // Set the log level to ERROR or higher


export const Error = ({ error, reset}:any ) => {
  useEffect(() => {
    // Log the error using loglevel
    log.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
