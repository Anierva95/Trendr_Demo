import React, { useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

const theme = {
    background: "#222222",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555"
        },
        text: {
          fill: "#ffffff"
        }
      },
      legend: {
        text: {
          fill: "#ffffff"
        }
      }
    },
    grid: {
      line: {
        stroke: "#ffffff"
      }
    }
  };

  let data = [
    {
    id: "japan",
    color: "hsl(356, 70%, 50%)",
    data:[ 
    {
      x: "plane",
      y: 189
    },
    {
      x: "helicopter",
      y: 38
    }
  ]
  }
  
  ,]

const MyResponsiveLine = (props) => {
    useEffect(() => {
      if (props.item1 && props.item2 && props.item3) {
        setTimeout(() => {

          const createData = (sale1, sale2, sale3) => {
            return [
              {
              id: sale1.Produto,
              color: "hsl(356, 70%, 50%)",
              data: [
                {
                x: sale1.Emissão,
                y: sale1.VLR_Total
              }
                  ]
            },
            {
              id: sale2.Produto,
              color: "hsl(163, 70%, 50%)",
              data: [
                {
                  x: sale2.Emissão,
                  y: sale2.VLR_Total
                }
              ]
            },
            {
              id: sale3.Produto,
              color: "hsl(240, 70%, 50%)",
              data: [
                {
                  x: sale3.Emissão,
                  y: sale3.VLR_Total
                }
              ]
            }
            
          ]
          }
  
          data = createData(props.item1, props.item2, props.item3);
          
        }, 3000);

      }
    })
      return(
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 6,
            tickPadding: 6,
            tickRotation: 0,
            legend: 'Produto',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 4,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Quantidade',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        theme={theme}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
      )}

export default MyResponsiveLine;