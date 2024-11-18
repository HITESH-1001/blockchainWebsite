import { motion } from "framer-motion"
import { type ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

export const Circle = (props: ComponentPropsWithoutRef<'div'> & { animate?: boolean }) => {
    const { className, children, animate = false } = props
    return (
        <div className={twMerge("bg-zinc-900 size-[240px] inline-flex rounded-full items-center justify-center relative ", className)} >
            <motion.div
                animate={
                    animate &&
                    { rotate: 360, }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={twMerge("absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px]  outline-fuchsia-500/10 border-[6px] border-transparent ", animate &&'border-t-fuchsia-500' )} />
            {children}
        </div>
    )
}
