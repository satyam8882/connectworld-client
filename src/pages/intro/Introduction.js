import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import './introduction.css'

function Introduction() {
    const apiKey = "2413f5e39be24dc786be7db78357e040";
    const [newsList, setNewsList] = useState([]);
    const [query, setQuery] = useState('tesla');
    // const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-11-09&sortBy=publishedAt&apiKey=${apiKey}`;
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-06-08&sortBy=publishedAt&apiKey=${apiKey}`;



    const queryInputRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, [query]);

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            setNewsList(jsonData.articles);
        } catch (e) {
            console.log(e, "error occured");
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue);
    }

    return (
        <div className="news-app">
            <h1 style={{fontFamily: 'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>News Daily</h1>
            <form onSubmit={handleSubmit}>
                <input className="query-input" type="text" ref={queryInputRef}/>
                <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
            </form>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 48%)",
                    justifyContent: "space-between",
                    rowGap: "20px",
                }}>
                {newsList.map((news) => {
                    return <News key={news.url} news={news} />;
                })}
            </div>
        </div>
    );
}

export default Introduction;