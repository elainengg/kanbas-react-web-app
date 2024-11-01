
// declare function to handle events
const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};


// configure the function call
export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            {/* wrap in function if you need to pass parameters */}
            <button onClick={hello} id="wd-hello-world-click"> 
                Hello World!</button>
            <button onClick={() => lifeIs("Good!")}
                id="wd-life-is-good-click">
                Life is Good!</button>
            <button onClick={() => {
                // wrap in {} if you need more than one line of code
                hello();
                lifeIs("Great!");
            }} id="wd-life-is-great-click">
                Life is Great!
            </button>
            <hr />
        </div>
    );
}
