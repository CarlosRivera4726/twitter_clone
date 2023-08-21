'use client'
import { useEffect, useRef } from "react"
import { experimental_useFormStatus  as FormStatus } from "react-dom"



export function ComposePostTextArea () {
    const { pending } = FormStatus()
    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)


    useEffect(() => {
        
        if (textAreaRef.current === null) return;

        if(!pending && alreadySent.current){
            alreadySent.current = false
            textAreaRef.current.value = ''
            return
        }

        alreadySent.current = pending

    }, [pending])

    return (
        <textarea
            name='content'
            ref={textAreaRef}
            rows={4}
            className='w-full text-xl bg-black placeholder-gray-500 p-2'
            placeholder='¡¿Qué está pasando?!'
        ></textarea>
    )
}