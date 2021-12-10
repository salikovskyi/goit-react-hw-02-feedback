import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'



export default function FeedbackOptions({options, handleIncrement}){

    const element = options.map(option => (
        <button className={css.button}
        key={option}
        name={option}
        onClick={handleIncrement}
        type="button">
            {option}
        </button>
    ))
return (
   
    <section className={css.section_button}>
        {element}
    </section>
)

}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleIncrement: PropTypes.func.isRequired,
  };