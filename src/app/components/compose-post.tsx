import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { type Post } from '../types/posts'
import { ComposePostTextArea } from './compose-post-textarea'


export const dynamic = 'force-dynamic'


export function ComposePost ({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get('content')
        if(content === null ) return;

        const supabase = createServerActionClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser() 

        if(user === null ) return;

        await supabase.from('posts').insert({ content, user_id: user.id })
        revalidatePath('/')
    }

    return (
       
        <form action={addPost} className='flex flex-row gap-y-4 p-3 border-b border-white/20'>
            <img className='rounded-full w-10 h-10 object-contain mr-3' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <ComposePostTextArea />
                <button className='bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end'>Postear</button>
            </div>
        </form>
       
    )
    
}