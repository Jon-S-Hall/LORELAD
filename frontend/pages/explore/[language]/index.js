import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Language.module.css";
import Layout from "../../../components/Layout";
import Player from "../../../components/PlayerMinimal";
import { server } from "../../../config";

// Language Page template - incomplete while API is getting finished
// refer to taishanese > index.js for example of final product

function Language({ language, records, user_state }) {
  //get language name from route
  const router = useRouter();

  //match language from list of languages based on language name

  //extract result from languageRes list
  const records_match = records.filter(
    (record) => record.language == language.id
  );

  const default_img = <img src="/chinese_culture.jpg" alt="No Picture" />;
  const lang_img = <img src={language.cov_image} alt="No Picture" />;
  return (
    <Layout user_state={user_state}>
      <div>
        <Head>
          <title>{language.name}</title>
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
          <div className={styles.language_name}>
            <Link href="/explore/languages">
              <svg
                width="51"
                height="27"
                viewBox="0 0 51 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49 13H2"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.375 24.75L2 13.375L13.375 2"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <h1>{language.name}</h1>
          </div>
          <section className={`${styles.container} ${styles.about}`}>
            <svg
              width="352"
              height="339"
              viewBox="0 0 352 339"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.first}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.1588 -35.5431C67.3636 -61.115 107.982 -97.2127 147.623 -88.1464C188.295 -78.8443 186.227 -21.3833 214.845 6.23908C237.587 28.1907 279.949 27.0436 295.391 54.4839C312.514 84.9097 319.07 125.73 301.067 159.455C283.337 192.669 242.196 208.015 206.198 221.57C177.403 232.413 148.473 222.679 118.634 228.15C79.1634 235.388 36.6378 276.937 4.34648 258.582C-27.0232 240.752 -2.18372 188.82 -11.3361 154.276C-20.6976 118.943 -58.1423 92.5053 -49.5688 55.089C-40.7252 16.4939 -1.83724 -10.8491 32.1588 -35.5431Z"
                fill="#8EA934"
              />
            </svg>
            <svg
              width="264"
              height="101"
              viewBox="0 0 264 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.second}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M230.511 26.3623C219.916 39.66 188.013 27.5237 169.32 33.6383C152.282 39.2115 148.099 58.9045 128.439 59.7512C107.186 60.6665 78.8188 54.0253 64.459 38.1544C49.7528 21.9007 67.8155 4.45856 62.0386 -13.6369C57.0071 -29.3972 32.4909 -43.1571 33.7058 -58.1758C34.9628 -73.7157 52.5924 -82.1147 68.1662 -89.3899C84.6555 -97.0926 103.17 -103.147 124.778 -100.719C147.606 -98.1545 172.393 -90.4539 190.02 -75.7002C207.107 -61.3981 208.723 -42.2369 215.719 -24.6012C222.61 -7.23187 240.799 13.4483 230.511 26.3623Z"
                fill="#8EA934"
              />
            </svg>
            <svg
              width="349"
              height="132"
              viewBox="0 0 349 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.third}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M175.117 0.578433C210.316 5.71293 213.408 44.7474 241.301 61.6437C266.724 77.0438 309.104 72.5476 327.427 92.8401C347.235 114.777 358.169 147.611 339.035 169.882C319.439 192.691 269.742 181.574 238.95 195.824C212.132 208.235 205.764 240.234 175.117 245.741C143.407 251.439 111.91 236.693 84.3701 223.601C55.2117 209.74 27.5891 193.003 14.0723 169.182C-0.20752 144.017 -6.01868 114.47 8.14463 89.2678C21.8744 64.8367 58.2925 54.4813 87.1443 39.1563C115.56 24.0629 140.935 -4.40789 175.117 0.578433Z"
                fill="#8EA934"
              />
            </svg>
            <h3>About</h3>
            <div className={styles.top}>
              {language.cov_image == null ? default_img : lang_img}
              <div>
                <p>{language.summary}</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.stats}>
                <p>{language.num_speakers} Active Speakers</p>
                <p>{language.num_recordings} Recordings</p>
              </div>
              <div className={styles.location}>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8242 15.668C12.1816 15.8184 12.5918 15.791 12.0586 15.8594C9.77539 16.3516 11.4707 16.7891 12.8242 15.668ZM52.9785 16.584C53.1426 16.4746 53.7168 15.9141 51.9258 15.3672C52.0352 15.9277 51.5566 15.873 51.5566 16.1875C52.8828 17.3906 53.4297 19.4824 55.125 19.9199C55.4531 18.416 53.6211 17.6777 52.9785 16.584V16.584ZM11.6074 15.2305C11.8125 16.4473 12.7285 13.9453 12.7422 13.0566C12.3867 13.2617 12.0313 13.4668 11.6621 13.6309C12.5234 14.0684 11.7715 14.5332 10.8418 15.2305C8.95508 17.582 12.6055 13.3984 11.6074 15.2305V15.2305ZM35 0C15.668 0 0 15.668 0 35C0 54.3184 15.668 70 35 70C54.332 70 70 54.3184 70 35C70 15.668 54.332 0 35 0ZM35.9297 11.7305L36.0938 11.7852C35.4375 12.6328 39.5117 15.1074 36.5859 15.3125C33.8516 16.0918 37.7344 14.6016 35.6152 14.8613C36.7363 13.3027 34.7266 13.2754 35.9297 11.7305V11.7305ZM19.332 13.9727C18.3477 13.1523 15.2578 15.0938 16.3379 14.6289C19.0176 13.5762 16.5156 14.7383 17.1445 15.9961C16.5703 17.1855 16.9531 14.8203 15.5312 16.2285C14.5059 16.4609 11.9902 18.7852 12.3047 18.0742C12.2227 19.1816 9.31055 20.4941 8.91406 22.3398C7.95703 24.8965 8.68164 22.2441 8.50391 21.2461C7.13672 19.5098 4.64844 24.1855 5.38672 26.0312C6.63086 23.8437 6.53516 25.7988 5.63281 26.7695C6.54883 28.4512 4.79883 30.6387 6.53516 31.8828C7.30078 32.0605 8.83203 29.3125 8.16211 32.1699C8.62695 29.6953 9.44727 32.7578 10.7734 32.0742C10.8555 33.373 11.6621 32.7715 11.8398 34.3437C14.0547 34.1797 16.0781 37.9258 13.4395 38.6367C13.8359 38.5273 14.6152 39.2246 15.5176 38.6914C17.0488 39.9082 21.082 40.0586 21.1914 43.0664C18.416 44.3926 20.5078 48.0293 18.1016 49.3281C15.3398 48.918 17.1582 52.7324 15.9961 52.2949C16.4609 55.043 13.207 51.9395 14.4648 53.457C16.7754 54.8789 13.4531 54.5918 14.4922 55.6309C13.3301 55.3848 15.2168 57.791 15.5312 58.6797C17.1992 61.3867 14.0957 58.0781 13.1797 57.1758C12.3047 55.4258 10.2402 52.0762 9.66602 49.3281C9.33789 45.3359 6.24805 42.6562 5.53711 38.7598C4.82617 36.5859 7.49219 33.0996 6.05664 31.8828C4.8125 30.9121 5.31836 27.5898 4.58008 25.8398C6.42578 17.8418 12.291 11.1016 19.332 7.10938C18.6074 7.64258 23.4746 5.72852 22.9141 6.19336C22.7637 6.53516 25.7578 4.89453 27.5625 4.64844C27.3711 4.67578 22.873 6.28906 24.1172 6.07031C22.1895 7.01367 23.9258 6.48047 24.8828 6.00195C22.9688 7.41016 21.4922 7.01367 19.3184 8.25781C17.1309 8.83203 17.582 11.1016 16.0234 12.2363C16.9395 12.4004 19.2363 9.87109 20.5762 8.98242C23.6523 7.49219 19.0176 11.6895 21.9434 9.88477C20.959 10.8008 21.1641 12.2637 20.5625 12.6738C20.2617 12.5918 21.752 13.3848 19.332 13.9727ZM24.1172 7.68359C23.8027 8.10742 23.3652 9.02344 23.1055 8.46289C22.75 8.64063 22.6133 9.40625 21.9434 8.79102C22.3398 8.50391 22.75 7.82031 21.9707 8.24414C22.3262 7.86133 25.498 6.78125 25.3203 6.37109C25.8809 6.01562 25.8262 5.83789 25.1836 6.05664C24.8555 5.94727 25.9629 5.01758 27.4395 4.89453C27.6445 4.89453 27.7266 5.03125 27.3574 4.99023C25.1289 5.67383 26.0859 5.48242 27.5898 4.99023C27.0156 5.31836 26.6191 5.41406 26.5234 5.56445C28.0273 5.01758 26.4414 5.96094 26.7832 5.89258C26.3594 6.11133 26.8516 6.17969 26.0312 6.49414C26.1816 6.37109 24.6914 7.38281 25.5801 7.08203C24.7188 7.90234 24.3359 7.91602 24.1172 7.68359V7.68359ZM25.4297 9.63867C25.457 8.32617 27.3438 7.49219 27.1113 7.42383C29.4355 6.33008 26.3047 7.46484 28.1367 6.48047C28.8203 6.41211 30.2695 4.22461 32.2793 4.08789C34.4941 3.41797 33.4687 4.12891 35.1094 3.5L34.7812 3.77344C34.4941 3.81445 34.8496 4.32031 33.8105 5.08594C33.7012 6.27539 31.8281 5.72852 32.7578 7C32.1563 6.13867 31.2539 6.97266 32.3887 7.05469C31.1719 7.98437 28.3418 8.14844 26.9883 9.69336C26.1133 10.9512 25.3066 10.5547 25.4297 9.63867V9.63867ZM35.1504 14.0137C34.2207 16.2559 33.3184 13.6855 34.959 13.2754C35.3691 13.4941 35.5332 13.5625 35.1504 14.0137ZM31.6504 9.5293C31.377 8.51758 31.5957 9.05078 33.2227 8.57227C34.3437 9.37891 32.2246 9.91211 31.6504 9.5293ZM57.1074 49.6563C55.8223 47.4414 58.666 45.3906 59.623 43.5312C59.5 45.7051 59.2266 47.8516 57.1074 49.6563ZM61.9473 24.3496C60.5527 24.459 59.2949 24.7871 58.0371 23.9941C55.1387 20.8223 58.5703 27.5762 59.5273 24.8145C62.9727 26.127 59.4727 31.7871 57.2988 31.1992C56.082 28.5742 54.5781 25.6895 51.9258 24.4043C53.9629 26.6602 54.9746 29.4355 57.1621 31.4727C57.3125 34.3164 60.1973 30.4336 60.0195 32.6348C60.293 36.4219 55.7402 38.6914 56.5332 42.4922C58.2285 45.9512 53.2656 46.5801 53.8262 49.6836C51.8301 51.9121 49.6973 54.9199 46.1152 54.4414C46.1152 52.5547 45.1582 50.9551 44.9395 49.0137C42.998 46.5527 46.9902 43.9141 44.5156 41.3437C41.6582 40.7012 45.1035 36.7637 42.1641 37.1328C40.4004 35.3691 37.8164 37.0781 35.2871 37.0918C32.1152 37.3926 28.8477 33.1953 30.2559 30.2285C29.1348 27.1387 33.8105 26.2363 33.9336 23.5156C36.1758 21.6426 39.3613 21.875 42.3965 21.4375C42.1777 23.6113 44.4746 23.625 46.2109 24.3496C47.1816 21.998 50.2031 24.7324 52.2676 23.2422C52.9785 19.7695 50.2578 21.8613 48.6992 20.7539C46.8125 17.9922 52.7324 19.332 52.1172 17.8828C49.8203 17.8691 51.1191 15.0527 49.4922 16.625C50.9551 16.8848 49.2324 18.0332 49.2734 16.7207C47.0586 16.0781 49.1914 19.2363 48.0703 19.5371C46.3613 18.8262 47.168 20.3437 47.3457 20.5762C46.6074 22.1758 45.7051 18.2246 43.6133 18.334C41.5352 16.4336 42.793 19.1953 44.5977 19.6465C44.2148 19.7559 44.8164 21.3281 44.3379 20.6582C42.8477 18.6074 40.0176 17.2402 38.3359 19.7559C38.1582 22.1074 33.373 22.7773 34.1387 20.0293C33.0176 17.1855 37.6113 19.9473 37.1875 17.6777C34.2344 15.7227 37.9941 16.3516 38.9922 14.5195C41.2617 14.5879 39.0879 12.6602 40.1543 12.0996C40.0449 14.1914 41.8906 13.7949 43.3535 13.3984C42.998 12.1953 44.2285 12.2363 43.4766 11.2383C46.8672 9.88477 40.8926 11.8672 42.0957 8.90039C40.6328 7.88867 41.4805 11.1289 42.0957 11.4707C42.1367 12.4688 41.2891 13.6992 40.127 11.6074C38.4316 12.7148 38.6094 10.4863 38.5 10.7188C38.3086 9.85742 39.7852 9.81641 39.7988 8.3125C39.6758 7.35547 39.7031 6.84961 40.3867 6.79492C40.4414 6.93164 43.1895 6.97266 44.1602 8.10742C41.5078 7.57422 43.7637 8.54492 44.9531 9.0918C43.6816 8.09375 45.459 9.0918 44.4199 7.95703C44.8301 8.03906 43.2852 6.39844 44.8711 7.83398C44.0098 6.80859 46.5527 7.10938 45.0488 6.34375C47.25 6.95898 45.9512 6.39844 44.6523 5.83789C41.0703 3.70508 50.9824 8.72266 46.9355 6.49414C49.5195 7.05469 41.4121 4.49805 45.1035 5.61914C43.6953 5.00391 45.0625 5.3457 46.334 5.74219C44.0508 5.03125 40.6328 3.70508 40.7695 3.65039C41.5625 3.70508 42.3418 3.88281 43.0938 4.10156C45.4316 4.79883 42.4238 3.9375 43.0664 3.95117C51.1055 6.01562 58.1465 11.4023 62.4258 18.4434C63.4238 19.4961 66.1445 26.4551 64.7227 23.3652C65.3652 25.8262 65.4609 28.4785 65.8027 30.9941C65.0918 30.2012 64.2988 27.2754 63.6152 25.6484C63.3281 26.2773 63 24.7598 61.9473 24.3496Z"
                    fill="#606C38"
                  />
                </svg>
                <div>
                  <a href="https://www.google.com/maps/place/">
                    <p>Where in the World?</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.container} ${styles.recordings}`}>
            <svg
              width="336"
              height="139"
              viewBox="0 0 336 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.first}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M301.715 23.0875C297.634 58.6684 335.832 103.59 305.256 128.194C274.198 153.186 219.472 125.349 174.982 125.066C141.68 124.854 110.869 130.245 77.6637 126.746C28.1923 121.533 -31.4264 130.799 -65.1701 99.7619C-98.7356 68.8884 -96.6389 19.0662 -80.2186 -18.4742C-65.238 -52.7233 -19.537 -67.6149 16.937 -87.9532C44.7457 -103.46 72.787 -117.421 106.278 -122.466C139.73 -127.507 172.96 -123.053 206.656 -116.537C249.868 -108.181 307.236 -111.451 329.069 -79.383C350.989 -47.1865 305.83 -12.7769 301.715 23.0875Z"
                fill="#DDA15E"
              />
            </svg>
            <svg
              width="309"
              height="217"
              viewBox="0 0 309 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.second}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M211.511 0.0112255C247.228 0.368704 279.44 12.0065 311.091 25.0239C348.352 40.3486 395.262 51.1399 410.639 81.9093C426.139 112.923 411.352 150.213 387.392 177.7C366.221 201.988 323.992 204.787 291.169 218.967C263.894 230.751 241.176 246.288 211.511 253.686C169.438 264.178 124.97 283.774 84.1388 270.595C41.4842 256.828 12.1951 221.61 2.39228 186.19C-7.02111 152.177 13.0152 118.178 33.4047 87.2792C51.0394 60.5554 77.5714 38.9362 110.071 23.012C140.686 8.01145 175.439 -0.349792 211.511 0.0112255Z"
                fill="#DDA15E"
              />
            </svg>
            <div className={styles.recordings_top}>
              <h3>Recordings</h3>
              {/* <Link
                href={{
                  pathname: "/explore/[language]/all_recordings",
                  query: { language: language.name },
                }}
              > */}
              <Link
                href={{
                  pathname: "/explore/recordings",
                  query: { language: language.name },
                }}
              >
                <button>
                  View All Recordings <i class="fas fa-angle-right"></i>
                </button>
              </Link>
            </div>
            <div className={styles.subjects}>
              <div className={styles.subject_1}>
                <h4>Recent</h4>
                {records_match.map((record) => (
                  <div className={styles.recording}>
                    <div>
                      <h6>{record.title}</h6>
                      <p>@{record.speaker}</p>
                    </div>
                    <p className={styles.subject}>{record.subject}</p>
                    <Player source={record.media} />
                    <div>
                      <Link
                        href={{
                          pathname: "/explore/recording/[recording_id]",
                          query: { recording_id: record.id },
                        }}
                    >
                      <a>more info</a>
                    </Link></div>
                  </div>
                ))}
              </div>
              <div className={styles.subject_2}>
                <h4>Folk Stories</h4>
                <div className={styles.recording}>
                  <div>
                    <h6>Recording Title</h6>
                    <p>@lrlspeaker123</p>
                  </div>
                  <p>Audio player here</p>
                </div>
                <div className={styles.recording}>
                  <div>
                    <h6>Recording Title</h6>
                    <p>@lrlspeaker123</p>
                  </div>
                  <p>Audio player here</p>
                </div>
                <div className={styles.recording}>
                  <div>
                    <h6>Recording Title</h6>
                    <p>@lrlspeaker123</p>
                  </div>
                  <p>Audio player here</p>
                </div>
                {/* {language.records.map((record) => (
                <div className={styles.recording}>
                  <div>
                    <h6>{record.title}</h6>
                    <p>@{record.creator}</p>
                  </div>
                  <p>@{record.media}</p>
                </div>
              ))} */}
              </div>
            </div>
          </section>
          <section className={`${styles.container} ${styles.communities}`}>
            <h3>Communities</h3>
            <div className={styles.communities_list}>
              <div>
                <i class="fab fa-facebook-square"></i>
                <h6>Facebook</h6>
              </div>
              <div>
                <i class="fab fa-discord"></i>
                <h6>Discord</h6>
              </div>
            </div>
            {/* <div className={styles.communities}>
            {language.communities.map((community) => (
              <div>
                <i class="fab fa-discord"></i>
                <h6>{community.name}</h6>
              </div>
            ))}
          </div> */}
          </section>
          <section className={styles.edit_container}>
            <Link
              href={{
                pathname: "/explore/add_language",
                query: { language: language.name },
              }}
            >
              <button className={styles.edit}>Edit</button>
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch(`${server}/languages`);
  const res = await fetch("http://lorelad-backend.herokuapp.com/languages");
  const languages = await res.json();
  // Get the paths we want to pre-render based on recordings
  const paths = languages.map((language) => ({
    params: { language: language.name },
  }));
  //`/explore/${language.name}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get languages
  // const res = await fetch(`${server}/languages/${params.language}`);
  const res = await fetch(
    `http://lorelad-backend.herokuapp.com/languages/${params.language}`
  );
  const language = await res.json();
  // const rec = await fetch(`${server}/records`);
  const rec = await fetch("http://lorelad-backend.herokuapp.com/records");
  const records = await rec.json();
  const logged_in = false;
  const username = "na";
  console.log(records);
  // Pass languages to the page via props
  return {
    props: {
      language: language,
      records: records,
      user_state: { logged_in, username },
    },
    revalidate: 1, // In seconds
  };
}

// export async function getServerSideProps() {
//   // This is a real endpoint
//   const res = await fetch("https://lorelad-backend.herokuapp.com/records");
//   const records = await res.json();

//   return {
//     props: {
//       records,
//     },
//   };
// }

export default Language;
