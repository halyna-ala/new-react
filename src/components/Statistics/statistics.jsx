import PropTypes from 'prop-types';

import css from "components/Statistics/statystics.module.css";

export const Statistics = ({title, stats}) => {

    return (
<section className={css.statistics}>
       <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <div className={css.item} key={id} label={label}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </div>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    tittle: PropTypes.string,
    stats: PropTypes.array.isRequired,
};