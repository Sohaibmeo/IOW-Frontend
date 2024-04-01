import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Tooltip,
} from 'recharts'
import CottageIcon from '@mui/icons-material/Cottage'
import style from './PieChartWithPaddingAngle.module.scss'

const data = [
  { name: '# 1', value: 35 },
  { name: '# 2', value: 10 },
  { name: '# 3', value: 31 },
  { name: '# 4', value: 6 },
  { name: '# 5', value: 18 },
]
const COLORS = [
  '#256DD8',
  '#F0AF5C',
  '#17865E',
  '#87A9FC',
  '#32E9A8',
]

export default class Example extends PureComponent {

  CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div

          style={{
            backgroundColor: '#ffff',
            padding: '2px',
            border: '1px solid #cccc',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <CottageIcon />
          <label style={{margin: 0, padding: 0}}>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      )
    }
    return null;
  };

  render() {
    function CustomLabel({ viewBox, value1}) {
      const { cx, cy } = viewBox
      return (
        <>
          <text
            x={cx}
            y={80}
            fill='#3d405c'
            className='recharts-text recharts-label'
            textAnchor='middle'
          >
            <tspan alignmentBaseline='centerTop' fontSize='17'>
              Total
            </tspan>
          </text>

          <text
            x={cx}
            y={103}
            fill='#3d405c'
            className='recharts-text recharts-label'
            textAnchor='middle'
          >
            <tspan alignmentBaseline='centerTop' fontSize='17' fontWeight='500'>
              Value
            </tspan>
          </text>
          <text
            x={cx}
            y={135}
            fill='#3d405c'
            className='recharts-text recharts-label'
            textAnchor='middle'
          >
            <tspan alignmentBaseline='centerTop' fontSize='21' fontWeight='600'>
              ${value1}
            </tspan>
          </text>
        </>
      )
    }

    return (
      <div className={style.pieChartContainer}>
        <h2 className={style.pieChartTitle}>Allocation</h2>
        <div className={style.pieChartBody}>
          <div style={{ width: '60%' }}>
            <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={100}
                cy={98}
                innerRadius={78}
                outerRadius={103}
                startAngle={-30}
                endAngle={330}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                stroke='none'
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  width={30}
                  position='centerBottom'
                  content={<CustomLabel value1='25,000' />}
                ></Label>
              </Pie>
              <Tooltip content={<this.CustomTooltip />} />
            </PieChart>
          </div>

          <div className={style.chartLegendContainer}>
            {data.map(({ name, value }, index) => {
              return (
                <div className={style.chartLegendItem}>
                  <span className={style.chartLegendItemIndex}>
                    {' '}
                    {name}
                    <CottageIcon
                      className={style.chartLegendIcon}
                      style={{ color: COLORS[index] }}
                    />{' '}
                    {}
                  </span>
                  <h3 className={style.chartLegendItemPercentage}>
                    {value}%
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
