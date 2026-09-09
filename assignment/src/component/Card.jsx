// Apply CSS to the card
const Card = () => {
    return(
        <>
            <div className="card" style={{border: '1px solid #ccc', padding: '16px', margin: '16px ', display: 'inline-block'}}>
                <h2 >Pizza</h2>
                <p>Delicious pizza with various toppings</p>
                <p>Price: $12.99</p>
            </div>
            <div className="card" style={{border: '1px solid #ccc', padding: '16px', margin: '16px', display: 'inline-block'}}>
                <h2>Noodles</h2>
                <p>Yummy noodles with choice of sauces</p>
                <p>Price: $8.99</p>
            </div>
        </>
    )
}
export default Card