import api from "@/app/api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from '../../util/types';

// 

const fetchRepos = async (ctx: QueryFunctionContext): Promise<Array<Repository>> => {
    const [_, githubUser] = ctx.queryKey
    const data = await api.get<Repository[]>(`/users/${githubUser}/repos`);
    // const data = await response.data
    return data.data;
}

const useFetchRepositories = (githubUser: string) => {
    return useQuery({
        queryKey: ['repositories', githubUser],
        queryFn: fetchRepos
    });
}

export { useFetchRepositories };