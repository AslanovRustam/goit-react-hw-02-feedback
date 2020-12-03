import React from 'react';
import s from './marks.module.css'

class MarkList extends React.Component{
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button className={s.button} type="button" onClick={()=>{console.log('click good')}}>good</button>
                    <button className={s.button} type="button">neutral</button>
                    <button className={s.button} type="button">bad</button>
                </div>
            </div>
        )
    }
}

export default MarkList;