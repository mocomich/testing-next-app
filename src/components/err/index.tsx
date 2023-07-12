import { Err, JPMessages } from '@/libs/error';
import React from 'react';

type Props = Err;

export const Error = (props: Props) => {
  return (
    <div>
      <p className="mt-7 text-center">{JPMessages[props.status].message}</p>
    </div>
  );
};
