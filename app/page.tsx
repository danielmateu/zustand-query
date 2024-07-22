'use client'

import { useFetchRepositories } from "@/app/hooks/useRepos";
import { Repository } from '../util/types';
import Image from "next/image";
import { useFavoriteReposStore } from "@/store/favorite-repos";
import RepoCard from "@/components/cards/cards";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { useEffect, useState } from "react";



export default function Home() {
  const [inputChange, setInputChange] = useState('danielmateu');
  const [search, setSearch] = useState('');
  const { data, isLoading } = useFetchRepositories(inputChange);
  const { favoriteReposIds } = useFavoriteReposStore();




  const handleSearch = () => {
    setInputChange(search);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-8 w-dvw">
      {
        data && (
          <div className="flex items-center justify-between">
            <Image
              src={data[0]?.owner?.avatar_url}
              alt="Owner Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex gap-4">
              <Input placeholder="Search Repositories" className="w-96"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                onClick={handleSearch}
              >Search</Button>
            </div>

          </div>
        )
      }
      <div className="grid grid-cols-6 gap-4">
        {
          data?.map((repo: Repository) => {
            return (
              <RepoCard
                data={repo as Repository}
                key={repo.id}
                isFavorite={favoriteReposIds.includes(repo.id)}
              />
            );
          })
        }
      </div>

    </div>
  );
}
