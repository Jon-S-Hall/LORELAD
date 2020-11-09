//this is a page that uses dynamic routing. pages with "[" and end with "]" us dynamic routing
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Language() {
    const router = useRouter()
    const { lang } = router.query

    return <p>Language: {lang}</p>
}

export async function getStaticProps() {
    // This is a real endpoint
    const res = await fetch("https://lorelad-backend.herokuapp.com/records");
    const languages = await res.json();

    return {
        props: {
            languages,
        },
    };
}