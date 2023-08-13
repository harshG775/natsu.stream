export default function Player({url}) {
    return (
        <iframe
            width='560'
            height='315'
            src={url}
            title='YouTube video player'
            frameborder='0'
            allowfullscreen
        ></iframe>
    );
}
