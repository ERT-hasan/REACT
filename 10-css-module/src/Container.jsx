import css from './Container.module.css';

const Container =(props) =>{

    return <div className={css.children}>
        {props.children}
    </div>


}
export default Container;