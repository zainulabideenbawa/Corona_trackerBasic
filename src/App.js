import React from 'react';
import styles from './App.module.css';
import { Cards, Charts, Countrypicker } from './componenets'
import { fetchdata } from './api';
import cx from 'classnames'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetcheddata = await fetchdata();

    this.setState({ data: fetcheddata })

  }

  handleCountryChnage = async (country) => {
    const fetcheddata = await fetchdata(country);
    this.setState({ data: fetcheddata, country: country });

  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container} >
        <Countrypicker handleCountryChnage={this.handleCountryChnage} />
        <Cards data={data} />
        <Charts data={data} country={country} />

      </div>
    );
  }
}

export default App;
