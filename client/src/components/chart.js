import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  return Math.round(data.reduce((acc, curr) => acc + curr), 0);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={80} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>avg = {props.units}{average(props.data)}</div>
    </div>
  )
}
