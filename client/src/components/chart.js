import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  const avg = data.reduce((acc, curr) => acc + curr, 0) / data.length;
  return (avg).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
