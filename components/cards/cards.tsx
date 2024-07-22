'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Repository } from "@/util/types";
import Link from "next/link";
import { Button } from "../ui/button";
import { useFavoriteReposStore } from "@/store/favorite-repos";



interface RepoCardProps {
    data: Repository;
    isFavorite: boolean;
}

export default function RepoCard({ data, isFavorite }: RepoCardProps) {

    const addFavoriteRepo = useFavoriteReposStore((state) => state.addFavoriteRepo);
    const removeFavoriteRepo = useFavoriteReposStore((state) => state.removeFavoriteRepo);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavoriteRepo(data.id);
            return
        }
        addFavoriteRepo(data.id);
    }

    return (

        <Card key={data.name} className="w-56 h-60 py-4 flex flex-col justify-between">
            <CardContent>
                <CardTitle className="truncate">
                    {
                        data.name.substring(data.name.indexOf("-") + 1).split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
                    }
                </CardTitle>
                <CardDescription>
                    {data.description}
                </CardDescription>
            </CardContent>
            <CardFooter className="grid grid-rows-2">
                <Link href={data.html_url} target="_blank" rel="noreferrer" className="truncate">
                    {data.html_url}
                </Link>
                <div>
                    {
                        isFavorite ? (
                            <Button
                                variant={"destructive"}
                                size={"sm"}
                                onClick={toggleFavorite}
                            >
                                Remove from favorites
                            </Button>
                        ) : (
                            <Button
                                variant={"secondary"}
                                size={"sm"}
                                onClick={toggleFavorite}
                            >
                                Add to favorites
                            </Button>
                        )
                    }
                </div>
            </CardFooter>
        </Card>
    );
}