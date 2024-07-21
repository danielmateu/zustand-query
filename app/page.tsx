'use client'

import { QueryClientProvider } from "@tanstack/react-query";

import { useFetchRepositories } from "@/app/hooks/useRepos";
import { queryClient } from "./queryClient";
import { Repository } from '../util/types';

interface HomeProps {
  repositories: Repository[];
}


export default function Home() {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {
        data?.map((repo: any) => {
          return (
            <div key={repo.name}>
              <h1>{repo.name}</h1>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.html_url}
              </a>
            </div>
          );
        })
      }
    </>
  );
}
