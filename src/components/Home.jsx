import Product from './Product';



const Home = () => {
    const products = [
        {
            name: 'InstagramLikes',
            image: process.env.PUBLIC_URL + '/Black.png',
            description: 'This is a sample product description for InstagramLikes',
            price: 29.99,
            quantity: 5,
        },
        {
            name: 'Digital Watches',
            image: process.env.PUBLIC_URL + '/ayo.png',
            description: 'This is a sample product description for Digital Watches',
            price: 19.99,
            quantity: 10,
        },
        {
            name: 'HeadSets',
            image: process.env.PUBLIC_URL + '/blue.png',
            description: 'This is a sample product description for HeadSets',
            price: 9.99,
            quantity: 15,
        },
        {
            name: 'InstagramLikes',
            image: process.env.PUBLIC_URL + '/Black.png',
            description: 'This is a sample product description for InstagramLikes',
            price: 29.99,
            quantity: 5,
        },
        {
            name: 'Digital Watches',
            image: process.env.PUBLIC_URL + '/ayo.png',
            description: 'This is a sample product description for Digital Watches',
            price: 19.99,
            quantity: 10,
        },
        {
            name: 'HeadSets',
            image: process.env.PUBLIC_URL + '/blue.png',
            description: 'This is a sample product description for HeadSets',
            price: 9.99,
            quantity: 15,
        }
       
        
    ];

    return (
        <div className="App">
            <h1>Product List</h1>
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