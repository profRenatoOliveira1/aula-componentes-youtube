import estilo from './VideoCard.module.css';
import serverResponse from '../../../server/videolist.json';

function VideoCard() {
    return (
        <div className={estilo.videoCardContainer}>
            {serverResponse.map((video, index) => (
                <div className={estilo.videoCard} key={index}>
                    <div className={estilo.videoThumb}>
                        <img src={video.thumb} alt="thumbnail" />
                    </div>
                    <div className={estilo.videoInfo}>
                        <div className={estilo.channelLogo}>
                            <img src={video['channel-logo']} alt="capa canal" />
                        </div>
                        <div className={estilo.videoText}>
                            <p className={estilo.videoTitle}>{video.title}</p>
                            <p>{video['channel-name']}</p>
                            <p>{video.views}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoCard;
