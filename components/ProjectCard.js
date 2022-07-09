import Link from 'next/link';
import styles from '.././styles/ProjectCard.module.css'

export default function ProjectCard({title, project_type, coverPhoto, id, datePublished, slug}) {
    return(
        <div className={styles.card}>
            <Link href={"/projects/" + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt=""/>
                    <p>{title}</p>
                    <div className={styles.project_type}>
                        <div className={styles.project_type_center}>
                            <img src={project_type.avatar.url} alt=""/>
                            <p>{project_type.name}</p>
                        </div>
                        <p className={styles.date}>{datePublished}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

