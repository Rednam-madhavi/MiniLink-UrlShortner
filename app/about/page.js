import React from 'react'

const about = () => {
    return (
        <div className="h-[90vh] bg-gray-100 flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">MiniLink</h1>
            <p className="text-lg text-center mb-6">URL Shortener Web Application</p>
            
            <p className="text-lg text-gray-700 mb-6 max-w-4xl text-justify">
                MiniLink is a simple, easy-to-use URL shortener web application that allows you to shorten long URLs into short, easy-to-remember links. With MiniLink, you can quickly generate short URLs for sharing on social media, email campaigns, and other online platforms.
            </p>

            <p className="text-lg text-gray-700 mb-6 max-w-4xl text-justify">
                MiniLink is built using modern web technologies, including Next.js, Tailwind CSS, and MongoDB, ensuring a seamless user experience and robust performance. It is open-source and can be easily customized and deployed to suit your specific requirements.
            </p>

            <p className="text-lg text-gray-700 mb-6 max-w-4xl text-justify">
                Whether you're looking to shorten URLs for social media posts, email campaigns, or website links, MiniLink has got you covered. Try it out today and experience the power of simple, effective URL shortening.
            </p>
        </div>
    )
}

export default about
