import api from "@/app/api/github";
import { useQuery } from "@tanstack/react-query";
import { Repository } from '../../util/types';

// 

const fetchRepos = async (): Promise<Array<Repository>> => {
    const data = await api.get<Repository[]>("/users/danielmateu/repos");
    // const data = await response.data
    return data.data;
}

const useFetchRepositories = () => {
    return useQuery({

        queryKey: ['repositories'],
        queryFn: fetchRepos
    });
}

export { useFetchRepositories };