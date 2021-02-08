import '../styles/yen-index.scss'
import * as React from 'react'

function SvgText(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.3 65.14" {...props}>
      <defs>
        <style>{'.prefix__cls-2,.prefix__cls-3{letter-spacing:-.01em}'}</style>
      </defs>
      <g id="prefix__headertext" data-name="headertext">
        <text
          transform="translate(0 10.56)"
          letterSpacing=".1em"
          fontSize={12}
          fill="#fff"
          fontFamily="Abel,NotoSansCJKtc-DemiLight-B5pc-H,Noto Sans CJK TC"
          fontWeight={600}
          id="prefix__headertext"
          data-name="headertext"
        >
          {'READ '}
          <tspan x={0} y={14}>
            {'EVERY'}
          </tspan>
          <tspan className="prefix__cls-2" x={34.92} y={14}>
            {'D'}
          </tspan>
          <tspan className="prefix__cls-3" x={43.04} y={14}>
            {'A'}
          </tspan>
          <tspan x={50.14} y={14}>
            {'Y!'}
          </tspan>
          <tspan letterSpacing={0}>
            <tspan x={0} y={28}>
              {'H'}
            </tspan>
            <tspan x={7} y={28} letterSpacing="-.01em">
              {'A'}
            </tspan>
            <tspan x={12.75} y={28} letterSpacing=".01em">
              {'VE FUN'}
            </tspan>
          </tspan>
          <tspan x={0} y={42}>
            {'EVERY'}
          </tspan>
          <tspan className="prefix__cls-2" x={34.92} y={42}>
            {'D'}
          </tspan>
          <tspan className="prefix__cls-3" x={43.04} y={42}>
            {'A'}
          </tspan>
          <tspan x={50.14} y={42}>
            {'Y!'}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default SvgText
