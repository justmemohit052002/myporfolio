import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Experience</motion.h1>
            <div className="flex flex-col items-center">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-16 flex flex-col items-center lg:flex-row lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center mb-8 lg:mb-0">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 lg:ml-40 text-center lg:text-left">
                            <h6 className="mb-4 font-semibold">
                                {experience.role} - <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-6 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
