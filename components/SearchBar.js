import styles from "../styles/components/SearchBar.module.sass"
import SearchBox from './SearchBox'
import React from 'react'
import axios from "axios"


class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            type: "",
            year: "",
            title: "",
            submitted: false
        }
    }

    handleClick(event) {
        console.log(this.state)
        event.preventDefault()
        axios.post(`https://www.omdbapi.com/?apikey=58074476&type=${this.state.type}&page=1&s=${this.state.title}}&y=${this.state.year}`)
            .then(res => console.log(res.data.Search))
            .catch(err => window.alert(err))

    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState(
            { [name]: value }
        )
        console.log(this.state)
    }
    render() {
        return (
            <div className={styles.searchBarContainer}>
                <input type="text" placeholder="Year" className={styles.textInput} name="year" value={this.state.year} onChange={(event) => this.handleChange(event)}></input>
                <select className={styles.selectInput} name="type" value={this.state.type} onChange={(event) => this.handleChange(event)}>
                    <option className={styles.selectOption} value="">Type</option>
                    <option className={styles.selectOption} value="movie">Movie</option>
                    <option className={styles.selectOption} value="series">Series</option>
                    <option className={styles.selectOption} value="episode">Episode</option>
                </select>
                <div className={styles.searchBoxContainer}>
                    <input type="text" placeholder="Enter the movie name here" name="title" value={this.state.title} className={styles.searchInput} onChange={(event) => this.handleChange(event)} />
                    <img src="/search.svg" className={styles.searchIcon} />
                </div>
                {/* <SearchBox year={this.year} type={this.type} submitted={this.submitted} /> */}
                <button className={styles.btn} onClick={(event) => this.handleClick(event)}>Search &rarr;</button>
            </div>
        )
    }
}
export default SearchBar