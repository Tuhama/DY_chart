import React from 'react'
import styles from './mycss.css'

export default class MySidBar extends React.Component {


    render() {

        return (
            <div className={styles.container}>
                <section>
                    <div className={styles.zoomin} title="Zoom in">+</div>
                    <div className={styles.zoomout} title="Zoom out">-</div>
                <ul className={styles.ui}>
                    <li className={styles.li}>
                        <div className={styles.icon}>
                            
                        </div>
                        <div className={styles.tip}>
                            "mmkm,k"
                        </div>
                    </li>
                </ul>
                </section>
            </div>
        );
    }
}