import styles from "../styles/components/SearchBar.module.sass"
import React from 'react'
import { withRouter } from 'next/router'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { type: "", year: "", title: "", }
    }
    handleClick = (event) => {
        event.preventDefault();
        const { title, year, type } = this.state
        if (title.length > 0 && year.length > 0 && type.length > 0) {
            this.props.router.push(`/search-results/${title}/${year}/${type}`)
            this.setState({ type: "", year: "", title: "", })
        }
        else {
            window.alert("type, year, and title are required to search!")
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className={styles.searchBarContainer}>
                <input type="text"
                    placeholder="Year"
                    className={styles.textInput}
                    name="year"
                    required
                    value={this.state.year}
                    onChange={(event) => this.handleChange(event)}
                />
                <select
                    className={styles.selectInput}
                    name="type"
                    required
                    value={this.state.type}
                    onChange={(event) => this.handleChange(event)}>
                    <option className={styles.selectOption} value="">Type</option>
                    <option className={styles.selectOption} value="movie">Movie</option>
                    <option className={styles.selectOption} value="series">Series</option>
                    <option className={styles.selectOption} value="episode">Episode</option>
                </select>
                <div className={styles.searchBoxContainer}>
                    <input
                        type="text"
                        placeholder="Enter the movie name here"
                        name="title"
                        required
                        value={this.state.title}
                        className={styles.searchInput}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <img src="/search.svg" className={styles.searchIcon} />
                </div>
                <button
                    className={styles.btn}
                    onClick={(event) => this.handleClick(event)}
                >
                    Search &rarr;
                </button>
            </div>
        )
    }
}


export default withRouter(SearchBar)