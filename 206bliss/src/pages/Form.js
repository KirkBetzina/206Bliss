const Form = () =>{
    return (
        <div>
            <h1>Travel Survey</h1>
            <p>Let's get to know you! Here a few questions to answer that will allow us here at 206 Bliss to create an unforgettable, mindful, soulful once in a lifetime experience you will never forget.</p>
            <input type='text' staticprefill='Hi, whats your name?'></input>  
            <input type='text' staticprefill='What is your email?'></input>
            <input type='text' staticprefill='Where are you from?'></input>
            <input type='text' staticprefill='How many travelers in your trip?'></input>
        </div>
    )
}
export default Form