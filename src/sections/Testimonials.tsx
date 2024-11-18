import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

const testimonials = [{
    text: 'The User experience is phenomenal, and the support team is exceptional',
    name: 'John Doe',
    title: 'Product Manager-Block',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg'

},
{
    text: 'our team is exceptional, and the support team is exceptional',
    name: 'John Doe',
    title: 'Product Manager-Block',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg'
},
{
    text: 'The User experience is phenomenal, and the support team is exceptional',
    name: 'John Doe',
    title: 'Product Manager-Block',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg'
}]


export const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-zinc-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
                    {testimonials.map((testimonial, testimonialIndex) => (

                        <motion.blockquote key={testimonialIndex} initial={{ opacity: 0, y: 24 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={
                                {
                                    delay: testimonialIndex * 0.2,
                                    ease: 'easeInOut',
                                    duration: 1
                                }
                            }
                            viewport={{ once: true }}
                            className={twMerge(testimonialIndex === 2 && 'md:hidden lg:block')}>
                            <p className="font-heading text-3xl lg:text-4xl font-black">&ldquo;{testimonial.text}&rdquo;</p>
                            <cite className="mt-8 block">
                                <div className="mt-8 block">
                                    <div className="flex gap-3 items-center ">
                                        <div className="size-16 bg-zinc-700 rounded-full bg-cover" style={{ backgroundImage: `url(${testimonial.avatarImage})` }}></div>
                                    </div>
                                    <div>
                                        <div className="text-lg not-italic font-black ">{testimonial.name}</div>
                                        <div className="text-zinc-400 not-italic">{testimonial.title}</div>
                                    </div>

                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>

            </div>
        </section>
    )
}