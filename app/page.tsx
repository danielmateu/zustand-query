'use client'

import { useFetchRepositories } from "@/app/hooks/useRepos";
import { Repository } from '../util/types';
import Image from "next/image";
import Cards from "@/components/cards/cards";
// import { useEffect, useState } from "react";



export default function Home() {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      {
        data && (
          // <div className="flex items-center gap-4">
          <Image
            src={data[0]?.owner?.avatar_url}
            alt="Owner Avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        )
      }

      <Cards
        data={data as Repository[]}
      />
    </div>
  );
}
