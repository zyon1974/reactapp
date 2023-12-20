import React, { Component, useState, useEffect } from "react";
//import axios from "axios";

const TechNews = () => {
    // state 
    const titulo = "il titolo";

    const [loading, setLoading] = useState(false);

    const [users, setNews] = useState([]);

    const [searchQuery, setSearchQuery] = useState(10);

    const [url, setUrl] = useState("https://urchin-app-tpqiz.ondigitalocean.app/notizie.php");
    //const [url, setUrl] = useState("https://buck1.ams3.cdn.digitaloceanspaces.com/main/data.json");
    //const [url, setUrl] = useState("https://randomuser.me/api/?results=10");

    

    // fetch news
    const fetchNews = () => {
        setLoading(true);
        const endpoint = url;
        setTimeout(() => {
            fetch(endpoint)
            .then(result => result.json())
            //.then(data => setNews(data.results), setLoading(false))
            //.then(data => setNews(data.notizie_tecnologia), setLoading(false))
            .then(data => setNews(data), setLoading(false))
            .catch(error => console.log(error));
        }, 1000 );
    };

    useEffect(() => {
        fetchNews();
    }, [url] ); //<-- molto importante, l'array vuoto blocca la fecth dal ripetersi e indica quando si deve attivare useEffect
    // in questo caso useEffect dipende dal cambio di 'url' che dipende da 'handleSubmit' 
    // per avere la ricerca immediata sul campo search (cioè immediatamente al cambio del valore) dovrei legare useEffect a setSearchQuery

    const handleSubmit = (event) => {
        event.preventDefault();
        setUrl(`https://randomuser.me/api/?results=${searchQuery}`)
    }
    
    const showLoading = () =>{
        return loading === true ? <h3>loading...</h3> :  "loaded" 
    }

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={searchQuery}
            onChange={ (e) => setSearchQuery(e.target.value) }
        /> 
        <button>Search</button>
        <p><b>il valore é {searchQuery}</b></p>
        </form>
    )  

    const showUsers = () =>{
        return users.map((n, i) => (<p key={i}>{n.titolo} {n.testo} {n.path_immagine}</p>))
    }

    return (
        <div>
            <h1>le newz</h1>
            <h2>{titulo}</h2>
            {showLoading()}
            {searchForm()}
            {!loading ? showUsers() : ""}
        </div>
    )
};

export default TechNews;