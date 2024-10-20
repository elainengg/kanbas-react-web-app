// objects
// Number, String, Boolean, arrays and other objects

export default function House() {
    const house = {
        // this is our house
        bedrooms: 4,
        bathrooms: 2.5,
        squareFeet: 2000,

        // this is the address 
        address: {
            street: "Via Roma",
            city: "Roma",
            state: "RM",
            zip: "00100",
            country: "Italy",
        },
        // these are the owners
        owners: ["Alice", "Bob"],
    };
    console.log(house);
    return (
        // our house 
        <div id="wd-house">
            <h4>House</h4>
            <h5>bedrooms</h5>
            {house.bedrooms}
            <h5>bathrooms</h5>
            {house.bathrooms}

            <h5>Data</h5>
            <pre>{JSON.stringify(house, null, 2)}</pre>
            <hr />
        </div>
        // the whole house printed ^ 
    );
}
