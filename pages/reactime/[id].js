export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(contributor => {
        return {
            params: { id: contributor.id.toString() }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {contributor: data}
    }
}

const Details = ({contributor}) => {
    return ( 
        <div>
            <h1>{contributor.name}</h1>
            <p>{contributor.email}</p>
            <p>{contributor.website}</p>
            <p>{contributor.address.city}</p>
        </div>
     );
}
 
export default Details;