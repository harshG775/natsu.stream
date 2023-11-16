import "./headings.css"

export const H1 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h1
            {...prop}
            className={`${className} H1`}
        >
            {children}
        </h1>
    )
}
export const H2 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h2
            {...prop}
            className={`${className} H2`}
        >
            {children}
        </h2>
    )
}
export const H3 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h3
            {...prop}
            className={`${className} H3`}
        >
            {children}
        </h3>
    )
}
export const H4 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h4
            {...prop}
            className={`${className} H4`}
        >
            {children}
        </h4>
    )
}
export const H5 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h5
            {...prop}
            className={`${className} H5`}
        >
            {children}
        </h5>
    )
}
export const H6 = (prop) => {
    const {children=null,className=null}=prop
    return(
        <h6
            {...prop}
            className={`${className} H6`}
        >
            {children}
        </h6>
    )
}
