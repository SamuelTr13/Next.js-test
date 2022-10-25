import styles from '../../styles/contributors.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            contributors: data,
        }
    }
}

const Contributors = ({ contributors }) => {
    return ( 
        <div>
            <h1>Contributors:</h1>
            {contributors.map(contributor => 
                <Link href={'/reactime/' + contributor.id} key={contributor.id}>
                    <a className={styles.single}>
                        <h3>{contributor.name}</h3>
                    </a>
                </Link>
                    )}
        </div>
     );
}
 
export default Contributors;