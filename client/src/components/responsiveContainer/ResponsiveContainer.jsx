import "./responsiveContainer.css";
export default function ResponsiveContainer({ children, className }) {
    const classes = `maxContainer ${className} natsu`;
    return <div className={classes}>{children}</div>;
}
