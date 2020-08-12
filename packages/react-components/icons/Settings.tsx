import colors from '@celo/react-components/styles/colors'
import * as React from 'react'
import Svg, { Path } from 'svgs'

interface Props {
  height?: number
  color?: string
}

export default class Settings extends React.PureComponent<Props> {
  static defaultProps = {
    width: 18,
    height: 18,
    color: colors.gray5,
  }

  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={this.props.height}
        width={this.props.height}
        viewBox="0 0 18 18"
      >
        <Path
          d="M0.0395506 12.0537C-0.108559 11.5415 0.178104 11.0054 0.6511 10.7948C1.26743 10.5267 1.68309 9.86619 1.79776 9.20085C1.79776 9.11469 1.79298 9.03331 1.79298 8.94715C1.79298 8.91365 1.79298 8.88493 1.79298 8.85142C1.68309 8.17651 1.29132 7.47287 0.6511 7.21918C0.173327 7.00378 -0.108559 6.47247 0.0395506 5.9603C0.192438 5.496 0.283214 5.26624 0.507768 4.83066C0.765766 4.36635 1.34387 4.18925 1.8312 4.37593C2.44753 4.62004 3.18808 4.4573 3.73752 4.07916C3.77574 4.03608 3.81874 3.993 3.86174 3.94992C3.91907 3.89248 3.97163 3.83982 4.02896 3.78717C4.41596 3.23192 4.62617 2.47563 4.35384 1.84859C4.16751 1.36035 4.34429 0.781169 4.80773 0.522691C5.03228 0.407812 5.20428 0.326439 5.38106 0.25464C5.55783 0.18284 5.73461 0.115827 5.97827 0.0392413C6.48949 -0.109144 7.0246 0.178054 7.23482 0.65193C7.51193 1.28855 8.19992 1.70977 8.88791 1.81029C8.93091 1.81029 8.97391 1.81029 9.02169 1.81029C9.06947 1.81029 9.11247 1.81029 9.16025 1.81508C9.82435 1.69541 10.5123 1.31248 10.756 0.675863C10.971 0.1972 11.5013 -0.085211 12.0126 0.0631745C12.476 0.216347 12.7053 0.307293 13.1401 0.532264C13.6035 0.790742 13.7803 1.36992 13.594 1.85816C13.3455 2.48521 13.5175 3.2415 13.9093 3.79674C13.9141 3.80153 13.9141 3.80153 13.9189 3.80632C13.9141 3.79674 13.9141 3.79196 13.9093 3.78238C14.4635 4.3137 15.4143 4.69184 16.1692 4.36157C16.6565 4.17489 17.2346 4.35199 17.4926 4.8163C17.7124 5.25188 17.8079 5.47685 17.9608 5.94594C18.1089 6.45811 17.8223 6.99421 17.3493 7.20482C16.604 7.52553 16.1548 8.42063 16.174 9.21521C16.174 9.21042 16.1692 9.21042 16.1692 9.20563C16.2886 9.87097 16.6756 10.5507 17.3063 10.7996C17.7841 11.015 18.0659 11.5463 17.9178 12.0585C17.7649 12.5228 17.6742 12.7525 17.4496 13.1881C17.1916 13.6524 16.6135 13.8295 16.1262 13.6428C15.4812 13.3891 14.7024 13.5806 14.1434 13.9923C13.6513 14.5523 13.3312 15.4378 13.6465 16.151C13.8329 16.6393 13.6561 17.2184 13.1927 17.4769C12.9681 17.5918 12.7961 17.6732 12.6193 17.745C12.4425 17.8168 12.2658 17.8838 12.0221 17.9604C11.5109 18.1088 10.9758 17.8216 10.7656 17.3477C10.4885 16.7015 9.78613 16.2803 9.08858 16.1893C9.03602 16.1893 8.97869 16.1893 8.92614 16.1893C8.92136 16.1893 8.91658 16.1893 8.91658 16.1893C8.21425 16.2803 7.45937 16.6728 7.20137 17.3477C6.98638 17.8263 6.45605 18.1088 5.94483 17.9604C5.48139 17.8072 5.25206 17.7163 4.81728 17.4913C4.35384 17.2328 4.17707 16.6536 4.3634 16.1654C4.61662 15.524 4.43029 14.7438 4.0194 14.1885C3.99551 14.1646 3.97163 14.1406 3.94296 14.1167C3.90951 14.0832 3.87129 14.0449 3.83785 14.0114C3.27885 13.595 2.48575 13.3509 1.84076 13.6381C1.35343 13.8247 0.775322 13.6476 0.517324 13.1833C0.283215 12.7477 0.192438 12.5228 0.0395506 12.0537ZM10.6031 12.944C12.777 12.0441 13.809 9.54548 12.9108 7.36757C12.0126 5.18965 9.51858 4.15574 7.34471 5.05563C5.17084 5.95551 4.13885 8.45413 5.03706 10.632C5.93527 12.81 8.42925 13.8487 10.6031 12.944Z"
          fill={this.props.color}
        />
      </Svg>
    )
  }
}
