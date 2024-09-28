"use strict";
const height = 500;
const width = 700;
const margin = {
    top: 20,
    right: 30,
    bottom: 40,
    left: 50,
};
const d3ChartConfig = {
    width,
    height,
    margin,
    data: [
        { category: 'A', value: 30 },
        { category: 'B', value: 45 },
        { category: 'C', value: 60 },
        { category: 'D', value: 25 },
        { category: 'E', value: 50 },
    ],
    xScale: {
        type: 'band',
        domain: [0, 100],
        range: [0, width - margin.right - margin.left],
    },
    yScale: {
        type: 'linear',
        domain: [0, 100],
        range: [height - margin.bottom, margin.top],
    },
    xAxis: {
        label: 'Categories',
        tickSize: 5,
    },
    yAxis: {
        label: 'Values',
        tickSize: 5,
    },
    bar: {
        fill: 'rebeccapurple',
    },
};
