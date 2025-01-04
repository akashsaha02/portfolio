import React from 'react'

const AboutCard = ({ title, children }) => {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default AboutCard
