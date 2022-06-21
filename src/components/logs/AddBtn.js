import React from 'react'

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
        <a href="#add-log-modal" className="btn-floating btn-large blue modal-trigger">
            <i className="material-icons large">add</i>
        </a>
        <ul>
          <li>
            <a href="#developer-list-modal" className="btn-floating green modal-trigger">
              <i className="material-icons">group</i>
            </a>
          </li>
          <li>
            <a href="#developer-modal" className="btn-floating red modal-trigger">
              <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default AddBtn;