import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TarotCard from './TarotCard';
import { TypeAnimation } from 'react-type-animation';
import TarotCardFlip from './TarotCardFlip';

const TarotReading = () => {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [retry, setRetry] = useState(false);

    useEffect(() => {
        if (retry) {
            scrollToBottom();
        }
    }, [retry]);

    const handleChange = (e) => {
        setQuestion(e.target.value);
    };

    const getReading = async () => {
        const response = await axios.get('/api/tarot', {
            params: { question },
            baseURL: 'https://web-production-f202.up.railway.app/',
        });
        setResult(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Make API call and get response
        await getReading(question);
        setLoading(false);
    };

    const handleRetry = () => {
        setRetry(false);
        setResult(null);
        setQuestion("");
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex flex-col justify-center items-center">
                <div>
                    <TarotCardFlip />
                </div>
                <p className="text-2xl mt-6 font-semibold text-center text-white animate-wave">
                    Getting your reading...
                </p>
            </div>

        );
    }

    return (
        <div className="min-h-screen bg-black text-white py-6 flex flex-col justify-center sm:py-12">
            <div className="max-w-5xl mx-auto">
                
                {result ? (
                    <div className="mt-6">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-6">{result.question.toUpperCase()}</h1>
                        </div>
                        <p className="mt-6 mb-8 pb-2 font-bold text-2xl w-3/4 border-b-2 border-gray-500 mx-auto">Tarots</p>
                        <div className="mt-4 space-x-2 mx-auto inline-flex">
                            {result.cards.map((cardObj, index) => (
                                <TarotCard
                                    key={index}
                                    cardName={cardObj.card}
                                    reversed={cardObj.reversed}
                                />
                            ))}
                        </div>

                        <p className="mt-6 pb-2 font-bold text-2xl w-3/4 border-b-2 border-gray-500 mx-auto">Reading</p>
                        <div className="text-left mt-4">
                            {<TypeAnimation
                                sequence={[
                                    result.answer,
                                    () => {
                                        setRetry(true);
                                        scrollToBottom();
                                    }
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={0}
                                speed={80}
                                style={{ fontSize: '1.5em', display: 'inline-block', color: 'white', textAlign: 'left', whiteSpace: 'pre-line' }}
                            />}
                        </div>
                        <button
                            className={`mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg ${retry ? '' : 'hidden'}`}
                            disabled={!retry}
                            onClick={handleRetry}
                        >
                            Retry
                        </button>
                    </div>
                ) : (
                    <div className="mt-12">
                        <form onSubmit={handleSubmit}>
                            <div>
                                    <label className="text-4xl font-bold">
                                    Find Your Answer
                                </label>
                                <textarea
                                    type="text"
                                    value={question}
                                    onChange={handleChange}
                                    className="mt-5 h-48 block w-full border-none bg-gray-800 rounded-lg shadow-lg py-2 px-3 text-white focus:outline-none resize-none"
                                    placeholder="Ask a question"
                                    required
                                />
                            </div>
                                <button type="submit" className="mt-6 w-full py-2 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none">
                                    Get Tarot Reading
                                </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TarotReading;
