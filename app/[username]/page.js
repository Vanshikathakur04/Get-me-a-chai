import React from 'react';
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation';
import connectDb from '@/db/connectDb';
import User from '@/models/User';

const Username = async ({ params }) => {
  await connectDb();
  const user = await User.findOne({ username: params.username });

  if (!user) {
    return notFound();
  }

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Chai`,
  }
}

