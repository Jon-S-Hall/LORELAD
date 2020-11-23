import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Explore.module.css";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "",
      selectedContinent: "",
      selectedSpeakers: "",
    };
  }

  static async getInitialProps(ctx) {
    // Call an external API endpoint to get languages
    const res = await fetch("https://lorelad-backend.herokuapp.com/languages");
    const languages = await res.json();
    return { languages: languages };
  }

  handleChange = (e) => {
    this.setState({ selectedLang: e.target.value });
  };

  handleContinentChange = (e) => {
    this.setState({ selectedContinent: e.target.value });
  };

  handleSpeakersChange = (e) => {
    this.setState({ selectedSpeakers: e.target.value });
  };

  openList = () => {
    document.getElementById("filter").classList.toggle("open");
  };

  render() {
    let filteredLang = this.props.languages.filter((language) => {
      let ret = [];
      let min = 0;
      let max = 0;
      if (this.state.selectedSpeakers == "100") {
        max = 100;
      } else if (this.state.selectedSpeakers == "1000") {
        min = 100;
        max = 1000;
      } else if (this.state.selectedSpeakers == "10000") {
        min = 1000;
        max = 10000;
      } else if (this.state.selectedSpeakers == "100000") {
        min = 10000;
        max = 100000;
      } else if (this.state.selectedSpeakers == "100000") {
        min = 100000;
        max = Number.MAX_SAFE_INTEGER;
      }
      if (language.name != null) {
        ret =
          language.name.includes(this.state.selectedLang) &&
          language.continent.includes(this.state.selectedContinent);
        // Number(language.num_speakers) > min &&
        // Number(language.num_speakers) < max;
      }
      return ret;
    });
    let continents = [];
    continents = this.props.languages.map((language) => {
      let ret = [];
      if (
        language.continent != undefined &&
        language.continent != "" &&
        language.continent != null &&
        !ret.includes(language.continent)
      ) {
        ret.push(language.continent);
      }
      return ret;
    });

    return (
      <Layout {...this.props}>
        <div>
          <Head>
            <title>Explore</title>
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            {/* Google Fonts */}
            <link
              href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            {/* Font Awesome */}
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
            />
          </Head>

          <main className={styles.main}>
            <h1>Explore Languages</h1>
            <section>
              <form action="index.html" method="post">
                <SearchBar />
                <select
                  name="language_dropdown"
                  id="language_dropdown"
                  onChange={this.handleChange}
                >
                  <option value="">All</option>
                  {this.props.languages.map((language) => (
                    <option value={language.name}>{language.name}</option>
                  ))}
                </select>
                <select
                  name="continent_dropdown"
                  id="continent_dropdown"
                  onChange={this.handleContinentChange}
                >
                  <option value="">All</option>
                  {continents.map((continent) => (
                    <option value={continent}>{continent}</option>
                  ))}
                </select>
                <select
                  name="speakers_dropdown"
                  id="speakers_dropdown"
                  onChange={this.handleSpeakersChange}
                >
                  <option value="">All</option>
                  <option value="100">less than 100</option>
                  <option value="1000">100 - 1,000</option>
                  <option value="10000">1,000 - 10,000</option>
                  <option value="100000">10,000 - 100,000</option>
                  <option value="1000000">more than 100,000</option>
                </select>
              </form>
              {/* <div
                className={styles.custom_select_wrapper}
                onClick={this.openList}
              >
                <div className={styles.custom_select} id="filter">
                  <div className={styles.custom_select__trigger}>
                    <span>Tesla</span>
                    <div className={styles.arrow}></div>
                  </div>
                  <div className={styles.custom_options}>
                    <span
                      className={`${styles.custom_option} ${styles.selected}`}
                      data-value="tesla"
                    >
                      Tesla
                    </span>
                    <span className={styles.custom_option} data-value="volvo">
                      Volvo
                    </span>
                    <span
                      className={styles.custom_option}
                      data-value="mercedes"
                    >
                      Mercedes
                    </span>
                  </div>
                </div>
              </div> */}
            </section>
            <section className={styles.results}>
              <h2>All Languages</h2>
              <div className={styles.language_container}>
                {/* Example sections showing what the language list would look like */}
                <Link href="/explore/taishanese">
                  <h3>Taishanese</h3>
                </Link>
                <div>
                  <p>Native speakers: 500</p>
                  <p>Country: China</p>
                </div>
              </div>
              <div className={styles.language_container}>
                <Link href="/explore/taishanese">
                  <h3>Taishanese</h3>
                </Link>
                <div>
                  <p>Native speakers: 500</p>
                  <p>Country: China</p>
                </div>
              </div>
              <div className={styles.language_container}>
                <Link href="/explore/taishanese">
                  <h3>Taishanese</h3>
                </Link>
                <div>
                  <p>Native speakers: 500</p>
                  <p>Country: China</p>
                </div>
              </div>
              {/* actual code for generating the language list: */}
              {filteredLang.map((language) => (
                <Link
                  href={{
                    pathname: "/explore/[slug]",
                    query: { slug: language.name },
                  }}
                >
                  <div className={styles.language_container}>
                    <h3>{language.name}</h3>
                    <div>
                      <p>Native speakers: {language.num_speakers}</p>
                      <p>Continent: {language.continent}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </main>
        </div>
      </Layout>
    );
  }
}

export default Explore;
