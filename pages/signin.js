import "tachyons"

const SignIn = () => {
    return (
        <main className="pa4 black-80 " style={{
            border: "1px solid black",
            padding: "30px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            width: "75vw",
            maxWidth: "400px",
            margin: "50px auto"
        }}>
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                </fieldset>
                <fieldset style={{ display: "flex", gap: "10px" }} className="ba b--transparent ph0 mh0">
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </fieldset>
            </div>
        </main>

    )
}

export default SignIn