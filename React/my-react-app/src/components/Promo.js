function Promo(props) {
    return (
        <div className="promo-section">
            <h1>Don't miss this deal!</h1>
            <h2>Subscribe to my newsletter and get all the shop items at {props.percentage} off!</h2>
            <h3>Offer ends on {props.date}th of march. Hurry Up!!</h3>
            {/* 'props' receives arguments as an object so to access them we should use dot (.) operator and similar to normal objects, it can have 
            multiple object key:value pairs (of object properties )
            In the example above the props has percentage and date properties(values) in props object */}

        </div>
    );
};

export default Promo;