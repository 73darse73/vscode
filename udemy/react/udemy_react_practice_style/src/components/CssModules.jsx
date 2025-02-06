import classes from './CssModules.module.scss';

export const CssModules = () => {
    return (
    <div className={classes.container}>
        <p>こんにちは！</p>
        <button>Fight!</button>
    </div>
    )
}