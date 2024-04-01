import React from 'react'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import style from './DashboardTableBody.module.scss'
import DropdownButton from '../../DashboardDropdownButton/DropdownButton'

const optionsArr = [
  {
    name: 'View Investment',
    label: 'Option 1',
    onClick: () => {},
  },
  {
    name: 'View Token Contract',
    label: 'Option 2',
    onClick: () => {},
  },
]

const DashboardTableBody = ({ tableData, columns }) => {
  let total_value = 0
  let total_invested = 0
  let total_distributions = 0
  let total_tokens = 0

  return (
    <TableBody className={style.container}>
      {tableData.map((row) => {
        // total_value += row.value;
        // total_invested += row.investment;
        // total_distributions += row.distributions;
        // total_tokens += row.tokens;
        return (
          <TableRow
            hover
            role='checkbox'
            tabIndex={-1}
            key={row.id}
          >
            <TableCell
              component='th'
              scope='row'
              className={style.tableCell}
              align='left'
            >
              <h3>{row.investment ? row.investment : '-'}</h3>
              {row.city}
            </TableCell>
            <TableCell align='left' className={style.tableCell}>
              {row.value ? `$${row.value}` : '-'}
            </TableCell>
            <TableCell align='left' className={style.tableCell}>
              {row.invested ? `$${row.invested}` : '-'}
            </TableCell>
            <TableCell align='left' className={style.tableCell}>
              {row.distributions}
            </TableCell>
            <TableCell align='left' className={style.tableCell}>
              {row.tokens}
            </TableCell>
            <TableCell align='left' className={style.tableCell}>
              <DropdownButton
                buttonText={<MoreHorizIcon />}
                options={optionsArr}
                className={style.dropdownBtn}
              />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default DashboardTableBody
