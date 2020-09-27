
import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
	BarSeries,
	OHLCSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	EdgeIndicator,
  MouseCoordinateY,
  MouseCoordinateX
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
	OHLCTooltip,
} from "react-stockcharts/lib/tooltip";
import { change, elderRay } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import CrossHairCursor from "react-stockcharts/lib/coordinates/CrossHairCursor";

class OHLCChartWithElderRayIndicator extends React.Component {
	render() {
		const elder = elderRay();
		const changeCalculator = change();

		const { data: initialData, ratio, width } = this.props;

		const calculatedData = changeCalculator(elder(initialData));
		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => {return new Date(d.date)});
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(calculatedData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 100)]);
		const xExtents = [start, end];

		return (
			<ChartCanvas height={550}
				ratio={ratio}
				width={width}
				margin={{ left: 70, right: 70, top: 50, bottom: 50 }}
				seriesName="MSFT"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
				clamp={true}
			>
				<Chart id={1} height={300}
					yExtents={d => [d.high, d.low]}
					padding={{ top: 10, right: 0, bottom: 20, left: 0 }}
				>
					<YAxis axisAt="left" orient="left" ticks={5} />

					<MouseCoordinateY
						at="left"
						orient="right"
						displayFormat={format(".2f")} />

					<OHLCSeries />
					<EdgeIndicator itemType="last" orient="right" edgeAt="right"
						yAccessor={d => d.close} fill={d => +d.close > +d.open ? "#6BA583" : "#FF0000"}/>

					<OHLCTooltip origin={[-40, -10]}/>

				</Chart>
				<Chart id={2} height={150}
					yExtents={d => d.volume}
					origin={(w, h) => [0, h - 150]}
				>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>
          <XAxis axisAt="bottom" orient="bottom" />

					<MouseCoordinateY
						at="left"
						orient="right"
						displayFormat={format(".4s")} />

          <MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />

					<BarSeries yAccessor={d => d.volume}
						fill={d => +d.close > +d.open ? "#6BA583" : "#FF0000"}
						opacity={0.4}/>
				</Chart>
        <CrossHairCursor />
			</ChartCanvas>
		);
	}
}

OHLCChartWithElderRayIndicator.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

OHLCChartWithElderRayIndicator.defaultProps = {
	type: "svg",
};
OHLCChartWithElderRayIndicator = fitWidth(OHLCChartWithElderRayIndicator);

export default OHLCChartWithElderRayIndicator;
