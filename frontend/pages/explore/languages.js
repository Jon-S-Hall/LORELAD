import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Explore.module.css";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import { server } from "../../config";

// import { withRouter } from "next/router";
// const router = withRouter();
// const { search } = router.query;

class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "",
      selectedContinent: "",
      selectedSpeakers: "",
      searchInput: "",
    };
  }

  handleSubmit = (e) => {
    this.setState({ searchInput: e.target.value });
  };

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
      let max = Number.MAX_SAFE_INTEGER;
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
      } else if (this.state.selectedSpeakers == "1000000") {
        min = 100000;
        max = 1000000;
      } else if (this.state.selectedSpeakers == "10000000") {
        min = 1000000;
        max = Number.MAX_SAFE_INTEGER;
      }

      if (language.name != null) {
        ret =
          language.name.toLowerCase().includes(this.state.searchInput) &&
          language.continent.includes(this.state.selectedContinent) &&
          Number(language.num_speakers) > min &&
          Number(language.num_speakers) < max;
      }
      return ret;
    });

    let continents = [];
    this.props.languages.map((language) => {
      if (
        language.continent != undefined &&
        language.continent != "" &&
        language.continent != null &&
        !continents.includes(language.continent)
      ) {
        continents.push(language.continent);
      }
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
            <div className={styles.add_language_cont}>
              Don't see your language yet?
              <Link href="/explore/add_language">
                <a> Add it here!</a>
              </Link>
            </div>
            <section className={styles.search_container}>
              <form onSubmit={this.handleSubmit}>
                <SearchBar />
              </form>
              <div>
                {/* <select
                  name="language_dropdown"
                  id="language_dropdown"
                  onChange={this.handleChange}
                >
                  <option value="">All</option>
                  {this.props.languages.map((language) => (
                    <option value={language.name}>{language.name}</option>
                  ))}
                </select> */}
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
                  <option value="1000000">100,000 - 1,000,000</option>
                  <option value="10000000">more than 1,000,000</option>
                </select>
              </div>
            </section>
            <section className={styles.results}>
              <h2>All Languages</h2>
              {/* actual code for generating the language list: */}
              {filteredLang.map((language) => (
                <Link
                  href={{
                    pathname: "/explore/[language]", //this takes us to our slug. replace language with langauge.name
                    query: { language: language.name },
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

export async function getServerSideProps(context) {
  // Call an external API endpoint to get languages
  const res = await fetch(`${server}/languages`);
  //const res = await fetch("http://127.0.0.1:8000/languages");
  const languages = await res.json();
  return { props: { languages, revalidate: 5 } }; //revalidate allows the page to update (as new languages come ine) incrementally. Thus it updates at most, once every 5 seconds.
}

export default Languages;
