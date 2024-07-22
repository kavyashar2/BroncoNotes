import Image from "next/image";

export const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400 px] md:w-[400 px]">
                    <Image 
                    src="/documents.png"
                    fill
                    className="object-contain"
                    alt="Documents"
                    />
                </div>
            </div>
        </div>
     );
};