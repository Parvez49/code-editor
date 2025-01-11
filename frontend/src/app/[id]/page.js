export default async function DynamicPage({ params }) {
    const { id } = await params;

    return (
        <div>
            <h1 className=''>Dynamic Page</h1>
            <p>You are viewing the page for ID: {id}</p>
        </div>
    );
}
