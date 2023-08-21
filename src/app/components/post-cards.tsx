'use client'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react"
import { IconMessageCircle2, IconHeart, IconRepeat } from '@tabler/icons-react'

export default function PostCard(
    {
        userFullName,
        userName,
        avatarUrl,
        content
    }: {
        userFullName: string,
        userName: string,
        avatarUrl: string,
        content: string
    }
) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
            <Link href={`/${userName}`}>
                <Avatar radius="full" size="md" src={avatarUrl} />
            </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
        
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bd-transparent">
        <p>
          {content}
        </p>
        
      </CardBody>
      <CardFooter className="gap-3">
        <button> 
            <IconMessageCircle2 className="wh-4 h-4"/>
        </button>
        
        <button>
            <IconRepeat className="wh-4 h-4"/> 
        </button>

        <button>
            <IconHeart className="wh-4 h-4"/> 
        </button>
      </CardFooter>
    </Card>
  );
}
