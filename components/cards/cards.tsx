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

interface CardProps {
    data: Repository[];
}

export default function Cards({ data }: CardProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {
                data?.map((repo: Repository) => {
                    return (
                        <Card key={repo.name} className="w-56 h-60">
                            <CardHeader>

                            </CardHeader>
                            <CardContent>
                                <CardTitle>
                                    {
                                        repo.name.substring(repo.name.indexOf("-") + 1).split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
                                    }
                                </CardTitle>
                                <CardDescription>
                                    {repo.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Link href={repo.html_url} target="_blank" rel="noreferrer" className="truncate" >
                                    {
                                        repo.html_url.substring(repo.html_url.indexOf("danielmateu/") + 11)
                                    }
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })
            }
        </div>
    );
}