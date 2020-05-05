import React from 'react'
import { Cards, Chart, CountriesPicker, Footer } from './components'
import { fetchData } from './api'
import styles from './App.module.css'
import covid from './image/image.png'
import { Grid } from '@material-ui/core'



class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {},
            country: '',
        }
    }


    async componentDidMount() {
        const fetcheddata = await fetchData();

        this.setState({ data: fetcheddata });
    }

    handlecountry = async (country) => {
        const fetchsData = await fetchData(country);
        this.setState({ data: fetchsData, country: country })
    }

    render() {
        return (<Grid className={styles.app}>
            <img src={covid} className={styles.img} alt='Covid-19'/>
            <Cards data={this.state.data} />
            <CountriesPicker handlecountry={this.handlecountry} />
            <Chart data={this.state.data} country={this.state.country} />
            <Footer />
        </Grid>
        )
    }
}

export default App