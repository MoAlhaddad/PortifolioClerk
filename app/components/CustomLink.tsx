import Link from 'next/link';

export const CustomLink = ({href,className, title}: any) => {

    return (

            <Link href={href} className={`${className} relative-group`}>
                {title}

                <span className='h-1 inline-block w-full bg-dark absolute left-0 bottom-0.5 group:hover:w-full transition-[width] ease duration-100 '>


                </span>
            </Link>
    )
}
