import Product from './Product';



const Home = () => {
    const products = [
        {
            name: 'InstagramLikes',
            image: process.env.PUBLIC_URL + '/Black.png',
            description: 'This is a sample product description for InstagramLikes',
            price: <span>29.99</span>,
            quantity: 5,
        },
        {
            name: 'Digital Watches',
            image: process.env.PUBLIC_URL + '/ayo.png',
            description: 'This is a sample product description for Digital Watches',
            price: <span>199.99</span>,
            quantity: 10,
        },
        {
            name: 'HeadSets',
            image: process.env.PUBLIC_URL + '/blue.png',
            description: 'This is a sample product description for HeadSets',
            price: <span>9.99</span>,
            quantity: 15,
        },
        {
            name: 'InstagramLikes',
            image: process.env.PUBLIC_URL + '/Black.png',
            description: 'This is a sample product description for InstagramLikes',
            price: <span>189.99</span>,
            quantity: 5,
        },
        {
            name: 'Digital Watches',
            image: process.env.PUBLIC_URL + '/ayo.png',
            description: 'This is a sample product description for Digital Watches',
            price: <span>299.99</span>,
            quantity: 10,
        },
        {
            name: 'HeadSets',
            image: process.env.PUBLIC_URL + '/blue.png',
            description: 'This is a sample product description for HeadSets',
            price: <span>49.99</span>,
            quantity: 15,
        }
       
        
    ];

    return (
        <div className="App">
            <h1 style={{margin:'7rem'}}>Product List</h1>
            <div className="products-container">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default Home;