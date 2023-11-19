import "./BTN.css"
export default function BTN(prop) {
    const { children } = prop;
    return <button className="BTN" {...prop}>{children}</button>;
}
