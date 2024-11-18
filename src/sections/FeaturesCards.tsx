import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "../components/Card"
import { TextButton } from "../components/TextButton"
const cardData = [
    {
        image: '/assets/images/pill.png',
        title: 'Revolutionary Blockchain API',
        description: 'Effortlessly integrate and manage blockchain data with our cutting edge API, designed for seamless computing',
        color: 'fuchsia',
    },
    {
        image: '/assets/images/cuboid.png',
        title: 'Decentralized Data Solutions',
        description: 'Empower your blockchain applications with decentralized data solutions, ensuring privacy and transparency',
        color: 'lime',
    },
    {
        image: '/assets/images/cone.png',
        title: 'Next-Gen Smart Contracts',
        description: 'Unlock the potential of smart contracts with our cutting edge technology, revolutionizing the way we interact with the blockchain',
        color: 'cyan',
    },
    {
        image: '/assets/images/icosahedron.png',
        title: 'Seamless Blockchain Integration',
        description: ' Integrate blockchain into your existing infrastructure, making it easier to manage and secure your data',
        color: 'violet',
    }
]
export const FeaturesCardsSection = () => {
    const [selectedCard, setSelectedCardIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        if (isHovered) return
        const timeout = setTimeout(() => {
            setSelectedCardIndex((curr) => curr === cardData.length - 1 ? 0 : curr + 1)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [selectedCard, isHovered])
    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="container">
                <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">
                    Discover the future of blockchain 
                </h2>
                <div className="mt-36 lg:mt-48 flex ">
                    <div className="flex flex-none gap-8 ">
                        {cardData.map(({ image, title, description, color }) => (
                            <div className="inline-flex transition-all duration-500"
                                onMouseEnter={() => {
                                    setIsHovered(true)
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false)
                                }}
                                style={
                                    {
                                        transform: `translateX(calc((-100% - 2rem ) * ${selectedCard}))`

                                    }
                                }>
                                <Card key={title} className="max-w-xs md:max-w-md" color={color}>
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition-duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                            <img src={image} alt="Pill" className="size-40 group-hover:-translate-y-6 transition-duration-300" /> </div>

                                    </div>

                                    <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                                    <p className="text-lg text-zinc-400 mt-4">{description}</p>

                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({ title }, cardIndex) => (
                            <div key={title} className={twMerge("size-2.5 bg-zinc-500 rounded-full cursor-pointer", cardIndex === selectedCard && 'bg-zinc-300')}
                                onClick={() =>
                                    setSelectedCardIndex(cardIndex)}
                            ></div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}