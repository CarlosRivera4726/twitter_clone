import PostCard from "./post-cards"
import { type Post } from '@/app/types/posts'

export function PostLists ({ posts }: { posts: Post[] | null }) {
    return ( 
        <>
            {
                posts?.map(post => {
                    const {
                    id,
                    user,
                    content
                    } = post
        
                    const {
                        name: userFullName,
                        user_name: userName,
                        avatar_url: avatarUrl
                    } = user
                    return (
                    <PostCard 
                        key={id} 
                        userName={userName} 
                        userFullName={userFullName} 
                        avatarUrl={avatarUrl} 
                        content={content}
                    />
                    )
                })
            }
        </>
    )
}