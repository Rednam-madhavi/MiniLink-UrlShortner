"use client";
import React, { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please fill in both the URL and custom short URL fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/generate", requestOptions);
      const result = await response.json();

      if (response.ok) {
        setGeneratedUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/${shorturl}`);
        alert(result.message);
        setUrl("");
        setShorturl("");
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-[90vh] flex flex-col justify-center bg-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900">MiniLink</h1>
          <p className="text-gray-600 mt-2 text-lg">A simple URL shortener.</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 items-center bg-white shadow-lg rounded-xl p-8 w-96 sm:w-[90%] md:w-[70%] lg:w-[50%]">
            <input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Enter your URL"
              value={url}
              className="w-full rounded-xl px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              onChange={(e) => setShorturl(e.target.value)}
              type="text"
              placeholder="Your preferred URL"
              value={shorturl}
              className="w-full rounded-xl px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            
            <button
              onClick={generate}
              disabled={isLoading}
              className={`bg-gray-900 text-white shadow-lg rounded-full px-6 py-2 w-full ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>

            {error && <div className="text-red-500 text-center mt-4">{error}</div>}

            {generatedUrl && (
              <div className="w-full bg-gray-100 rounded-xl p-4 text-center mt-6">
                <p className="text-gray-900">Your shortened URL is:</p>
                <a
                  href={generatedUrl}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {generatedUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
