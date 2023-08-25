import "./mainBody.css"
export default function MainBody(prop) {
    return (
        <>
            <div id="main-body">{prop.children}</div>
            <div id="bottom-gap"></div>
        </>
    );
}
