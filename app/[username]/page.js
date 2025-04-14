import React from 'react';
import PaymentPage from '@/components/PaymentPage';

const Username = async ({params}) => {
  const awaitedParams = await params;
  console.log('params', awaitedParams);
  return (
    <>
      <PaymentPage username={awaitedParams.username} />
    </>
  );
};

export default Username;
