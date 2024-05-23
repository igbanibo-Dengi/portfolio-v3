import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Undo2 } from 'lucide-react'

const BackButton = () => {
    return (
        <div className='absolute bottom-10 right-10 xl:top-14 xl:left-12 z-50 size-fit'>
            <Button asChild variant={'ghost'} className='border-gray-600'>
                <Link href="/?tab=projects" className='flex'>
                    {/* <p className='hidden xl:block'>Back to projects</p> */}
                    {/* <Undo2 className='xl:hidden' /> */}
                    <Undo2 />
                </Link>
            </Button>
        </div>
    )
}

export default BackButton