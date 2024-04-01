import React, { useState } from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import style from './DashboardTableHead.module.scss'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const DashBoardTableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('')
  const [order, setOrder] = useState('asc')

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
  }

  return (
    <TableHead className={style.tableHead}>
      <TableRow className={style.tableHeadRow}>
        {' '}
        {columns.map(({ label, accessor, sortable }, index) => {
          const align = index !== 0 ? 'center' : 'left'
          return (
            <TableCell
              align={align}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              key={accessor}
              className={style.tableHeader}
            >
              <div className={style.headerTitle}>
                {' '}
                {label}{' '}
                {index > 0 && index < columns.length - 1 ? (
                  <span className={style.span}>
                    <KeyboardArrowUpIcon
                      className={style.sortingArrow}
                      viewBox={'5 2 10 15'}
                    />{' '}
                    <KeyboardArrowDownIcon
                      className={style.sortingArrow}
                      viewBox={'5 7 10 15'}
                    />{' '}
                  </span>
                ) : (
                  ''
                )}{' '}
              </div>{' '}
            </TableCell>
          )
        })}{' '}
      </TableRow>{' '}
    </TableHead>
  )
}

export default DashBoardTableHead
