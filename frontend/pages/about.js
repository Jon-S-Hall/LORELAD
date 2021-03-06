import Head from "next/head";

import about_styles from "../styles/About.module.css"; //import styles specific to about page
import Layout from "../components/Layout"; //import common layout styles. notice that we're importing a JS class

const About = (props) => (
  <Layout
    title="About"
    user_state={props.user_state}
    handle_logout={props.handle_logout}
  >
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <main className={about_styles.main}>
      <div className={about_styles.container}>
        <section id="about_us" className={about_styles.about_us}>
          <div className={about_styles.content_wrapper}>
            <h1>About Us</h1>
            <div className={about_styles.stats}>
              <p className={about_styles.intro}>
                There are over <span>7000</span> active languages in the world.
              </p>
              <p className={about_styles.intro}>
                <span>90%</span> may no longer be spoken by 2100.
              </p>
            </div>
            <h2>The Language Problem</h2>
            <p>Our rapidly globalizing world economy has allowed us to be <b>more connected</b> than ever. But with convenience comes a cost.</p>

            <p>Our connectedness has made the languages we speak <b>a skill. </b></p>

            <p>We're taught a second language in American schools, and they're almost always one of <b>the big 10</b>.
              Among them are English, Spanish, Mandarin, French, and Hindi.</p>

            <p> This is no coincidence. These languages are some of the most spoken on the planet. In fact, <b>5.34 billion people </b>
              speak at least one.</p>

            <p> They have become the tools of trade and business. Most jobs require you to speak one fluently. And of course, the more you know the better.</p>

            <p>But <b> language is so much more than a tool to communicate. The way we
              speak helps define who we are. Language holds our culture, our
              heritage, and our history.</b></p>

            <p>And they're dying. </p>


          </div>
          <svg
            className={about_styles.globe}
            width="100"
            height="100"
            viewBox="0 -5 160 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9844 26.8594C20.8828 27.1172 21.5859 27.0703 20.6719 27.1875C16.7578 28.0312 19.6641 28.7812 21.9844 26.8594ZM90.8203 28.4297C91.1016 28.2422 92.0859 27.2812 89.0156 26.3438C89.2031 27.3047 88.3828 27.2109 88.3828 27.75C90.6562 29.8125 91.5938 33.3984 94.5 34.1484C95.0625 31.5703 91.9219 30.3047 90.8203 28.4297ZM19.8984 26.1094C20.25 28.1953 21.8203 23.9062 21.8438 22.3828C21.2344 22.7344 20.625 23.0859 19.9922 23.3672C21.4688 24.1172 20.1797 24.9141 18.5859 26.1094C15.3516 30.1406 21.6094 22.9688 19.8984 26.1094ZM60 0C26.8594 0 0 26.8594 0 60C0 93.1172 26.8594 120 60 120C93.1406 120 120 93.1172 120 60C120 26.8594 93.1406 0 60 0ZM61.5937 20.1094L61.875 20.2031C60.75 21.6562 67.7344 25.8984 62.7188 26.25C58.0312 27.5859 64.6875 25.0312 61.0547 25.4766C62.9766 22.8047 59.5312 22.7578 61.5937 20.1094ZM33.1406 23.9531C31.4531 22.5469 26.1562 25.875 28.0078 25.0781C32.6016 23.2734 28.3125 25.2656 29.3906 27.4219C28.4062 29.4609 29.0625 25.4062 26.625 27.8203C24.8672 28.2188 20.5547 32.2031 21.0938 30.9844C20.9531 32.8828 15.9609 35.1328 15.2812 38.2969C13.6406 42.6797 14.8828 38.1328 14.5781 36.4219C12.2344 33.4453 7.96875 41.4609 9.23438 44.625C11.3672 40.875 11.2031 44.2266 9.65625 45.8906C11.2266 48.7734 8.22656 52.5234 11.2031 54.6562C12.5156 54.9609 15.1406 50.25 13.9922 55.1484C14.7891 50.9062 16.1953 56.1562 18.4688 54.9844C18.6094 57.2109 19.9922 56.1797 20.2969 58.875C24.0938 58.5938 27.5625 65.0156 23.0391 66.2344C23.7188 66.0469 25.0547 67.2422 26.6016 66.3281C29.2266 68.4141 36.1406 68.6719 36.3281 73.8281C31.5703 76.1016 35.1562 82.3359 31.0312 84.5625C26.2969 83.8594 29.4141 90.3984 27.4219 89.6484C28.2188 94.3594 22.6406 89.0391 24.7969 91.6406C28.7578 94.0781 23.0625 93.5859 24.8438 95.3672C22.8516 94.9453 26.0859 99.0703 26.625 100.594C29.4844 105.234 24.1641 99.5625 22.5938 98.0156C21.0938 95.0156 17.5547 89.2734 16.5703 84.5625C16.0078 77.7188 10.7109 73.125 9.49219 66.4453C8.27344 62.7188 12.8438 56.7422 10.3828 54.6562C8.25 52.9922 9.11719 47.2969 7.85156 44.2969C11.0156 30.5859 21.0703 19.0312 33.1406 12.1875C31.8984 13.1016 40.2422 9.82031 39.2812 10.6172C39.0234 11.2031 44.1562 8.39062 47.25 7.96875C46.9219 8.01562 39.2109 10.7812 41.3438 10.4062C38.0391 12.0234 41.0156 11.1094 42.6562 10.2891C39.375 12.7031 36.8438 12.0234 33.1172 14.1562C29.3672 15.1406 30.1406 19.0312 27.4688 20.9766C29.0391 21.2578 32.9766 16.9219 35.2734 15.3984C40.5469 12.8437 32.6016 20.0391 37.6172 16.9453C35.9297 18.5156 36.2812 21.0234 35.25 21.7266C34.7344 21.5859 37.2891 22.9453 33.1406 23.9531ZM41.3438 13.1719C40.8047 13.8984 40.0547 15.4688 39.6094 14.5078C39 14.8125 38.7656 16.125 37.6172 15.0703C38.2969 14.5781 39 13.4062 37.6641 14.1328C38.2734 13.4766 43.7109 11.625 43.4062 10.9219C44.3672 10.3125 44.2734 10.0078 43.1719 10.3828C42.6094 10.1953 44.5078 8.60156 47.0391 8.39062C47.3906 8.39062 47.5312 8.625 46.8984 8.55469C43.0781 9.72656 44.7188 9.39844 47.2969 8.55469C46.3125 9.11719 45.6328 9.28125 45.4688 9.53906C48.0469 8.60156 45.3281 10.2188 45.9141 10.1016C45.1875 10.4766 46.0312 10.5938 44.625 11.1328C44.8828 10.9219 42.3281 12.6562 43.8516 12.1406C42.375 13.5469 41.7188 13.5703 41.3438 13.1719ZM43.5938 16.5234C43.6406 14.2734 46.875 12.8438 46.4766 12.7266C50.4609 10.8516 45.0938 12.7969 48.2344 11.1094C49.4062 10.9922 51.8906 7.24219 55.3359 7.00781C59.1328 5.85938 57.375 7.07812 60.1875 6L59.625 6.46875C59.1328 6.53906 59.7422 7.40625 57.9609 8.71875C57.7734 10.7578 54.5625 9.82031 56.1562 12C55.125 10.5234 53.5781 11.9531 55.5234 12.0938C53.4375 13.6875 48.5859 13.9688 46.2656 16.6172C44.7656 18.7734 43.3828 18.0938 43.5938 16.5234ZM60.2578 24.0234C58.6641 27.8672 57.1172 23.4609 59.9297 22.7578C60.6328 23.1328 60.9141 23.25 60.2578 24.0234ZM54.2578 16.3359C53.7891 14.6016 54.1641 15.5156 56.9531 14.6953C58.875 16.0781 55.2422 16.9922 54.2578 16.3359ZM97.8984 85.125C95.6953 81.3281 100.57 77.8125 102.211 74.625C102 78.3516 101.531 82.0312 97.8984 85.125ZM106.195 41.7422C103.805 41.9297 101.648 42.4922 99.4922 41.1328C94.5234 35.6953 100.406 47.2734 102.047 42.5391C107.953 44.7891 101.953 54.4922 98.2266 53.4844C96.1406 48.9844 93.5625 44.0391 89.0156 41.8359C92.5078 45.7031 94.2422 50.4609 97.9922 53.9531C98.25 58.8281 103.195 52.1719 102.891 55.9453C103.359 62.4375 95.5547 66.3281 96.9141 72.8438C99.8203 78.7734 91.3125 79.8516 92.2734 85.1719C88.8516 88.9922 85.1953 94.1484 79.0547 93.3281C79.0547 90.0938 77.4141 87.3516 77.0391 84.0234C73.7109 79.8047 80.5547 75.2812 76.3125 70.875C71.4141 69.7734 77.3203 63.0234 72.2812 63.6562C69.2578 60.6328 64.8281 63.5625 60.4922 63.5859C55.0547 64.1016 49.4531 56.9062 51.8672 51.8203C49.9453 46.5234 57.9609 44.9766 58.1719 40.3125C62.0156 37.1016 67.4766 37.5 72.6797 36.75C72.3047 40.4766 76.2422 40.5 79.2188 41.7422C80.8828 37.7109 86.0625 42.3984 89.6016 39.8438C90.8203 33.8906 86.1562 37.4766 83.4844 35.5781C80.25 30.8438 90.3984 33.1406 89.3438 30.6562C85.4062 30.6328 87.6328 25.8047 84.8438 28.5C87.3516 28.9453 84.3984 30.9141 84.4688 28.6641C80.6719 27.5625 84.3281 32.9766 82.4062 33.4922C79.4766 32.2734 80.8594 34.875 81.1641 35.2734C79.8984 38.0156 78.3516 31.2422 74.7656 31.4297C71.2031 28.1719 73.3594 32.9062 76.4531 33.6797C75.7969 33.8672 76.8281 36.5625 76.0078 35.4141C73.4531 31.8984 68.6016 29.5547 65.7188 33.8672C65.4141 37.8984 57.2109 39.0469 58.5234 34.3359C56.6016 29.4609 64.4766 34.1953 63.75 30.3047C58.6875 26.9531 65.1328 28.0312 66.8438 24.8906C70.7344 25.0078 67.0078 21.7031 68.8359 20.7422C68.6484 24.3281 71.8125 23.6484 74.3203 22.9688C73.7109 20.9062 75.8203 20.9766 74.5312 19.2656C80.3438 16.9453 70.1016 20.3438 72.1641 15.2578C69.6562 13.5234 71.1094 19.0781 72.1641 19.6641C72.2344 21.375 70.7812 23.4844 68.7891 19.8984C65.8828 21.7969 66.1875 17.9766 66 18.375C65.6719 16.8984 68.2031 16.8281 68.2266 14.25C68.0156 12.6094 68.0625 11.7422 69.2344 11.6484C69.3281 11.8828 74.0391 11.9531 75.7031 13.8984C71.1562 12.9844 75.0234 14.6484 77.0625 15.5859C74.8828 13.875 77.9297 15.5859 76.1484 13.6406C76.8516 13.7812 74.2031 10.9688 76.9219 13.4297C75.4453 11.6719 79.8047 12.1875 77.2266 10.875C81 11.9297 78.7734 10.9688 76.5469 10.0078C70.4062 6.35156 87.3984 14.9531 80.4609 11.1328C84.8906 12.0938 70.9922 7.71094 77.3203 9.63281C74.9062 8.57812 77.25 9.16406 79.4297 9.84375C75.5156 8.625 69.6562 6.35156 69.8906 6.25781C71.25 6.35156 72.5859 6.65625 73.875 7.03125C77.8828 8.22656 72.7266 6.75 73.8281 6.77344C87.6094 10.3125 99.6797 19.5469 107.016 31.6172C108.727 33.4219 113.391 45.3516 110.953 40.0547C112.055 44.2734 112.219 48.8203 112.805 53.1328C111.586 51.7734 110.227 46.7578 109.055 43.9688C108.562 45.0469 108 42.4453 106.195 41.7422Z"
              fill="#DDA15E"
            />
          </svg>
        </section>
        <section id="what_we_do" className={about_styles.what_we_do}>
          <div className={about_styles.content_wrapper}>
            <h1>We're LORELAD</h1>
            <p className={about_styles.intro}>
              Our goal is to help bring awareness to the language problem by providing a platform to share stories.
            </p>
            <p className={about_styles.intro}>
              With every language that dies undocumented, so does the culture,
              knowledge, and expressions that it encompasses. If you have something to share,
              we want a place where everyone can listen.
            </p>
          </div>
          <svg
            className={about_styles.translate}
            width="131"
            height="131"
            viewBox="0 0 131 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.1345 50.3677C64.8421 46.1278 63.2338 42.6189 60.3097 39.841C58.8477 38.5251 57.6293 37.6113 56.6546 37.0996C55.6799 36.5879 54.2178 36.1127 52.2684 35.6741C52.3171 35.4304 52.4268 34.7969 52.5974 33.7734C52.7679 32.75 52.9263 31.8971 53.0725 31.2148L46.4202 30.3376L45.6892 33.9927C41.8391 33.3105 38.5251 33.3836 35.7472 34.2121V25.8783C43.1062 25.5859 50.5627 25.0255 58.1166 24.197L57.0932 17.3253C50.9526 18.3488 43.9834 19.0554 36.1858 19.4453C36.2833 17.9833 36.4295 16.7892 36.6244 15.8633C36.8194 14.9373 36.9656 14.0357 37.0631 13.1585C36.8194 13.1585 35.9422 13.1463 34.4314 13.1219C32.9206 13.0976 31.6291 13.0854 30.5569 13.0854C30.4594 13.9626 30.3254 14.9373 30.1549 16.0095C29.9843 17.0817 29.8503 18.3244 29.7528 19.7377L18.495 19.957L19.5184 26.8287L28.2907 26.3901L28.6562 36.4051C23.7827 38.8419 20.1154 41.6198 17.6543 44.7388C15.1932 47.8579 13.9626 51.976 13.9626 57.0932C13.9626 60.2122 14.6936 62.5759 16.1557 64.1842C17.6177 65.7924 19.4453 66.6087 21.6384 66.6331C23.8315 66.6575 26.122 66.2432 28.51 65.3903C30.8981 64.5375 33.0668 63.3313 35.0162 61.7718L36.332 64.4035L41.5954 61.0407L40.0603 57.8973C41.7173 56.2403 43.0331 54.8636 44.0078 53.767C44.9825 52.6705 46.2131 50.9282 47.6995 48.5402C49.1859 46.1522 50.3434 43.6667 51.1719 41.0837C54.096 41.9122 56.0941 42.96 57.1663 44.2271C58.2385 45.4942 58.7014 47.5898 58.5552 50.514C56.216 51.0013 54.2666 52.1709 52.707 54.0229C51.1475 55.8748 50.3677 58.0192 50.3677 60.4559V62.2835C48.5645 62.7708 46.5908 63.0876 44.4464 63.2338L47.8092 68.5703C48.0528 68.5216 48.9057 68.3754 50.3677 68.1317V73.1027H13.0854C11.5746 73.1027 10.2831 72.5544 9.21094 71.4579C8.13876 70.3613 7.60268 69.0577 7.60268 67.5469V13.0854C7.60268 11.5746 8.13876 10.2831 9.21094 9.21094C10.2831 8.13876 11.5746 7.60268 13.0854 7.60268H67.5469C69.0577 7.60268 70.3613 8.13876 71.4579 9.21094C72.5544 10.2831 73.1027 11.5746 73.1027 13.0854V50.3677H65.1345ZM80.6322 50.3677V10.0882C80.6322 7.31027 79.6332 4.93443 77.635 2.96066C75.6369 0.986886 73.2732 0 70.5441 0H10.0882C7.31027 0 4.93443 0.986886 2.96066 2.96066C0.986886 4.93443 0 7.31027 0 10.0882V70.5441C0 73.2732 0.986886 75.6369 2.96066 77.635C4.93443 79.6332 7.31027 80.6322 10.0882 80.6322H50.3677V120.912C50.3677 123.69 51.3668 126.066 53.365 128.039C55.3631 130.013 57.7267 131 60.4559 131H120.912C123.69 131 126.066 130.013 128.039 128.039C130.013 126.066 131 123.69 131 120.912V60.4559C131 57.7267 130.013 55.3631 128.039 53.365C126.066 51.3668 123.69 50.3677 120.912 50.3677H80.6322ZM29.3142 42.692C29.8015 48.5402 30.5813 52.9507 31.6535 55.9235C30.825 56.7033 29.8381 57.4587 28.6928 58.1897C27.5475 58.9208 26.3413 59.5299 25.0742 60.0173C23.8071 60.5046 22.7349 60.4681 21.8577 59.9076C20.9805 59.3472 20.5419 58.1897 20.5419 56.4353C20.5419 53.5112 21.346 50.8064 22.9542 48.3209C24.5625 45.8354 26.6825 43.9591 29.3142 42.692ZM35.8934 40.2796C38.5251 39.0125 41.4249 38.8419 44.5926 39.7679C44.2515 40.9862 43.7763 42.1437 43.1671 43.2402C42.5579 44.3368 42.0097 45.1896 41.5223 45.7988C41.035 46.408 40.3527 47.2487 39.4754 48.3209L37.5017 50.7333C37.258 50.0997 37.0387 49.4661 36.8438 48.8326C36.6488 48.199 36.5026 47.6873 36.4051 47.2974C36.3077 46.9076 36.2224 46.3227 36.1493 45.543C36.0762 44.7632 36.0274 44.2637 36.0031 44.0444C35.9787 43.8251 35.9543 43.1915 35.93 42.1437C35.9056 41.0959 35.8934 40.4745 35.8934 40.2796ZM72.7372 118.426H63.0876L85.7494 63.0145H95.6183L118.28 118.426H108.631L102.124 102.49H79.3164L72.7372 118.426ZM90.7204 74.6378L82.2405 95.1797H99.1272L90.7204 74.6378Z"
              fill="#DDA15E"
            />
          </svg>
        </section>
        <div className={about_styles.content_wrapper}>
          <h1>What We Do</h1>
          <p className={about_styles.intro}>
            A place to preserve & a place to explore
          </p>
          <p className={about_styles.intro}>
            By creating a database where low-resource languages can put
            recordings of their language, we are enabling a documentation
            process that can allow for preservation, learning and research.
            Those interested in learning about low-resource languages are able
            to hear the language as it is meant to be spoken and what it might
            mean.
          </p>
        </div>
        <section className={about_styles.team}>
          {/* <div className={about_styles.content_wrapper}>
            <h1>Our Team</h1>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.pics}>
              <img
                src="/team/Laurina.png"
                alt=""
                className={about_styles.avatar}
              />
            </div>
            <div className={about_styles.pics}>
              <img
                src="/team/Jonathon.png"
                alt=""
                className={about_styles.avatar}
              />
            </div>
            <div className={about_styles.pics}>
              {" "}
              <img
                src="/team/Tsubasa.png"
                alt=""
                className={about_styles.avatar}
              />
            </div>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.name}>Laurina Saint Fleur</div>
            <div className={about_styles.name}>Jonathan Hall</div>
            <div className={about_styles.name}>Tsubasa Morita</div>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.title}>Developer</div>
            <div className={about_styles.title}>Founder</div>
            <div className={about_styles.title}>Developer</div>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.pics}>
              <img
                src="/team/Yuhao.png"
                alt=""
                className={about_styles.avatar1}
              />
            </div>
            <div className={about_styles.pics}>
              <img
                src="/team/Thuy-An.png"
                alt=""
                className={about_styles.avatar1}
              />
            </div>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.name}>Yuhao He</div>
            <div className={about_styles.name}>Thuy-An Nguyen</div>
          </div>
          <div className={about_styles.row}>
            <div className={about_styles.title}>Developer</div>
            <div className={about_styles.title}>UI/UX Designer</div>
          </div> */}
          <div className={about_styles.content_wrapper}>
            <h1>Our Team</h1>
            <div className={`${about_styles.row} ${about_styles.md_sm} `}>
              <img
                src="team/Jonathan.png"
                alt=""
                className={about_styles.avatar}
              />
              <div className={about_styles.name}>Jonathan Hall</div>
              <div className={about_styles.title}>Founder</div>
            </div>
            <div className={`${about_styles.row} ${about_styles.top}`}>
              <div className={about_styles.member}>
                <img
                  src="team/Laurina.png"
                  alt=""
                  className={about_styles.avatar}
                />
                <div className={about_styles.name}>Laurina Saint Fleur</div>
                <div className={about_styles.title}>Developer</div>
              </div>
              <div className={`${about_styles.member} ${about_styles.middle}`}>
                <img
                  src="team/Jonathan.png"
                  alt=""
                  className={about_styles.avatar}
                />
                <div className={about_styles.name}>Jonathan Hall</div>
                <div className={about_styles.title}>Founder</div>
              </div>
              <div className={about_styles.member}>
                <img
                  src="team/Tsubasa.png"
                  alt=""
                  className={about_styles.avatar}
                />
                <div className={about_styles.name}>Tsubasa Morita</div>
                <div className={about_styles.title}>Developer</div>
              </div>
            </div>
            <div className={`${about_styles.row} ${about_styles.bottom}`}>
              <div className={about_styles.member}>
                <img
                  src="team/Yuhao.png"
                  alt=""
                  className={about_styles.avatar}
                />
                <div className={about_styles.name}>Yuhao He</div>
                <div className={about_styles.title}>Developer</div>
              </div>
              <div className={about_styles.member}>
                <img
                  src="team/Thuy-An.png"
                  alt=""
                  className={about_styles.avatar}
                />
                <div className={about_styles.name}>Thuy-An Nguyen</div>
                <div className={about_styles.title}>UI/UX Designer</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </Layout>
);

export default About;
