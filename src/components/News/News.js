import React from 'react';
import s from "./News.module.css";
const News = () => {
    return <div className={s.news}>
        <h2>News in the world</h2>
        <img src="https://matzav.com/wp-content/uploads/2017/08/Wall-Street-Journal-696x607.jpg" alt=""/>
        <p> Donald Trump</p>
        <p> Wladimir Putin</p>
    </div>
}

export default News;