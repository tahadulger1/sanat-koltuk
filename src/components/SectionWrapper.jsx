import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function SectionWrapper({ children, id, className = '', bg = '' }) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bg} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}

export function AnimatedItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

export function SectionTitle({ title, subtitle, center = true, light = false, as = 'h2' }) {
  const Tag = as;
  
  return (
    <AnimatedItem className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <Tag className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'text-cream-50' : 'text-walnut-800'}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-cream-200' : 'text-walnut-400'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full ${center ? 'mx-auto' : ''} bg-gold-400`} />
    </AnimatedItem>
  )
}
