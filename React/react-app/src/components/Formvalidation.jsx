const Formvalidation = () => {
    const handleForm = (event) => {
        event.preventDefault();   // HTML reloads the page on form submit by default, this stops the page reload.
        
        const formData = new FormData(event.target);
        const name = formData.get("naam");
        const age = formData.get("umer");
        const sex = formData.get("sex");
        const email = formData.get("email");
        const passwd = formData.get("passwd")

        if (!name || !age || !sex || !email) {
            alert("Empty fields are not allowed" );
            return;
        }

        if(passwd.length < 8 ) {
            alert(`password length must be atleast 8 character long.`);
        }

        alert(`Name: ${name}, Age: ${age}, Gender: ${sex}, Email: ${email}`);

    };

    return (
        <form onSubmit={handleForm} style={{display: "flex", flexDirection: "column", maxWidth: "500px", gap: "10px"}}>
            <label htmlFor="naam">Name:
                <input type="text" name="naam" id="naam" />
            </label>

            <label htmlFor="umer">Age:
                <input type="number" name="umer" id="umer" />
            </label>

            <label htmlFor="passwd">Password:
                <input type="password" name="passwd" id="passwd" />
            </label>

            <fieldset>
                <legend>Gender</legend>
                <label>
                    <input type="radio" name="sex" value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="sex" value="female" /> Female
                </label>
            </fieldset>

            <label htmlFor="email">Email:
                <input type="email" name="email" id="email" />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Formvalidation;

