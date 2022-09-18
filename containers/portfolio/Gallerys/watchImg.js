import React, { Fragment, useState } from 'react';
import { WatchImgData } from '../database';
import Lightbox from "react-image-lightbox";

const WatchImgFuc = ({ className, title, subTitle }) => {

    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }

    const onMoveNextALL = () => {
        console.log("WatchImgData.length", WatchImgData.length);
        const next = (photoIndex.index + 1) % WatchImgData.length
        const test = WatchImgData[(photoIndex.index + 1) % WatchImgData.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    const onMovePrevALL = () => {
        console.log("WatchImgData.length", WatchImgData.length);
        const prev = (photoIndex.index + WatchImgData.length - 1) % WatchImgData.length
        const test = WatchImgData[(photoIndex.index + WatchImgData.length - 1) % WatchImgData.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }

    return (
        <Fragment>
            {WatchImgData.length > 0 ?
                WatchImgData.map((item, i) => (
                    <div className={className} key={i}>
                        <div className="overlay">
                            <div className="border-portfolio">
                                <div className="overlay-background" onClick={() => onClickImg(item.img, i)}>
                                    <i aria-hidden="true" className="fa fa-plus"></i>
                                </div>
                                <img alt="" className="img-fluid blur-up lazyload"
                                    src={`/assets/images/${item.img}`} />
                            </div>
                        </div>
                        {title &&
                            <div className="portfolio-text">
                                <h3 className="head-text">
                                    {title}
                                </h3>
                                <h6 className="head-sub-text">
                                    {subTitle}
                                </h6>
                            </div>}
                    </div>
                ))
                : ""}
            {
                photoIndex.isOpen && (
                    <Lightbox
                        mainSrc={`/assets/images${photoIndex?.image}`}
                        nextSrc={`/assets/images${WatchImgData[(photoIndex.index + 1) % WatchImgData.length].img}`}
                        prevSrc={`/assets/images${WatchImgData[(photoIndex.index + WatchImgData.length - 1) % WatchImgData.length].img}`}
                        imageTitle={photoIndex.index + 1 + "/" + WatchImgData.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                        onMovePrevRequest={onMovePrevALL}
                        onMoveNextRequest={onMoveNextALL}
                    />
                )
            }
        </Fragment>
    )
}

export default WatchImgFuc;