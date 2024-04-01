import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Manager, Reference, Popper } from 'react-popper'

import styles from './DropdownButton.module.scss'

const DropdownButton = ({ buttonText, options }) => {
  const [dropdownOpen, setDropdownToggle] = useState(false)

  const dropdownListRef = useRef(null)
  const dropdownButtonRef = useRef(null)

  const setButtonRef = useCallback((node, ref) => {
    dropdownButtonRef.current = node
    return ref(node)
  }, [])

  const setListRef = useCallback((node, ref) => {
    dropdownListRef.current = node
    return ref(node)
  }, [])

  const dropdownToggle = () => {
    setDropdownToggle(!dropdownOpen)
  }

  const modifiers = {
    preventOverflow: {
      padding: 4,
    },
    shift: {
      enabled: true,
    },
    flip: {
      enabled: true,
      flipVariationsByContent: true,
      behavior: 'flip',
    },
  }

  return (
    <Manager>
      <div>
        <Reference>
          {({ ref }) => (
            <button
              onClick={dropdownToggle}
              ref={(node) => setButtonRef(node, ref)}
              className={styles.dropdownBtn}
            >
              {buttonText}
            </button>
          )}
        </Reference>
        {dropdownOpen && (
          <Popper placement='bottom-end' modifiers={modifiers}>
            {({ ref, style, placement }) => (
              <ul
                ref={(node) => setListRef(node, ref)}
                style={style}
                data-placement={placement}
                className={styles.dropdownButton__list}
              >
                {options.map((item) => {
                  return (
                    <li
                      className={styles.dropdownButton__list_item}
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            )}
          </Popper>
        )}
      </div>
    </Manager>
  )
}

export default DropdownButton
