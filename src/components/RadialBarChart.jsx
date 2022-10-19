//RadialBarChart.jsx

// yarn add @nivo/core @nivo/radial-bar
import { radialBarData } from "../data/radialBarData";
import { ResponsiveRadialBar } from '@nivo/radial-bar'

const myRadialBarChart = () => {

	return (
	
	//we're using responsive charts responsive charts require a parent
	//div with a set height or it will not render
	
	<div style={{ height: "400px" }}>
	
	<h2>My Test Radial Bar Chart</h2>

    <ResponsiveRadialBar
        data={radialBarData}
        maxValue={10}
        valueFormat=">-.2f"
        startAngle={-90}
        endAngle={90}
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors="#003399"
        borderColor="#003399"
        tracksColor="#d3d7cf"
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[]}
	    />
	    
	 </div>
	);
};

export default myRadialBarChart;

